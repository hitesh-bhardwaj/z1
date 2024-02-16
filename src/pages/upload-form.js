// pages/uploadForm.js

import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('number', number);
    formData.append('file', file);

    try {
      // Send form data and file to server
      const response = await axios.post('/api/upload', formData);

      // Assuming the server responds with the URL of the uploaded file
      const fileUrl = response.data.fileUrl;

      // Send email with form data and file URL
      await axios.post('/api/send-email', {
        name,
        email,
        number,
        fileUrl
      });

      // Reset form fields after submission
      setName('');
      setEmail('');
      setNumber('');
      setFile(null);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number" />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UploadForm;
