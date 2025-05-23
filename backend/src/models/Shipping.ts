
import mongoose from 'mongoose'

const shippingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  streetAddress: { type: String, required: true },
  aptNumber: String,
  state: { type: String, required: true },
  zip: { type: String, required: true },
})

const Shipping = mongoose.model('Shipping', shippingSchema)
export default Shipping
