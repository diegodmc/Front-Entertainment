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

const Icons = () => {
  const classes = useStyles();

  return (
    isAuthenticated() ?(
    <div className={classes.root}>
      <iframe
        className={classes.iframe}
        src="https://material.io/tools/icons/?icon=accessibility&style=outline"
        title="Material Design icons"
      />
    </div>
    ) : <Redirect to={{ pathname: "/", state: { from: "" } }} />
  );
};

export default Icons;
