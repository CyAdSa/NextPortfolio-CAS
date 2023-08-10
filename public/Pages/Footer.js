import React from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-lg font-semibold mb-2">Mes réseaux sociaux</div>
          <div className="flex gap-2">
            <a href="https://github.com/CyAdSa?tab=repositories" target="_blank" rel="noopener noreferrer">
              <GithubOutlined className="text-white text-2xl hover:text-gray-500 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/cyprien-andrew-sadio-b83a8627b/" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="text-white text-2xl hover:text-gray-500 transition duration-300" />
            </a>
          </div>
        </div>
        <div className="flex gap-8">
          <Link href="/" passHref>
            <a className="hover:text-gray-500 transition duration-300">Accueil</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="hover:text-gray-500 transition duration-300">Contact</a>
          </Link>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>© Cyprien Andrew Sadio 2023. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
