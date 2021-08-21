import React from "react";
import { View, Text, StyleSheet, ScrollView,  Image, Button } from "react-native";
import { useSelector } from "react-redux";
import { COLORS } from "../constantes/colores";
import { useDispatch } from 'react-redux';
import { eliminar } from '../store/item.action';

const Detalle = ({ navigation, route }) => {
  
  const placeID = route.params.id;
  const place = useSelector((state) =>
    state.places.places.find((place) => place.id === placeID)
  );
  const dispatch = useDispatch();

  const eliminarproducto = async () => {
      navigation.goBack();
    try {
      await dispatch(eliminar(route.params.id));
    } catch (err) {
      console.log(err.message);
    }
   
  }


  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Image source={{ uri: place.image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.title}</Text>
          <Text style={styles.address}>$ {place.amount}</Text>
          <Text style={styles.address}>Stock: {place.stock}</Text>
        </View>

      </View>
      <View style={styles.footer}>
            <View style={styles.button}>
              <Button title="Eliminar" color={"red"}  onPress={eliminarproducto} />
            </View>
          </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc",
  },
  location: {
    marginVertical: 20,
    width: "90%",
    maxWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    textAlign: "center",
  },

});

export default Detalle;
