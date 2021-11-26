import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useSelector } from 'react-redux';

import { StatusBar } from 'react-native';
import { getSettings } from '../../utils';
import Loading from '../../components/Util/Loading';
import Home from '../Home/HomeController'
import Search from '../Search/SearchController';
import Company from '../Company/CompanyController';

import UserController from '../User/UserController'
import RegisterCompanyController from '../RegisterCompany/RegisterCompanyController';
import RegisterProductController from '../RegisterProduct/RegisterProductController';
import { createStackNavigator } from '@react-navigation/stack';

import { Icon } from 'react-native-elements';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()

export default function NavigationTabScreen() {

  const [colors, setColors] = React.useState(useSelector(state => state.settings.app.colors))

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
              backgroundColor: colors.background,
            },
            headerTintColor: colors.textColor,
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
              backgroundColor: colors.background,
            },
            headerTintColor: colors.textColor,
            headerTitleStyle: {
              fontWeight: 'bold'
            },
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
              backgroundColor: colors.background,
            },
            headerTintColor: colors.textColor,
            headerTitleStyle: {
              fontWeight: 'bold'
            },
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
              backgroundColor: colors.background,
            },
            headerTintColor: colors.textColor,
            headerTitleStyle: {
              fontWeight: 'bold'
            },
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
              backgroundColor: colors.background,
            },
            headerTintColor: colors.textColor,
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }}
        />
      </Stack.Navigator >
    )
  }

  const activeColor = colors.accent
  const inactiveColor = colors.border

  return (
    <NavigationContainer
      theme={{ colors: { background: colors.background } }}
    >
      <StatusBar backgroundColor={colors.background} barStyle={
        colors.background === '#ffffff' ? 'dark-content' : 'light-content'
      } />

      <Tab.Navigator
        initialRouteName="Home"
        activeColor={colors.accent}
        inactiveColor={colors.border}
        barStyle={{ backgroundColor: colors.background }}
      >
        <Tab.Screen name="Home"
          component={HomeScreen}
          initialParams={{ settings: settings }}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name="home-outline"
                  type="ionicon"
                  color={focused ? activeColor : inactiveColor} />)
            }
          }} />
        <Tab.Screen name="Search" component={SearchScreen}
          initialParams={{ settings: settings }}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name="search"
                  type="ionicon"
                  color={focused ? activeColor : inactiveColor} />

              )
            }
          }} />
        <Tab.Screen name="Settings" component={UserController}
          initialParams={{ settings: settings }}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name="person-outline"
                  type="ionicon"
                  color={focused ? activeColor : inactiveColor} />
              )
            }
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}