import React, { useState } from 'react';
import { useTable, useBlockLayout } from 'react-table';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Define all possible columns
const allColumns = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Ticker', accessor: 'ticker' },
  { Header: 'Cpn', accessor: 'cpn' },
  { Header: 'Maturity', accessor: 'maturity' },
  { Header: 'Spread', accessor: 'spread' },
  { Header: 'YTM%', accessor: 'ytm' },
  { Header: "Moody's Rating", accessor: 'moodysRating' },
  { Header: 'Cr. Mig Pred', accessor: 'crMigPred' },
  { Header: 'Cr. Mig CL', accessor: 'crMigCL' },
  { Header: 'Cr. Spread Pred', accessor: 'crSpreadPred' },
  { Header: 'Cr. Spread SL', accessor: 'crSpreadSL' },
  // Add more columns as needed
];


const BondTable = ({ data }) => {
    const [columns, setColumns] = useState(allColumns.slice(0, 5)); // Initially take the first five columns
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data }, useBlockLayout);
  
    const handleDragEnd = (result) => {
      if (!result.destination) return;
      const { source, destination } = result;
      const movedColumn = columns[source.index];
      const remainingColumns = columns.filter((col, index) => index !== source.index);
      remainingColumns.splice(destination.index, 0, movedColumn);
      setColumns(remainingColumns);
    };
  
    return (
      <>
        {/* UI for adding/removing columns */}
        <div>
          {allColumns.map((column, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={columns.includes(column)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setColumns(old => [...old, column]);
                  } else {
                    setColumns(old => old.filter(col => col !== column));
                  }
                }}
              />
              {column.Header}
            </div>
          ))}
        </div>
        {/* The table itself */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="table" direction="horizontal">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <table {...getTableProps()}>
                  <thead>
                    {headerGroups.map(headerGroup => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column, index) => (
                          <Draggable draggableId={column.id} index={index} key={column.id}>
                            {(provided) => (
                              <th {...column.getHeaderProps()} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                {column.render('Header')}
                              </th>
                            )}
                          </Draggable>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map(cell => (
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </>
    );
  };
  
  export default BondTable;