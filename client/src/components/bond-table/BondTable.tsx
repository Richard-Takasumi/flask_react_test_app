import React from 'react'
import { DataGridPro } from '@mui/x-data-grid-pro';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import './BondTable.scss'

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// Create a dark theme instance
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const useStyles = makeStyles({
  root: {
    '&&': {
      '&:hover': {
        backgroundColor: '#666', // Choose your hover color here
      },
    }
  },
  rowSelected: {
    '&&': {
      backgroundColor: '#0077E4',
      '&:hover': {
        backgroundColor: '#0077E4', // Keep the color the same on hover
      },
    },
  },
});

// const columns = [
//   { field: 'name', headerName: 'Name' },
//   { field: 'ticker', headerName: 'Ticker' },
//   { field: 'cpn', headerName: 'Cpn' },
//   { field: 'maturity', headerName: 'Maturity' },
//   { field: 'spread', headerName: 'Spread' },
//   { field: 'ytm', headerName: 'YTM%' },
//   { field: 'moodysRating', headerName: "Moody's Rating" },
//   {
//     field: 'crMigPred',
//     headerName: 'Cr. Mig Pred',
//     renderCell: (params) => (
//       <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
//         {compareRatings(params.row.moodysRating, params.value)}
//         <span>{params.value}</span> 
//       </div>
//     ),
//   },
//   { field: 'crMigCL', headerName: 'Cr. Mig CL' },
//   { field: 'crSpreadPred', headerName: 'Cr. Spread Pred' },
//   { field: 'crSpreadSL', headerName: 'Cr. Spread SL' },
// ];

const moodysRatingToNumber = {
  'C': 0,
  'Ca': 1,
  'Caa3': 2,
  'Caa2': 3,
  'Caa1': 4,
  'B3': 5,
  'B2': 6,
  'B1': 7,
  'Ba3': 8,
  'Ba2': 9,
  'Ba1': 10,
  'Baa3': 11,
  'Baa2': 12,
  'Baa1': 13,
  'A3': 14,
  'A2': 15,
  'A1': 16,
  'Aa3': 17,
  'Aa2': 18,
  'Aa1': 19,
  'Aaa': 20,
};
function compareRatings(currentRating, predictedRating) {
  // Add your logic here to compare the ratings
  // This is an example. Replace this with actual logic
  console.log(currentRating)
  console.log(moodysRatingToNumber[predictedRating], moodysRatingToNumber[currentRating])
  const diff = moodysRatingToNumber[predictedRating] - moodysRatingToNumber[currentRating]
  if (diff > 1) {
    return <KeyboardDoubleArrowUpIcon style={{color: 'green'}} />;
  } else if (diff == 1) {
    return <KeyboardArrowUpIcon style={{color: 'green'}} />
  } else if (diff < -1) {
    return <KeyboardDoubleArrowDownIcon style={{color: 'red'}}/>;
  } else if (diff == -1) {
    return <KeyboardArrowDownIcon style={{color: 'red'}}/>;
  } else {
    return <KeyboardArrowRightIcon style={{color: 'orange'}}/>;
  }
}

export default function BondTable({ data, onRowSelected }) {
  const classes = useStyles();
  const [selectedRow, setSelectedRow] = React.useState(null);
  const handleRowClick = (param) => {
    setSelectedRow(param.id);
  };

    // Create columns based on the keys in the data
  const columns = Object.keys(data[0]).map(key => {
    if (key === 'crMigPred') {
      return {
        field: key,
        headerName: 'Cr. Mig Pred',
        renderCell: (params) => (
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
            {compareRatings(params.row.moodysRating, params.value)}
            <span>{params.value}</span> 
          </div>
        ),
      };
    }
    
    return {
      field: key,
      headerName: key.charAt(0).toUpperCase() + key.slice(1),
    };
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ height: '100%', width: '100%' }}>
        <DataGridPro
          rows={data}
          columns={columns}
          getRowId={(row) => row.BondID} // Here I'm using the `name` property as the id. Replace `name` with the appropriate property in your data.
          onRowSelectionModelChange={onRowSelected}
          onRowClick={handleRowClick}
          rowSelectionModel={[]}
          getRowClassName={(params) =>
            `${params.id === selectedRow ? classes.rowSelected : ''} ${classes.root}`
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