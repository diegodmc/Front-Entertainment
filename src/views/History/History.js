import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { isAuthenticated} from "../../services/auth";
import {Redirect } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  iframe: {
    width: '100%',
    minHeight: 640,
    border: 0
  }
}));

const History = () => {
  const classes = useStyles();

  return (
    isAuthenticated() ?(
    <div className={classes.root}>
      
    </div>
    ) : <Redirect to={{ pathname: "/", state: { from: "" } }} />
  );
};

export default History;
