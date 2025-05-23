import { useState } from 'react';

const ShippingAddressForm = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      streetAddress: formData.get('streetAddress'),
      aptNumber: formData.get('aptNumber'),
      state: formData.get('state'),
      zip: formData.get('zip'),
    }

    try {
      const res = await fetch('http:localhost:3000/api/shipping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()
      if (!res.ok) throw new Error(result.message || 'Error saving address')

      setMessage('Address saved successfully!')
    } catch (err: any) {
      setMessage(err.message || 'Failed to save address')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200 w-full max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <h2 className="text-xl sm:text-2xl font-normal text-gray-800">Shipping Address</h2>
      </div>

      <div className="mb-8 border border-gray-300 rounded p-4">
        <div className="flex items-center text-lg font-medium text-gray-900">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2"></span>
          Add New Address
        </div>

        {/* 👉 Wrap everything in a form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <input name="firstName" type="text" id="firstName" placeholder="First Name" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-800" />
            </div>
            <div>
              <input name="lastName" type="text" id="lastName" placeholder="Last Name" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-800" />
            </div>
            <div className="md:col-span-2">
              <input name="streetAddress" type="text" id="streetAddress" placeholder="Street Address" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-800" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:col-span-2">
              <div>
                <input name="aptNumber" type="text" id="aptNumber" placeholder="Apt Number" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-800" />
              </div>
              <div>
                <input name="state" type="text" id="state" placeholder="State" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-800" />
              </div>
              <div>
                <input name="zip" type="text" id="zip" placeholder="Zip" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-800" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <button type="button" className="px-6 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors duration-200">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200">
              {loading ? 'Saving...' : 'Save This Address'}
            </button>
          </div>
          {message && <p className="mt-4 text-center text-sm text-green-600">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ShippingAddressForm;
