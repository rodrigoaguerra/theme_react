import { styled } from '@mui/material/styles';

const useStyles = styled((theme) => ({
  root: {
    padding: '1em',
  },

  title: {
    textTransform: 'UPPERCASE',
    fontWeight: 'bold',
    color: theme.palette.brown.dark,
  },

  value: {
    color: theme.palette.pink.light,
  },
  containerButton: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2em',
  },
  button: {
    padding: '0.7em 5em',
  },
}));

export default useStyles;
