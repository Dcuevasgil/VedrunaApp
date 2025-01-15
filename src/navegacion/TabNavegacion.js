import { View, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Esta dependencia sirve para crear la barra de iconos inferior
import { Ionicons } from "@expo/vector-icons"; // Para que salgan los iconos de la barra de navegacion inferior
import React from 'react';
import { HomeScreen, SettingsScreen } from "../paginas/tabs";
import { AddScreen } from "../paginas/tabs/AddScreen";

export function TabNavegacion() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#282828" },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#aaa",
      }}
    >
      <Tab.Screen
        name="Publicaciones"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}