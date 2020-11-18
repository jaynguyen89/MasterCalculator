import palette from './palette';

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
        shiftColor : palette.orange,
        featureColor : palette.green,
        dangerColor : palette.red
    }
}

export default themes;
