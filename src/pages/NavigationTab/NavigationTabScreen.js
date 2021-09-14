import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { getSettings } from '../../utils';
import Loading from '../../components/Util/Loading';

import Home from '../Home/HomeController'
import Search from '../Search/SearchController';
import Map from '../Map/MapController';
import Company from '../Company/CompanyController';

import { Icon } from 'react-native-elements';

const Tab = createMaterialBottomTabNavigator();

export default function NavigationTabScreen() {

  const [settings, setSettings] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  async function getSettingsFromStorage() {
    const settings = await getSettings()
    setSettings(settings)
    setLoading(false)
  }

  React.useEffect(() => {
    getSettingsFromStorage()
  }, [])

  if (loading) { return <Loading /> }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#62A1FF"
        inactiveColor="#FFFFFF"
        barStyle={{ backgroundColor: '#2D2E38' }}
      >
        <Tab.Screen name="Home"
          component={Home}
          initialParams={{ settings: settings }}
          options={{
            tabBarIcon: () => {
              return (
                <Icon
                  name="home-outline"
                  type="ionicon"
                  color="#fff" />)
            }
          }} />
        <Tab.Screen name="Search" component={Search}
          initialParams={{ settings: settings }}
          options={{
            tabBarIcon: () => {
              return (
                <Icon
                  name="search"
                  type="ionicon"
                  color="#fff" />)
            }
          }} />
        <Tab.Screen name="Map" component={Map}
          initialParams={{ settings: settings }}
          options={{
            tabBarIcon: () => {
              return (
                <Icon
                  name="map-outline"
                  type="ionicon"
                  color="#fff" />)
            }
          }} />
        <Tab.Screen name="Company" component={Company}
          initialParams={{ settings: settings }}
          options={{
            tabBarIcon: () => {
              return (
                <Icon
                  name="work-outline"
                  type="material"
                  color="#fff" />)
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}