import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

/* Para las fuentes */
import { useFonts } from 'expo-font';
import { Rajdhani_400Regular, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Asap_400Regular } from '@expo-google-fonts/asap';

export function RegisterScreen() {

  const navigation = useNavigation();
  
  // Cargar las fuentes
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_700Bold, // Fuente en negrita
    Asap_400Regular,
  });
  
  // Usar una fuente por defecto hasta que las fuentes personalizadas se carguen
  const defaultFont = fontsLoaded ? 'Rajdhani_400Regular' : 'sans-serif'; // Fuente predeterminada

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/formulario_1.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Completar los siguientes campos:</Text>

      <TextInput style={styles.input} placeholder="Introduzca su nick" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Introduzca su nombre" placeholderTextColor="#ccc" />
      <TextInput
        style={styles.input}
        placeholder="Introduzca su primer apellido"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="Introduzca su segundo apellido"
        placeholderTextColor="#ccc"
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>FINALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    padding: 20,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    color: '#A0FF4B',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#2A2A2A',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    borderColor: '#A0FF4B',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#A0FF4B',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1F1F1F',
    fontWeight: 'bold',
  },
});