import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { Image } from 'react-native';
import Toast from 'react-native-toast-message';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

// Import screens
import Onboarding from './src/screens/App/Onboarding/Onboarding';
import Metas from './src/screens/App/Metas/Metas';
import Progreso from './src/screens/App/Progreso/Progreso';
import Configuracion from './src/screens/App/Configuracion/Configuracion';
import Contador from './src/screens/App/Contador/Contador';
import Register from './src/screens/Authentication/Register/Register';
import Login from './src/screens/Authentication/Login/Login';
import { Survey, Survey1, Survey10, Survey2, Survey3, Survey4, Survey5, Survey6, Survey7, Survey8, Survey9 } from './src/screens/App/Survey';
import Dashboard from './src/screens/App/Dashboard/Dashboard';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Bienvenido">
      <Stack.Screen name="Bienvenido" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const UserNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconImage;

        if (route.name === 'Home') {
          iconImage = require('./src/assets/iconos/home.png');
        } else if (route.name === 'Progreso') {
          iconImage = require('./src/assets/iconos/procesos.png');
        } else if (route.name === 'Contador') {
          iconImage = require('./src/assets/iconos/contador.png');
        } else if (route.name === 'Metas') {
          iconImage = require('./src/assets/iconos/metas.png');
        } else if (route.name === 'Configuracion') {
          iconImage = require('./src/assets/iconos/configuracion.png');
        }

        return (
          <Image
            source={iconImage}
            style={{ objectFit: 'contain', width: size, height: size, tintColor: color }}
          />
        );
      }, tabBarStyle: {
        height: 56,
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5, // Este valor controla la profundidad de la sombra
        shadowColor: '#000000', // Color de la sombra
        shadowOffset: { width: 0, height: 0 }, // Desplazamiento de la sombra
        shadowOpacity: 0.4, // Opacidad de la sombra
        shadowRadius: 15.9, // Radio de la sombra
      },
      tabBarShowLabel: false,
    })}
      initialRouteName="Home"
    >

      <Tab.Screen name="Home" component={Dashboard} options={{ headerShown: false }} />
      <Tab.Screen name="Progreso" component={Progreso} options={{ headerShown: false }} />

      <Tab.Screen name="Contador" component={Contador} options={{
        headerShown: false, tabBarIcon: ({ size }) => (
          <Image source={require('./src/assets/iconos/contador.png')} style={{ objectFit: 'contain', width: size * 1.5, height: size * 1.5 }}>

          </Image>
        )
      }} />

      <Tab.Screen name="Metas" component={Metas} options={{ headerShown: false }} />
      <Tab.Screen name="Configuracion" component={Configuracion} options={{ headerShown: false }} />

    </Tab.Navigator>
  )
}



const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserNavigator" component={UserNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Metas" component={Metas} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name="Configuracion" component={Configuracion} options={{ headerShown: false }} />
      <Stack.Screen name="Progreso" component={Progreso} options={{ headerShown: false }} />
      <Stack.Screen name="Contador" component={Contador} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

const SurveyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Survey" component={Survey} />
      <Stack.Screen name="Survey1" component={Survey1} />
      <Stack.Screen name="Survey2" component={Survey2} />
      <Stack.Screen name="Survey3" component={Survey3} />
      <Stack.Screen name="Survey4" component={Survey4} />
      <Stack.Screen name="Survey5" component={Survey5} />
      <Stack.Screen name="Survey6" component={Survey6} />
      <Stack.Screen name="Survey7" component={Survey7} />
      <Stack.Screen name="Survey8" component={Survey8} />
      <Stack.Screen name="Survey9" component={Survey9} />
      <Stack.Screen name="Survey10" component={Survey10} />
    </Stack.Navigator>
  )
}

SplashScreen.preventAutoHideAsync();

const App = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn)
  const onboarding = true

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          isUserLoggedIn ? onboarding ? (
            (
              <Stack.Screen name="SurveyStack" component={SurveyStack}>
              </Stack.Screen>
            ) 
          ) : (
            <Stack.Screen name="UserStack" component={UserStack}>
            </Stack.Screen>
          ) : (
            <Stack.Screen name="AuthStack" component={AuthStack} />
          )
        }
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

const Main = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default Main;

{/*       */ }
