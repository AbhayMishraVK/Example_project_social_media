import React , {useState} from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography , ButtonBase } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost , likePost } from '../../../actions/posts';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { StyledCard, StyledButtonBase, StyledCardActions, StyledDetails, StyledMedia, StyledOverlay, StyledOverlay2, StyledTitle } from './styles';


const defaultImage =  'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' ; 

export default function Post({post , setCurrentId}) {

  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);

  const dispatch = useDispatch();
  const history = useNavigate();

  const userId =  user?.result?._id;
  const hasLikedPost = post?.likes.find((like) => like === userId);

  // FOR OPENING THE POST 
  // YAH ROUTER DEFINED HAI APP MAI 
  const openPost = () => history.push(`/posts/${post._id}`)
    
  /******************* FOR HABDLING THE LIKE BUTTON **********************/
  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
      toast.error("post disliked"); 
    } else {
      setLikes([...post.likes, userId]);
      toast.success("post liked") ; 
  }}

  /************************ FUNCTION OF LIKES **********************/
  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpOffAltIcon fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
  }

    return <><ThumbUpOffAltIcon fontSize="small" />&nbsp;Like</>;
  };
    
    
  return (

    <StyledCard elevation={6}>

      <StyledButtonBase component="span" name="test" onClick={openPost}>

      <StyledMedia image={post.selectedFile || defaultImage} title={post.tile} />

      <StyledOverlay>
        {/* CREATOR NAME  */}
        <StyledTitle variant="h6"> {post.name} </StyledTitle>

        {/* CREATION TIME */}
        <StyledTitle variant="body2"> {moment(post.createdAt).fromNow()} </StyledTitle>
      </StyledOverlay>

      {/* FOR UPDATION OF THE POST  */}
      {/* YAH PEHLE CURREWNT ID KO POST ID SE SET KAR DEGA  */}
      {/* THIS WILL APPEAR ONLY WHEN LOGIN PERSON IS SAME AS POST CREATOR */}
      {  
        (user?.result?._id === post?.creator) && 
        (
          <StyledOverlay2>
              <Button size="small" name="edit" onClick={(event) => {
                event.stopPropagation() ; 
                setCurrentId(post._id)
              }}> 
                  <MoreHorizIcon fontSize="medium"/> 
              </Button>
          </StyledOverlay2>
        )
      }

      

      {/* TAGS  */}
      <StyledDetails>
          <StyledTitle variant="body2" color="textSecondary" component="h2">
             {
                post.tags.map((tag) => (`#${tag} `))
             }
          </StyledTitle>
      </StyledDetails> 

      {/* TITLE */}
      <StyledTitle gutterBottom variant="h5" component="h2"> {post.title} </StyledTitle>

      {/* MESSAGE */}
      <CardContent>
        <StyledTitle variant="body2" color="textSecondary" component='p'>
             {`${post.message.split(" ").slice(0 , 20).join(" ")}...`}
        </StyledTitle>
      </CardContent>
    </StyledButtonBase>
    

      {/* LIKE AND DELETE */}
      <StyledCardActions>

        {/* LIKE BUTTON */}
        <Button size="small" color="primary" onClick={handleLike} disabled={! user?.result}>
             <Likes />
        </Button>

        {/* DELETE BUTTON */}
        {/* THIS WILL APPEAR ONLY WHEN LOGIN PERSON IS SAME AS POST CREATOR */}
        {
          (user?.result?._id === post?.creator) && 
          (
            <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} >
              <DeleteIcon fontSize="small"/>
              Delete
            </Button>
          )
        }
        
      </StyledCardActions>
    </StyledCard>

  )
}
