import { styled } from '@mui/system';
import { Card, CardMedia, Typography, ButtonBase } from '@mui/material';

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
});

const StyledMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
});

const StyledOverlay = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
  height: '100',
});

const StyledOverlay2 = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',

  '& .MuiSvgIcon-root': {
    color: 'white',
  },
});

const StyledDetails = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

const StyledTitle = styled(Typography)({
  padding: '0 16px',
});

const StyledCardActions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 16px 8px 16px',
});

const StyledButtonBase = styled(ButtonBase)({
  display: 'block',
  textAlign: 'initial',
});


export {StyledCard , StyledButtonBase , StyledCardActions , StyledDetails , StyledMedia , StyledOverlay , StyledOverlay2 , StyledTitle}