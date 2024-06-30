import React from 'react'

import { Button, Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import Svg, { Path } from 'react-native-svg'
import { StatusBar } from 'expo-status-bar';

export default function Survey({ navigation }) {
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
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ marginTop: 100, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', width: '45%', borderRadius: 30, height: 30, borderWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                        <Svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M13.9167 7.00001C13.9167 10.5438 11.0438 13.4167 7.5 13.4167C3.95618 13.4167 1.08334 10.5438 1.08334 7.00001C1.08334 3.45618 3.95618 0.583344 7.5 0.583344C11.0438 0.583344 13.9167 3.45618 13.9167 7.00001ZM2.25399 7.00001C2.25399 9.89731 4.60271 12.246 7.5 12.246C10.3973 12.246 12.746 9.89731 12.746 7.00001C12.746 4.10272 10.3973 1.75399 7.5 1.75399C4.60271 1.75399 2.25399 4.10272 2.25399 7.00001Z" fill="white" />
                            <Path d="M7.5 2.91666C7.17782 2.91666 6.91666 3.17782 6.91666 3.49999V7.27223C6.91666 7.27223 6.91666 7.42431 6.99057 7.5387C7.04004 7.63571 7.11716 7.72 7.21848 7.77851L9.91336 9.33443C10.1924 9.49549 10.5491 9.39988 10.7102 9.12087C10.8713 8.84187 10.7757 8.4851 10.4967 8.32404L8.08333 6.93069V3.49999C8.08333 3.17783 7.82217 2.91666 7.5 2.91666Z" fill="white" />
                        </Svg>
                        <Text style={{ fontSize: 13, color: 'white', lineHeight: 19.5, paddingHorizontal: 5, }}>
                            Menos de 1 minuto
                        </Text>
                    </View>
                    <Text style={{ marginTop: 10, fontFamily: 'Poppins_600SemiBold', fontSize: 34, lineHeight: 51, color: 'white', justifyContent: 'flex-start', textAlign: 'center' }}>Vamos a crear tu plan personalizado</Text>
                    <Text style={{ textAlign: 'center', marginTop: 15, fontFamily: 'Poppins_400Regular', fontSize: 15, lineHeight: 22.5, color: '#fff' }}>Para eso necesitamos conocer más{'\n'}acerca de tu hábito.</Text>

                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ width: '90%', marginBottom: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Survey1")} style={{ width: '100%', marginTop: 20, height: 62, backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', fontFamily: 'Poppins_600SemiBold', fontSize: 20, lineHeight: 30, color: '#2473e9', }}>
                                Empezar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </LinearGradient>
    )
}