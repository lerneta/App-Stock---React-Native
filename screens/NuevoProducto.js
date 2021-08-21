import React,  { useState, useEffect, useReducer, useCallback } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'; 
import Colors from '../constantes/colores';
import Input from '../componentes/input'
import { crear } from '../store/item.action';
import { useDispatch } from 'react-redux';
import ImageSelector from '../componentes/ImageSelector.js';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
  const [selectedImage, setSelectedImage] = useState('');
  const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };
  
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid,
      };
  
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
  
      return {
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues,
      };
    }
  
    return state;
  }

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      descripcion: '',
      importe: '',
      stock: ''
    },
    inputValidities: {
      descripcion: false,
      importe: false,
      stock: false
    },
    formIsValid: false,
  });
  const onHandlerImage = path => setSelectedImage(path);


  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      input: inputIdentifier,
      value: inputValue,
      isValid: inputValidity,
    });
  }, [dispatchFormState]);


  const crearproducto = async () => {
    try {
      await dispatch(crear(formState.inputValues.descripcion, formState.inputValues.importe, formState.inputValues.stock, selectedImage));
    } catch (err) {
      console.log(err.message);
    }
    navigation.goBack();
  }
    return (
      <ScrollView style={styles.container}>
    
          <Text style={styles.subtitle}>Indica los datos</Text>
          <View>
            <Input
              id="descripcion"
              label="Descripción"
              autoCapitalize="none"
              keyboardType="default"
              required
              errorText="Por favor ingrese una descripción válida"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
   <Input
              id="importe"
              label="Importe"
              autoCapitalize="none"
              keyboardType="default"
              required
              errorText="Por favor ingrese un importe válido"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
            <Input
              id="stock"
              label="Stock"
              autoCapitalize="none"
              keyboardType="default"
              required
              errorText="Por favor ingrese un stock válido"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
          
          </View>
          <ImageSelector onImage={onHandlerImage} />
          <View style={styles.footer}>
            <View style={styles.button}>
              <Button title="Crear" color={Colors.primary}  onPress={crearproducto} />
            </View>
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 18,
    },
    subtitle: {
      fontSize: 20,
      marginBottom: 18,
    },
    container: {
      width: '100%',
      maxWidth: 400,
      height: '100%',
      padding: 12,
    },
    footer: {
      marginTop: 24,
      width: '100%'
    },
    button: {
      marginBottom: 8,
      width: '100%'
    },
  })