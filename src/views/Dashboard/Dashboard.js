import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { isAuthenticated} from "../../services/auth";
import {Redirect } from "react-router-dom";
import {
  Wallet,
  LatestOrders,
  Information,
  TopHigh
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    isAuthenticated() ?
    (<div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <Wallet />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <Information />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestOrders />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <TopHigh />
        </Grid>
      </Grid>
  </div> 
  )
  : <Redirect to={{ pathname: "/", state: { from: "" } }} />
  );
};

export default Dashboard;
