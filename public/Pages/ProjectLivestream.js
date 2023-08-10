import React from 'react';
import Link from 'next/link';
import LogoProjet from '../images/LogoProjet.jpg';

const ProjectLivestream = () => {
  return (
    <div className="container mx-auto mt-4 px-4">
      <div className="text-center">
        <h2 className="underline text-xl font-semibold">Diffusion virtuelle de la messe</h2>
      </div>
      <div className="mt-4">
        <p className="text-center">
          J&apos;ai travaillé sur la diffusion de la messe virtuelle. Le projet consistait à adapter une mise en place qui respecte l&apos;architecture et ses composantes. Il fallait mettre en place un système discret qui se mêle dans le décor. C&apos;était un projet assez complexe puisqu&apos;il fallait concilier le flux internet, la capture des sons et le cadrage des caméras, le tout dans un concept sans fil.
          Il me fera plaisir de vous en faire part. N&apos;hésitez pas à me contacter.
          Le lien ci-joint peut vous rediriger vers notre page YouTube.
        </p>
        <div className="text-center mt-4">
          <a href="https://youtube.com/@notredameottawa932" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Lien vers la page YouTube
          </a>
        </div>
      </div>
      <div className="mt-4 flex">
        <div className="w-1/2 pr-8">
          <h3 className="text-lg font-semibold">Caractéristiques :</h3>
          <ul className="list-disc ml-6">
            <li>Reseau</li>
            <li>circuit du son</li>
            <li>Transmission d&apos;image sans fil</li>
          </ul>
        </div>
        <div className="w-1/2 pl-8">
          <h3 className="text-lg font-semibold">Technologies utilisées :</h3>
          <ul className="list-disc ml-6">
            <li>NDI HX Camera</li>
            <li>MimoLive 6</li>
            <li>Youtube Studio</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link href="/project-one">
          <a className="text-blue-500 hover:underline">Projet 1</a>
        </Link>
        <span className="mx-2 text-gray-500">|</span>
        <Link href="/project-two">
          <a className="text-blue-500 hover:underline">Projet 2</a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectLivestream;

