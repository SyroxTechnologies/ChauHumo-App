import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Defs, G, Path, Rect, Svg, ClipPath, Circle } from 'react-native-svg';
import RNPickerSelect from "react-native-picker-select";
import Slider from '@react-native-community/slider';
import { useFocusEffect } from '@react-navigation/native';


export default function Contador() {
  const scrollViewRef = useRef();

  useFocusEffect(
    React.useCallback(() => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

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
      <StatusBar style="light" />
      {/*       <View style={{ height: 50, width: '90%', alignItems: 'flex-start', marginTop: 10 }}>
        <Image source={require('../../../assets/logito.png')} style={{ resizeMode: 'contain' }} />
      </View> */}
      <View style={{ height: 50, width: '95%', alignItems: 'flex-start', marginTop: 10 }}>
        <Image source={require('../../../assets/logito.png')} style={{ resizeMode: 'contain' }} />
      </View>

      <ScrollView ref={scrollViewRef}
        style={{ width: '90%', marginTop: 5, height: '100%', marginBottom: 100 }} showsVerticalScrollIndicator="false">
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 34, lineHeight: 51, color: '#fff', fontFamily: 'Poppins', fontWeight: '600' }}>Fumé</Text>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{ fontSize: 15, fontFamily: 'Poppins', color: 'white', lineHeight: 22.5, fontWeight: 500 }}>
            ¿Cuándo fumaste?
          </Text>
          <View style={{ paddingVertical: 16, paddingHorizontal: 20, borderWidth: 1, borderColor: 'white', borderRadius: 50, marginTop: 10 }}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Hoy", value: "Hoy" },
                { label: "Ayer", value: "Ayer", },
                { label: "Anteayer", value: "Anteayer" },
                { label: "Hace más de 3 días", value: "Hace más de 3 días" },
                { label: "La semana pasada", value: "La semana pasada", },

              ]}
              placeholder={{ label: "Elegí cuando fumaste", value: null }} // Aquí se define el placeholder
              style={pickerSelectStyles}
              Icon={() => {
                return <Svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.5454 1.01065L13.5234 -1.04303e-06L7.26318 6.00817L6.59548 5.36754L6.59915 5.37074L1.03748 0.0323131L-1.36956e-05 1.02841C1.53715 2.50388 5.82873 6.62312 7.26318 8C8.32928 6.97737 7.29032 7.97465 14.5454 1.01065Z" fill="white" />
                </Svg>
                  ;
              }}
            />
          </View>

        </View>

        <View style={{marginTop: 8}}>
          <Text style={{ marginTop: 25, fontSize: 15, fontFamily: 'Poppins', color: 'white', lineHeight: 22.5, fontWeight: 500 }}>
            ¿Que tan fuerte fue tu antojo?
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ marginTop: 25, fontSize: 15, fontFamily: 'Poppins', color: 'white', lineHeight: 22.5, fontWeight: 400 }}>
              0
            </Text>
            <Text style={{ marginTop: 25, fontSize: 15, fontFamily: 'Poppins', color: 'white', lineHeight: 22.5, fontWeight: 400 }}>
              10
            </Text>
          </View>
          <Slider
            style={{ width: '100%' }}
            minimumValue={0}
            maximumValue={10}
            step={1}
            minimumTrackTintColor='#fff'
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 15, fontFamily: 'Poppins', color: 'white', lineHeight: 22.5, fontWeight: 500 }}>
            ¿Cómo te sentiste?
          </Text>


          <View style={{ paddingVertical: 16, paddingHorizontal: 20, borderWidth: 1, borderColor: 'white', borderRadius: 50, marginTop: 10 }}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Hoy", value: "Hoy" },
                { label: "Ayer", value: "Ayer", },
                { label: "Anteayer", value: "Anteayer" },
                { label: "Hace más de 3 días", value: "Hace más de 3 días" },
                { label: "La semana pasada", value: "La semana pasada", },

              ]}
              placeholder={{ label: "Elegí cómo te sentiste", value: null }} // Aquí se define el placeholder
              style={pickerSelectStyles}
              Icon={() => {
                return <Svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.5454 1.01065L13.5234 -1.04303e-06L7.26318 6.00817L6.59548 5.36754L6.59915 5.37074L1.03748 0.0323131L-1.36956e-05 1.02841C1.53715 2.50388 5.82873 6.62312 7.26318 8C8.32928 6.97737 7.29032 7.97465 14.5454 1.01065Z" fill="white" />
                </Svg>
                  ;
              }}
            />
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 15, fontFamily: 'Poppins', color: 'white', lineHeight: 22.5, fontWeight: 500 }}>
            ¿Cuál fue el contexto?
          </Text>
          <View style={{ paddingVertical: 16, paddingHorizontal: 20, borderWidth: 1, borderColor: 'white', borderRadius: 50, marginTop: 10 }}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Hoy", value: "Hoy" },
                { label: "Ayer", value: "Ayer", },
                { label: "Anteayer", value: "Anteayer" },
                { label: "Hace más de 3 días", value: "Hace más de 3 días" },
                { label: "La semana pasada", value: "La semana pasada", },

              ]}
              placeholder={{ label: "Elegí cuál fue el contexto", value: null }} // Aquí se define el placeholder
              style={pickerSelectStyles}
              Icon={() => {
                return <Svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.5454 1.01065L13.5234 -1.04303e-06L7.26318 6.00817L6.59548 5.36754L6.59915 5.37074L1.03748 0.0323131L-1.36956e-05 1.02841C1.53715 2.50388 5.82873 6.62312 7.26318 8C8.32928 6.97737 7.29032 7.97465 14.5454 1.01065Z" fill="white" />
                </Svg>
                  ;
              }}
            />
          </View>
        </View>

        <TouchableOpacity style={{ width: '100%', height: 62, backgroundColor: 'white', borderRadius: 50, marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{
            fontFamily: 'Poppins', fontSize: 20, lineHeight: 30, fontWeight: 600, color: '#2473e9'
          }}>
            Siguiente
          </Text>
        </TouchableOpacity>
      </ScrollView>

    </LinearGradient>
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: 22.5,
    alignItems: 'center'
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 10,
    right: 15,
  },
});