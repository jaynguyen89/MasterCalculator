import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from '../providers/reducerIndex';
import BasicCalculator from '../features/calcular/basic/BasicCalculator';
import { StatusBar } from 'react-native';

//Add debugger: adb reverse tcp:9090 tcp:9090
import('./debugger').then(() => console.log('Debugger is running.'));

const Stack = createStackNavigator();

const App: () => React.ReactNode = () => {
    React.useEffect(() => { StatusBar.setHidden(true); }, []);
    
    return (
        <Provider store={ store }>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={ BasicCalculator } options={{ headerShown : false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
