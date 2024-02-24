import { Grid, IconButton, TextField , InputAdornment} from '@mui/material'
import React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default function Input(props) {

    const name = props.name ; 
    const handleChange = props.handleChange ; 
    const label = props.label ; 
    const autoFocus = props.autoFocus ; 
    const type = props.type ; 
    const handleShowPassword  = props.handleShowPassword  ; 
    const half  = props.half  ; 


  return (
    
    <Grid item xs ={12} sm={half ? 6 : 12}>

        <TextField
          name={name}
          onChange={handleChange}
          variant="outlined" 
          required 
          fullWidth 
          label={label}
          autoFocus = {autoFocus} 
          type={type}

        //   The endAdornment in Material-UI is a property that allows you to add content to the end (right side) of an input field. It's often used to include additional elements, such as icons or buttons, to provide user interaction or feedback.
        InputProps = { name === 'password' ? 
            {
                endAdornment : (

                    <InputAdornment position="end">
                        {
                          <IconButton onClick={handleShowPassword}>
                            {
                                type === 'password' ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />
                            }
                          </IconButton>
                        }
                    </InputAdornment>
                )
            }
        : null}  />

    </Grid>
  )
}
