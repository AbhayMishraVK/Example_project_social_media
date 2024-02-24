import { Grid } from '@mui/material';
import { styled } from '@mui/system';

export const PostsStyles = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
});


export const Load = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
});

// PostsStyles.smMargin = styled('div')({
//   margin: 1,
// });

// PostsStyles.actionDiv = styled('div')({
//   textAlign: 'center',
// });




// import { makeStyles } from "@material-ui/core";


// export default makeStyles((theme) => (
//     {


//         smMargin : 
//         {
//             margin : theme.spacing(1) ,
//         } , 

//         actionDiv : 
//         {
//             textAlign : 'center' , 
//         } , 

//         load : {
//             display : 'flex' , 
//             justifyContent : 'center' , 
//             alignItems :  'center' , 
//             height : '50vh'
//         }

// }))