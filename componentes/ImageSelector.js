import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { COLORES } from '../constantes/colores';

const ImageSelector = props => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de uso de la cámara para usar esta app',
        [{ text: 'Ok' }],
      );
      return false;
    }

    return true;
  }

  const handlerTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.8,
    });

    setPickedUri(image.uri);
    props.onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri
         ? <Text>No hay imagen seleccionada...</Text>
         : <Image style={styles.image} source={{ uri: pickedUri }} />
        }
    </View>
    <Button
        title="Tomar Foto"
        onPress={handlerTakeImage}
    />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    },
    preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    },
    image: {
    width: '100%',
    height: '100%',
    }
});

export default ImageSelector;