import React , {useState , useRef} from 'react'
import { Typography, TextField, Button } from '@mui/material';
import { CommentOuter , CommentInner} from './styles';
import { commentPost } from '../../actions/posts';
import {useDispatch} from 'react-redux'

export default function CommentSection({post}) {

  const user = JSON.parse(localStorage.getItem('profile')) ; 

  const dispatch = useDispatch() ; 
  const [comments , setComments] = useState(post?.comments) ; 
  const [newComment, setNewComment] = useState('') ;
  const commentsRef = useRef();

  const handleComment = async () => {

    const finalComment = `${user.result.name} : ${newComment}` ; 

    const newComments = await dispatch(commentPost(finalComment, post._id)) ; 

    // ALSO SET NEW COMMENT TO NULL
    setNewComment('') ;

    // ADD NEW COMMENTS TO THE COMMENTS
    setComments(newComments); 

    // FOR THE SMOOTH BEHAVIOR OF THE COMMENTS 
    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    
    <CommentOuter>

      <CommentInner>

        {/* SHOWING COMMETNT WITH NAME AND VALUE */}
        <Typography variant="h6" gutterBottom> Comments </Typography>
        {
          comments?.map((comment , index) => (
            <Typography key={index} gutterBottom varinat="subtitle1">
              <strong> {comment.split(':')[0]}</strong>
              {comment.split(':')[1]}
            </Typography>
          ))}

        <div ref={commentsRef}/>
      </CommentInner>


      {/* FOR POSTING A COMMENTS IF LOG IN*/}
      {user?.result?.name && (
        <div style={{width : '70%'}}>
          <Typography variant="h6" gutterBottom> Write a comment</Typography>
          <TextField fullWidth multiline minRows={4} variant="outlined" label="comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
          <Button style={{marginTop : '10px'}} fullWidth disabled={! newComment.length} color="primary" variant="contained" onClick={handleComment}>
            Comment
          </Button>
        </div>
      )}
    </CommentOuter>
  )
}
