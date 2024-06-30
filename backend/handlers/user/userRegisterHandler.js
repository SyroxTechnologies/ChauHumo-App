import User from '../../models/userModel.js'
import bcrypt from "bcrypt";
import InputValidationError from '../../error/InputValidationError.js';
import ChauHumoApiError from '../../error/ChauHumoApiError.js'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const userRegisterHandler = async (body) => {
    await inputValidation(body)
    const {
        name, password, email
    } = body;

    try {
        const newUser = new User({
            name,
            email,
            password: await bcrypt.hash(password, 12),

        })

        await newUser.save()
        return newUser
    } catch (error) {
        throw new ChauHumoApiError('Hubo un error durante el proceso de registro. Por favor intenta de nuevo', 500)
    }
}

async function inputValidation(body) {
    const {
        name, email, password
    } = body;

    if (!name || !email || !password) throw new InputValidationError('Por favor, complete todos los campos requeridos.');
    if (!EMAIL_REGEX.test(email)) throw new InputValidationError('Por favor, ingrese un email valido.');
    
    const emailOnDb = await User.findOne({
        email
    })
    
    if (emailOnDb)
        throw new InputValidationError('Ya existe una cuenta asociada al correo electrónico.');

    if (password.length < 6) throw new InputValidationError('La contraseña debe contener al menos 6 caracteres.');
}

export default userRegisterHandler;