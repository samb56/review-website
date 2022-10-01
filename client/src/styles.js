import { makeStyles } from 'tss-react/mui';
import { AppBar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import memories from './images/hookah clouds.jpg';

const MainAppBar = (props) => (
  <AppBar position="static" color="inherit" {...props}>
    <Typography className="heading" variant="h2" align="center">
      Memories
    </Typography>
    <img className="image" src={memories} alt="memories" height="60" />
  </AppBar>
);

// Method 1 using styled API
export const StyledAppBar = styled(MainAppBar)(() => ({
  '&': {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .heading': {
    color: 'rgba(0,183,255, 1)',
  },
  '& .image': {
    marginLeft: '15px',
  },
}));

// Method 2 using sx style props
export const sxStyles = {
  appBar: {
    borderRadius: '15px',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
    height: '60px',
  },
};

export default makeStyles()((theme) => {
  return {
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: 'rgba(0,183,255, 1)',
    },
    image: {
      marginLeft: '15px',
    },
  };
});
