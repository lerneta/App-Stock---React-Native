import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; 
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import  { Ionicons } from '@expo/vector-icons'; 

import Principal from '../principal';
import Usuario from '../usuario';

const TabStack = createBottomTabNavigator();

const TabNavigator = () => {
return (
<TabStack.Navigator 
    initialRouteName="Principal" 
    tabBarOptions={{
        showLabel: false,
        style: {
        ...styles.tabBar,
        ...styles.shadow,
        }
    }}
    >

<TabStack.Screen 
name="Principal" 
component={Principal}
options={{
    tabBarIcon: ({focused}) => (<View style={styles.item}>
        <Ionicons name="md-home"  color="black" size={24}/>
        <Text>Principal</Text>
    </View>)
}}

/>
<TabStack.Screen name="Usuario" component={Usuario} options={{
    tabBarIcon: ({focused}) => (<View style={styles.item}>
        <Ionicons name="md-home"  color="black" size={24}/>
        <Text>Usuario</Text>
    </View>)
}}/>
    </TabStack.Navigator>
)
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 300,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 70,
    },
    shadow: {
        shadowColor: '#7f6df0',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});
export default TabNavigator;
