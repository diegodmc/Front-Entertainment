import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import api from '../../../services/api';
import { login } from "../../../services/auth";
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Carousel from '../Carousel';


const schema = {
  email: {
    presence: { allowEmpty: false, message: 'campo obrigatório' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'campo obrigatório' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    marginTop: theme.spacing(-6),
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    widtht: '50%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(-5),
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  socialButtons: {
    marginTop: theme.spacing(3)
  },
  socialIcon: {
    marginRight: theme.spacing(1)
  },
  sugestion: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  },
  Information:{
    textAlign: 'center',
    padding: theme.spacing(1),
    color: theme.palette.error.main,
    fontFamily: 'sans-serif',
    fontSize:'14px'
    
  }
}));

const Login = props => {
  const { history } = props;

  const classes = useStyles();
  const [userInvalid, setuserInvalid] = React.useState(null);
  const [userNotFound, setNotFound] = React.useState(null);
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleBack = () => {
    history.goBack();
  };

  const handleShowUserNotFound = ()=>{
    setNotFound(true);
  }

  const handleHideUserNotFound = ()=>{
    setNotFound(false);
  }
  const handleShowUserInvalid = ()=>{
    setuserInvalid(true);
  }

  const handleHideUserInvalid = ()=>{
    setuserInvalid(false);
  }

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignIn = async e => {

    e.preventDefault();
    handleHideUserInvalid();
    handleHideUserNotFound();
    const errors = validate(formState.values, schema);
    
    if (errors) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
       try {
              const response = await api.post("/account/login", { email: formState.values.email, password: formState.values.password} );
              login(response.data);
              history.push("/dashboard");
            } catch (err) 
            {
              if(err.response.status == 404)
                handleShowUserNotFound();
              
              else if(err.response.status == 401)
                handleShowUserInvalid();
            }
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

    return (
      <div className={classes.root}>
        <Grid
          className={classes.grid}
          container
        >
            <Grid
            className={classes.content}
            item
            lg={5}
          >
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton onClick={handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form
                  className={classes.form}
                  onSubmit={handleSignIn}
                >
                  <Typography
                    className={classes.title}
                    variant="h2"
                  >
                    Seja bem-vindo.
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                  >
                    Realize seu login para continuar.
                    {userInvalid ? <div  className={classes.Information}>Senha errada!</div> : null }
                    {userNotFound ? <div  className={classes.Information}>Usuário não cadastrado!</div> : null }
                  </Typography>
                 
                  <TextField
                    className={classes.textField}
                    error={hasError('email')}
                    fullWidth
                    helperText={
                      hasError('email') ? formState.errors.email[0] : null
                    }
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    type="text"
                    value={formState.values.email || ''}
                    variant="outlined"
                  />
                  <TextField
                    className={classes.textField}
                    error={hasError('password')}
                    fullWidth
                    helperText={
                      hasError('password') ? formState.errors.password[0] : null
                    }
                    label="Senha"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={formState.values.password || ''}
                    variant="outlined"
                  />
                  <Button
                    className={classes.signInButton}
                    color="primary"
                    disabled={!formState.isValid}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Entre
                  </Button>
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    Não possui uma conta?{' '}
                    <Link
                      component={RouterLink}
                      to="/sign-up"
                      variant="h6"
                    >
                      CADASTRE-SE
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
          
          <Grid
            className={classes.quoteContainer}
            item
            lg={7}
            xs={12}
          >
             <div className={classes.quote}>
            <div className={classes.quoteInner}>
             <Carousel />
            </div>
          </div>
          </Grid>
        </Grid>
      </div>
    );
  };

Login.propTypes = {
  history: PropTypes.object
};

export default withRouter(Login);
