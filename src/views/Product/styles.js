import { styled } from '@mui/material/styles';

const useStyles = styled((theme) => ({
  root: {
    height: 'auto',
  },
  title: {
    textTransform: 'UPPERCASE',
    fontWeight: 'bold',
  },
  nav: {
    cursor: 'pointer',
  },
}));

export default useStyles;
