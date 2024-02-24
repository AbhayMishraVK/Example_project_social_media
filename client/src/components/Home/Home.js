import React, { useState } from 'react';
import { Grow, Grid } from '@mui/material';
import { useDispatch} from 'react-redux';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination' ; 
import {useNavigate , useLocation} from 'react-router-dom' ; 
import { MuiChipsInput } from 'mui-chips-input';
import { getPostBySearch  } from '../../actions/posts';
import { StyledHome , StyledInputBase , StyledChip , StyledGird , StyledSearchButton,  StyledSearch , StyledPagination } from './styles';


// FUNCDING PARAMS IN THE WEBSITE 
function useQuery() 
{
  return new URLSearchParams(useLocation().search) ; 
}

export default function Home() {

  const dispatch = useDispatch() ; 
  const navigate = useNavigate() ;
  const query = useQuery()  ; 


  const [currentId , setCurrentId ] = useState(null) ;
  const [search , setSearch] = useState('') ; 
  const [tags , setTags] = useState([]) ;

  // QUERY SE PAGE KI VALUE NIKALEGA, NI TO 1 
  const page = query.get('page') || 1 ; 
  const searchQuery = query.get('searchQuery');


  // FUNCTION OF SEARCH POST 
  const searchPost = () => {


    // AGAR HUMKO SERCH YAA TAGS DALE HO TO 
    // TAGS MAI ARRAY NI SEND KARNGE , UNKI JAON KAR DENGE WITH , . 
    if(search.trim() || tags)
    {
       dispatch(getPostBySearch({search , tags:tags.join(',')})) ;
       
       navigate.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)

    } else {
      navigate.push('/posts') ; 
    }
  }

  // FUNCTION OF HANDLE KEY PRESS 
  const handleKeyPress = (e) => 
  {
    if(e.keyCode === 13)
      searchPost() ; 
  }

  // ADD AND DELETE OF TAGS ( CHIP INPUT)
  const handleAddChip = (tag) => {setTags([...tags , tag])} ; 
  const handleDeleteChip = (tagToDelete) => {setTags(tags.filter((tag) => tag !== tagToDelete))}

  return (

    <Grow in>
          <StyledHome>

            <StyledGird container justifyContent="space-between" alignItems="stretch" spacing={3}>

              {/* SHOW ALL THE POSTS */}
              <Grid item xs={12} sm={6} md={9}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>

              {/* TO SHOW FORM */}
              <Grid item xs={12} sm={6} md={3}>

                {/* FOR THE SEARCH FORM */}
                <StyledSearch position="static" color="inherit">

                  <StyledInputBase name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyPress}/>

                  <MuiChipsInput value={tags} onAdd={(chip) => handleAddChip(chip)} onDelete={(chip) => handleDeleteChip(chip)} label="Search Tags" variant="outlined" style={{margin : '10px 0'}} /> 

                  <StyledSearchButton onClick={searchPost} variant="contained" color="primary"> Search</StyledSearchButton>
                </StyledSearch>

                {/* FOR THE CREATION FORM */}
                <Form setCurrentId={setCurrentId} currentId={currentId}/>

                {/* PAGINATION  */}
                {(! searchQuery && !tags.length) && (
                <StyledPagination elevation={6}>
                    <Pagination page={page}/>
                </StyledPagination>
                 )}

              </Grid>

            </StyledGird>
          </StyledHome>
      </Grow>
  )
}
