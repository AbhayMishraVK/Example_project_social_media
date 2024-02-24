
import { styled } from '@mui/system';
import { deepPurple } from '@mui/material/colors';
import { AppBar, Toolbar, Typography, Button , ThemeProvider} from '@mui/material';


const StyledAppBar = styled(AppBar)({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',

  // SMALL DEVICES
  // [theme.breakpoints.down('sm')]: {
  //   flexDirection: 'column',
  // },
});

const StyledBrandContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const StyledImage = styled('img')({
  marginLeft: '15px',
  marginTop: '5px',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '400px',

  // SMALL DEVICES
  // [theme.breakpoints.down('sm')]: {
  //   width: 'auto',
  // },
});

const StyledProfile = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '400px',
  alignItems: 'center',

  // SMALL DEVICES
  // [theme.breakpoints.down('sm')]: {
  //   width: 'auto',
  //   marginTop: 20,
  //   justifyContent: 'center',
  // },

});

const StyledPurple = styled('div')({
  // color: theme.palette.getContrastText(deepPurple[500]),
  color: deepPurple[500],
  backgroundColor: deepPurple[500],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledUserName = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
});

const StyledLogout = styled(Button)({
  marginLeft: '20px',
});

export {
  StyledAppBar,StyledBrandContainer,StyledImage,StyledToolbar,
  StyledProfile, StyledPurple, StyledUserName, StyledLogout,
};








// import { deepPurple } from "@material-ui/core/colors";
// import { makeStyles } from "@material-ui/core/styles";


// export default makeStyles((theme) => (
//     {
//         appBar : {
//             borderRadius : 15 , 
//             margin : '30px 0' , 
//             display : 'flex' , 
//             flexDirection : 'row' , 
//             justifyContent : 'space-between' , 
//             alignItems : 'center' , 
//             padding : '10px 50px' , 

//             // SMALL DEVICES 
//             [theme.breakpoints.down('sm')] : {
//                 flexDirection : 'column' , 
//             }
//         } ,

//         brandContainer : {

//             display : 'flex' , 
//             alignItems : 'center' 
//         } , 

//         image : 
//         {
//             marginLeft : '15px' , 
//             marginTop : '5px' , 
//         } ,

//         toolbar : 
//         {
//             display : 'flex' , 
//             justifyContent : 'flex-end' , 
//             width : '400px' , 

//             // SMALL DEVICES 
//             [theme.breakpoints.down('sm')] : {
//                  width : 'auto' ,  
//             }
//         } ,

//         profile : {

//             display : 'flex' , 
//             justifyContent : 'space-between' , 
//             width : '400px' , 
//             alignItems : 'center' , 

//             // SMALL DEVICES 
//             [theme.breakpoints.down('sm')] : {
//                 width : 'auto' ,  
//                 marginTop: 20,
//                 justifyContent : 'center' ,
//             }
//         } , 

//         purple : 
//         {   
//             color : theme.palette.getContrastText(deepPurple[500]) ,
//             backgroundColor : deepPurple[500] ,
//             display : 'flex' ,  
//             alignItems : 'center' , 
//             justifyContent : 'center' , 
//         } , 

//         userName : 
//         {
//             display : 'flex' ,  
//             alignItems : 'center' , 
//             textAlign : 'center' , 
//         } , 

//         logout : 
//         {
//             marginLeft : '20px' , 
//         } , 


//         // // THIS IS ONLY FOR SMALL MOBILES 
//         [theme.breakpoints.down('sm')] : {

//             mainContainer : 
//             {
//             flexDirection : 'column-reverse' , 
//             } , 
//         } , 

        
//         // heading : 
//         // {
//         //    color : theme.palette.primary.main, 
//         //    textDecoration : 'none' , 
//         //    fontSize : '2em' , 
//         //    fontWeight : 300 , 
//         // } , 
//     }
// ))