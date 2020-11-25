import React from 'react';
import styles from './styles';
import { common } from '../../shared/themes';
import { Text, View } from 'react-native';
import { Typography } from '../../shared/typography';

const Advertisement = (props : any) => {
    return (
        <View style={ common.footer }>
            <Text style={[ common.footerText, Typography.secondHeader ]}>
                <Text style={ styles.adsText }>Space for Ads 1</Text>
            </Text>
        
            <View style={ styles.adsArea }>
                <Text style={ styles.adsText }>Space for Ads 2</Text>
            </View>
        </View>
    );
}

export default Advertisement;
