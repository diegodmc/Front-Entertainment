import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import apiWithout from '../../../../services/apiWithout';

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

const TopLow = props => {
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
        subtitle={`${quotes.length} in total`}
        title="Maiores Baixas"
      />
      <ArrowDownwardIcon className={classes.differenceIcon} />
      <Divider />
      <CardContent className={classes.content}>
            <div className={classes.inner}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Ação</TableCell>
                        <TableCell>Preço</TableCell>
                        <TableCell className={classes.differenceIcon}> <ArrowDownwardIcon className={classes.differenceIcon} /></TableCell>
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
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

TopLow.propTypes = {
  className: PropTypes.string
};

export default TopLow;
