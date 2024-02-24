import  { styled }  from '@mui/system';
import { Button, Paper, TextField } from '@mui/material';

export const StyledForm = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const StyledPaper = styled(Paper)({
  padding: 20,
});

export const StyledTextField = styled(TextField)({
  margin: 10,
});

export const StyledFileButton = styled(Button)({
  width: '97%',
  margin: '10px 0',
});

export const StyledSubmitButton = styled(Button)({
  marginBottom: 10,
});







// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({

//     root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//     },
//   },

//     paper : 
//     {
//         padding : theme.spacing(2) , 
//     } , 
 
//     fileInput : 
//     {
//         width : '97%' , 
//         margin : '10px 0'
//     } , 

// }))