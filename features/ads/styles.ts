import themes from '../../shared/themes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    adsArea : {
        flex : 1,
        flexDirection : 'column'
    },
    adsText : {
        width : '100%',
        textAlign : 'center',
        backgroundColor : themes.neutral.warningColor
    }
});

export default styles;
