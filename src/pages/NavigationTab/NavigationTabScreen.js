import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Home/HomeView'
import Search from '../Search/SearchController';
import Map from '../Map/MapController';
import Company from '../../components/Company/CompanyController';

const Tab = createMaterialBottomTabNavigator();

export default function NavigationTabScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#62A1FF"
        inactiveColor="#FFFFFF"
        barStyle={{ backgroundColor: '#2D2E38' }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Company" component={Company} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}