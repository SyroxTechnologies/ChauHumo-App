import userRegisterHandler from "../../handlers/user/userRegisterHandler.js";


const userRegisterController = async (req, res) => {
    try {
        const newUser = await userRegisterHandler(req.body);
        return res.status(201).json({
            msg: 'La cuenta fue registrada correctamente.',
            id: newUser.id,
        });

    } catch (error) {
        return res.status(error.errorCode).json({error: error.message});
    }
}

export default userRegisterController;