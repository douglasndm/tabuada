import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './Views/MainPage';
import Results from './Views/Results';

const StackNavigator = createStackNavigator();

export default function () {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={'#00bfff'} translucent={true} />

            <StackNavigator.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#00bfff',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold', textAlign: 'center', fontSize: 24 },

                }}>

                <StackNavigator.Screen
                    name="home"
                    component={MainPage}
                    options={{ title: 'Tabuada' }}
                />

                <StackNavigator.Screen
                    name="results"
                    component={Results}
                    options={{
                        title: 'Resultados',
                        headerTitleStyle: { textAlign: 'left', }
                    }}
                />

            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}
