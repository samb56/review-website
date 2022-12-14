import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express()
dotenv.config()
// app.use('/posts', postRoutes)
// const __dirname = path.resolve();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

app.use(express.static(path.join(__dirname, '../client/build')))

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000



// const CONNECTION_URL = 'mongodb+srv://hookahreview:fakepassword99@cluster0.4pnmbwl.mongodb.net/?retryWrites=true&w=majority'
// const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL).then(() => { app.listen(PORT, () => console.log(`server running on port: ${PORT} `)); })



// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT} `)))
//   .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)
