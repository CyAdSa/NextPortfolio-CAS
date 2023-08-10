import React from 'react';
import Link from 'next/link'; // Import the Link component from next/link

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map((comment) => (
        <div key={comment.id} className="comment bg-gray-100 rounded p-4 mb-4">
          <h3 className="text-xl font-semibold">{comment.author}</h3>
          <p className="mt-2">{comment.content}</p>
          <span className="block mt-2">Rating: {comment.rating}/5</span>
        </div>
      ))}
      <h2 className="text-2xl font-semibold mt-4">Merci de vos commentaires!</h2>

      {/* Example Link using Next.js Link */}
      <Link href="/leaveComment">
        <a className="text-blue-500 hover:underline mt-4 inline-block">
          Laisser un commentaire
        </a>
      </Link>
    </div>
  );
};

export default Comments;
