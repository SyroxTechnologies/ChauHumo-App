import ChauHumoApiError from "./ChauHumoApiError.js"

class InputValidationError extends ChauHumoApiError {

    constructor(message) {
        super(message, 400)
    }
}

export default InputValidationError