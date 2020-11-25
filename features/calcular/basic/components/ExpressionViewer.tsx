import React from 'react';
import styles from '../styles';
import { Text, View } from 'react-native';
import { common } from '../../../../shared/themes';
import { Typography } from '../../../../shared/typography';

const ExpressionViewer = (props : any) => {
    
    return (
        <View style={ styles.calculationWrapper }>
            <View style={[ styles.titleWrapper, common.lightShadow ]}>
                <View style={ styles.featureLabel }>
                    <Text style={[ styles.textLabel, Typography.tinyText ]}>Basic Calculator</Text>
                </View>
                <View style={ styles.angleLabel }>
                    <Text style={[ styles.textLabel, Typography.tinyText ]}>RAD</Text>
                </View>
            </View>
        
            <View style={[ styles.expressionWrapper, common.lightShadow ]}>
                <View style={ styles.expression }>
                    <Text style={ styles.expressionText }>12345.67 x 432.1 + 9876.54</Text>
                </View>
                <View style={ styles.result }>
                    <Text style={ styles.resultText }>5 344 440.547</Text>
                </View>
            </View>
        </View>
    );
}

export default ExpressionViewer;
