import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Galery from './Galery';
import Data from './Data';
// import MoreInfo from './MoreInfo';
import useStyles from './styles';

export default function Produto(props) {
  // const { setView } = props;
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link
            className={classes.nav}
            color='inherit'
            // onClick={() => setView({ page: 'Produtos', data: props.data })}
          >
            Loja 1
          </Link>
          <Typography color='textPrimary'>{"Um titulo qualquer"}</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={8}>
        <Galery />
      </Grid>
      <Grid item xs={4}>
        <Data />
      </Grid>
          <Grid item md={6} className={classes.galery}>
      </Grid>
      {/* <Grid item xs={12} sm={12} md={6} className={classes.data}>
        <Data {...props.data} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} className={classes.data}>
        <MoreInfo {...props.data} />
      </Grid> */}
    </Grid>
  );
}
