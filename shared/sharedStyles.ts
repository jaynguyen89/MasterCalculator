import { StyleSheet } from 'react-native';
import themes from '../shared/themes';

const sharedStyles = StyleSheet.create({
    button : {
        backgroundColor : themes.day.buttonBackgroundColor,
        borderColor : themes.day.dark,
        borderWidth : 0.5,
        height : 35,
        elevation : 1
    },
    buttonLarger : {
        backgroundColor : themes.day.buttonBackgroundColor,
        borderColor : themes.day.dark,
        borderWidth : 0.5,
        height : 40,
        elevation : 1
    },
    buttonXLarge : {
        backgroundColor : themes.day.buttonBackgroundColor,
        borderColor : themes.day.dark,
        borderWidth : 0.5,
        height : 50,
        elevation : 1
    },
    buttonTall : {
        backgroundColor : themes.day.buttonBackgroundColor,
        borderColor : themes.day.dark,
        borderWidth : 0.5,
        height : 115,
        elevation : 1
    }
});

export default sharedStyles;
