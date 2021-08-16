import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    StyleSheet,
} from 'react-native';

const Detalle = () => {


    return (
    <View style={styles.gridItem}>
    </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 10,
    height: 150,
    },
    container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    },
    title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    textAlign: 'right',
    }
});

export default Detalle;