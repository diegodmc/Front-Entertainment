import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeWork from '@material-ui/icons/HomeWork';
import Home from '@material-ui/icons/Home';
import Timeline from '@material-ui/icons/Timeline';
import MenuIcon from '@material-ui/icons/Menu';
import Signin from '@material-ui/icons/PermIdentity';
import WhatsApp from '@material-ui/icons/WhatsApp';
import {Link} from '@material-ui/core';
import { Link as RouterLink} from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  list: {
    width: 250,   
  },
  hamburguer: {
      color: '#FFF'
  }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
	          <ListItem > <ListItemIcon> <Link component={RouterLink} to="/" variant="h6"><Home /> Home </Link></ListItemIcon></ListItem>
            <ListItem > <ListItemIcon> <Link component={RouterLink} to="/sign-in/login" variant="h6"><Signin /> Entrar </Link>  </ListItemIcon></ListItem>				   
            <ListItem > <ListItemIcon> <Link component={RouterLink} to="/About" variant="h6"><HomeWork /> Sobre </Link>  </ListItemIcon>	</ListItem>
            <ListItem > <ListItemIcon> <Link component={RouterLink} to="/HowItWorks" variant="h6"><Timeline /> Como funciona </Link>  </ListItemIcon> </ListItem>	   
            <ListItem > <ListItemIcon> <Link component={RouterLink} to="/Support" variant="h6"><WhatsApp /> Atendimento </Link>  </ListItemIcon> </ListItem>
            
		</List>
  
    </div>
  );


  return (
    <div>
      <Button className={classes.hamburguer} onClick={toggleDrawer('right', true)}><MenuIcon /></Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}
