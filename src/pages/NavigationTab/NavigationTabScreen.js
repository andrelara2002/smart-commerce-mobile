import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { getSettings } from '../../utils';
import Loading from '../../components/Util/Loading';
import Home from '../Home/HomeController'
import Search from '../Search/SearchController';
import Map from '../Map/MapController';
import Company from '../Company/CompanyController';
import CompanyCardsController from '../../CompanyCards/CompanyCardsController';
import SignUpController from '../SignUp/SiginUpController';
import RegisterCompanyController from '../RegisterCompany/RegisterCompanyController';
import RegisterProductController from '../RegisterProduct/RegisterProductController';
import RegisterProductSuccess from '../RegisterProduct/RegisterProductSuccess';
import RegisterCompanySuccess from '../RegisterCompany/RegisterCompanySuccess';
import { createStackNavigator } from '@react-navigation/stack';

import { Icon } from 'react-native-elements';
import LoginStyles from '../Login/LoginStyles';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()

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


  function HomeScreen() {
    return (
      <Stack.Navigator initialRouteName="Home2">
        <Stack.Screen
          name="Home2"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Company"
          component={Company}
          options={{
            headerShown: true,
            title: 'Detalhes da empresa',
            headerStyle: {
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              backgroundColor: '#22252e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }}
        />

        <Stack.Screen
          name="RegisterCompany"
          component={RegisterCompanyController}
          options={{
            headerShown: true,
            title: 'Adicionar Local',
            headerStyle: {
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              backgroundColor: '#22252e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }}
        />
        <Stack.Screen
          name="RegisterCompanySuccess"
          component={RegisterCompanySuccess}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterProduct"
          component={RegisterProductController}
          options={{
            headerShown: true,
            title: 'Adicionar Produto',
            headerStyle: {
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              backgroundColor: '#22252e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }}
        />
        <Stack.Screen
          name="RegisterProductSuccess"
          component={RegisterProductSuccess}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    )
  }

  function SearchScreen() {
    return (
      <Stack.Navigator initialRouteName="Search2">
        <Stack.Screen
          name="Search2"
          component={Search}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Company"
          component={Company}
          options={{
            headerShown: true,
            title: 'Detalhes da empresa',
            headerStyle: {
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              backgroundColor: '#22252e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }}
        />

      </Stack.Navigator >
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#62A1FF"
        inactiveColor="#FFFFFF"
        barStyle={{ backgroundColor: '#2D2E38' }}
      >
        <Tab.Screen name="Home"
          component={HomeScreen}
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
        <Tab.Screen name="Search" component={SearchScreen}
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}