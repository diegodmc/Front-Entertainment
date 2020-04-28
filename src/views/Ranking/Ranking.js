import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import {Redirect } from "react-router-dom";
import { isAuthenticated} from "../../services/auth";
import { UsersToolbar, UsersTable } from './components';
import mockData from './data';
import api from '../../services/api';

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
      const response = await api.get("/wallet/getranking");
      setUsers(response.data);
  }

    useEffect(() => {
      handleGetRanking();
    }, []);

  return (
    isAuthenticated() ?(
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  ): <Redirect to={{ pathname: "/", state: { from: "" } }} />
  );
};

export default Ranking;
