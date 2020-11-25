import { StyleSheet } from 'react-native';
import palette from './palette';
import { baseFontSize } from './typography';

interface Theme {
    [key : string] : {
        [key : string] : string
    }
}

const themes : Theme = {
    day : {
        backgroundColor : palette.white,
        expressionBackgroundColor : palette.gray,
        resultBackgroundColor : palette.dark_gray,
        buttonBackgroundColor : palette.gray,
        textColor : palette.black,
        shadowColor : palette.dark
    },
    night : {
        backgroundColor : palette.black,
        expressionBackgroundColor : palette.light_black,
        resultBackgroundColor : palette.dark,
        buttonBackgroundColor : palette.dark,
        textColor : palette.white,
        shadowColor : palette.gray
    },
    neutral : {
        borderColor : palette.dark_gray,
        alternateColor : palette.blue,
        alternateLighter : palette.light_blue,
        alternate : palette.alt_blue,
        shiftColor : palette.orange,
        featureColor : palette.green,
        dangerColor : palette.red,
        warningColor : palette.pink
    }
}

export default themes;

export const common = StyleSheet.create({
    lightShadow : {
        shadowColor : '#000',
        shadowOffset : {
            width : 0, height : 1
        },
        shadowOpacity : 0.8,
        shadowRadius : 2.22,
        elevation : 3
    },
    darkShadow : {
        shadowColor : '#000',
        shadowOffset : {
            width : 0, height : 2
        },
        shadowOpacity : 0.8,
        shadowRadius : 3.84,
        elevation : 5
    },
    footer : {
        flex : 12,
        flexDirection : 'column',
        paddingTop : 3
    },
    footerText : {
        textAlign : 'center',
        backgroundColor : themes.neutral.alternateColor,
        color : themes.neutral.alternateLighter,
        fontSize : baseFontSize * 2.5,
        paddingBottom : 3,
        borderTopLeftRadius : 4,
        borderTopRightRadius : 4
    }
});
