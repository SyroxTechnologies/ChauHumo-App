import React, { useEffect } from 'react';

import { Button, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import Svg, { Path } from 'react-native-svg'


// Prevenir que la pantalla de carga se oculte automáticamente

const { width: viewportWidth } = Dimensions.get('window');


export default function Onboarding({navigation}) {


  return (
    <LinearGradient
      colors={['#000D21', '#2473E9']}
      start={{ x: 0.22, y: 0.42 }}
      end={{ x: 0.86, y: 0.98 }}
      style={styles.background}

    >
      <StatusBar style="light"/>
      <View style={{ height: 50, width: '100%', alignItems: 'center' }}>
        <Image source={require('../../../assets/logito.png')} style={{ resizeMode: 'contain' }} />
      </View>
      <View style={{ height: '60%', width: '85%', paddingTop: 20 }}>
        <Image source={require('../../../assets/cel.png')} style={{ resizeMode: 'contain', marginLeft: -650, height: 250, alignItems: 'center', justifyContent: 'center'}}/>
        <Text style={styles.text}>¡Trackea tus estadísticas!</Text>

      </View>
      <View style={{ width: '85%', marginLeft: 0, }}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ marginTop: 10, flexDirection: 'row', height: 62, width: '100%', backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
          <Svg width={25} height={26} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M4.16667 7.79174L10.625 12.6354C11.7362 13.4688 13.2639 13.4688 14.375 12.6354L20.8333 7.79169" stroke="#2473E9" strokeWidth={2} stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M19.7917 5.70831H5.20833C4.05774 5.70831 3.125 6.64105 3.125 7.79165V18.2083C3.125 19.3589 4.05774 20.2916 5.20833 20.2916H19.7917C20.9423 20.2916 21.875 19.3589 21.875 18.2083V7.79165C21.875 6.64105 20.9423 5.70831 19.7917 5.70831Z" stroke="#2473E9" strokeWidth={2} stroke-linecap="round" />
          </Svg>
          <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 20, color: '#2473E9', marginLeft: 10 }}>
            Continuar con Email
          </Text>
        </TouchableOpacity>
        <View style={{ width: '100%', marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: '49%', borderWidth: 2, borderColor: '#fff', height: 65, borderRadius: 50 }}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M22.5011 12.2332C22.5011 11.3699 22.4296 10.7399 22.2749 10.0865H12.2153V13.9832H18.1201C18.0011 14.9516 17.3582 16.4099 15.9296 17.3898L15.9095 17.5203L19.0902 19.935L19.3106 19.9565C21.3344 18.1249 22.5011 15.4298 22.5011 12.2332Z" fill="white" />
              <Path d="M12.2147 22.5C15.1076 22.5 17.5361 21.5666 19.31 19.9567L15.929 17.3899C15.0242 18.0082 13.8099 18.4399 12.2147 18.4399C9.38145 18.4399 6.97669 16.6083 6.11947 14.0766L5.99382 14.087L2.68656 16.5954L2.64331 16.7132C4.4052 20.1433 8.02425 22.5 12.2147 22.5Z" fill="white" />
              <Path d="M6.1201 14.0767C5.89392 13.4234 5.76301 12.7233 5.76301 12C5.76301 11.2766 5.89392 10.5767 6.1082 9.92333L6.10221 9.78413L2.75349 7.23553L2.64393 7.28661C1.91778 8.70998 1.5011 10.3083 1.5011 12C1.5011 13.6916 1.91778 15.29 2.64393 16.7133L6.1201 14.0767Z" fill="white" />
              <Path d="M12.2148 5.55998C14.2267 5.55998 15.5838 6.41164 16.3577 7.12335L19.3814 4.23C17.5244 2.53834 15.1076 1.5 12.2148 1.5C8.02425 1.5 4.4052 3.85665 2.64331 7.28662L6.10759 9.92333C6.97672 7.39166 9.38145 5.55998 12.2148 5.55998Z" fill="white" />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center', width: '49%', borderWidth: 2, borderColor: '#fff', height: 65, borderRadius: 50 }}>
            <Svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M16.7216 12.6827C16.7109 10.7162 17.593 9.23204 19.3783 8.13898C18.3794 6.69764 16.8703 5.90463 14.8778 5.74925C12.9915 5.59925 10.9299 6.85839 10.1754 6.85839C9.37834 6.85839 7.55049 5.80287 6.11583 5.80287C3.1509 5.85106 0 8.18722 0 12.9398C0 14.3437 0.255048 15.794 0.765144 17.2907C1.44527 19.2571 3.90011 24.0794 6.46122 23.999C7.80023 23.9669 8.74601 23.0399 10.4889 23.0399C12.1785 23.0399 13.0552 23.999 14.5484 23.999C17.1307 23.9615 19.3518 19.5786 20 17.6068C16.5356 15.9618 16.7216 12.7845 16.7216 12.6827ZM13.7141 3.88464C15.1647 2.14861 15.0319 0.56796 14.9894 0C13.7088 0.0750135 12.2264 0.878732 11.3815 1.86999C10.4517 2.93089 9.90438 4.24363 10.0213 5.72247C11.4081 5.82965 12.6727 5.11167 13.7141 3.88464Z" fill="white" />
            </Svg>
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: 'center', marginTop: 15, fontFamily: 'Poppins_400Regular', fontSize: 10, lineHeight: 15, color: '#a1aece' }}>
          Al continuar aceptas los términos y condiciones de ChauHumoApp y sus politicas de privacidad.
        </Text>
      </View>


    </LinearGradient>
  );
}

import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
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
  