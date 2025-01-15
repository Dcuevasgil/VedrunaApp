import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './src/paginas/LoginScreen';
import { RegisterScreen } from './src/paginas/RegisterScreen';
import { TabNavegacion } from './src/navegacion/TabNavegacion'; // Importa TabNavegacion

/* Para tipos de fuente */
import { useFonts } from 'expo-font';
import { Rajdhani_400Regular } from '@expo-google-fonts/rajdhani';
import { Asap_400Regular } from '@expo-google-fonts/asap';

const Stack = createStackNavigator();

export default function App() {
  // Cargar las fuentes
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Asap_400Regular,
  });

  if (!fontsLoaded) {
    return null; // Espera que se carguen las fuentes
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        
        {/* Esta es la pantalla principal con la barra de navegación inferior */}
        <Stack.Screen name="Home" component={TabNavegacion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}