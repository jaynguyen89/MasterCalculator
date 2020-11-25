import React from 'react';
import { SafeAreaView } from 'react-native';
import ExpressionViewer from './components/ExpressionViewer';
import FunctionalButtons from './components/FunctionalButtons';
import MathOperationButtons from './components/MathOperationButtons';
import NumberPad from './components/NumberPad';
import Advertisement from '../../ads/Advertisement';

const BasicCalculator = (props : any) => {

    return (
        <SafeAreaView style={{flex : 1}}>
            <ExpressionViewer />
            <FunctionalButtons />
            <MathOperationButtons />
            <NumberPad />
            <Advertisement />
        </SafeAreaView>
    );
}

export default BasicCalculator;
