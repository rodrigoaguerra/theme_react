import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Cards from '../Commun/Cards';
import Pagination from '../Commun/Pagination';

function Main(props) {
  const { title } = props;
  const posts = [1,2,3]; 
  const cards = [1, 2, 3];

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
          <Container sx={{ py: 2 }} maxWidth="md">
           {/* End hero unit */}
           <Grid container spacing={2}>
             {cards.map((card) => (
               <Grid item key={card} xs={12} sm={6} md={4}>
                 <Cards />
               </Grid>
             ))}
           </Grid>
         </Container>
      ))}
      <Pagination />
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
