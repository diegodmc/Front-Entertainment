import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {  Grid ,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField} from '@material-ui/core';
  import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';

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
    padding: theme.spacing(3)
  },
  divider:{
    color:'#546e7a'
  }
}));

const Settings = () => {
  const classes = useStyles();

  const [products] = useState(mockData);

  const [values, setValues] = useState({
    name: 'Diego Costa',
    doc: '042.004.306-30',
    bank: 'NuBank',
    agency: '3434',
    account: '3333333',
    digit:'9'
  });

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
            className={classes.balance}
          >Saldo em conta:R$ 90,00
          
          </Grid>
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
                label="Nome"
                margin="dense"
                name="name"
                onChange={""}
                required
                value={values.name}
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
                name="doc"
                onChange={""}
                required
                value={values.doc}
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
                label="Banco"
                margin="dense"
                name="bank"
                onChange={""}
                required
                value={values.bank}
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
                name="agency"
                onChange={""}
                required
                value={values.agency}
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
                name="conta"
                onChange={""}
                required
                value={values.account}
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
                onChange={""}
                required
                
                variant="outlined"
              />
            </Grid>
            <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
          >
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
