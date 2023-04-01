import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/views/Login';
import Dashboard from './src/views/Dashboard';
import Staff from './src/views/Staff';
import Continents from './src/views/Continents';

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Dashboard: { screen: Dashboard },
    Staff: { screen: Staff },
    Continents: { screen: Continents },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;