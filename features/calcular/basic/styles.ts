import { StyleSheet } from 'react-native';
import themes from '../../../shared/themes';
import { baseFontSize } from '../../../shared/typography';

const styles = StyleSheet.create({
    calculationWrapper : {
        padding : 0,
        flex : 21,
        borderColor : themes.day.resultBackgroundColor,
        borderStyle : 'solid',
        borderWidth : 0.75,
        borderRadius : 4,
        marginBottom : 7,
        borderBottomColor : themes.neutral.alternateColor,
        borderBottomWidth : 3
    },
    expressionWrapper : {
        flex : 89,
        flexDirection : 'column',
        backgroundColor : themes.day.backgroundColor
    },
    titleWrapper : {
        flex : 11,
        flexDirection : 'row',
        borderRadius : 4,
        backgroundColor : themes.day.resultBackgroundColor,
    },
    featureLabel : {
        flex : 7,
        flexDirection : 'column',
        paddingBottom : 2,
        borderRightColor : themes.day.expressionBackgroundColor,
        borderRightWidth : 1
    },
    angleLabel : {
        flex : 3,
        flexDirection : 'column'
    },
    textLabel : {
        color : themes.neutral.alternateColor,
        textAlign : 'center'
    },
    expression : {
        flex : 29,
        flexDirection : 'column',
        paddingTop : 2,
        paddingBottom : 2,
        paddingLeft : 10,
        backgroundColor : themes.day.expressionBackgroundColor
    },
    result : {
        flex : 11,
        flexDirection : 'column',
        paddingTop : 1,
        paddingBottom : 1,
        paddingRight : 10,
        backgroundColor : themes.day.resultBackgroundColor
    },
    expressionText : {
        color : themes.day.textColor,
        fontWeight : '300',
        fontSize : baseFontSize * 2.7
    },
    resultText : {
        color : themes.day.textColor,
        fontWeight : 'bold',
        fontSize : baseFontSize * 2.8,
        textAlign : 'right'
    },
    functionWrapper : {
        flex : 15,
        backgroundColor : themes.neutral.borderColor,
        borderStyle : 'solid',
        borderWidth : 1,
        borderRadius : 4,
        marginBottom : 7
    },
    functionRowWrapper : {
        flex: 1,
        flexDirection : 'row',
        marginTop : 2
    },
    functionalButton : {
        flex : 1,
        flexDirection : 'column',
        margin : 4
    },
    shiftButton : {
        color : themes.neutral.shiftColor,
        fontSize : baseFontSize * 1.1
    },
    altButton : {
        color : themes.neutral.alternateColor,
        fontSize : baseFontSize * 1.1
    },
    clrButton : {
        color : themes.neutral.dangerColor,
        fontSize : baseFontSize * 1.3
    },
    greenButton : {
        color : themes.neutral.featureColor
    },
    txtButton : {
        color : themes.day.shadowColor
    },
    fnTxtButton : {
        color : themes.day.shadowColor,
        fontSize : baseFontSize * 2,
        fontWeight : 'bold'
    },
    numButton : {
        color : themes.day.shadowColor,
        fontSize : baseFontSize * 2.75
    },
    icon : {
        paddingRight: 3
    },
    expressFunctionWrapper : {
        flex : 18,
        backgroundColor : themes.neutral.borderColor,
        borderStyle : 'solid',
        borderWidth : 1,
        borderRadius : 4,
        marginBottom : 7
    },
    expressRowWrapper : {
        flex : 1,
        flexDirection : 'row',
        marginTop : 2.5
    },
    numPadWrapper : {
        flex : 34,
        backgroundColor : themes.neutral.borderColor,
        borderStyle : 'solid',
        borderWidth : 1,
        borderRadius : 4,
        paddingTop : 4
    },
    numRowWrapper : {
        flexDirection : 'row',
        marginTop : 2
    },
    lastRowWrapper : {
        flex : 4,
        margin : 0,
        padding : 0
    },
    equalSignWrapper : {
        flex : 1,
        flexDirection : 'column',
        margin : 0,
        padding : 0
    },
    equalRowWrapper : {
        flexDirection : 'row',
        marginTop : 2
    }
});

export default styles;
