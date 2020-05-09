import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }

}));
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const Score = props => {
  const { className, ...rest } = props;

  const classes = useStyles();



  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Perfil Influenciador"
      />
      <Divider />
      <CardContent className={classes.content}>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="1º Influenciador" secondary="3 primeiras posições / quantidade de participação"/>
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="2º Promissor" secondary="5 primeiras posições / quantidade de participação"/>
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="3º Determinado" secondary="10 primeiras posições / quantidade de participação"/>
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="4º Iniciante" secondary="Sem participação"/>
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="5º Socialista" secondary="Herdeiro quebra banca"/>
        </ListItemLink>
      </List>
      </CardContent>
      <Divider />
      <CardHeader
        title="Pontuação"
      />
      <Divider />
      <CardContent className={classes.content}>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="1º Lugar" secondary="10 pontos"/>
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="2º Lugar" secondary="9 pontos"/>
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="3º Lugar" secondary="8 pontos"/>
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="4º Lugar" secondary="7 pontos"/>
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="5º Lugar" secondary="6 pontos"/>
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="6º Lugar" secondary="5 pontos"/>
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="7º Lugar" secondary="4 pontos"/>
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="8º Lugar" secondary="3 pontos"/>
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="9º Lugar" secondary="2 pontos"/>
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="10º Lugar" secondary="1 pontos"/>
        </ListItemLink>
      </List>
      </CardContent>
     
    </Card>
  );
};

Score.propTypes = {
  className: PropTypes.string
};

export default Score;
