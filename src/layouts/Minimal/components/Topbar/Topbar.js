import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button,AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import TemporaryDrawer from './ShowHide';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    paddingLeft: '19px'
  },
  logo:{
    fontFamily: 'Arial Black, Gadget, sans-serif',
    fontSize: '10px',
    letterSpacing: '2px',
    wordSpacing: '2px',
    color: '#fff',
    fontWeight: '700',
    textDecoration: 'none',
    fontVariant: 'small-caps',
    textTransform: 'uppercase'
  },
  flexGrow: {
    flexGrow: 1
  },
  signIn: {
    marginLeft: theme.spacing(1),
    fontSize: '14px',
    fontWeight: '700',
  },
  signUp: {
    marginLeft: theme.spacing(1),
    fontSize: '14px',
    fontWeight: '700',
    color: '#3F51B5',
    background: '#FFF',
    "&:hover": {
      backgroundColor: "#3F51B5",
      color: '#FFF',
    }
  }

}));

const Topbar = props => {
  const { className,onSidebarOpen, ...rest } = props;
  
  const classes = useStyles();

  return (
    <div>
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      
      <Toolbar>
        <RouterLink to="/">
        <div className={clsx(classes.logo)}>B3 Entretenimento</div>  
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
        <Button  className={classes.signIn} color="inherit" component={RouterLink} to="/About" variant="h6">Sobre</Button>
        <Button  className={classes.signIn} color="inherit" component={RouterLink} to="/HowItWorks" >Como funciona</Button>
        <Button  className={classes.signIn} color="inherit" component={RouterLink} to="/sign-in" >Entrar</Button>
        <Button  className={classes.signUp} component={RouterLink} to="/sign-up" variant="h6">ABRA SUA CONTA</Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton  onClick={onSidebarOpen}>
            <TemporaryDrawer />
          </IconButton>
          <Button color	='default' className={classes.signUp} component={RouterLink} to="/sign-up" variant="h6">ABRA SUA CONTA</Button>
        </Hidden>
      </Toolbar>
    </AppBar>
    </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
