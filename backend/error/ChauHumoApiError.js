class ChauHumoApiError extends Error {

    constructor(message, errorCode) {
        super(message)
        this.errorCode = errorCode
    }
}

export default ChauHumoApiError