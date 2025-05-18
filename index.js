import express from 'express'
import dotenv from 'dotenv'
import { connectToMongoDB } from './config/db.config.js'

dotenv.config()

const app = express()
connectToMongoDB()

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
