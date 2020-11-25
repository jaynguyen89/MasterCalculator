import React from 'react';
import { View } from 'react-native';
import ComplexButton from '../../../../shared/customs/buttons/ComplexButton';

import styles from '../styles';
import { THEMES } from '../../../../shared/enums';

const MathOperationButtons = (props : any) => {
    
    return (
        <View style={ styles.expressFunctionWrapper }>
            <View style={ styles.expressRowWrapper }>
                <ComplexButton shiftText='M+' altText='M-' mainText='M' isDisabled={ false } theme={ THEMES.DAY } />
            
                <ComplexButton shiftText='M1+' altText='M1-' mainText='M1' isDisabled={ false } theme={ THEMES.DAY } />
            
                <ComplexButton shiftText='M2+' altText='M2-' mainText='M2' isDisabled={ false } theme={ THEMES.DAY } />
            
                <ComplexButton shiftText='|x|' altText='-x' mainText='x!' isDisabled={ false } theme={ THEMES.DAY } />
            
                <ComplexButton shiftText='x^2' altText='x^3' mainText='1/x' isDisabled={ false } theme={ THEMES.DAY } />
            </View>
        
            <View style={ styles.expressRowWrapper }>
                <ComplexButton shiftText='x^e' altText='e^x' mainText='e' isDisabled={ false } theme={ THEMES.DAY } />
            
                <ComplexButton shiftText='x^pi' altText='pi^x' mainText='pi' isDisabled={ false } theme={ THEMES.DAY } />
            
                <ComplexButton shiftText='Ln' altText=';' mainText='Log' isDisabled={ false } theme={ THEMES.DAY } />
            
                <ComplexButton shiftText="'" altText='"' mainText='o' isDisabled={ false } theme={ THEMES.DAY } />
            
                <ComplexButton shiftText='e^pi' altText='pi^e' mainText='Round' isDisabled={ false } theme={ THEMES.DAY } />
            </View>
        </View>
    );
}

export default MathOperationButtons;
