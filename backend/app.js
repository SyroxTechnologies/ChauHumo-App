
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import morgan from 'morgan'
import './databaseConfig.js'
import helmet from 'helmet'
import userRouter from './routes/userRoutes.js'


const app = express()

// settings

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(helmet())

//routes

app.use('/api', userRouter)

export default app