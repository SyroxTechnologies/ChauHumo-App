import User from '../../models/userModel.js';
import bcrypt from 'bcrypt';
import InputValidationError from '../../error/InputValidationError.js';
import ChauHumoApiError from '../../error/ChauHumoApiError.js';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const userLoginHandler = async (body) => {
    try {
        const { email, password } = body;

        if (!email || !password) {
            throw new InputValidationError('Por favor, complete todos los campos requeridos.');
        }
        if (!EMAIL_REGEX.test(email)) {
            throw new InputValidationError('Por favor, ingrese un email valido.');
        }

        const userFound = await User.findOne({ email });

        if (!userFound) {
            throw new InputValidationError('No existe una cuenta asociada a ese correo electronico.');
        }

        if (password.length < 6) {
            throw new InputValidationError('La contraseña no es valida.');
        }

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            throw new InputValidationError('La contraseña es incorrecta.');
        }

        return userFound;
    } catch (error) {
        if (error instanceof InputValidationError) {
            throw error;
        } else {
            throw new ChauHumoApiError('Hubo un error durante el proceso de iniciar sesión. Por favor intenta de nuevo', 500);
        }
    }
};

export default userLoginHandler;
