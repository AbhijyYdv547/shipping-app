import express, { Request, Response } from "express"
import Shipping from "../models/Shipping"

const router = express.Router()

router.post('/', async (req,res)=>{
  const {
    firstName,
    lastName,
    streetAddress,
    aptNumber,
    state,
    zip
  } = req.body

  if (!firstName || !lastName || !streetAddress || !state || !zip) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    const newAddress = await Shipping.create({
      firstName,
      lastName,
      streetAddress,
      aptNumber,
      state,
      zip
    })

    res.status(201).json({ message: 'Address saved successfully', addressId: newAddress._id })
  } catch (err) {
    console.error('Order error:', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

export default router
