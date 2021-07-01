import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { authRoutes } from '../routes';

const AppRouter = () => {
  const isAuth = false
  return (
<switch>
{isAuth === true && authRoutes.map(({path, Component}) =>
<Route path={path} component={Component} exact/>
)}
{publicRoutes.map(({path, Component}) =>
<Route path={path} component={Component} exact/>
)}
</switch>
  );
};

export default AppRouter;