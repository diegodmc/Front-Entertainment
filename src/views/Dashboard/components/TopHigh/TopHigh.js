import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
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
import api from '../../../../services/api';

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
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  }

}));

const TopHigh = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [quotes, setQuote] = useState([]);
  const [firstAction             ,setfirstAction             ]= React.useState(false);
  const [firstPctAction          ,setfirstPctAction          ]= React.useState(false);
  const [firstPrcAction          ,setfirstPrcAction          ]= React.useState(false);
  const [firstPrcActionCurrent   ,setfirstPrcActionCurrent   ]= React.useState(false);
  const [secondAction            ,setsecondAction            ]= React.useState(false);
  const [secondPctAction         ,setsecondPctAction         ]= React.useState(false);
  const [secondPrcAction         ,setsecondPrcAction         ]= React.useState(false);
  const [secondPrcActionCurrent  ,setsecondPrcActionCurrent  ]= React.useState(false);
  const [thirdAction             ,setthirdAction             ]= React.useState(false);
  const [thirdPctAction          ,setthirdPctAction          ]= React.useState(false);
  const [thirdPrcAction          ,setthirdPrcAction          ]= React.useState(false);
  const [thirdPrcActionCurrent   ,setthirdPrcActionCurrent   ]= React.useState(false);
  const [fourthAction            ,setfourthAction            ]= React.useState(false);
  const [fourthPctAction         ,setfourthPctAction         ]= React.useState(false);
  const [fourthPrcAction         ,setfourthPrcAction         ]= React.useState(false);
  const [fourthPrcActionCurrent  ,setfourthPrcActionCurrent  ]= React.useState(false);
  const [fifthAction             ,setfifthAction             ]= React.useState(false);
  const [fifthPctAction          ,setfifthPctAction          ]= React.useState(false);
  const [fifthPrcAction          ,setfifthPrcAction          ]= React.useState(false);
  const [fifthPrcActionCurrent   ,setfifthPrcActionCurrent   ]= React.useState(false);
  const [balance                 ,setbalance                 ]= React.useState(false);

  useEffect( () =>{

        async function loadQuote(){
            const response = await api.get('/wallet/GetWalletClient');
            setfirstAction(response.data.firstAction);
            setfirstPctAction(response.data.firstPctAction);
            setfirstPrcAction(response.data.firstPrcAction);
            setfirstPrcActionCurrent(response.data.firstPrcActionCurrent);
            setsecondAction(response.data.secondAction);
            setsecondPctAction(response.data.secondPctAction);
            setsecondPrcAction(response.data.secondPrcAction);
            setsecondPrcActionCurrent(response.data.secondPrcActionCurrent);
            setthirdAction(response.data.thirdAction);
            setthirdPctAction(response.data.thirdPctAction);
            setthirdPrcAction(response.data.thirdPrcAction);
            setthirdPrcActionCurrent(response.data.thirdPrcActionCurrent);
            setfourthAction(response.data.fourthAction);
            setfourthPctAction(response.data.fourthPctAction);
            setfourthPrcAction(response.data.fourthPrcAction);
            setfourthPrcActionCurrent(response.data.fourthPrcActionCurrent);
            setfifthAction(response.data.fifthAction);
            setfifthPctAction(response.data.fifthPctAction);
            setfifthPrcAction(response.data.fifthPrcAction);
            setfifthPrcActionCurrent(response.data.fifthPrcActionCurrent);
            setbalance(response.data.balance);                 
                  
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
        title="Detalhamento da carteira"
      />
      <Divider />
      <CardContent className={classes.content}>
            <div className={classes.inner}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Ação</TableCell>
                        <TableCell>Comprado</TableCell>
                        <TableCell>Atual</TableCell>
                        <TableCell>%</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                     <TableRow>
                         <TableCell>{firstAction}</TableCell>
                         <TableCell>{firstPrcAction}</TableCell>
                         <TableCell>{firstPrcActionCurrent}</TableCell>
                         <TableCell>{firstPctAction} %</TableCell>
                    </TableRow>
                    <TableRow>
                         <TableCell>{secondAction}</TableCell>
                         <TableCell>{secondPrcAction}</TableCell>
                         <TableCell>{secondPrcActionCurrent}</TableCell>
                         <TableCell>{secondPctAction} %</TableCell>
                    </TableRow>
                    
                    <TableRow>
                         <TableCell>{thirdAction}</TableCell>
                         <TableCell>{thirdPrcAction}</TableCell>
                         <TableCell>{thirdPrcActionCurrent}</TableCell>
                         <TableCell>{thirdPctAction} %</TableCell>
                    </TableRow>
                    
                    <TableRow>
                         <TableCell>{fourthAction}</TableCell>
                         <TableCell>{fourthPrcAction}</TableCell>
                         <TableCell>{fourthPrcActionCurrent}</TableCell>
                         <TableCell>{fourthPctAction} %</TableCell>
                    </TableRow>
                    
                    <TableRow>
                         <TableCell>{fifthAction}</TableCell>
                         <TableCell>{fifthPrcAction}</TableCell>
                         <TableCell>{fifthPrcActionCurrent}</TableCell>
                         <TableCell>{fifthPctAction} %</TableCell>
                    </TableRow>
                    </TableBody>
                  </Table>
                </div>
      </CardContent>
      <Divider />
    </Card>
  );
};

TopHigh.propTypes = {
  className: PropTypes.string
};

export default TopHigh;
