import React from 'react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Payment from '@mui/icons-material/Payment';
import useStyles from './styles';

export default function Produto() {
  const p = { 
    id :  'asdw112312', 
    title : 'Muito Bom',
    tags: ['legal'],
    excerpt: 'Resumo do produto',
    value: '25,00',
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4'>{p.title}</Typography>
      </div>
      <div className={classes.code}>
        <Typography variant='body1' color='textSecondary'>
          Código: {p.id}
        </Typography>
      </div>
      <div className={classes.tags}>
        {p.tags &&
          p.tags.map((tag, index) => <Chip label={tag} key={`tag-${index}`} />)}
      </div>
      <div className={classes.value}>
        <Typography variant='h3' color='textSecondary'>
          {p.value ? `R$ ${p.value}` : 'Sem Valor'}
        </Typography>
      </div>
      <div className={classes.cardValue}>
        <Typography variant='h4' color='textSecondary'>
          <Payment aria-label='delete' /> 5x R$ 5.00
        </Typography>
      </div>
      <div className={classes.description}>
        <Typography
          variant='body1'
          color='textSecondary'
          dangerouslySetInnerHTML={{ __html: p.excerpt }}
        ></Typography>
      </div>
      <div className={classes.delivery}>
        <Typography variant='body1' color='textSecondary'>
          Entregas em curitiba e região metropolitana
        </Typography>
      </div>
      <div className={classes.deliveryInfo}>
        <Typography variant='body2' color='textSecondary'>
          saiba mais sobre prazos de entrega e formas de envio
        </Typography>
      </div>
      <div className={classes.quantidade}>
        {/* <TextField
          id='outlined-helperText'
          label='Quantidade'
          defaultValue='1'
          helperText='Quantidade de itens da compra'
          variant='outlined'
        /> */}
      </div>
      <div className={classes.containerButton}>
        <Button
          disabled={true}
          variant='contained'
          size='large'
          color='primary'
          className={classes.button}
        >
          Encomendar
        </Button>
      </div>
    </div>
  );
}
