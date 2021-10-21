import {StyleSheet} from 'react-native';

export default function SettingStyle(colors){
    return StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: colors.background,
            padding: 20,
            width: '100%',
            height: '100%',
        },
        title:{
            color: colors.textColor,
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
        }
    })
}