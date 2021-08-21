import React, { useLayoutEffect, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { loaditems } from '../store/item.action';
import  Item  from '../componentes/item';

const Home = ({ navigation }) => {
 
    const dispatch = useDispatch();
    const places = useSelector(state => state.places.places);

    useEffect(() => {
        dispatch(loaditems());
    }, []);


    const renderItem = data => (
        <Item
            image={data.item.image}
            title={data.item.title}
            amount={data.item.amount}
            onSelect={() => navigation.push('Detalle', { id: data.item.id })}
        />
    )

    return (
            <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home