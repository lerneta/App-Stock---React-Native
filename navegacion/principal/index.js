import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/Home';
import Detalle from '../../screens/Detalle';

import Colors from '../../constantes/colores';

const principalnavegador = createStackNavigator();

const Principal = () => (
    <principalnavegador.Navigator
    initialRouteName="Principal"
    screenOptions={{
        headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }}
    >
    <principalnavegador.Screen
    name="Principal"
    component={Home}
    options={{ title: 'Mis Productos' }}
    />
    <principalnavegador.Screen
    name="Detalle"
    component={Detalle}
    options={({ route }) => ({ title: route.params.name })}
    />

    </principalnavegador.Navigator>
);

export default Principal;