import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import api from 'services/api';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  //const response =  await api.get("/personaldata/GetPersonalData");
  const [name, setName] = React.useState(null);
  const [note, setNote] = React.useState(null);
  const [profile, setProfile] = React.useState(null);
  const [position, setPosition] = React.useState(null);
  

  const handleGetScore = async (e,v) => {
    const response =  await api.get("/score/GetScorePeople");
      if(response.status ==200)
      {
          setName(response.data.name);
          setNote(response.data.note);
          setProfile(response.data.profile);
          setPosition(response.data.position);
      }
  }
  useEffect(() => {
    handleGetScore();
  }, []);
  
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography className={classes.name}variant="h4">{name}</Typography>
      <Typography variant="body2">{profile}</Typography>
      <Typography variant="body2">{position}º Ranking</Typography>
      <Typography variant="body2">Score {note} </Typography>
      
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
