import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { auth } from '../firebase';  // Importa el auth de Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';  // Función para crear un nuevo usuario
import { useFonts } from 'expo-font';
import { Rajdhani_400Regular, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Asap_400Regular } from '@expo-google-fonts/asap';

export function RegisterScreen() {
  const navigation = useNavigation();

  // Cargar las fuentes
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_700Bold,
    Asap_400Regular,
  });

  // Estado para manejar los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nick, setNick] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [secondLastName, setSecondLastName] = useState('');

  // Función para registrar un nuevo usuario
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Éxito', 'Usuario registrado exitosamente');
      navigation.navigate('Login');  // Navega a la pantalla de Login
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'El correo electrónico ya está registrado');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  if (!fontsLoaded) {
    return null; // Puedes poner un cargador aquí si es necesario
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/formulario_1.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.title}>Completar los siguientes campos:</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Introduzca su correo" 
        placeholderTextColor="#ccc" 
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Introduzca contraseña" 
        placeholderTextColor="#ccc" 
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Repita contraseña" 
        placeholderTextColor="#ccc" 
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Introduzca su nick" 
        placeholderTextColor="#ccc" 
        value={nick}
        onChangeText={setNick}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Introduzca su nombre" 
        placeholderTextColor="#ccc" 
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Introduzca su primer apellido" 
        placeholderTextColor="#ccc" 
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Introduzca su segundo apellido" 
        placeholderTextColor="#ccc" 
        value={secondLastName}
        onChangeText={setSecondLastName}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
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
    marginBottom: 5,
    flexShrink: 0,
  },
  image: {
    width: '100%',
    maxWidth: 300,
    height: 300,
    resizeMode: 'contain',
    paddingBottom: 50,
  },
  title: {
    color: '#9FC63B',
    fontFamily: 'AsapCondensed_700Bold',
    fontSize: 18,
    textAlign: 'left',
    paddingBottom: 20,
    fontWeight: 'bold',
    lineHeight: 27.5,
  },
  input: {
    backgroundColor: '#1F1F1F',
    color: '#fff',
    fontFamily: 'Rajdhani_400Regular',
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
    padding: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#A0FF4B',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#DFDFDF',
    fontWeight: 'bold',
  },
});
