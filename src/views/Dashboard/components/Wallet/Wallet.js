import React, { useState, useEffect} from 'react';
import {Pie } from 'react-chartjs-2';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  IconButton,
  Divider,
  CardContent,
   Grid
} from '@material-ui/core';
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
import { ProductCard } from '../../../Settings/components/index';
import mockDataCard from '../../../Settings/data';


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
  },
  Information:{
    textAlign: 'center',
    padding: theme.spacing(1),
    color: theme.palette.error.main,
    fontFamily: 'sans-serif',
    fontSize:'14px'
  },
  TextInformation:{
    textAlign: 'center',
    padding: theme.spacing(1),
    fontFamily: 'sans-serif',
    fontSize:'14px',
    fontWeight: 'bold'
  },
  SuccessInformation:{
    textAlign: 'center',
    padding: theme.spacing(1),
    color: theme.palette.success.main,
    fontFamily: 'sans-serif',
    fontSize:'14px',
    fontWeight: 'bold'
  }
}));


const Wallet = props => {
  
  const { className,product, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const { history } = props;

  const [open, setOpen] = React.useState(false);
  const [openWithCash, setOpenWithCash] = React.useState(false);
  const [openWithoutCash, setOpenWithoutCash] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [actions, setAction] = React.useState(mockData);
  const [first, setFirst] = React.useState(null);
  const [second, setSecond] = React.useState(null);
  const [three, setThree] = React.useState(null);
  const [four, setFour] = React.useState(null);
  const [five, setFive] = React.useState(null);
  const [position, setPosition] = React.useState(null);
  const [MsgInf, setMsgInf] = React.useState(null);
  const [MsgSubHeader, setMsgSubHeader] = React.useState(null);
  const [MsgHeader, setMsgHeader] = React.useState(null);
  const [accountBalance, setAccountBalance] = React.useState(null);
  const [cust, setCust] = React.useState(null);
  const [updatedBalance, setUpdatedBalance] = React.useState(null);
  const [MsgUpdate, setMsgUpdate] = React.useState(null);
     
  const handleGetWallet = async (e,v) => {

       const response =  await api.get("/wallet/getwallet");
        
        if(response.status == 200)
        {
             setFirst(response.data.firstAction);
             setSecond(response.data.secondAction);
             setThree(response.data.thirdAction);
             setFour(response.data.fourthAction);
             setFive(response.data.fifthAction);
        }
   }
   
  const handleGetHeader = async (e,v) => {
      const response =  await api.get("/wallet/GetHeader");
      setMsgHeader(response.data.header);
      setMsgSubHeader(response.data.subheader);
}

   useEffect(() => {
    handleGetWallet();
    handleGetHeader();
  }, []);
   
  const defaultProps = {
    options: actions,
    getOptionLabel: option => option.cd,
  };
  
  const handleClickOpen = (evt) =>{
    if(evt[0]!=null)
      setPosition(evt[0]._index);
    setOpen(true);
    handleHide();
  }
  
const handleShow = ()=>{
      setMsgInf(true);
 }

 
 const handleSendApi = async e => {
  
      setOpenWithCash(false);
      setMsgUpdate(false);
       try
       {
        const response = await api.post("/wallet/create", {  
          CodeWallet:1 ,
          StatusWallet:openWithCash ? "1" :"0" ,
          Email:"b3@b3.com" ,
          FirstAction:first , 
          FirstPctAction:"1" , 
          FirstPrcAction:"1" , 
          SecondAction:second , 
          SecondPctAction:"1" , 
          SecondPrcAction:"1" , 
          ThirdAction: three , 
          ThirdPctAction:"1" , 
          ThirdPrcAction:"1" , 
          FourthAction:four , 
          FourthPctAction:"1" , 
          FourthPrcAction:"1" , 
          FifthAction:five , 
          FifthPctAction:"1" , 
          FifthPrcAction:"1"  
        } );
        if(response.status == 200)
        {
          setMsgHeader("Participação confirmada!");
          setMsgSubHeader("Alteração da carteira até segunda às 09:00");
        }
        if(response.data.StatusWallet == "99")
        {
          
          setMsgUpdate(true);
        }
        else
          await api.post("/balance/create",{Email:"b3@b3.com" , ValueInput:"1", DateInput:"1", ValueOut:"1", DateOut:"1"});

      } catch (err) 
      {
        this.setState({error:"Houve um problema com o login, verifique suas credenciais."});
      }
 }
 const handleHide = () =>{
  setMsgInf(false);
 }
  const HandleWallet = async e => {
    //Refatorar tudo!! Pq ficou um ninho de rato!! Mas a vontade de ver tudo funcionando é maior!! 
    e.preventDefault();
    setMsgUpdate(false);
    if (first ==null || second == null || three == null || four == null || five == null) 
    {
      handleShow();
    } else {
        handleHide();
       try {
              const response = await api.get("/balance/GetMoney");
              
              if(response.status == 200)
              {
                setAccountBalance(response.data.accountBalance);
                setCust(response.data.cust);
                setUpdatedBalance(response.data.updatedBalance);
                if(MsgHeader=="Participação confirmada!")
                  setMsgUpdate(true);
                else
                  setOpenWithCash(true);
              }
              else if(response.status == 204)
              {
                setOpenWithoutCash(true);
              }
            } catch (err) 
            {
              this.setState({
                error:
                  "Houve um problema com o login, verifique suas credenciais."
              });
            }
          }
      };

  const handleClose = () => {
      setOpen(false);
      setOpenWithCash(false);
      setMsgUpdate(false);
      setOpenWithoutCash(false);
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
          backgroundColor: null,
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
  
  
  const [products] = useState(mockDataCard);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton size="small">
            {MsgInf ? <div  className={classes.Information}>Preencha as 5 ações!</div> : null }
            {MsgUpdate ? <div  className={classes.SuccessInformation}>Carteira atualizada!</div> : null }
             <Button color="primary"
                     size="small"
                     variant="outlined"
                     onClick={HandleWallet}
             >
              Salvar
            </Button>
          </IconButton>
        }
        title={MsgHeader}
        subheader={MsgSubHeader}
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
                <CardHeader title="Ação com a maior valorização na próxima semana!"/>
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
                <Button onClick={handleClose} variant="outlined"  className={classes.Close} startIcon={<DeleteIcon />}>
                  Cancelar
                </Button>
                <Button onClick={handleUpdate} variant="outlined"   className={classes.Check} startIcon={<SaveIcon />}>
                  Salvar
                </Button>
            </DialogActions>
          </Dialog>

          {/*Dialog pagamento caso tenha saldo */}
          <Dialog open={openWithCash} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogContent>
                <DialogContentText >
                <CardHeader title="Confirma Pagamento?"/>
                </DialogContentText>
                
           </DialogContent>
           <div className={classes.TextInformation}>Saldo em conta:</div>  <div className={classes.Information}>{accountBalance}</div> 
           <div className={classes.TextInformation}>Pagamento:</div>  <div className={classes.Information}>{cust}</div> 
           <div className={classes.TextInformation}>Saldo atualizado:</div>  <div className={classes.Information}>{updatedBalance}</div> 
          
            <DialogActions>
                <Button onClick={handleClose} variant="outlined"  className={classes.Close} startIcon={<DeleteIcon />}>
                  Não
                </Button>
                <Button onClick={handleSendApi} variant="outlined"   className={classes.Check} startIcon={<SaveIcon />}>
                  Sim
                </Button>
            </DialogActions>
          </Dialog>

          {/*Dialog pagamento caso não tenha saldo */}
          <Dialog open={openWithoutCash} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogContent>
                <DialogContentText >
                <CardHeader title="Faça uma transferência para as contas abaixo" subheader="Identificação do pagamento através do Nome/Conta Bancária"/>
                </DialogContentText>     
                <CardContent>
                <div className={classes.content}>
                  <Grid
                    container
                    spacing={3}
                  >
                    {products.map(product => (
                      <Grid
                        item
                        key={product.id}
                        lg={4}
                        md={6}
                        xs={12}
                      >
                        <ProductCard product={product} />
                      </Grid>
                    ))}
                  </Grid>
                </div>
                </CardContent>           
           </DialogContent>
           <Card
            {...rest}
            className={clsx(classes.root, className)}
          >
           
          </Card>
            <DialogActions>
                <Button onClick={handleClose} variant="outlined"  className={classes.Close} startIcon={<DeleteIcon />}>
                  Fechar
                </Button>
            </DialogActions>
          </Dialog>
      </Card>
  
 );
 
  
};
Wallet.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object
};

export default Wallet;
