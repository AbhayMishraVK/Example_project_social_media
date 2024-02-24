
import {styled} from '@mui/system';
import { AppBar, Button, TextField,  Container, Grid, Paper, InputBase, Chip  } from '@mui/material';


export const StyledSearchButton = styled(Button)({
  marginLeft: 10,
});

export const StyledHome = styled(Container)({
  maxWidth: 'xl',
});

export const StyledGird = styled(Grid)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'space-between',
});

export const StyledSearch = styled(AppBar)({
  borderRadius: 4,
  marginBottom: '1rem',
  display: 'flex',
  padding: 16,
  height: 56,
  alignItems: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 1px 3px rgb(0 0 0 / 10%)',
});

export const StyledPagination = styled(Paper)({
  borderRadius: 4,
  marginTop: '1rem',
  padding: 16,
  height: 56,
  alignItems: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 1px 3px rgb(0 0 0 / 10%)',
});

export const StyledInputBase = styled(InputBase)({
  width: '100%',
  padding: '4px 8px',
  borderRadius: 4,
  backgroundColor: '#fff',
  boxShadow: '0 1px 3px rgb(0 0 0 / 10%)',
});

export const StyledChip = styled(Chip)({
  margin: '4px 8px',
});

// export const StyledGird = styled(Grid)({
  
// });




// export { StyledSearch, StyledSearchButton , StyledChip , StyledGrid , StyledInputBase , StyledPagination , StyledHome };



// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({

//   Search: {
//     borderRadius: 4,
//     marginBottom: '1rem',
//     display: 'flex',
//     padding: '16px',
//   },
  
//   pagination: {
//     borderRadius: 4,
//     marginTop: '1rem',
//     padding: '16px',
//   },

//   gridContainer: {
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column-reverse',
//     },
//   },
// }));