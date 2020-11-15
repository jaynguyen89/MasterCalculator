import { AppRegistry } from 'react-native';
import App from './roots/App';
import { name as appName } from './roots/app.json';

AppRegistry.registerComponent(
    appName,
    () => App
);
