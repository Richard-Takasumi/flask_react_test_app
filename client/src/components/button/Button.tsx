import Button from '@mui/material/Button';

export default function WatchlistButton({text}) {
  return (
    <Button 
      variant="contained"
      sx={{
        backgroundColor: '#1D232C',
        color: 'white',
        border: '1px solid white',
        borderRadius: '10px',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: 'black',
        }
      }}
    >
      {text}
    </Button>
  );
}