export const loginSuccess = (data) => {
    return {
      type: 'LOGIN_SUCCESS',
      usuario: data.usuario,
      tipo_usuario: data.usuario.role,

    };
  };
  
  // Acción para cerrar sesión
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  
  export const editarPerfil = (data) => {
    return {
      type: 'EDITAR_PERFIL',
      usuario: data.usuario,
    };
  };
  