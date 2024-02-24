import React from 'react'
import {useSelector} from 'react-redux'; 
import Post from './Post/Post' ; 
import { Grid, CircularProgress } from '@mui/material';
import  { Load, PostsStyles } from './styles' ; 
 


export default function ({setCurrentId}) {

  // IT IS COMING FROM THE REDUCER POSTS  
  const {posts , isLoading} = useSelector((state) => state.posts) ; 

  console.log(posts) ;  

  // IF POST IS 0 . 
  if(! isLoading && !posts.length)
    return 'NO POSTS' ; 

  return (

    isLoading ? <Load>
                    <CircularProgress />
                </Load> : 

    <PostsStyles container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </PostsStyles>
  )}
