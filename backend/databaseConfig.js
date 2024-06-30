import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const URI = process.env.MONGODB_URL

mongoose.set("strictQuery", false);

mongoose.connect(URI, {}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});