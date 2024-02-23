import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FormAction from './components/FormAction';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    email: ''
  });

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home formData={formData} />}
          />
          <Route
            path="/form"
            element={<FormAction setFormData={setFormData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
