import React from 'react'

import { Button, Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import Svg, { Path } from 'react-native-svg'
import { StatusBar } from 'expo-status-bar';

export default function Survey10({ navigation }) {
    return (
        <LinearGradient
            colors={['#2473E9', '#000D21']}
            start={{ x: 0.7, y: 0.3 }}
            end={{ x: 0.1, y: 1 }}
            style={{
                flex: 1, paddingTop: StatusBar.currentHeight ? 20 + StatusBar.currentHeight : 20, // Asegúrate de manejar dispositivos sin barra de estado
            }}
        >
            <View style={{ height: 50, width: '100%', alignItems: 'center' }}>
                <Image source={require('../../../../assets/logito.png')} style={{ resizeMode: 'contain' }} />
            </View>

            <View style={{ flex: 1, justifyContent: 'space-between', marginTop: 30 }}>
                <View style={{ marginTop: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginTop: 10, marginBottom: 40, fontFamily: 'Poppins_600SemiBold', fontSize: 34, lineHeight: 51, color: 'white', justifyContent: 'flex-start', textAlign: 'center' }}>El promedio anual que gastas por fumar es:</Text>
                    <View style={{ width: '80%', alignItems: 'center', marginTop: 20, }}>
                        <View style={{
                            backgroundColor: 'red',     // Sombra en iOS
                            shadowColor: '#FF0000',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.53,
                            shadowRadius: 27.1,
                            elevation: 13, paddingVertical: 6, borderRadius: 100, paddingHorizontal: 44
                        }}>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 40, lineHeight: 60, fontWeight: 600, color: '#fff' }}>
                                $1.100
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Survey9")} style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 62, borderColor: 'white', height: 62, width: '100%', marginTop: 90 }}>
                            <Text style={{ fontFamily: 'Poppins_600SemiBold', color: 'white', fontSize: 20, lineHeight: 30 }}>
                                Continuar
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        </LinearGradient>
    )
}