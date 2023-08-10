import React from 'react';
import Link from 'next/link';
import Cydrew from '../images/Cydrew.jpg';
import Styles from './Home.module.scss';
import Image from 'next/image';
const Home = () => {
  return (
    <div className={`bg-gray-100 min-h-screen flex flex-col justify-center items-center ${Styles.home}`}>
      <div className={Styles['profile-picture']}>
        <Image src={Cydrew} alt="Cydrew" />
      </div>
      <div className={`text-center py-4 ${Styles.introduction}`}>
        <h2 className="text-3xl font-semibold mb-4">Bienvenue sur le portfolio de Cyprien !</h2>
        
        <p>
          Je suis un développeur passionné avec une expertise dans la manipulation des systèmes de gestion de base de données, les langages comme Java et C#. Je suis dédié à créer des expériences utilisateurs exceptionnelles et à développer des solutions logicielles innovantes.
        </p>
        <p>
        Au fil des années, j&apos;ai travaillé sur divers projets, allant de petit projet d&apos;application bureau comme la conception de système de caisse à la création de plateformes pour le livestream voire de d&apos;application web pour à vocation commerciale. Mon objectif est de fournir des résultats de haute qualité tout en maintenant une attention constante aux détails et à l&apos;efficacité.
        </p>
        <p>
        Explorez mon portfolio pour en savoir plus sur mes compétences, mes projets et comment je peux contribuer à vos initiatives technologiques.
        </p>
      </div>
      <nav className={`mt-4 ${Styles['nav-links']}`}>
        <ul className="flex gap-4">
          <li>
            <Link href="/project-one">Projet 1</Link>
          </li>
          <li>
            <Link href="/project-two">Projet 2</Link>
          </li>
          {/* Add more project links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
