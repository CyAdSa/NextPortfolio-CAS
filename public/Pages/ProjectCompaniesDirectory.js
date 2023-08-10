import React from 'react';
import Link from 'next/link';
import LogoProjet from '../images/LogoProjet.jpg';
import Image from 'next/image';
const ProjectCompaniesDirectory = () => {
  return (
    <div className="container mx-auto mt-4 px-4">
      <div className="text-center">
        <h2 className="underline text-xl">Marché d&apos;art virtuel</h2>
      </div>
      <div className="mt-4 flex">
        <div className="flex-none w-1/3">
          <Image src={LogoProjet} alt="Logo Projet" className="rounded-full" style={{ maxWidth: '150px', maxHeight: '150px' }} />
        </div>
        <div className="flex-grow pl-4">
          <p className="mb-4">
            J&apos;ai travaillé sur un projet d&apos;intégration dans lequel il fallait concevoir un projet d&apos;application web pour permettre aux artistes
            d&apos;avoir une plateforme qui leur permettrait de vendre leur création mais aussi de s&apos;approvisionner.
            Ainsi l&apos;application tourne autour de quelques caractéristiques clés.
          </p>
          <h3 className="text-lg font-semibold">Caractéristiques :</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>La plateforme permet aux artistes d&apos;acheter les matériaux nécessaires pour concevoir leur création.</li>
            <li>La plateforme permet aux artistes d&apos;exposer, d&apos;interagir avec les clients et d&apos;écouler leurs productions.</li>
            <li>Grâce à la plateforme, l&apos;artiste pouvait développer son carnet d&apos;adresses et participer à des événements dédiés à la corporation des artistes.</li>
          </ul>
          <h3 className="text-lg font-semibold">Technologies utilisées :</h3>
          <ul className="list-disc ml-6">
            <li>Microsoft SQL Server Management Studio</li>
            <li>Visual Studio Code pour l&apos;exploitation de REACT</li>
            <li>Visual Paradigm pour la conception de diagramme</li>
          </ul>
          <div className="mt-4">
            <Link href="/project-one">
              <a className="text-blue-500 hover:underline">Projet 1</a>
            </Link>
            <Link href="/project-two" className="ml-4">
              <a className="text-blue-500 hover:underline">Projet 2</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCompaniesDirectory;
