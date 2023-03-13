import React from 'react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Payment from '@mui/icons-material/Payment';

export default function Produto() {
  const p = { 
    id :  'asdw112312', 
    title : 'Nisi erat porttitor',
    tags: ['dapibus', 'commodo', 'cursus'],
    excerpt: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,
    value: '25,00',
  };

  return (
    <div>
      <div>
        <Typography variant='h4'>{p.title}</Typography>
      </div>
      <div>
        <Typography variant='body1' color='textSecondary'>
          Código: {p.id}
        </Typography>
      </div>
      <div>
        <Typography variant='h3' color='textSecondary'>
          {p.value ? `R$ ${p.value}` : 'Sem Valor'}
        </Typography>
      </div>
      <div>
        <Typography variant='h6' color='textSecondary'>
          <Payment aria-label='delete' /> 5x R$ 5.00
        </Typography>
      </div>
      <br />
      <div>
        <Typography
          variant='body1'
          color='textSecondary'
          dangerouslySetInnerHTML={{ __html: p.excerpt }}
        ></Typography>
      </div>
      <br />
      <div>
        <Typography variant='body1' color='textSecondary'>
          Entregas em curitiba e região metropolitana
        </Typography>
      </div>
      <div>
        <Typography variant='body2' color='textSecondary'>
          saiba mais sobre prazos de entrega e formas de envio
        </Typography>
      </div>
      <br />
      <div>
        {p.tags &&
          p.tags.map((tag, index) => <Chip label={tag} key={`tag-${index}`} />)}
      </div>
      <br />
      <div>
        <Button
          disabled={true}
          variant='contained'
          size='large'
          color='primary'
        >
          Encomendar
        </Button>
      </div>
    </div>
  );
}
