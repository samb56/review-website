import { styled } from '@mui/material/styles';

const PREFIX = 'Posts'

const classes = {
  root: `${PREFIX}-root`
}

const Root = styled('div')(({ theme }) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));

export const Posts = () => {

  return (

    <Root className={classes.root}>



    </Root >
  )
}