import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import mockData from './data';
import apiWithout from '../../../../services/apiWithout';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
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
        action={
          <Button
            color="primary"
            size="small"
            variant="outlined"
          >
            New entry
          </Button>
        }
        title="Mais Negociadas"
      />
      <Divider />
      <CardContent className={classes.content}>
            <div className={classes.inner}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Ação</TableCell>
                        <TableCell>Preço</TableCell>
                        <TableCell className={classes.differenceIcon}> <ArrowUpwardIcon className={classes.differenceIcon} /></TableCell>
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
                          <TableCell className={classes.differenceIcon}>{quote.varpct} %</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowUpwardIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
