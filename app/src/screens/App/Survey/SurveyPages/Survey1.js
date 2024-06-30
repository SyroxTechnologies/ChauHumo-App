import React from 'react'

import { Button, Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import Svg, { Path } from 'react-native-svg'
import { StatusBar } from 'expo-status-bar';

export default function Survey1({ navigation }) {
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
            <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
                <View style={{ width: '40%', height: 10, backgroundColor: 'white', borderRadius: 10 }}>
                    <View style={{width:'11%', backgroundColor: '#1C4B90', height: '100%', borderRadius: 10 }}></View>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ marginTop: 30,  width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginTop: 10,marginBottom: 40, fontFamily: 'Poppins_600SemiBold', fontSize: 34, lineHeight: 51, color: 'white', justifyContent: 'flex-start', textAlign: 'center' }}>¿Cúal es tu meta?</Text>
                    <View style={{ width: '80%', alignItems: 'center', marginTop: 20, }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Survey2")} style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 62, borderColor: 'white', height: 62, width: '100%' }}>
                            <Text style={{ fontFamily: 'Poppins_600SemiBold', color: 'white', fontSize: 20, lineHeight: 30 }}>
                                Quiero dejar de fumar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Survey2")} style={{ marginTop: 15, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 62, borderColor: 'white', height: 62, width: '100%' }}>
                            <Text style={{ fontFamily: 'Poppins_600SemiBold', color: 'white', fontSize: 20, lineHeight: 30 }}>
                                Quiero ahorrar dinero
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Survey2")} style={{ marginTop: 15, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 62, borderColor: 'white', height: 62, width: '100%' }}>
                            <Text style={{ fontFamily: 'Poppins_600SemiBold', color: 'white', fontSize: 20, lineHeight: 30 }}>
                                No estoy seguro
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </LinearGradient>
    )
}