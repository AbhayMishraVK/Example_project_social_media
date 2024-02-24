import {styled} from '@mui/system';
import { AppBar, Button, TextField,  Container, Grid, Paper, InputBase, Chip  } from '@mui/material';


export const MainCard = styled(Paper)({
  //  marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // padding: theme.spacing(2),
});

export const AvtarSign = styled(Container)({
  //    margin: theme.spacing(1),
  //    backgroundColor: theme.palette.secondary.main,
});

export const StyledForm = styled('form')({
        width: '100%',
      // marginTop: theme.spacing(3),
});

export const SubmitButton = styled(Button)({
    //  margin: theme.spacing(3, 0, 2),
});


// import { makeStyles } from '/styles';

// export default makeStyles((theme) => ({

//   root: {
//     '& .Mui-root': {
//       margin: theme.spacing(2),
//     },
//   },

//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },

//   form: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//   },

//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));
