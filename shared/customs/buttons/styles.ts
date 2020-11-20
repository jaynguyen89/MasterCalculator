import { StyleSheet } from 'react-native';
import themes from '../../../shared/themes';
import { baseFontSize } from '../../typography';

const styles = StyleSheet.create({
    complexBtnContainer : {
        margin : 0,
        padding : 0
    },
    buttonContainer : {
        flex : 1,
        flexDirection : 'column',
        margin : 4
    },
    functionalTextWrapper : {
        height : 15,
        borderRadius : 3,
        flexDirection : 'row',
        padding : 1,
        backgroundColor : themes.day.buttonBackgroundColor
    },
    shiftText : {
        flex : 1,
        flexDirection : 'column',
        fontSize : baseFontSize,
        textAlignVertical : 'center',
        lineHeight : 13,
        marginLeft : 4,
        color : themes.neutral.shiftColor
    },
    altText : {
        flex : 1,
        flexDirection : 'column',
        fontSize : baseFontSize * 1.2,
        lineHeight : 13,
        textAlign : 'right',
        marginRight : 4,
        color : themes.neutral.alternateColor
    },
    txtButton : {
        color : themes.day.shadowColor
    },
});

export default styles;
