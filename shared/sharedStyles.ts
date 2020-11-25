import { StyleSheet } from 'react-native';
import themes from '../shared/themes';
import { BASE_HEIGHT } from './typography';

const sharedStyles = StyleSheet.create({
    button : {
        backgroundColor : themes.day.buttonBackgroundColor,
        borderColor : themes.day.dark,
        borderWidth : 0.5,
        height : 1.75 * BASE_HEIGHT,
        elevation : 1
    },
    buttonLarger : {
        backgroundColor : themes.day.buttonBackgroundColor,
        borderColor : themes.day.dark,
        borderWidth : 0.5,
        height : 2 * BASE_HEIGHT,
        elevation : 1
    },
    buttonXLarge : {
        backgroundColor : themes.day.buttonBackgroundColor,
        borderColor : themes.day.dark,
        borderWidth : 0.5,
        height : 2.5 * BASE_HEIGHT,
        elevation : 1
    },
    buttonTall : {
        backgroundColor : themes.day.buttonBackgroundColor,
        borderColor : themes.day.dark,
        borderWidth : 0.5,
        height : 5.5 * BASE_HEIGHT,
        elevation : 1
    }
});

export default sharedStyles;
