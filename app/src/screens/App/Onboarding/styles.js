import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1,
      paddingTop: StatusBar.currentHeight ? 20 + StatusBar.currentHeight : 20, // Asegúrate de manejar dispositivos sin barra de estado
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 34,
      textAlign: 'left',
      fontFamily: 'Poppins_600SemiBold', // Asegúrate de usar el nombre de la familia de fuentes como una cadena
    },
  
  
  
  });
  