import React, { useState } from 'react';
import Link from 'next/link';

const LeaveComment = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    author: '',
    content: '',
    rating: 5,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.author.trim() === '' || formData.content.trim() === '') {
      alert('Veuillez remplir tous les champs.');
    } else {
      onSubmit({ ...formData, id: Date.now() });
      setFormData({
        author: '',
        content: '',
        rating: 5,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Laisser un commentaire</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="author" className="block font-medium">Auteur:</label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block font-medium">Commentaire:</label>
          <textarea
            id="content"
            name="content"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.content}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block font-medium">Note:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.rating}
            onChange={handleInputChange}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Envoyer</button>
      </form>
      <div className="mt-4">
        <Link href="/">
          <a className="text-blue-500 hover:underline">Retour à l&apos;accueil</a>
        </Link>
      </div>
    </div>
  );
};

export default LeaveComment;
