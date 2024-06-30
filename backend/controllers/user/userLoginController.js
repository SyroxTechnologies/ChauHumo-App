import userLoginHandler from "../../handlers/user/userLoginHandler.js";

const userLoginController = async (req, res) => {
    try {
        const userFound = await userLoginHandler(req.body);
        return res.status(201).json({
            msg: 'Iniciaste sesión correctamente.',
            usuario: userFound,
        });

    } catch (error) {
        console.log(error)
        return res.status(error.errorCode).json({error: error.message});
    }
}

export default userLoginController;