import React from 'react';
import {
  BrowserRouter as RouterBrowserRouter,
  NavLink as RouterNavLink,
  Route as RouterRoute,
  Switch as RouterSwitch,
} from 'react-router-dom';

type RouterComponent = React.ComponentType<any>;

export const Switch = RouterSwitch as RouterComponent;
export const Route = RouterRoute as RouterComponent;
export const NavLink = RouterNavLink as RouterComponent;
export const BrowserRouter = RouterBrowserRouter as RouterComponent;
