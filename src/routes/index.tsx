import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Cart } from '../screens/Cart';
import { Details } from '../screens/Details';
import { Events } from '../screens/Events';
import { Home } from '../screens/Home';
import { Tickets } from '../screens/Tickets';

const { Navigator: NavigatorStack, Screen: StackScreen } =
  createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <NavigatorStack
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <StackScreen name="Home" component={Home} />
        <StackScreen name="Events" component={Events} />
        <StackScreen name="Details" component={Details} />
        <StackScreen name="Cart" component={Cart} />
        <StackScreen name="Tickets" component={Tickets} />
      </NavigatorStack>
    </NavigationContainer>
  );
}

export default Routes;
