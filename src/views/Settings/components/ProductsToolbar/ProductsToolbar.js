import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { CardHeader,Divider,Button } from '@material-ui/core';
import PropTypes from 'prop-types';
const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const ProductsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
     <div className={classes.row}>
      <CardHeader
       title="Transfira para a sua conta na B3 Entretenimento através das contas bancárias abaixo"
        subheader="Identificação do pagamento através do Nome/Conta Bancária"
      />
      </div>
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};

export default ProductsToolbar;
