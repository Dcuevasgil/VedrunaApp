import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, AsapCondensed_400Regular } from '@expo-google-fonts/asap-condensed';

export function HomeScreen() {
  const [fontsLoaded] = useFonts({
    AsapCondensed_400Regular,
  });

  return (
    <ScrollView style={styles.contenedor}>
      {/* Encabezado */}
      <View style={styles.contenedorCabecera}>
        <Image source={require('../../../assets/ic_logo_2.png')} style={styles.logotipo} />
        <View style={styles.textoCabecera}>
          <Text style={styles.nickName}>Nick</Text>
          <Text style={styles.textoCabeceraVedruna}>VEDRUNA</Text>
        </View>
      </View>

      {/* Publicación */}
      <View style={styles.contenedorPublicacion}>
        {/* Imagen a pantalla completa con superposición de datos */}
        <Image source={require('../../../assets/Captura de pantalla_20230115_175537 1.png')} style={styles.imagenPublicada} />
        
        {/* Superposición de información del usuario */}
        <View style={styles.superposicionUsuarioImagenYTexto}>
          <Image source={require('../../../assets/foto_usuario.png')} style={styles.imagenUsuario} />
          <View style={styles.contenedorUsuarioPublicacion}>
            <Text style={styles.publicado}>Publicado por</Text>
            <Text style={styles.nombreUsuarioPublicacion}>Nombre Usuario</Text>
            <Text style={styles.tiempoPasadoPublicacion}>hace 4 días</Text>
          </View>
        </View>

        {/* Resto del contenido */}
        <Text style={styles.likes}>
          <Ionicons name="heart" size={18} color="white" /> 4 Me gusta
        </Text>
        
        <Text style={styles.titulo}>DIALOGOS SOBRE ACEITES Y NUTRICIÓN</Text>
        <Text style={styles.descripcion}>
          Sesión De Formación. De La Mano De De @Aceite_Orujo, @Malnutridos & @Juan_reverga 
          En FP VEDRUNA Sobre Mitos Y Utilidad Del Aceite De Orujo
        </Text>
        <Text style={styles.numeroComentarios}>4 comentarios.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#23272A',
  },
  contenedorCabecera: {
    flexDirection: 'row',  // Alinea el logo y el texto en fila
    alignItems: 'center',  // Alinea verticalmente los elementos
    justifyContent: 'center',  // Centra el contenedor completo horizontalmente
    paddingHorizontal: 20,  // Espaciado a los lados
    paddingVertical: 20,    // Espaciado superior e inferior
    backgroundColor: '#1a1a1a',  // Fondo de la cabecera
    width: '100%',
    zIndex: 1,
    marginTop: 0,  // Desplaza el contenedor con el logo y texto hacia abajo
  },
  textoCabecera: {
    flexDirection: 'column',  // Alinea las palabras "Nick" y "VEDRUNA" en columna
    alignItems: 'flex-start',  // Alinea "Nick" y "VEDRUNA" a la izquierda
    marginLeft: 10, // Alinea el texto pegado al logo
    marginTop: 20,
  },
  nickName: {
    fontSize: 18,  // Tamaño de fuente para "Nick"
    color: '#fff', // Color blanco
    marginBottom: 5,  // Espacio entre "Nick" y "VEDRUNA"
  },
  textoCabeceraVedruna: {
    fontSize: 28,  // Tamaño de fuente para "VEDRUNA" (más grande)
    color: '#fff', // Color blanco
    fontWeight: 'bold',  // Negrita
  },
  logotipo: {
    width: 50,
    height: 50,
    marginRight: 10,  // Espaciado entre el logo y el texto
  },
  contenedorPublicacion: {
    position: 'relative',
    marginTop: 0, 
    borderRadius: 10,
    overflow: 'hidden',
  },
  imagenPublicada: {
    width: '100%',
    height: 400,
  },
  superposicionUsuarioImagenYTexto: {  
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  imagenUsuario: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  contenedorUsuarioPublicacion: {

  },
  publicado: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'AsapCondensed_400Regular',
  },
  nombreUsuarioPublicacion: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tiempoPasadoPublicacion: {
    color: '#ccc',
    fontSize: 12,
    fontFamily: 'AsapCondensed_400Regular',
  },
  likes: {
    color: '#fff',
    marginVertical: 5,
  },
  titulo: {
    color: '#bada55',
    fontWeight: 'bold',
    fontSize: 20,
  },
  descripcion: {
    color: '#ddd',
    marginTop: 5,
  },
  numeroComentarios: {
    color: '#aaa',
    marginTop: 10,
  }
});
