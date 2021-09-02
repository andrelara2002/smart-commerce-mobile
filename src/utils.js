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

export async function getUser() {
    try {
        return JSON.parse(await AsyncStorage.getItem('user'));
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
        let settings = await AsyncStorage.getItem('settings');
        if (settings === null || settings === undefined) {
            console.log('Settings not found, creating default settings');
            settings = {
                app: {
                    "theme": "dark",
                    "language": "pt_br",
                    "colors": DefaultColors["dark"]
                }
            }
        }
        console.log('Settings loaded');
        return JSON.parse(settings);
    } catch (e) {
        // Error getting data
        console.log(e);
        throw e;
    }
}

export async function setSettings(settings) {
    try {
        await AsyncStorage.setItem('settings', JSON.stringify(settings));
    }
    catch (error) {
        // Error setting data
        console.log(error);
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