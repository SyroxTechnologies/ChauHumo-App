import React from 'react'

import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { ApiChauHumo } from '../../../api/ApiChauHumo';
import { useDispatch } from 'react-redux';
import {loginSuccess} from '../../../redux/actions/index'

export default function Login({ navigation }) {

    const validacionesInput = object().shape({
        email: string()
            .email('Ingrese un correo electrónico válido')
            .required('El correo electrónico es obligatorio'),
        password: string().required('La contraseña es obligatoria'),
    });

    const dispatch = useDispatch()

    const handleLogin = async (values, { resetForm }) => {
        try {
            const response = await ApiChauHumo.post('user/login', {
                email: values.email,
                password: values.password,
            });
            console.log(response.data)
            if (response.status === 201) {
                Toast.show({
                    type: 'success',
                    text1: 'Inicio de sesión exitoso',
                    text2: response.data.msg,
                    visibilityTime: 2000,
                    autoHide: true,
                });
                setTimeout(() => {
                    resetForm();
                    dispatch(loginSuccess(response.data));
                }, 500);
            }
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.error || 'Error en la solicitud';
                Toast.show({
                    type: 'error',
                    text1: 'Error al iniciar sesión',
                    text2: errorMessage,
                    visibilityTime: 2000,
                    autoHide: true,
                });
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Error de red',
                    text2: 'No se puede establecer conexión con el servidor',
                    visibilityTime: 2000,
                    autoHide: true,
                });
            }
        }
    };

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
                    <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 34, lineHeight: 51, color: 'white', justifyContent: 'flex-start' }}>Bienvenido!</Text>
                    <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 15, lineHeight: 22.5, color: '#fff' }}>Por favor ingresa tus datos para poder iniciar sesión.</Text>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validacionesInput}
                        onSubmit={handleLogin}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            resetForm,
                            isValid,
                            values,
                            errors,
                            touched,
                        }) => (
                            <>
                                <View style={{ marginTop: 20 }}>
                                    <TextInput
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        placeholderTextColor={'#83B4FF'}
                                        placeholder='Correo electrónico'
                                        style={{ fontFamily: 'Poppins_400Regular', width: '100%', height: 52, color: '#fff', borderColor: '#fff', borderWidth: 1, borderRadius: 50, fontSize: 15, paddingLeft: 20 }}
                                    ></TextInput>
                                    {errors.email && touched.email && (
                                        <Text style={{ color: 'red' }}>{errors.email}</Text>
                                    )}
                                    <TextInput
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        secureTextEntry={true}
                                        placeholderTextColor={'#83B4FF'}
                                        placeholder='Contraseña'
                                        style={{ fontFamily: 'Poppins_400Regular', marginTop: 10, width: '100%', height: 52, color: '#fff', borderColor: '#fff', borderWidth: 1, borderRadius: 50, fontSize: 15, paddingLeft: 20 }}
                                    ></TextInput>
                                    {errors.password && touched.password && (
                                        <Text style={{ color: 'red' }}>{errors.password}</Text>
                                    )}
                                    <TouchableOpacity style={{ marginLeft: 10 }}>
                                        <Text style={{ fontFamily: 'Poppins_400Regular', color: '#fff', marginTop: 10, fontSize: 12, lineHeight: 18 }}>
                                            Olvidé mi contraseña
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleSubmit} style={{ marginTop: 20, height: 62, backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontFamily: 'Poppins_400Regular', fontFamily: 'Poppins_600SemiBold', fontSize: 20, lineHeight: 30, color: '#2473e9', }}>
                                            Iniciar sesión
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ marginLeft: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                                        <Text style={{ color: '#fff', marginTop: 10, fontSize: 15, lineHeight: 22.5 }}>
                                            ¿No tenés cuenta?
                                        </Text>
                                        <Text style={{ marginLeft: 5, color: '#fff', marginTop: 10, fontSize: 15, lineHeight: 22.5, textDecorationLine: 'underline' }}>
                                            Crear cuenta
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>

                </View>
            </View>
        </LinearGradient>
    )
}