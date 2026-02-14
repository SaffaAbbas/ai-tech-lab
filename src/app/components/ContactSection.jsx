'use client';
import PhoneInput from "react-phone-input-2";

import { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
    nda: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess(false);

  // BASIC VALIDATION
  if (!formData.fullName || !formData.email || !formData.phone) {
    setError("Please fill all required fields.");
    return;
  }

  if (formData.phone.length < 10) {
    setError("Please enter a valid phone number.");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch("https://ailab.techoriginators.com/mail.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});

    if (!res.ok) throw new Error("Failed to send");

    setSuccess(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
      nda: false,
    });

  } catch (err) {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Reach Out and Connect <br />
            With <span className="text-indigo-600">TechOriginators</span>
          </h2>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <Mail className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Email Address</p>
                <p className="text-sm">Elite@genai-labs.io</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Phone No</p>
                <p className="text-sm">(323) 522-4040</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-sm">
                  4575 Pescadero Ave <br />
                  San Diego California 92107
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
          <h3 className="text-lg font-semibold mb-6 text-gray-900">
            Schedule your <span className="text-indigo-600">free consultation!</span>
          </h3>
          {error && (
  <p className="text-red-500 text-sm font-medium">
  {error}
  </p>
)}

{success && (
  <p className="text-green-600 text-sm font-medium">
    Thank you! We will contact you soon and schedule a call.
  </p>
)}


          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={(phone) =>
                  setFormData({ ...formData, phone })
                }
  inputClass="!w-full !h-[48px] !bg-gray-100 !border-none !rounded-lg focus:!ring-2 focus:!ring-indigo-500"
  buttonClass="!border-none !bg-gray-100"
  dropdownClass="!z-50"
  enableSearch
  countryCodeEditable={false}
/>


              <select
                name="budget"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              >
                <option value="">Budget</option>
                <option>$5k - $10k</option>
                <option>$10k - $25k</option>
                <option>$25k+</option>
              </select>
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <ShieldCheck className="text-indigo-600 w-4 h-4" />
              <input
                type="checkbox"
                name="nda"
                className="accent-indigo-600"
                onChange={handleChange}
              />
              Protect with an NDA
            </label>

            <textarea
              name="message"
              placeholder="Description"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
            />

            <button
  type="submit"
  disabled={loading}
  className="w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
>
  {loading ? "Sending..." : "Submit"}
</button>

          </form>
        </div>

      </div>
    </section>
  );
}
