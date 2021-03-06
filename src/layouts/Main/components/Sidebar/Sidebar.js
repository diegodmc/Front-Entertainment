import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Ranking from '@material-ui/icons/FormatListNumbered';
import GroupAdd from '@material-ui/icons/GroupAdd';
import Group from '@material-ui/icons/Group';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Financeiro from '@material-ui/icons/Payment';
import { Profile, SidebarNav } from './components';
import HistoryIcon from '@material-ui/icons/History';
const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Home',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Mercado Aberto',
      href: '/OpenMarket',
      icon: <GroupAdd />
    },
    {
      title: 'Mercado Fechado',
      href: '/ClosedMarket',
      icon: <Group />
    },
    {
      title: 'Ranking',
      href: '/Ranking',
      icon: <Ranking />
    },
    {
      title: 'Financeiro',
      href: '/settings',
      icon: <Financeiro />
    },
    {
      title: 'Histórico ',
      href: '/history',
      icon: <HistoryIcon />
    },/*
    {
      title: 'Fórum',
      href: '/settings',
      icon: <SettingsIcon />
    },
    {
      title: 'Minha conta',
      href: '/account',
      icon: <AccountBoxIcon />
    },*/
    {
      title: 'Sair',
      href: '/logout',
      icon: <AccountBoxIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
