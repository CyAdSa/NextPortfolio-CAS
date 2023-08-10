import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Accueil</Link>
        </div>
        <div className="space-x-4">
          <Link href="/project-one">Projet 1</Link>
          <Link href="/project-two">Projet 2</Link>
          <Link href="/commentaire">Commentaire</Link>
          <Link href="/leaveComment">Leave Comment</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
