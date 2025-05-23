import mongoose from "mongoose"
import express from "express"
const dotenv = require('dotenv')
const shippingRoute = require('./routes/shipping')

dotenv.config()
const app = express()
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err))

// Use the checkout route
app.use('/api/shipping', shippingRoute)

// Start the server
app.listen(3000, () => {
  console.log(`Server running on port 3000`)
})
