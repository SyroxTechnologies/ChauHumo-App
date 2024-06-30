import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions';
import { Defs, G, Path, Rect, Svg, ClipPath } from 'react-native-svg';

export default function Dashboard() {

  const dispatch = useDispatch()
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
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={{ height: 50, width: '90%', alignItems: 'flex-start', marginTop: 10 }}>
          <Image source={require('../../../assets/logito.png')} style={{ resizeMode: 'contain' }} />
        </View>
        {/*       <View style={{ width: '90%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'white', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
          <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M5.20833 21.875C5.20833 17.8479 8.47292 14.5833 12.5 14.5833C16.5271 14.5833 19.7917 17.8479 19.7917 21.875M16.6667 7.29167C16.6667 9.59285 14.8011 11.4583 12.5 11.4583C10.1988 11.4583 8.33333 9.59285 8.33333 7.29167C8.33333 4.99048 10.1988 3.125 12.5 3.125C14.8011 3.125 16.6667 4.99048 16.6667 7.29167Z" stroke="#2473E9" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
          </Svg>

        </TouchableOpacity>
        <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
          <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M9.37703 17.7083H5.83996C4.52909 17.7083 3.87366 17.7083 3.73576 17.6066C3.58083 17.4922 3.54298 17.4247 3.5262 17.2329C3.51127 17.0622 3.91298 16.4048 4.71641 15.0902C5.54595 13.7328 6.25032 11.7565 6.25032 8.95833C6.25032 7.41124 6.9088 5.92751 8.08089 4.83354C9.253 3.73958 10.8427 3.125 12.5003 3.125C14.1579 3.125 15.7476 3.73958 16.9197 4.83354C18.0919 5.92751 18.7503 7.41124 18.7503 8.95833C18.7503 11.7565 19.4547 13.7328 20.2843 15.0902C21.0876 16.4048 21.4894 17.0622 21.4745 17.2329C21.4577 17.4247 21.4198 17.4922 21.2649 17.6066C21.127 17.7083 20.4716 17.7083 19.1607 17.7083H15.6253M9.37703 17.7083L9.37532 18.75C9.37532 20.4759 10.7745 21.875 12.5003 21.875C14.2262 21.875 15.6253 20.4759 15.6253 18.75V17.7083M9.37703 17.7083H15.6253" stroke="#2473E9" strokeWidth={2} stroke-linecap="round" stroke-linejoin="round" />
          </Svg>
        </TouchableOpacity>

      </View> */}
        <View style={{ width: '90%', marginTop: 20 }}>
          <Text style={{ fontSize: 15, lineHeight: 22.5, fontFamily: 'Poppins_400Regular', color: 'white' }}>Tu actividad diaria</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 34, lineHeight: 51, color: '#fff', fontFamily: 'Poppins', fontWeight: '600' }}>Hola, Sofia</Text>
            <Image style={{ height: 28, width: 28, marginLeft: 5 }} source={require('../../../assets/emoji.png')} />
          </View>
        </View>
        <View style={{ width: '90%', marginTop: 20, flexDirection: 'row', }}>
          <TouchableOpacity style={{ height: 74, width: 74, borderRadius: 15, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <Svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <G clip-path="url(#clip0_58_160)">
                <Path d="M37.7194 29.0558L32.8496 13.8379C31.7155 10.2935 27.8845 7.34044 24.2072 9.37849C23.6125 9.70809 23.1046 10.1359 22.6941 10.6343L21.5829 9.87048V2.38999C21.5829 1.9144 21.1976 1.52905 20.722 1.52905H17.2782C16.8026 1.52905 16.4172 1.9144 16.4172 2.38999V9.87048L15.306 10.6343C14.8955 10.1359 14.3876 9.70809 13.7929 9.37849C10.1559 7.36293 6.30094 10.2425 5.15055 13.8378L0.280921 29.0558C-1.19714 33.6751 3.4249 37.8937 7.88833 36.0109L13.3208 33.7191C15.2371 32.9108 16.4753 31.0445 16.4753 28.9647V16.0994L17.5096 15.3882C18.4013 14.7752 19.5992 14.7751 20.4909 15.3883L21.5252 16.0995V28.9648C21.5252 31.0445 22.7634 32.9108 24.6796 33.7192L30.1121 36.0109C34.5808 37.8964 39.1955 33.6691 37.7194 29.0558ZM14.7535 28.9648H14.7534C14.7534 30.3506 13.9284 31.594 12.6515 32.1327L7.21902 34.4244C4.10741 35.737 0.892482 32.7944 1.92108 29.5807L6.79086 14.3626C7.60496 11.8177 10.326 9.42569 12.9585 10.8846C14.0126 11.4689 14.6998 12.4819 14.7535 13.944V28.9648ZM21.523 14.0084C19.9641 12.9373 18.0296 12.9398 16.4776 14.0082C16.4612 13.381 16.408 12.8012 16.1636 12.1346L17.7662 11.0329C17.9998 10.8723 18.1393 10.6069 18.1393 10.3234V3.251H19.8612V10.3234C19.8612 10.607 20.0008 10.8723 20.2344 11.033L21.837 12.1347C21.599 12.7822 21.54 13.357 21.523 14.0084ZM30.7814 34.4244L25.3488 32.1327C24.072 31.594 23.247 30.3506 23.247 28.9647V13.9496C23.2995 12.496 23.9749 11.4759 25.042 10.8845C27.6711 9.42725 30.3937 11.812 31.2097 14.3626L36.0794 29.5806C37.109 32.7981 33.8892 35.7357 30.7814 34.4244Z" fill="#2473E9" />
              </G>
              <Defs>
                <ClipPath id="clip0_58_160">
                  <Rect width="38" height="38" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 74, width: 74, borderRadius: 15, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
            <Svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M19.5 9.5V28.5" stroke="#2473E9" stroke-width="3" stroke-linecap="round" />
              <Path d="M24.25 15.0416C24.25 12.8555 22.1234 11.0833 19.5 11.0833C16.8766 11.0833 14.75 12.8555 14.75 15.0416C14.75 17.2277 16.8766 18.9999 19.5 18.9999C22.1234 18.9999 24.25 20.7721 24.25 22.9583C24.25 25.1444 22.1234 26.9166 19.5 26.9166C16.8766 26.9166 14.75 25.1444 14.75 22.9583" stroke="#2473E9" strokeWidth="2" stroke-linecap="round" />
              <Path d="M11.5833 5.28496C13.9122 3.93778 16.6161 3.16675 19.5 3.16675C28.2444 3.16675 35.3333 10.2556 35.3333 19.0001C35.3333 27.7445 28.2444 34.8334 19.5 34.8334C10.7555 34.8334 3.66666 27.7445 3.66666 19.0001C3.66666 16.1162 4.4377 13.4123 5.78488 11.0834" stroke="#2473E9" strokeWidth="2" stroke-linecap="round" />
            </Svg>

          </TouchableOpacity>
          <TouchableOpacity style={{ height: 74, width: 74, borderRadius: 15, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
            <Svg width="61" height="59" viewBox="0 0 61 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M11 14V45.7333C11 46.9852 12.0745 48 13.4 48H47" stroke="#2473E9" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
              <Path d="M45 23L33.1818 33.8335L27.2727 28.4164L19 36" stroke="#2473E9" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
            </Svg>

          </TouchableOpacity>
          <TouchableOpacity style={{ height: 74, width: 74, borderRadius: 15, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
            <Svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <G clip-path="url(#clip0_58_160)">
                <Path d="M37.7194 29.0558L32.8496 13.8379C31.7155 10.2935 27.8845 7.34044 24.2072 9.37849C23.6125 9.70809 23.1046 10.1359 22.6941 10.6343L21.5829 9.87048V2.38999C21.5829 1.9144 21.1976 1.52905 20.722 1.52905H17.2782C16.8026 1.52905 16.4172 1.9144 16.4172 2.38999V9.87048L15.306 10.6343C14.8955 10.1359 14.3876 9.70809 13.7929 9.37849C10.1559 7.36293 6.30094 10.2425 5.15055 13.8378L0.280921 29.0558C-1.19714 33.6751 3.4249 37.8937 7.88833 36.0109L13.3208 33.7191C15.2371 32.9108 16.4753 31.0445 16.4753 28.9647V16.0994L17.5096 15.3882C18.4013 14.7752 19.5992 14.7751 20.4909 15.3883L21.5252 16.0995V28.9648C21.5252 31.0445 22.7634 32.9108 24.6796 33.7192L30.1121 36.0109C34.5808 37.8964 39.1955 33.6691 37.7194 29.0558ZM14.7535 28.9648H14.7534C14.7534 30.3506 13.9284 31.594 12.6515 32.1327L7.21902 34.4244C4.10741 35.737 0.892482 32.7944 1.92108 29.5807L6.79086 14.3626C7.60496 11.8177 10.326 9.42569 12.9585 10.8846C14.0126 11.4689 14.6998 12.4819 14.7535 13.944V28.9648ZM21.523 14.0084C19.9641 12.9373 18.0296 12.9398 16.4776 14.0082C16.4612 13.381 16.408 12.8012 16.1636 12.1346L17.7662 11.0329C17.9998 10.8723 18.1393 10.6069 18.1393 10.3234V3.251H19.8612V10.3234C19.8612 10.607 20.0008 10.8723 20.2344 11.033L21.837 12.1347C21.599 12.7822 21.54 13.357 21.523 14.0084ZM30.7814 34.4244L25.3488 32.1327C24.072 31.594 23.247 30.3506 23.247 28.9647V13.9496C23.2995 12.496 23.9749 11.4759 25.042 10.8845C27.6711 9.42725 30.3937 11.812 31.2097 14.3626L36.0794 29.5806C37.109 32.7981 33.8892 35.7357 30.7814 34.4244Z" fill="#2473E9" />
              </G>
              <Defs>
                <ClipPath id="clip0_58_160">
                  <Rect width="38" height="38" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          </TouchableOpacity>
        </View>
        <View style={{ width: '90%', marginTop: 20, height: '50%', }}>
          <View style={{ height: '100%', width: '100%', backgroundColor: '#fff', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
              <Text style={{ color: '#2473E9', fontSize: 20, lineHeight: 30, fontFamily: 'Poppins_400Regular', }}>
                Tiempo sin fumar
              </Text>
              <Svg style={{ marginLeft: 10 }} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G clip-path="url(#clip0_57_154)">
                  <Path d="M10.5 5C10.279 5 10.067 5.0878 9.91074 5.24408C9.75447 5.40036 9.66667 5.61232 9.66667 5.83333V10C9.66671 10.221 9.75454 10.4329 9.91083 10.5892L12.4108 13.0892C12.568 13.241 12.7785 13.325 12.997 13.3231C13.2155 13.3212 13.4245 13.2335 13.579 13.079C13.7335 12.9245 13.8212 12.7155 13.8231 12.497C13.825 12.2785 13.741 12.068 13.5892 11.9108L11.3333 9.655V5.83333C11.3333 5.61232 11.2455 5.40036 11.0893 5.24408C10.933 5.0878 10.721 5 10.5 5ZM20.3433 8.44333C20.0573 6.63153 19.2784 4.93331 18.0919 3.53447C16.9055 2.13563 15.3571 1.09006 13.6163 0.512166C11.8755 -0.0657305 10.0092 -0.153693 8.22175 0.257902C6.43428 0.669496 4.79445 1.56479 3.48167 2.84583V0.833333C3.48167 0.61232 3.39387 0.400358 3.23759 0.244078C3.08131 0.0877974 2.86935 0 2.64833 0C2.42732 0 2.21536 0.0877974 2.05908 0.244078C1.9028 0.400358 1.815 0.61232 1.815 0.833333V4.16667C1.815 4.60869 1.9906 5.03262 2.30316 5.34518C2.61572 5.65774 3.03964 5.83333 3.48167 5.83333H6.815C7.03601 5.83333 7.24798 5.74554 7.40426 5.58926C7.56054 5.43298 7.64833 5.22101 7.64833 5C7.64833 4.77899 7.56054 4.56702 7.40426 4.41074C7.24798 4.25446 7.03601 4.16667 6.815 4.16667H4.5225C5.85417 2.81469 7.60777 1.95825 9.49276 1.73924C11.3778 1.52023 13.281 1.9518 14.8872 2.96245C16.4933 3.97309 17.706 5.50214 18.3243 7.29628C18.9426 9.09041 18.9293 11.0419 18.2868 12.8275C17.6442 14.6131 16.4109 16.1255 14.7912 17.1143C13.1714 18.1031 11.2625 18.5088 9.38064 18.2642C7.4988 18.0196 5.75698 17.1395 4.44378 15.7696C3.13058 14.3996 2.32482 12.6222 2.16 10.7317C2.13839 10.5285 2.04159 10.3408 1.88863 10.2054C1.73566 10.0701 1.53759 9.99677 1.33333 10C1.21679 10.0003 1.10159 10.0249 0.995066 10.0722C0.888546 10.1195 0.793045 10.1884 0.714648 10.2747C0.636251 10.3609 0.576676 10.4625 0.53972 10.5731C0.502764 10.6836 0.489237 10.8006 0.500001 10.9167C0.63178 12.2445 1.02798 13.5326 1.66526 14.7049C2.30254 15.8773 3.16801 16.9103 4.21069 17.743C5.25336 18.5757 6.45214 19.1913 7.73641 19.5536C9.02068 19.9158 10.3645 20.0174 11.6886 19.8522C13.0127 19.6871 14.2904 19.2586 15.4464 18.5921C16.6023 17.9255 17.6132 17.0344 18.4195 15.9711C19.2257 14.9078 19.811 13.6939 20.1408 12.4009C20.4706 11.108 20.5384 9.76205 20.34 8.4425L20.3433 8.44333Z" fill="#2473E9" />
                </G>
                <Defs>
                  <ClipPath id="clip0_57_154">
                    <Rect width="20" height="20" fill="white" transform="translate(0.5)" />
                  </ClipPath>
                </Defs>
              </Svg>
            </View>
            <Text style={{ fontSize: 48, fontWeight: 600, lineHeight: 72, textAlign: 'center', color: '#2473E9' }}>
              9d 2m 38s
            </Text>
            <Image source={require('../../../assets/imagen-tiempo.jpg')} style={{ height: 170, width: 215, marginTop: 0, objectFit: 'contain' }} />
            {/*           <TouchableOpacity style={{ height: 50, width: 100, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }} onPress={() => dispatch(logout())}>
            <Text style={{ color: 'white' }}>Cerrar sesión</Text>
          </TouchableOpacity> */}
          </View>
        </View>
      </View>


    </LinearGradient>
  )
}