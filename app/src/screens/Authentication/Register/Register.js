import React from 'react'

import { Button, Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import Svg, { Path } from 'react-native-svg'
import { StatusBar } from 'expo-status-bar';

export default function Register({ navigation }) {
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
                <Image source={require('../../../assets/logito.png')} style={{ resizeMode: 'contain' }} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <View style={{ width: '90%', }}>
                    <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 34, color: 'white', justifyContent: 'flex-start' }}>Registrate para
                        usar ChauHumo!</Text>
                    <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 15, lineHeight: 22.5, color: '#fff' }}>Por favor ingresa tus datos para poder crear tu cuenta.</Text>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholderTextColor={'#83B4FF'} placeholder='Nombre'
                            style={{ fontFamily: 'Poppins_400Regular', width: '100%', height: 52, color: '#fff', borderColor: '#fff', borderWidth: 1, borderRadius: 50, fontSize: 15, paddingLeft: 20 }}
                        ></TextInput>
                        <TextInput placeholderTextColor={'#83B4FF'} placeholder='Correo electrónico'
                            style={{ fontFamily: 'Poppins_400Regular', marginTop: 10,  width: '100%', height: 52, color: '#fff', borderColor: '#fff', borderWidth: 1, borderRadius: 50, fontSize: 15, paddingLeft: 20 }}
                        ></TextInput>
                        <TextInput placeholderTextColor={'#83B4FF'} placeholder='Contraseña'
                            style={{ fontFamily: 'Poppins_400Regular', marginTop: 10, width: '100%', height: 52, color: '#fff', borderColor: '#fff', borderWidth: 1, borderRadius: 50, fontSize: 15, paddingLeft: 20 }}
                        ></TextInput>
                        <TextInput placeholderTextColor={'#83B4FF'} placeholder='Confirmar contraseña'
                            style={{ fontFamily: 'Poppins_400Regular', marginTop: 10, width: '100%', height: 52, color: '#fff', borderColor: '#fff', borderWidth: 1, borderRadius: 50, fontSize: 15, paddingLeft: 20 }}
                        ></TextInput>

                        <TouchableOpacity onPress={() => navigation.navigate("Survey")} style={{ marginTop: 20, height: 62, backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontFamily: 'Poppins_600SemiBold', fontSize: 20, lineHeight: 30, color: '#2473e9', }}>
                                Crear cuenta
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginLeft: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ color: '#fff', marginTop: 10, fontSize: 15, lineHeight: 22.5 }}>
                                ¿Ya tenés cuenta?
                            </Text>
                            <Text style={{ marginLeft: 5, color: '#fff', marginTop: 10, fontSize: 15, lineHeight: 22.5, textDecorationLine: 'underline' }}>
                                Inicia sesión
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        </LinearGradient>
    )
}