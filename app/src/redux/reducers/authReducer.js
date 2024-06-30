const initialState = {
    isUserLoggedIn: false,
    usuario: null,
    tipo_usuario: null,
    token: null,
    expirationDate: null,
    // Otros estados relacionados con la autenticación
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isUserLoggedIn: true,
          usuario: action.usuario,
          tipo_usuario: action.usuario.role,

        };
      case 'LOGOUT':
        return {
          ...state,
          isUserLoggedIn: false,
          usuario: null,
          tipo_usuario: null,
          token: null,
          expirationDate: null,
        };
      case 'EDITAR_PERFIL':
        return {
          ...state,
          usuario: action.usuario,
          tipo_usuario: action.usuario.role,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  