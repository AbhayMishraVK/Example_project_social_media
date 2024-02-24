// import logo from './logo.svg';
import React from 'react';
import {Container} from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

function App() {


  const user = JSON.parse(localStorage.getItem('profile')) ; 

  return (

    <BrowserRouter>

        <Container maxWidth="xl">
          
          {/* MNAVBAR OF THE PAGE  */}
          <Navbar />

          <Routes>

            {/* HOME  */}
            <Route path="/" exact component={Home}/>

            {/* POST */}
            <Route path="/posts" exact component={Home} />

            {/* SEARCH POSTS */}
            <Route path="/posts/search" exact component={Home}/>

            {/* POST KE ANDAR JANE KE LIYE */}
            <Route path="/posts/:id" exact component={PostDetails}/>

            <Route path="/creators/:id" exact component={Home} />

            {/* AUTHENTICATION */}
            {/* AGAR AUTHENTICATED USER HAI TO ISKO POST MAI REDIRECT KAR DO */}
            <Route path="/auth" exact component={() => (!user ? <Auth /> : <Navigate to="/posts" />)}/>

          </Routes>
       
        </Container>
    
    </BrowserRouter>


  );

}

export default App;
