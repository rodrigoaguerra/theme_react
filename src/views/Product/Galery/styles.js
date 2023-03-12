import { styled } from '@mui/material/styles';

const useStyles = styled((theme) => ({
  root: {
    padding: '1em',
    justifyContent: 'center',
    background: 'red'
  },
  tumbnails: {
    width: '100%',
    cursor: 'pointer',
  },
}));

export default useStyles;
