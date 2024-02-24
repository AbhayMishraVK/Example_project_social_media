import React from 'react'
import {useState} from 'react' ; 
import { TextField, Button, Typography, Paper} from '@mui/material';
import FileBase from 'react-file-base64' ;
import {useDispatch , useSelector} from 'react-redux' ;  
import { createPost , updatePost } from '../../actions/posts';
import { useEffect} from 'react' ; 
import {useNavigate} from 'react-router-dom' ; 
import { MuiChipsInput } from 'mui-chips-input';
import { toast } from "react-hot-toast";
import { StyledForm, StyledPaper, StyledTextField, StyledFileButton, StyledSubmitButton } from './styles';



export default function ({setCurrentId , currentId}) {
  
  const dispatch = useDispatch() ; 
  const history = useNavigate() ; 

  const [postData , setPostData] = useState({
     title : '', message : '' , tags : [] , selectedFile:null
  }) ; 

  const user = JSON.parse(localStorage.getItem('profile')) ; 

  // AGAR CURRENT ID , NULL NAHI HAI TO VO POST KI ID FIND KAREGA . 
  // POST KI ID KO VALUE DE DEGA . 
  // THEN VALUE OF THE CURRENT ID POST 
    const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));

  // console.log("post id " , post) ; 

  // JAB BHI POST MAI KOI BHI UPDATE HOGA 
  // TO POST KI KOI VALUE 
  useEffect(() => {

    if(! post?.title)
      clear() ; 

    if(post)
    { 
       setPostData(post) ; 
    }

  // eslint-disable-next-line
  }, [post]) 
  

  /*****************  CLEAR HANDLER FUNCTION ********************/
  const clear = () => 
  {
    setCurrentId(null) ; 
    setPostData({title : '' , message : '' , tags : [] , selectedFile:null}) ; 
  }

  /***************** ADD AND Delete CHIP ********************/
  const  handleAddChip = (tag) => {
    setPostData({...postData , tags:[...postData.tags , tag]}) ; 
  }

  const handleDeleteChip = (chipToDelete) => {
    setPostData({...postData , tags: postData.tags.filter((tag) => tag !== chipToDelete)}) ;
  }



  /***************** ON THE SUBMISSION OF THE FORM ********************/
  const handleSubmit = async(e) => 
  {
    e.preventDefault() ; 

    console.log(currentId) ; 

    // IT MEANS WE ARE CREATING A NEW POST 
    if(currentId === null)
    {
        // POST KA DATA SEND KIYA FOR THE CREATION 
        // WE ARE DISPATHCING IT IN THE ACTIONS
        dispatch(createPost({...postData , name:user?.result?.name} , history)) ;
        toast.success('Post created successfully'); 
    }

    else
    {
      // CURRENT ID KE POST KO UPDATE KARNA HAI 
      dispatch(updatePost(currentId , {...postData , name:user?.result?.name})) ;
      toast.success('Post updated successfully'); 
    }

    clear() ; 

  }

  // IF THE USER IS NOT DEFINED 
  if(! user?.result?.name)
  {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    )
  }

  return (


    <StyledPaper elevation={6}>

      {/* FORM  */}
      <StyledForm autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

        <Typography variant="h6"> {currentId ? 'Updating' : 'Creating'} a memory </Typography>

        <StyledTextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData , title:e.target.value})} />

        <StyledTextField  name="message" variant="outlined" label="Message" fullWidth multiline  minRows={4}  value={postData.message} onChange={(e) => setPostData({...postData , message:e.target.value})} />

        <div style={{ padding: '5px 0', width: '94%' }}>
          <MuiChipsInput name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onAdd={(chip) => handleAddChip(chip)} 
          onDelete={(chip)=>handleDeleteChip(chip)}/>
        </div>

        {/* FILE INPUT */}
        {/* <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData , selectedFile:base64})} />
        </div> */}
        <StyledFileButton type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />

        {/* SUBMIT BUTTON  */}
        <StyledSubmitButton variant="contained" color="primary" size="large" type="submit" fullWidth> Submit </StyledSubmitButton>

        {/* CLEAR BUTTON  */}
        <StyledSubmitButton  variant="contained" color="secondary" size="small" fullWidth onClick={clear}> Clear </StyledSubmitButton>

      </StyledForm>
    </StyledPaper>
   
  
  )
}
