import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Galery from './Galery';
import Data from './Data';
import MoreInfo from './MoreInfo';

export default function Produto(props) {
    return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link
            color='inherit'
          >
            Loja 1
          </Link>
          <Typography color='textPrimary'>{"Um titulo qualquer"}</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12} sm={12} md={7}>
        <Galery />
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <Data />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <MoreInfo />
      </Grid>
    </Grid>
  );
}
