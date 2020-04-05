import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  }
}));
const NotFound = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <div class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget">
          <div class="tradingview-widget-copyright"><a href="https://br.tradingview.com/markets/stocks-usa/market-movers-gainers/" rel="noopener" target="_blank"><span class="blue-text">Mercado de Ações</span></a> por TradingView</div>
            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js" async>
              {
                {
                  "colorTheme": "light",
                  "dateRange": "12m",
                  "exchange": "US",
                  "showChart": true,
                  "locale": "br",
                  "largeChartUrl": "",
                  "isTransparent": false,
                  "width": "400",
                  "height": "600",
                  "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
                  "plotLineColorFalling": "rgba(33, 150, 243, 1)",
                  "gridLineColor": "rgba(240, 243, 250, 1)",
                  "scaleFontColor": "rgba(120, 123, 134, 1)",
                  "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
                  "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
                  "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
                }
             }
            </script>
          </div>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  history: PropTypes.object
};


export default NotFound;

