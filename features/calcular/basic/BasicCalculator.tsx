import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import styles from './styles';
import sharedStyles from '../../../shared/sharedStyles';
import { Typography } from '../../../shared/typography';
import themes, { common } from '../../../shared/themes';
import ComplexButton from '../../../shared/customs/buttons/ComplexButton';
import { THEMES } from '../../../shared/enums';

const BasicCalculator = (props : any) => {

    return (
        <SafeAreaView>
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
            
            <View style={ styles.functionWrapper }>
                <View style={ styles.functionRowWrapper }>
                    <Button title={ 'SHIFT' } titleStyle={ styles.shiftButton } buttonStyle={ sharedStyles.buttonLarger } containerStyle={ styles.functionalButton }
                            icon={ <Icon name='arrow-up' size={ 24 } type='font-awesome-5' style={ styles.icon } color={ themes.neutral.shiftColor } /> }
                            onPress={() => console.log('shift')} />
        
                    <Button title={ 'ALT' } titleStyle={ styles.altButton } buttonStyle={ sharedStyles.buttonLarger } containerStyle={ styles.functionalButton }
                            icon={ <Icon name='exchange-alt' size={ 24 } type='font-awesome-5' style={ styles.icon } color={ themes.neutral.alternateColor } /> }
                            onPress={() => console.log('alternate')} />
        
                    <Button buttonStyle={{ height : 40 }} containerStyle={ styles.functionalButton }
                            icon={ <Icon name='cogs' size={ 24 } type='font-awesome-5' style={ styles.icon } color={ themes.day.backgroundColor } /> }
                            onPress={() => console.log('settings')} />
        
                    <Button title={ 'AC' } titleStyle={ styles.clrButton } buttonStyle={ sharedStyles.buttonLarger } containerStyle={ styles.functionalButton }
                            icon={ <Icon name='trash-alt' size={ 24 } type='font-awesome-5' style={ styles.icon } color={ themes.neutral.dangerColor } /> }
                            onPress={() => console.log('clear')} />
        
                    <Button title={ '' } titleStyle={ styles.clrButton } buttonStyle={ sharedStyles.buttonLarger } containerStyle={ styles.functionalButton }
                            icon={ <Icon name='backspace' size={ 32 } type='font-awesome-5' style={ styles.icon } color={ themes.neutral.dangerColor } /> }
                            onPress={() => console.log('delete')} />
                </View>
                
                <View style={ styles.functionRowWrapper }>
                    <Button title={ '(' } titleStyle={ styles.fnTxtButton } buttonStyle={ sharedStyles.buttonLarger } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('left bracket')} />
            
                    <Button titleStyle={ styles.greenButton } buttonStyle={ sharedStyles.buttonLarger } containerStyle={ styles.functionalButton }
                            icon={ <Icon name='chevron-left' size={ 24 } type='font-awesome-5' style={ styles.icon } color={ themes.neutral.featureColor } /> }
                            onPress={() => console.log('move left')} />
            
                    <Button buttonStyle={{ height : 40 }} containerStyle={ styles.functionalButton }
                            icon={ <Icon name='history' size={ 24 } type='font-awesome-5' style={ styles.icon } color={ themes.day.backgroundColor } /> }
                            onPress={() => console.log('history')} />
            
                    <Button titleStyle={ styles.greenButton } buttonStyle={ sharedStyles.buttonLarger } containerStyle={ styles.functionalButton }
                            icon={ <Icon name='chevron-right' size={ 24 } type='font-awesome-5' style={ styles.icon } color={ themes.neutral.featureColor } /> }
                            onPress={() => console.log('move right')} />
            
                    <Button title={ ')' } titleStyle={ styles.fnTxtButton } buttonStyle={ sharedStyles.buttonLarger } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('right bracket')} />
                </View>
            </View>
    
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
            
            <View style={ styles.numPadWrapper }>
                <View style={ styles.numRowWrapper }>
                    <Button title={ '1' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('1')} />
    
                    <Button title={ '2' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('2')} />
    
                    <Button title={ '3' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('3')} />
    
                    <Button title={ '+' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('+')} />
    
                    <Button title={ '-' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('-')} />
                </View>
    
                <View style={ styles.numRowWrapper }>
                    <Button title={ '4' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('4')} />
        
                    <Button title={ '5' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('5')} />
        
                    <Button title={ '6' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('6')} />
        
                    <Button title={ 'x' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('x')} />
        
                    <Button title={ '/' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                            onPress={() => console.log('/')} />
                </View>
                
                <View style={ styles.numRowWrapper }>
                    <View style={ styles.lastRowWrapper }>
                        <View style={ styles.numRowWrapper }>
                            <Button title={ '7' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                                    onPress={() => console.log('7')} />
        
                            <Button title={ '8' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                                    onPress={() => console.log('8')} />
        
                            <Button title={ '9' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                                    onPress={() => console.log('9')} />
        
                            <Button title={ 'a/b' } titleStyle={ styles.txtButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                                    icon={ <Icon name='arrows-alt-h' size={ 18 } type='font-awesome-5' style={ styles.icon } /> }
                                    onPress={() => console.log('a/b')} />
                        </View>
    
                        <View style={ styles.numRowWrapper }>
                            <Button title={ '0' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                                    onPress={() => console.log('0')} />
        
                            <Button title={ '.' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                                    onPress={() => console.log('.')} />
        
                            <Button title={ '%' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                                    onPress={() => console.log('%')} />
        
                            <Button title={ 'Ans' } titleStyle={ styles.txtButton } buttonStyle={ sharedStyles.buttonXLarge } containerStyle={ styles.functionalButton }
                                    onPress={() => console.log('Ans')} />
                        </View>
                    </View>
                    
                    <View style={ styles.equalSignWrapper }>
                        <View style={ styles.equalRowWrapper }>
                            <Button title={ '=' } titleStyle={ styles.numButton } buttonStyle={ sharedStyles.buttonTall } containerStyle={ styles.functionalButton }
                                    onPress={() => console.log('=')} />
                        </View>
                    </View>
                </View>
            </View>
            
            <View style={ styles.footer }>
                <Text style={[ styles.footerText, Typography.secondHeader ]}>Master Calculator</Text>
            
                <View style={ styles.adsArea }>
                    <Text style={ styles.adsText }>Space for Ads</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default BasicCalculator;
