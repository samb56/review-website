import { styled } from '@mui/material/styles';

const PREFIX = 'App'

const classes = {
  root: `${PREFIX}-root`
}

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
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
  }
}));

const appStyles = () => {

  return (

    <Root className={classes.root}>



    </Root >
  )
}

export default appStyles
