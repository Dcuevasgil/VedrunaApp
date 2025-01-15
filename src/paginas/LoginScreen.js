import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { auth } from '../firebase'; // Importa el auth de Firebase
import { signInWithEmailAndPassword } from 'firebase/auth'; // Función para iniciar sesión
import { useFonts } from 'expo-font';
import { Rajdhani_400Regular, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Asap_400Regular, Asap_700Bold } from '@expo-google-fonts/asap';

export function LoginScreen() {
  const navigation = useNavigation();

  // Estado para manejar los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Cargar las fuentes
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_700Bold,
    Asap_400Regular,
  });

  // Si las fuentes aún no están cargadas, mostrar un indicador de carga
  if(!fontsLoaded) {
    return (
      <View style={styles.loadingFontsContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  // Función para el inicio de sesión
  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Por favor, ingrese su correo y contraseña');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Éxito', 'Bienvenido');
      navigation.navigate('Home'); // Navega a la pantalla Home si el login es exitoso
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'No se encontró una cuenta con ese correo');
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert('Error', 'La contraseña es incorrecta');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View style={styles.contenedor}>
      <Image 
        source={require('../../assets/ic_logo_1.png')}
        style={styles.logo}
        resizeMode='contain'
      />
      <Text style={[styles.titulo, { fontFamily: 'Asap_400Regular' }]}>VEDRUNA EDUCACIÓN</Text>

      {/* Campo de email o nickname */}
      <TextInput
        style={[styles.input, styles.inputCorreo, { fontFamily: 'Rajdhani_400Regular' }]}
        placeholder='Introduzca su correo o nick...'
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo de contraseña */}
      <TextInput
        style={[styles.input, styles.inputContraseña, { fontFamily: 'Rajdhani_400Regular' }]}
        placeholder='Introduzca su contraseña...'
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      
      {/* Alineación del "¿Olvidaste la contraseña?" */}
      <TouchableOpacity style={styles.olvidarContenedor}>
        <Text style={[styles.olvidarContraseña, { fontFamily: 'Rajdhani_400Regular' }]}>¿Olvidaste la contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={handleLogin}>
        <Text style={[styles.textoBoton, { fontFamily: 'Rajdhani_400Regular' }]}>Log in</Text>
      </TouchableOpacity>

      {/* Espaciado + Línea horizontal + Mensaje */}
      <View style={styles.lineaContenedor}>
        <View style={styles.linea} />
        <View style={styles.registroContenedor}>
          <Text style={[styles.crearCuentaPregunta, { fontFamily: 'Rajdhani_400Regular' }]}>¿No tienes cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.crearCuenta, { fontFamily: 'Rajdhani_400Regular' }]}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#23272A', // Color de fondo oscuro
    justifyContent: 'center', // Centrar los elementos verticalmente
    padding: 20, // Espaciado interno
  },
  loadingFontsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23272A',
  },
  logo: {
    width: 200, // Ancho del logo
    height: 200, // Alto del logo
    alignSelf: 'center', // Centrar horizontalmente
    marginBottom: 20, // Separación inferior
    marginTop: 50, // Añadir un margen superior para mover la imagen hacia abajo
  },
  titulo: {
    fontSize: 48, // Tamaño de fuente grande
    color: '#DFDFDF', // Texto blanco
    textAlign: 'center', // Alineación centrada
    marginBottom: 30, // Separación inferior
    fontWeight: 'bold',
    fontFamily: 'Asap_700Bold'
  },
  input: {
    backgroundColor: '#323639', // Fondo gris oscuro
    color: '#868686', // Texto gris
    padding: 10, // Espaciado interno
    borderRadius: 8, // Bordes redondeados
    marginBottom: 15, // Separación inferior
  },
  inputCorreo: {
    width: '85%', // El 85% del ancho de la pantalla
    alignSelf: 'center', // Centrar el campo de texto horizontalmente
  },
  inputContraseña: {
    width: '85%', // El 85% del ancho de la pantalla
    alignSelf: 'center', // Centrar el campo de texto horizontalmente
  },
  olvidarContenedor: {
    width: '85%', // Aseguramos que tenga el mismo ancho que los inputs
    alignSelf: 'center', // Centrar el contenedor horizontalmente
    marginBottom: 30, // Separación inferior
  },
  olvidarContraseña: {
    color: '#9FC63B', // Verde claro
    textAlign: 'right', // Alineación a la derecha
  },
  boton: {
    backgroundColor: '#9FC63B', // Fondo verde
    padding: 15, // Espaciado interno
    borderRadius: 8, // Bordes redondeados
    alignItems: 'center', // Centrar contenido
    alignSelf: 'center', // Centrar el botón horizontalmente
    width: '80%', // Ocupa el 80% del ancho de la pantalla
    marginBottom: 20, // Separación inferior
  },
  textoBoton: {
    color: '#23272A', // Texto oscuro
    fontSize: 16, // Tamaño de fuente mediano
    fontWeight: '600',
  },
  lineaContenedor: {
    marginTop: 20, // 1 cm de separación (aproximado)
    alignItems: 'center', // Centrar elementos en el eje horizontal
    flex: 1,
    justifyContent: 'flex-end', // Mueve la línea al final
  },
  linea: {
    height: 2, // Ancho vertical de la línea
    backgroundColor: '#323639', // Color de la línea
    width: '100%', // Ocupa todo el ancho horizontal de la pantalla
    marginBottom: 10, // Separación inferior
  },
  registroContenedor: {
    flexDirection: 'row', // Alineación horizontal
    justifyContent: 'center', // Centrado de los elementos dentro del contenedor
    alignItems: 'center', // Alineación vertical centrada
    marginBottom: 20,
  },
  crearCuentaPregunta: {
    color: '#DFDFDF', // Gris claro
    fontSize: 14, // Tamaño de fuente ajustado
  },
  crearCuenta: {
    color: '#9FC63B', // Verde claro
    fontSize: 14, // Tamaño de fuente ajustado
  },
});
