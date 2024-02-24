import React , {useState , useEffect} from 'react'
import { StyledAppBar,StyledBrandContainer,StyledImage,StyledToolbar,
  StyledProfile,StyledPurple,StyledUserName,StyledLogout,} from './styles'
import {Link , useNavigate ,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux' ; 
import {LOGOUT} from '../../constants/actionTypes';
import decode from 'jwt-decode' ; 
import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/memoriesText.png';
import { ThemeProvider } from '@mui/material';


export default function Navbar() {

    const history = useNavigate() ; 
    const dispatch = useDispatch() ; 
    const location = useLocation() ;

    // PROFILE KO FIND KARENGE 
    // KYUKI YAH LOCAL STORAGE MAI PROFILE NAAM SE SET KIYA THA REDUCER MAI 
    const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile'))) ; 


    // LOGOUT FUNCTION 
    const logout = () => {
        dispatch({type : LOGOUT})  ;
        history.push('/') ;
        setUser(null) ; 
    }

    // JAB BHI LOCATION CHANGE HOGI TO AISA HOGA 
    //  /AUTH SE / MAI JAYEHA ISLIYE 
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile'))) ; 
    }, [location])

    // JWT TOKEN EXPIRE CHECK KARNE KE LIYE 
    // HAR BAAR LOCATION CHANGE HONE PER CHECK KAREGA 
    useEffect(() => {

        const token = user?.token ; 

        if(token)
        {
            const decodedToken = decode(token) ; 
            if(decodedToken.exp * 1000 < new Date().getTime())
                logout() ; 
        }
        // setUser(JSON.parse(localStorage.getItem('profile')));
        
        // eslint-disable-next-line
    } , [location , logout , user?.token]) //LOGOUT , USER.TOKEN KO WARNING HATANE KE LIE DALA HAI 
    

  return (

    <ThemeProvider>
      <StyledAppBar position="static" color="inherit">
        
        <StyledBrandContainer>
            <Link to='/posts'>
                <StyledImage src={memoriesText}  alt="icon" height="45px"/>
                <StyledImage src={memoriesLogo} alt="icon" height="40px"/>
            </Link>
        </StyledBrandContainer>

        {/* TOOLBAR */}
        <StyledToolbar>
            {
                user ? (
                    <StyledProfile>
                        {/* AVTAR */}
                        <StyledPurple alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </StyledPurple>

                        {/* NAME OF THE USER */}
                        <StyledUserName variant="h6">
                            {user.result.name}
                        </StyledUserName>

                        {/* LOG OUT BUTTON  */}
                        <StyledLogout variant="contained" color="secondary" onClick={logout}>Logout </StyledLogout>
                    </StyledProfile>
                ) :     
                (
                    <Link to="/auth">
                        <StyledLogout variant="contained" color="primary">
                        Sign IN
                        </StyledLogout>
                    </Link>
                )
            }

        </StyledToolbar>
      </StyledAppBar>
    </ThemeProvider>
  )
}
