import ChauHumoApiError from "./ChauHumoApiError.js"

class AuthenticationError extends ChauHumoApiError {

    constructor(message) {
        super(message, 401)
    }
}

export default AuthenticationError