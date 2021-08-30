import AsyncStorage from '@react-native-async-storage/async-storage';

import DefaultColors from '../assets/colors/DefaultColors';

export default class Settings {

    constructor() {
        settings = {
            app: {
                "theme": "dark",
                "language": "pt_br",
                "colors": DefaultColors["dark"]
            },
            user: {
                "username": "",
                "userlevel": "",
                "token": "",
            }
        } || AsyncStorage.getItem('settings')

        AsyncStorage.setItem('settings', JSON.stringify(settings));
    }

    getSettings = async () => {
        response = {}

        try {
            const value = await AsyncStorage.getItem('settings');
            if (value !== null) {
                // We have data!!
                console.log(JSON.parse(value));
                response = JSON.parse(value)
            }
        }
        catch (error) {
            // Error retrieving data
            console.log(error);
        }

        return response
    }

    setSettings = async (settings) => {
        try {
            await AsyncStorage.setItem('settings', JSON.stringify(settings));
        }
        catch (error) {
            // Error retrieving data
            console.log(error);
        }
    }
}