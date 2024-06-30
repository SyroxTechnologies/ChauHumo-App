import http from 'http'
import app from './app.js'

const server = http.createServer(app)

const port = 5000

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})