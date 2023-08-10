import React, { useState } from 'react';
import Link from 'next/link';

const GetInTouch = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verification of required fields
    if (prenom.trim() === '' || nom.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all required fields.');
      return;
    }

    // Send contact form (you can add code here to send the message)
    console.log('First Name:', prenom);
    console.log('Last Name:', nom);
    console.log('Email:', email);
    console.log('Phone:', telephone);
    console.log('Message:', message);

    // Reset form fields
    setPrenom('');
    setNom('');
    setEmail('');
    setTelephone('');
    setMessage('');
  };

  return (
    <div className="contact container p-10">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prenom" className="block font-semibold mb-1">
            First Name:
          </label>
          <input
            type="text"
            id="prenom"
            className="w-full border rounded px-2 py-1"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        {/* ... (other input fields) */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Send
        </button>
      </form>
      <Link href="/">
        <a className="mt-4 text-blue-500 hover:underline">Back to Home</a>
      </Link>
    </div>
  );
};

export default GetInTouch;
