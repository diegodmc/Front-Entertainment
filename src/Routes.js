import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout , HomeLayout} from './layouts';

import 
 {
  Dashboard as DashboardView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';
import Ranking from './views/Ranking';
import ClosedMarket from './views/ClosedMarket';
import OpenMarket from './views/OpenMarket';
import Login from './views/SignIn/Login/index';
import About from './views/About';
import HowItWorks from './views/HowItWorks';
import Support from './views/Support';
import HistoryView from './views/History';
import HomeView from './views/Home';

const Routes = () => {
  return (
    <Switch>
      
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      
      <RouteWithLayout
        component={HomeView}
        exact
        layout={HomeLayout}
        path="/home"
      />
      <RouteWithLayout
        component={Ranking}
        exact
        layout={MainLayout}
        path="/Ranking"
      />
      <RouteWithLayout
        component={OpenMarket}
        exact
        layout={MainLayout}
        path="/openmarket"
      />
      <RouteWithLayout
        component={ClosedMarket}
        exact
        layout={MainLayout}
        path="/ClosedMarket"
      />
      <RouteWithLayout
        component={HistoryView}
        exact
        layout={MainLayout}
        path="/history"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={Login}
        exact
        layout={MinimalLayout}
        path="/sign-in/login"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={About}
        exact
        layout={MinimalLayout}
        path="/About"
      />
      <RouteWithLayout
        component={HowItWorks}
        exact
        layout={MinimalLayout}
        path="/HowItWorks"
      />
      <RouteWithLayout
        component={Support}
        exact
        layout={MinimalLayout}
        path="/Support"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
