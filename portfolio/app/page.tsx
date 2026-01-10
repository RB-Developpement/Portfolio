import Image from "next/image";
import { House, Briefcase, Folder, Wrench, SquarePen, Linkedin, Github, FileUser, AtSign } from 'lucide-react';
import { delaGothicOne } from "@/app/layout";
import { gothamLight } from "@/app/layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-5 bg-[#151412]">
      <section className="sticky top-4 mt-2 w-md h-20 rounded-lg bg-[#1e1e1e]"> {/* Navigation Bar */}
        <nav className="flex justify-around items-center h-full">
          <a href="#home" className="text-white text-xl">
            <House size={40} />
          </a>
          <a href="#projects" className="text-white">
            <Briefcase size={40} />
          </a>
          <a href="#about" className="text-white">
            <Folder size={40} />
          </a>
          <a href="#contact" className="text-white">
            <Wrench size={40} />
          </a>
          <a href="#contact" className="text-white">
            <SquarePen size={40} />
          </a>
        </nav>
      </section> 
      <section className="flex flex-row row-2 min-h-screen mt-8 mx-8"> {/* Div principal */}
        <div className="bg-white rounded-xl w-xs h-full mr-15 flex flex-col items-center pb-5 sticky top-35"> {/* Carte profil */}
            <div className="w-60 h-60 mt-5 mb-4">
              <img
                src="/romain.jpg"
                alt="Profile Picture"
                width={150}
                height={150}
                className="h-60 w-96 rounded-lg object-cover"
            /></div>
            <h2 className={`text-black ${delaGothicOne.className} text-3xl mb-2`}>Romain Beka</h2>
            <p className={`text-[#696969] ${gothamLight.className} text-center text-ms mt-4 mb-5 px-5`}>
              Un concepteur de produits qui a créé des expériences utilisateur.
            </p>
            <div className="flex space-x-6">
              <a href="#linkedin" className="text-[#FF5900]"><FileUser size={30} /></a>
              <a href="#github" className="text-[#FF5900]"><AtSign size={30} /></a>
            </div>
        </div> 
        <div className="bg-[#78350f] w-xl h-auto rounded-xl flex flex-col"> {/* Contenu principal */}
          <div className="mb-7">
            <h1 className={`text-white ${delaGothicOne.className} text-7xl uppercase mb-5`}>web <p className="text-[#3D3D3F]">developer</p></h1>
            <p className={`text-[#999393] ${gothamLight.className} text-lg text-left`}>Passionnée par la création d'expériences utilisateur intuitives et attrayantes. Spécialisée dans la transformation d'idées en produits magnifiquement conçus.</p>
          </div>

          <section className="flex flex-row gap-12">
            <div className="flex flex-col">
              <h2 className={`text-white ${delaGothicOne.className} text-5xl uppercase mb-5`}>+10</h2>
              <p className={`text-[#999393] ${gothamLight.className} w-24 text-ms`}>Projets personnels</p>
            </div>
            <div className="flex flex-col">
              <h2 className={`text-white ${delaGothicOne.className} text-5xl uppercase mb-5`}>+3</h2>
              <p className={`text-[#999393] ${gothamLight.className} w-24 text-ms`}>Années de développement</p>
            </div>
            <div className="flex flex-col">
              <h2 className={`text-white ${delaGothicOne.className} text-5xl uppercase mb-5`}>+100</h2>
              <p className={`text-[#999393] ${gothamLight.className} w-12 text-ms`}>Commit GIT</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
