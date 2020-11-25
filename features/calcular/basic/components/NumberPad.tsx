import React from 'react';
import styles from '../styles';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import sharedStyles from '../../../../shared/sharedStyles';

const NumberPad = (props : any) => {
    
    return (
        <View style={ styles.numPadWrapper }>
            <View style={[ styles.numRowWrapper, { flex : 1 } ]}>
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
        
            <View style={[ styles.numRowWrapper, { flex : 1 } ]}>
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
        
            <View style={[ styles.numRowWrapper, { flex : 2 } ]}>
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
    );
}

export default NumberPad;
