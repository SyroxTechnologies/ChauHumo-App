import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

export default function Configuracion() {
  return (
    <LinearGradient
      style={{
        backgroundColor: '#2473E9',
        flex: 1, paddingTop: StatusBar.currentHeight ? 20 + StatusBar.currentHeight : 20, // Asegúrate de manejar dispositivos sin barra de estado
        alignItems: 'center'
      }
      }
      colors={['#2473E9', '#000D21']}
    >
      <Text style={{color: 'white', fontFamily: 'Poppins', fontSize: 32, fontWeight: 600}}>
        Configuracion

      </Text>
      </LinearGradient>
  )
}