// FormAction.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormAction = ({ setFormData }) => {
  const navigate = useNavigate();
  const [formData, setLocalFormData] = useState({
    name: '',
    phnNo: '',
    address: '',
    email: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setLocalFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Update parent state with form data
    setFormData(formData);
    // Redirect to Home page
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Form Action</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
        <span className="text-gray-700">Name:</span>
          <input
            className="mt-1 p-2 border rounded w-full"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange} />
        </label>
        <label className="block">
        <span className="text-gray-700">Phone Number:</span>
          <input
            className="mt-1 p-2 border rounded w-full"
            type="text"
            name="phnNo"
            value={formData.phnNo}
            onChange={handleChange} />
        </label>
        <label className="block">
        <span className="text-gray-700">Address:</span>
          <input
            className="mt-1 p-2 border rounded w-full"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange} />
        </label>
        <label className="block">
        <span className="text-gray-700">Email:</span>
          <input
            className="mt-1 p-2 border rounded w-full"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange} />
        </label>
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            type="submit">
            Submit
        </button>
      </form>
    </div>
  );
};

export default FormAction;
