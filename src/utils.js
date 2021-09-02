import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationActions } from 'react-navigation'


// User
export async function getUserToken() {
    try {
        return await AsyncStorage.getItem('userToken');
    } catch (e) {
        throw e;
    }
}

export async function storeUserToken(userToken) {
    try {
        return await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
    } catch (e) {
        throw e;
    }
}

export async function storeUser(userToken) {
    try {
        return await AsyncStorage.setItem('user', JSON.stringify(userToken));
    } catch (e) {
        throw e;
    }
}

export async function deleteUser() {
    try {
        return await AsyncStorage.removeItem('userToken');
    } catch (e) {
        throw e;
    }
}


// Settings

export async function getSettings() {
    try {
        return await AsyncStorage.getItem('settings');
    } catch (e) {
        console.log(e);
        throw e;
    }
}


// NavigationService

let navigator;

export function setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
}

export function navigate(routeName, params) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        }),
    );
}