import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import mockData from './data';
import apiWithout from '../../../../services/apiWithout';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 80
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));


const LatestOrders = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders] = useState(mockData);
  const [quotes, setQuote] = useState([]);

  useEffect( () =>{

        async function loadQuote(){
            const response = await apiWithout.get('/quote/GetTopHigh');
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
        title="Top 3 carteiras da semana passada"
      />
      <Divider />
      <CardContent className={classes.content}>
            <div className={classes.inner}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>1º Ação</TableCell>
                        <TableCell>2º Ação</TableCell>
                        <TableCell>3º Ação</TableCell>
                        <TableCell>4º Ação</TableCell>
                        <TableCell>5º Ação</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {quotes.map(quote => (
                        <TableRow
                          hover
                          key={quote.id}
                        >
                          <TableCell>{quote.code}</TableCell>
                          <TableCell>{quote.price}</TableCell>
                          <TableCell>{quote.price}</TableCell>
                          <TableCell>{quote.price}</TableCell>
                          <TableCell>{quote.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
      </CardContent>
      
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
