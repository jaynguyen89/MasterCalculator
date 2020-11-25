import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import styles from '../styles';
import sharedStyles from '../../../../shared/sharedStyles';
import themes from '../../../../shared/themes';

const FunctionalButtons = (props : any) => {
    
    return (
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
    );
}

export default FunctionalButtons;
