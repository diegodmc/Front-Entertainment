import React, { useState, useEffect } from 'react';
import {Pie } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  IconButton,
  Divider
} from '@material-ui/core';
import CheckCircle from '@material-ui/icons/CheckCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import RefreshIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Autocomplete from '@material-ui/lab/Autocomplete';
import mockData from './Pit/dataAction';
import 'chartjs-plugin-piechart-outlabels-compact';
import api from '../../../../services/api';
import validate from 'validate.js';
import { getToken, login } from "../../../../services/auth";


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
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '320px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  Check: {
    color: theme.palette.success.dark
  },
  Close:{
    color: theme.palette.error.main
  }
}));



const UsersByDevice = props => {

  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const { history } = props;

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [actions, setAction] = React.useState(mockData);
  const [first, setFirst] = React.useState(null);
  const [second, setSecond] = React.useState(null);
  const [three, setThree] = React.useState(null);
  const [four, setFour] = React.useState(null);
  const [five, setFive] = React.useState(null);
  const [position, setPosition] = React.useState(null);
  
  const defaultProps = {
    options: actions,
    getOptionLabel: option => option.cd,
  };
  
  const handleClickOpen = (evt) =>{
    if(evt[0]!=null)
      setPosition(evt[0]._index);
    setOpen(true);
  }

  const HandleWallet = async e => {

    console.log('Diego');
    e.preventDefault();
    //if (first ==null || second == null || three == null || four == null || five == null) 
    //{
      //his.setState({ error: "Escolha 5 ações para continuar!" });
    //} else {
       try {
              const response = await api.post("/wallet", {  
                CodeWallet:"1" ,
                NameWallet:"1" ,
                Email:"1" ,
                FirstAction:"1" , 
                FirstPctAction:"1" , 
                FirstPrcAction:"1" , 
                SecondAction:"1" , 
                SecondPctAction:"1" , 
                SecondPrcAction:"1" , 
                ThirdAction:"1" , 
                ThirdPctAction:"1" , 
                ThirdPrcAction:"1" , 
                FourthAction:"1" , 
                FourthPctAction:"1" , 
                FourthPrcAction:"1" , 
                FifthAction:"1" , 
                FifthPctAction:"1" , 
                FifthPrtAction:"1"  
               } );
              
               login(response.data);
               history.push("/dashboard");
            } catch (err) 
            {
             /* this.setState({
                error:
                  "Houve um problema com o login, verifique suas credenciais."
              });*/
            }
      };

  const handleClose = () => {
    setOpen(false);
    Clear();
  };
  
  const handleUpdate = (e,v) => {
    if(value != null)
    {
      if(position==0) setFirst(value.cd);
      if(position==1) setSecond(value.cd);
      if(position==2) setThree(value.cd);
      if(position==3) setFour(value.cd);
      if(position==4) setFive(value.cd);
    }
    Clear();
  }
  function Clear(){
    setOpen(false);
    setValue(null);
    setPosition(null);
  }
  const data = {
    datasets: [
      {
        data: [20,20,20,20,20],
        backgroundColor: [  first  == null ? null : theme.palette.primary.main,
                            second == null ? null : theme.palette.error.main,
                            three  == null ? null : theme.palette.warning.main,
                            four   == null ? null : theme.palette.success.main,
                            five   == null ? null : theme.palette.secondary.main
                         ],
        borderWidth: 1,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: [first == null ? '1º Ação' : first, 
             second== null ? '2º Ação' : second,
             three == null ? '3º Ação' : three,
             four  == null ? '4º Ação' : four,
             five  == null ? '5º Ação' : five],
    
  };

  const opts = {
    display: true,
    legend: {
      position: 'left',
      labels: {
        boxWidth: 10
      }
    },
    plugins: {
      legend: true,
      outlabels: {
          text: '%l',
          color: 'white',
          stretch: -60,
          font: {
              resizable: true,
              minSize: 12,
              maxSize: 18
          }
        }
    },  
    responsive: true,
    maintainAspectRatio: true,
    animation: false,
    fullWidth: false,
    cutoutPercentage: 0,
    reverse: true,
    tooltips: {
      enabled: true,
      intersect: true,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton size="small">
             <Button color="primary"
                     size="small"
                     variant="outlined"
                     onClick={HandleWallet}
                     
             >
            Salvar
          </Button>
          </IconButton>
        }
        title="Monte a sua carteira!"
      />
      <Divider />
       <div className={classes.chartContainer}>
          <Pie
            data={data}
            options={opts}
            onElementsClick={handleClickOpen}
          />
        </div>
       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogContent>
                <DialogContentText >
                  Ação com a maior valorização na próxima semana!
                </DialogContentText>
                <Autocomplete
                    {...defaultProps}
                    id="auto-select"
                    onChange={(e,v) => setValue(v != null ? v : null)}
                    inputValue={value}
                    autoSelect
                    renderInput={params => (
                                              <TextField {...params} 
                                                onChange={({ target }) => setValue(target.value != null ? target.value : null)} 
                                                label="Selecione" 
                                                margin="normal" 
                                                fullWidth 
                                              />
                                            )
                                  }
                  />
           </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                  <RemoveCircle className={classes.Close} />
              </Button>
              <Button onClick={handleUpdate} color="primary">
                  <CheckCircle className={classes.Check} />
              </Button>
            </DialogActions>
          </Dialog>
    </Card>
  );
};
UsersByDevice.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object
};
export default UsersByDevice;
