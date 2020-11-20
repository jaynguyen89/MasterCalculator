import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import { IComplexButton } from '../../models';
import styles from './styles';
import sharedStyles from '../../sharedStyles';

const ComplexButton = (props : IComplexButton) => {
    return (
        <View style={[ styles.complexBtnContainer, styles.buttonContainer ]}>
            <View style={ styles.functionalTextWrapper }>
                <Text style={ styles.shiftText }>{ props.shiftText }</Text>
                <Text style={ styles.altText }>{ props.altText }</Text>
            </View>
            <Button title={ props.mainText as string } titleStyle={ styles.txtButton } buttonStyle={ sharedStyles.buttonLarger }
                    onPress={() => console.log(props.mainText)} />
        </View>
    );
}

export default ComplexButton;
