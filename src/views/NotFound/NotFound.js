import React, { Component,useState, useEffect } from 'react';

import { Switch, Redirect, Route } from 'react-router-dom';
export const TOKEN_KEY = "@airbnb-Token";

class NotFound extends Component {

    render() {
        return (
          <div >
            
            <Route exact  render={() => {window.location.href="home.html"}} />
          </div>);
      }


}
export default NotFound;


