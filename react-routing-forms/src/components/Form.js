import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!name) validationErrors.name = 'Name is required';
    
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!message) validationErrors.message = 'Message is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted', { name, email, message });
      alert('Form submitted successfully! Check console for details.');
      // Reset form after successful submission
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        {errors.message && <span style={{ color: 'red', fontSize: '12px' }}>{errors.message}</span>}

        <button type="submit" style={{ marginTop: '10px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default Form;