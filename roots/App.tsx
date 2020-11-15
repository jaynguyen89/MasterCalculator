import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from '../providers/reducerIndex';
import InitialContent from './InitialContent';

const Stack = createStackNavigator();

const App: () => React.ReactNode = () => {
    return (
        <Provider store={ store }>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={ InitialContent } options={ { title : 'Home' } } />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
