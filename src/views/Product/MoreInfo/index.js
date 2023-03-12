import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DetailsIcon from '@mui/icons-material/Details';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const { content } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          indicatorColor='primary'
          textColor='primary'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'
        >
          <Tab
            label='Detalhes do produto'
            icon={<DetailsIcon />}
            {...a11yProps(0)}
          />
          <Tab
            label='Sobre à Entrega'
            icon={<LocalShippingIcon />}
            {...a11yProps(1)}
          />
          <Tab
            label='Informações Adicionais'
            icon={<HelpIcon />}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography
          variant='body1'
          color='textSecondary'
          dangerouslySetInnerHTML={{ __html: content }}
        ></Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Em BREVE...
      </TabPanel>
      <TabPanel value={value} index={2}>
        Em BREVE...
      </TabPanel>
    </div>
  );
}
