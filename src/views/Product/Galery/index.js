import React from 'react';
import Grid from '@mui/material/Grid';
import useStyles from './styles';

export default function Produto(props) {
  const { image } = props;
  const classes = useStyles();
  const [destaque, setDestaque] = React.useState(image);

  const galery = ["https://source.unsplash.com/random", "https://source.unsplash.com/random","https://source.unsplash.com/random"];

  return (
    <Grid container component='main' className={classes.root}>
      <Grid item xs={12}>
        {destaque !== '' && (
          <img
            className={classes.tumbnails}
            src="https://source.unsplash.com/random"
            alt='imagem grande'
          />
        )}
      </Grid>
      <Grid container item xs={12} spacing={3}>
        {galery &&
          galery.map((img, index) => {
            if (img && destaque !== img)
              return (
                <Grid item xs={3} onClick={() => setDestaque(img)}>
                  <img
                    className={classes.tumbnails}
                    src={img}
                    alt={`imagem-${index}`}
                  />
                </Grid>
              );
            return null;
          })}
      </Grid>
    </Grid>
  );
}
