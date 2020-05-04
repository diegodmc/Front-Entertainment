import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import {  Grid ,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField} from '@material-ui/core';

import api from '../../services/api';
import { ProductsToolbar, ProductCard } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  balance:{
    fontFamily: 'sans-serif',
    fontSize: '14px',
    color:'#546e7a',
    padding: theme.spacing(3),
    fontWeight: 'bold'
  },
  divider:{
    color:'#546e7a'
  },
  Information:{
    textAlign: 'center',
    padding: theme.spacing(1),
    color: theme.palette.error.main,
    fontFamily: 'sans-serif',
    fontSize:'14px'
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

const Settings = () => {
  const classes = useStyles();

  const [products] = useState(mockData);
  
  const [name, setName] = React.useState(null);
  const [doc, setDoc] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [bank, setBank] = React.useState(null);
  const [agency, setAgency] = React.useState(null);
  const [account, setAccount] = React.useState(null);
  const [digit, setDigit] = React.useState(null);
  const [accountBalance, setAccountBalance] = React.useState(null);
  const [value, setValue] = React.useState(null);
  const [msgInf, setMsgInf] = React.useState(null);
  const [save, setSave] = React.useState(null);
  const [val, setVal] = React.useState(null);
  const [msgInfPeople, setMsgInfPeople] = React.useState(null);
  const [savePeople, setSavePeople] = React.useState(null);
  
  const handlePeople = async (e,v) => {
    setMsgInfPeople(false);
    setSavePeople(false);
    console.log('diego');
    if(value <= 0 || val < value)
    {
      setMsgInfPeople(true);
    }
    const response = await api.post("/people/create",{
                                                            email: 'b3@b3.com',
                                                            name: name,
                                                            doc: doc,
                                                            phone: phone
                                                          });
    if(response.status==200)
    {
      setSavePeople(true);
    }
}

  const handlePersonalData = async (e,v) => {
      setMsgInf(false);
      setSave(false);
      
      if(value <= 0 || val < value)
      {
        setMsgInf(true);
      }
      const response = await api.post("/personaldata/create",{
                                                              email: 'b3@b3.com',
                                                              bank: bank,
                                                              agency: agency,
                                                              account: account,
                                                              digit: digit,
                                                              accountBalance: accountBalance,
                                                              value: value
                                                            });
     if(response.status==200)
     {
      setSave(true);
     }
  }


  const handleGetPersonalData = async (e,v) => {
    const response =  await api.get("/personaldata/GetPersonalData");
      if(response.status ==200)
      {
          setBank(response.data.bank);
          setAgency(response.data.agency);
          setAccount(response.data.account);
          setDigit(response.data.digit);
          setValue(response.data.value);
      }
  }

  const handleGetPeople = async (e,v) => {
    const response =  await api.get("/people/GetPeople");
      if(response.status ==200)
      {
          setName(response.data.name);
          setDoc(response.data.doc);
          setPhone(response.data.phone);
      }
  }
  useEffect(() => {
    handleGetPersonalData();
    handleGetPeople();
  }, []);
  

  const handleGetMoney = async (e,v) => {
    const response = await api.get("/balance/GetMoney");
              
    if(response.status == 200)
    {
      setAccountBalance(response.data.accountBalance);
      setVal(response.data.val);
    }
    else if(response.status == 204)
    {
      setAccountBalance("R$ 0,00");            
    }
  }

  useEffect(() => {
  handleGetMoney();
  }, []);

  return (
    <div className={classes.root}>
      <Card>
      <CardHeader
          title="Minha Conta"
        />
        
        <CardContent>
        <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Nome"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                name="name"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="CPF"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                name="doc"
                required
                value={doc}
                onChange={e => setDoc(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Telefone"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                name="phone"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                variant="outlined"
              />
            </Grid>
          <Grid item
              md={6}
              xs={12}
              className={classes.balance}
            ><br />
            <br />
              Saldo em conta:{accountBalance}
          
          </Grid>
        </Grid>
        <CardActions>
          <Button onClick={handlePeople} variant="outlined"  color="primary">
            Salvar
          </Button>
        </CardActions>
        {msgInfPeople ? <div  className={classes.Information}>Dados inválidos!</div> : null }
        {savePeople ? <div  className={classes.SuccessInformation}>Dados salvo com sucesso!</div> : null }
        </CardContent>
        
      </Card>
      
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Card>
      <ProductsToolbar />
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
    </Card>
        
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Card>
        <CardHeader
          subheader="Pedido de Retirada! "
          title="Resgate"
        />
        <Divider className={classes.divider} />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                margin="dense"
                name="bank"
                label="Banco"
                InputLabelProps={{
                  shrink: true,
                }}
                required
                value={bank}
                onChange={e => setBank(e.target.value)}
                variant="outlined"
                />
              
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Agência"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                name="agency"
                required
                value={agency}
                onChange={e => setAgency(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Conta"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                name="account"
                required
                value={account}
                onChange={e => setAccount(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Valor"
                margin="dense"
                name="value"
                InputLabelProps={{
                  shrink: true,
                }}
                required
                value={value}
                onChange={e => setValue(e.target.value)}
                variant="outlined"
              />
            </Grid>
            {msgInf ? <div  className={classes.Information}>Dados inválidos!</div> : null }
            {save ? <div  className={classes.SuccessInformation}>Dados salvo com sucesso!</div> : null }
            <Divider />
        <CardActions>
          <Button onClick={handlePersonalData} variant="outlined"  color="primary">
            Salvar
          </Button>
        </CardActions>
      </Grid>
        </CardContent>
       </Card>
        <Divider />
     
    </div>
  );
};

export default Settings;
