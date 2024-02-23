import React from 'react';

const Home = ({ formData }) => {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <p>Name: {formData.name}</p>
      <p>PhoneNo: {formData.phnNo}</p>
      <p>Address: {formData.address}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default Home;
