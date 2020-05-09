import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import {Redirect } from "react-router-dom";
import { isAuthenticated} from "../../services/auth";
import { UsersToolbar, UsersTable } from './components';
import mockData from './data';
import api from '../../services/api';
import Score from './components/Score';
import {
  Grid
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Ranking = () => {
  const classes = useStyles();

  
  const [users, setUsers] = React.useState(mockData);
  
  const handleGetRanking = async (e,v) => {
      const response = await api.get("/score/getscore");
      setUsers(response.data);
  }

    useEffect(() => {
      handleGetRanking();
    }, []);

  return (
    isAuthenticated() ?(
    <div className={classes.root}>
      <UsersToolbar />
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
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
      </Grid>
      <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <Score />
        </Grid>
        </Grid>
    </div>
  ): <Redirect to={{ pathname: "/", state: { from: "" } }} />
  );
};

export default Ranking;
