import { Paper , Divider } from '@mui/material';
import { styled } from '@mui/system';

// MAIN CARD
export const MainCard = styled(Paper)({
    padding: '20px',
    borderRadius: '15px',
  }) ; 

  // CARD
export const Card = styled('div') ({
    display: 'flex',
    width: '100%',
    
    // SMALL DEVICES
    // [theme.breakpoints.down('sm')]: {
    //   flexWrap: 'wrap',
    //   flexDirection: 'column',
    // },
  }) ; 

// SECTION
export const StylePostDetails = styled('div') ({
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  }) ; 

// TAGS
export const Tags = styled('div') ({
    textDecoration: 'none',
    color: '#3f51b5',
})

  // CREATOR NAME
export const CreatorName = styled('div') ({
    textDecoration: 'none',
    color: '#3f51b5',
  }) ; 

  // DIVIDER
export const Dividers = styled(Divider) ({
    margin: '20px 0',
  })

  // IMAGE SECTION
export const ImageSection = styled('div') ({
    marginLeft: '20px',

    // // SMALL DEVICES
    // [theme.breakpoints.down('sm')]: {
    //   marginLeft: 0,
    // },
  })

  // MEDIA (IMAGE)
export const Media = styled('img') ({
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
  }) ; 

  // RECOMMEND POST
export const RecommendPost = styled('div') ({
    display: 'flex',
    marginTop: '20px',

    // SMALL DEVICES
    // [theme.breakpoints.down('sm')]: {
    //   flexDirection: 'column',
    // },
  }) ; 

  // LOADING PAPER
export const Loading = styled(Paper) ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  }) ; 

  // RECOMMEND Post
export const RecPost = styled(Paper) ({
    margin: '20px',
    cursor: 'pointer',
    padding: '12px',
    width: '400px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  }) ; 

  // COMMENTS OUTER CONTAINER
export const CommentOuter = styled('div') ({
    display: 'flex',
    justifyContent: 'space-between',
  }) ; 

  // COMMENTS INNER CONTAINER
export const CommentInner = styled('div') ({
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  }) ; 

  // IMAGE
export const Image = styled('img') ({
    maxWidth: '100%',
    maxHeight: '300px',
    height: '100%',
    objectFit: 'cover',
});





















// import { makeStyles } from "@mui/styles";


// export default makeStyles((theme) => ({

//     mainCard : {

//         padding : '20px' ,
//         borderRadius : '15px', 
//     } , 

//     // FOR THE CARD OF THE 
//     card : {
//         display : 'flex' , 
//         width : '100%' , 

//         [theme.breakpoints.down('sm')] : {
//             flexWrap : 'wrap' , 
//             flexDirection : 'column' ,
//         }
//     } , 

//     section : {
//         borderRadius : '20px' , 
//         margin : '10px' , 
//         flex : 1 ,
//     } , 

//     // FOR THE TAGS 
//     tags : {
//          textDecoration : 'none' , 
//          color : '#3f51b5' , 
//     }  ,

//     // CREATOR NAME 
//     creator : {
//          textDecoration : 'none' , 
//          color : '#3f51b5' ,
//     } , 

//     // DIVIDER 
//     divider : {
//         margin : '20px 0' 
//     } , 


//     // FOR THE IMAGE SECTION 
//     imageSection : {

//         marginLeft : '20px' , 

//           [theme.breakpoints.down('sm')] : {
//             marginLeft : 0 , 
//         }
//     } ,

//     // FOR THE MEDIA (IMAGE)
//     media : {
        
//         borderRadius : '20px', 
//         objectFit : 'cover' ,
//         width : '100%' , 
//         maxHeight : '600px' ,
//     } , 

//     // RECOMMEND POST 
//     recommendedPosts : {

//         display : 'flex' , 
//          marginTop : '20px' , 

//         [theme.breakpoints.down('sm')] : {
//             flexDirection : 'column'
//         }
//     } , 

//     // LOADING PAPER
//     loadingPaper : {
//         display : 'flex' , 
//         justifyContent : 'center' , 
//         alignItems : 'center' , 
//         padding : '20px' , 
//         borderRadius : '15px' , 
//         height : '39vh' ,
//     } , 

//     recommend : {
//         margin : '20px' , 
//         cursor : 'pointer' , 
//         padding : '12px' , 
//         width : '400px' ,
//         display : 'flex' , 
//         justifyContent : 'space-between' ,
//         gap : '10px' , 
//     } ,

//     commentsOuterContainer : {
//         display : 'flex' , 
//         justifyContent : 'space-between' , 
//     } , 

//     commentsInnerContainer : {
//         height : '200px' , 
//         overflowY : 'auto' , 
//         marginRight : '30px' , 
//     } , 

//     img: {
//         maxWidth: '100%', // Limit the maximum width to the container size
//         maxHeight: '300px', // Set a maximum height
//         height: '100%', // Set a maximum height
//         objectFit: 'cover',
//     },

// }))