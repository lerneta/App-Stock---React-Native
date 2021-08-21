import React from 'react';
import Navegador from "./navegacion";
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';
import store from './store'

export default function App() {
  return (
<Provider store={store}>
<Navegador />
</Provider>

  );
}
