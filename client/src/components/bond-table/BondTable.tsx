import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import './BondTable.scss'
// Create a dark theme instance
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const useStyles = makeStyles({
  rowSelected: {
    backgroundColor: '#0077E4',
  },
});

const columns = [
  { field: 'name', headerName: 'Name' },
  { field: 'ticker', headerName: 'Ticker' },
  { field: 'cpn', headerName: 'Cpn' },
  { field: 'maturity', headerName: 'Maturity' },
  { field: 'spread', headerName: 'Spread' },
  { field: 'ytm', headerName: 'YTM%' },
  { field: 'moodysRating', headerName: "Moody's Rating" },
  { field: 'crMigPred', headerName: 'Cr. Mig Pred' },
  { field: 'crMigCL', headerName: 'Cr. Mig CL' },
  { field: 'crSpreadPred', headerName: 'Cr. Spread Pred' },
  { field: 'crSpreadSL', headerName: 'Cr. Spread SL' },
];

export default function BondTable({ data, onRowSelected }) {
  const classes = useStyles();
  const [selectedRow, setSelectedRow] = React.useState(null);
  const handleRowClick = (param) => {
    setSelectedRow(param.id);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.id} // Here I'm using the `name` property as the id. Replace `name` with the appropriate property in your data.
          onRowSelectionModelChange={onRowSelected}
          onRowClick={handleRowClick}
          rowSelectionModel={[]}
          getRowClassName={(params) =>
            params.id === selectedRow ? classes.rowSelected : ''
          }
          sx={{
            backgroundColor: "#1D232C",
            borderRadius: '16px',
            border: "0px"
          }}
        />
      </div>
    </ThemeProvider>
  );
}