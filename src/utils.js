import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationActions } from 'react-navigation'


// User
export async function getUserToken() {
    try {
        return JSON.parse(await AsyncStorage.getItem('userToken'));
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


export async function storeLocal(local) {
    try {
        return await AsyncStorage.setItem('local', JSON.stringify(local));
    } catch (e) {
        throw e;
    }
}

export async function getLocal() {
    try {
        return JSON.parse(await AsyncStorage.getItem('local'));
    } catch (e) {
        throw e;
    }
}

export async function deleteAsyncStorage() {
    try {
        return await AsyncStorage.clear();
        // return await AsyncStorage.removeItem('userToken');
    } catch (e) {
        throw e;
    }
}


// Settings

export async function setSettings(settings) {
    try {
        await AsyncStorage.setItem('settings', JSON.stringify(settings));
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}

export async function getSettings() {
    try {
        let settings = await AsyncStorage.getItem('settings');
        if (settings === null || settings === undefined) {
            settings = {
                app: {
                    "theme": "dark",
                    "language": "pt_br",
                    "colors": DefaultColors["dark"]
                }
            }
            await setSettings(settings);
            console.log("Default settings loaded")
            return settings;
        }
        else {
            console.log("Custom settings loaded")
            return JSON.parse(settings);
        }
    } catch (e) {
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