import axios from "axios";
import { useState } from "react";

const BookingForm = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (err) {
      console.error('Booking submission failed:', err);
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border p-2 w-full mt-2"
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border p-2 w-full mt-2"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-2 w-full mt-2"
              required
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="border p-2 w-full mt-2"
              required
            />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="border p-2 w-full mt-2"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date</label>
            <input
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              className="border p-2 w-full mt-2"
              required
            />
          </div>
          <div>
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              className="border p-2 w-full mt-2"
              required
            />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address</label>
          <input
            type="text"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleInputChange}
            className="border p-2 w-full mt-2"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>City</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>State</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Zip Code</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label>Country</label>
            <input type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={loading} className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default BookingForm;