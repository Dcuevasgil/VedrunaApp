import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import React from 'react';

/* Para las fuentes */
import { useFonts } from 'expo-font';
import { Rajdhani_400Regular, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Asap_400Regular } from '@expo-google-fonts/asap';

export function LoginScreen() {
  const navigation = useNavigation();

  // Cargar las fuentes
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_700Bold, // Fuente en negrita
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

  // Usar una fuente por defecto hasta que las fuentes personalizadas se carguen
  const defaultFont = 'Rajdhani_400Regular'; // Ya que fontsLoaded es true, podemos usar la fuente
  
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
        style={[styles.input, styles.inputCorreo, { fontFamily: defaultFont }]}
        placeholder='Introduzca su correo o nick...'
        placeholderTextColor="#aaa"
        keyboardType="email-address"  // Permite la entrada de texto o email. Especifica el tipo de teclado que debe aparecer cuando el usuario interactúa con el campo de entrada de texto. Dependiendo de la plataforma y del tipo de entrada que esperes, puedes mostrar diferentes teclados para facilitar la experiencia del usuario
      />

      {/* Campo de contraseña */}
      <TextInput
        style={[styles.input, styles.inputContraseña, { fontFamily: defaultFont }]}
        placeholder='Introduzca su contraseña...'
        placeholderTextColor="#aaa"
        secureTextEntry={true}  // Hace que sea un campo de contraseña
      />
      
      {/* Alineación del "¿Olvidaste la contraseña?" */}
      <TouchableOpacity style={styles.olvidarContenedor}>
        <Text style={[styles.olvidarContraseña, { fontFamily: defaultFont }]}>¿Olvidaste la contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.textoBoton, { fontFamily: defaultFont }]}>Log in</Text>
      </TouchableOpacity>

      {/* Espaciado + Línea horizontal + Mensaje */}
      <View style={styles.lineaContenedor}>
        <View style={styles.linea} />
        <View style={styles.registroContenedor}>
          <Text style={[styles.crearCuentaPregunta, { fontFamily: defaultFont }]}>¿No tienes cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.crearCuenta, { fontFamily: defaultFont }]}>Crear Cuenta</Text>
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
  },
  titulo: {
    fontSize: 48, // Tamaño de fuente grande
    color: '#DFDFDF', // Texto blanco
    textAlign: 'center', // Alineación centrada
    marginBottom: 30, // Separación inferior
    fontWeight: 'bold',
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
