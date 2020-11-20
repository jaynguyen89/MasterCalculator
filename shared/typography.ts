import { StyleSheet } from 'react-native';

export const baseFontSize : number = 10;

export const Typography = StyleSheet.create({
    firstHeader : {
        fontSize : baseFontSize * 2.4,
        fontWeight : 'bold'
    },
    secondHeader : {
        fontSize : baseFontSize * 2,
        fontWeight : 'normal'
    },
    subtitle : {
        fontSize : baseFontSize * 1.7,
        fontWeight : 'normal'
    },
    tinyText : {
        fontSize : baseFontSize * 1.15,
        fontWeight : '200'
    }
});
