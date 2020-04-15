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
import apiWithout from '../../../../services/apiWithout';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
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
const Information = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [quotes, setQuote] = useState([]);

  useEffect( () =>{

        async function loadQuote(){
            const response = await apiWithout.get('/quote/GetTopLow');
            setQuote(response.data);            
        }
        loadQuote();
    }, []);


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Como funciona"
      />
      <Divider />
      <CardContent className={classes.content}>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="1º Faça análise do mercado." />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="2º Selecione 5 ativos para compor sua carteira." />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="3º Abertura segunda-feira às 09:00." />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="4º Encerramento na sexta-feira às 19:00." />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="5º Carteira com maior rendimento leva 90% do arrecadado." />
        </ListItemLink>
      </List>
      </CardContent>
      <Divider />
    
    </Card>
  );
};

Information.propTypes = {
  className: PropTypes.string
};

export default Information;
