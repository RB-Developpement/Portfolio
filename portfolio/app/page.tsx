import { House, Briefcase, Folder, Wrench, SquarePen, Linkedin, Github, FileUser, AtSign, ArrowUpRight, Mail, AppWindow, FolderCode, SquareArrowRight } from 'lucide-react';
import { delaGothicOne } from "@/app/layout";
import { gothamLight } from "@/app/layout";
import { gothamBook } from "@/app/layout";
import { CardPattern } from "@/components/CardPattern";
import { ZigZagPattern } from "@/components/ZigZagPattern";
import { Nuxt } from '@/components/Nuxt';
import { Tailwind } from '@/components/Tailwind';
import { CSharp } from '@/components/CSharp';
import { Next } from '@/components/Next';

export default function Home() {
  return (
    <main className="flex w-auto min-h-screen flex-col items-center pt-5 bg-[#151412]">  {/* bg-[#151412] */}

      {/* Navigation Bar */}
      <section className="sticky z-3 top-4 lg:sticky lg:top-5 lg:mt-5">
        <nav className="flex z-2 items-center px-5 p-3 bg-[#1e1e1e] rounded-lg shadow-lg space-x-10">
          <a href="#home" className="text-white text-xl"><House size={40} className='w-8 h-8'/></a>
          <a href="#projects" className="text-white"><Briefcase size={40}  className='w-8 h-8'/></a>
          <a href="#about" className="text-white"><Folder size={40} className='w-8 h-8'/></a>
          <a href="#approche" className="text-white"><Wrench size={40} className='w-8 h-8'/></a>
          <a href="#contact" className="text-white"><SquarePen size={40} className='w-8 h-8'/></a>
        </nav>
      </section>

      {/* Div Principal Section */}
      <section className="mt-8 flex flex-col items-center justify-center lg:space-x-10 lg:mx-10 lg:flex-row lg:row-2 lg:items-start" id='home'>
        <div className="bg-white rounded-xl flex h-auto w-90 lg:flex-col lg:h-152.5 lg:sticky lg:mt-4 lg:top-30 lg:transition-all lg:duration-300 lg:ease-out lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:scale-[1.02]"> {/* Carte profil */}
            <img
                src="/romain.jpg"
                alt="Profile Picture"
                width={150}
                height={150}
                className="h-[150] w-[150] rounded-lg object-cover my-5 mx-2
                          lg:mx-auto lg:my-5 lg:h-[300] lg:w-[300]"
            />
            <div className='flex flex-col justify-center items-center'>
              <div className='my-5 mx-3 flex flex-col justify-center items-center lg:my-5'>
                <h2 className={`text-black ${delaGothicOne.className} text-xl mb-3 lg:text-4xl`}>Romain Beka</h2>
                <p className={`text-[#696969] ${gothamLight.className} text-xs text-center lg:text-2xl lg:mt-5`}>Un concepteur de produits qui a créé des expériences utilisateur.</p>
              </div>
              <div className="flex space-x-6 lg:my-5">
                <a href="#linkedin" className="text-[#FF5900]"><FileUser size={30} /></a>
                <a href="#github" className="text-[#FF5900]"><AtSign size={30} /></a>
              </div>
            </div>
        </div> 

        <div className="w-xs h-auto mt-10 -ml-10 flex flex-col lg:w-3xl lg:ml-0 lg:mt-0"> {/* Contenu principal */}
          <div className="mb-7">
            <h1 className={`text-white ${delaGothicOne.className} uppercase mb-5 text-[45px] leading-[1.2] lg:text-7xl `}>web<p className="text-[#3D3D3F]">developer</p></h1>
            <p className={`text-[#999393] ${gothamLight.className} text-sm text-left leading-[1.4] lg:leading-normal lg:text-xl`}>Passionnée par la création d'expériences utilisateur intuitives et attrayantes. Spécialisée dans la transformation d'idées en produits magnifiquement conçus.</p>
          </div>

          <section className="flex flex-row space-x-11 mb-15 lg:gap-15">
            <div className="flex flex-col mr-2">
              <h2 className={`text-white ${delaGothicOne.className} text-3xl uppercase mb-5 lg:text-5xl`}>+10</h2>
              <p className={`text-[#999393] ${gothamLight.className} w-24 text-sm lg:text-lg`}>Projets personnels</p>
            </div>
            <div className="flex flex-col">
              <h2 className={`text-white ${delaGothicOne.className} text-3xl uppercase mb-5 lg:text-5xl`}>+3</h2>
              <p className={`text-[#999393] ${gothamLight.className} w-24 text-sm lg:text-lg`}>Années de développement</p>
            </div>
            <div className="flex flex-col">
              <h2 className={`text-white ${delaGothicOne.className} text-3xl uppercase mb-5 lg:text-5xl`}>+100</h2>
              <p className={`text-[#999393] ${gothamLight.className} w-12 text-sm lg:text-lg`}>Commit GIT</p>
            </div>
          </section>

          <section className="flex flex-col mb-15 lg:flex-row lg:gap-10 z-1"> {/* Cartes d'expertise */}
            <div className="w-90 bg-[#ff7a3d] h-64 mb-10 rounded-lg flex flex-col lg:mb-0">
              <div className="p-10 group relative overflow-hidden">

                {/* MOTIF */}
                <CardPattern color="#FF5900" className="rotate-12 scale-110" />

                {/* CONTENU */}
                <div className="relative z-10">
                  <AppWindow size={40} strokeWidth={1} className="text-white mb-8" />

                  <h1 className={`text-white ${gothamBook.className} text-lg uppercase`}>
                    APPLICATIONS MÉTIER & AUTOMATISATION
                  </h1>

                  <div className="w-full flex justify-end mt-5">
                    <SquareArrowRight
                      size={40}
                      strokeWidth={1}
                      className="text-white transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-90 bg-[#c6fc43] h-64 rounded-lg flex flex-col z-1 lg:w-100">
              <div className="p-10 group relative overflow-hidden">

                {/* MOTIF */}
                <ZigZagPattern color="#9AEE80" className="rotate-15 scale-110" />

                {/* CONTENU */}
                <div className="relative z-10">
                  <FolderCode size={40} strokeWidth={1} className="text-black mb-8" />

                  <h1 className={`text-black ${gothamBook.className} w-40 text-lg uppercase`}>
                    FULL STACK WEB & .NET
                  </h1>

                  <div className="w-full flex justify-end mt-5">
                    <SquareArrowRight
                      size={40}
                      strokeWidth={1}
                      className="text-black transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mb-15 scroll-mt-30" id='projects'> {/* Première section */}
            <h1 className={`text-white ${delaGothicOne.className} text-[45px] lg:text-7xl uppercase mb-10`}>Ce que je <p className="text-[#3D3D3F]">developpe</p></h1>
            <a href="#projects">
              <section className="scroll-mt-100 mb-7 w-90 lg:w-full" id='projects'>
                <div className="flex flex-row">
                  <div className="flex flex-col w-full">
                    <h2 className={`text-white ${delaGothicOne.className} text-base lg:text-xl`}>Application métier</h2>
                    <p className={`text-[#696969] ${delaGothicOne.className} text-xs lg:text-base mt-2`}>Applications conçues pour répondre à des besoins concrets : gestion, suivi, automatisation de processus.</p>
                  </div>
                    <div className="text-[#FF5900] ml-25">
                      <ArrowUpRight size={40} />
                    </div>
                </div>
              </section>
            </a>
            <a href="#projects">
                <section className="mb-7 w-90 lg:w-full">
                  <div className="flex flex-row">
                    <div className="flex flex-col w-full">
                      <h2 className={`text-white ${delaGothicOne.className} text-base lg:text-xl`}>Automatisation & Outils</h2>
                      <p className={`text-[#696969] ${delaGothicOne.className} text-xs lg:text-base mt-2`}>Scripts, bots et systèmes visant à simplifier, accélérer et fiabiliser les tâches répétitives.</p>
                    </div>
                    <div className="text-[#FF5900] ml-25">
                      <ArrowUpRight size={40} />
                    </div>
                  </div>
                </section>
            </a>
            <a href="#projects">
              <section className="mb-7 w-90 lg:w-full">
                <div className="flex flex-row">
                  <div className="flex flex-col w-full">
                    <h2 className={`text-white ${delaGothicOne.className} text-base lg:text-xl`}>Applications web & Full Stack</h2>
                    <p className={`text-[#696969] ${delaGothicOne.className} text-xs lg:text-base mt-2`}>Applications web complètes, du front à la logique backend, avec une attention portée à la maintenabilité.</p>
                  </div>
                  <div className="text-[#FF5900] ml-25">
                    <ArrowUpRight size={40} />
                  </div>
                </div>
              </section>     
            </a> 
          </div>

          <div className="mb-10 scroll-mt-30 z-1" id='about'> {/* Deuxième section */}
            <h1 className={`text-white ${delaGothicOne.className} text-[55px] lg:text-7xl uppercase mb-15`}>Mes <p className="text-[#3D3D3F]">projets</p></h1>
            <section className="flex flex-col lg:flex-row gap-5"> {/* Cartes d'expertise */}
              <div className="w-90 bg-[#499479] h-64 rounded-lg lg:mb-5 flex flex-col">
                <div className="p-10 group relative overflow-hidden">

                  {/* MOTIF */}
                  <CardPattern color="#46BA86" className="rotate-12 scale-110" />

                  {/* CONTENU */}
                  <div className="relative z-10">
                    <Nuxt className="w-10 h-10 text-white mb-8" />

                    <h1 className={`text-white ${gothamBook.className} text-lg uppercase`}>
                      APPLICATIONS MÉTIER & AUTOMATISATION
                    </h1>

                    <div className="w-full flex justify-end mt-5">
                      <SquareArrowRight
                        size={40}
                        strokeWidth={1}
                        className="text-white transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-90 bg-[#943CAB] h-64 rounded-lg mb-5 flex flex-col">
                <div className="p-10 group relative overflow-hidden">

                  {/* MOTIF */}
                  <ZigZagPattern color="#812B97" className="rotate-15 scale-110" />

                  {/* CONTENU */}
                  <div className="relative z-10">
                    <CSharp className="w-10 h-10 text-white mb-8" />

                    <h1 className={`text-white ${gothamBook.className} w-60 text-lg uppercase`}>
                      APPLICATION DE GESTION DE CRÉDITS
                    </h1>

                    <div className="w-full flex justify-end mt-5">
                      <SquareArrowRight
                        size={40}
                        strokeWidth={1}
                        className="text-white transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col lg:flex-row gap-5"> {/* Cartes d'expertise */}
            <div className="w-90 bg-[#000000] h-64 rounded-lg lg:mb-5 flex flex-col">
              <div className="p-10 group relative overflow-hidden">

                {/* MOTIF */}
                <ZigZagPattern color="#505050" className="rotate-15 scale-110" />

                {/* CONTENU */}
                <div className="relative z-10">
                  <Next className="w-10 h-10 text-white mb-8" />

                  <h1 className={`text-white ${gothamBook.className} w-50 text-lg uppercase`}>
                    APPLICATIONS WEB FULL STACK
                  </h1>

                  <div className="w-full flex justify-end mt-5">
                    <SquareArrowRight
                      size={40}
                      strokeWidth={1}
                      className="text-white transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-90 bg-[#151C2C] h-64 rounded-lg mb-5 lg:mb-15 flex flex-col">
              <div className="p-10 group relative overflow-hidden">

                {/* MOTIF */}
                <CardPattern color="#43A6B0" className="rotate-12 scale-110" />

                {/* CONTENU */}
                <div className="relative z-10">
                  <Tailwind className="w-10 h-10 text-white mb-8" />

                  <h1 className={`text-white ${gothamBook.className} w-40 text-lg uppercase`}>
                    OUTIL D’AUTOMATISATION
                  </h1>

                  <div className="w-full flex justify-end mt-5">
                    <SquareArrowRight
                      size={40}
                      strokeWidth={1}
                      className="text-white transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            </section>
          </div>

          <div className="mb-15 scroll-mt-30" id='approche'> {/* Troisième section similaire */}
            <h1 className={`text-white ${delaGothicOne.className} text-[45px] lg:text-7xl uppercase mb-10`}>Mon<p className="text-[#3D3D3F]">Approche</p></h1>
            <section className="mb-7">
              <div className="flex flex-row w-90 lg:w-full">
                <div className="flex flex-col w-full ">
                  <h2 className={`text-white ${delaGothicOne.className} text-base lg:text-xl`}>Conception d’applications</h2>
                  <p className={`text-[#696969] ${delaGothicOne.className} text-xs lg:text-base mt-2`}>Analyse du besoin, conception de solutions claires et maintenables.</p>
                </div>
                <div className="text-[#FF5900] ml-25">
                  <h3 className={`${delaGothicOne.className} text-3xl text-right`}>1</h3>
                </div>
              </div>
            </section>   
            <section className="mb-7">
              <div className="flex flex-row w-90 lg:w-full">
                <div className="flex flex-col w-full">
                  <h2 className={`text-white ${delaGothicOne.className} text-base lg:text-xl`}>Développement Full Stack</h2>
                  <p className={`text-[#696969] ${delaGothicOne.className} text-xs lg:text-base mt-2`}>Du front utilisateur à la logique backend.</p>
                </div>
                <div className="text-[#FF5900] ml-25">
                  <h3 className={`${delaGothicOne.className} text-3xl text-right`}>2</h3>
                </div>
              </div>
            </section>   
            <section className="mb-7">
              <div className="flex flex-row w-90 lg:w-full">
                <div className="flex flex-col w-full">
                  <h2 className={`text-white ${delaGothicOne.className} text-base lg:text-xl`}>Automatisation</h2>
                  <p className={`text-[#696969] ${delaGothicOne.className} text-xs lg:text-base mt-2 w-full`}>Création d’outils pour réduire les tâches répétitives.</p>
                </div>
                <div className="text-[#FF5900] ml-25">
                  <h3 className={`${delaGothicOne.className} text-3xl text-right`}>3</h3>
                </div>
              </div>
            </section>   
            <section className="mb-7">
              <div className="flex flex-row w-90 lg:w-full">
                <div className="flex flex-col w-full">
                  <h2 className={`text-white ${delaGothicOne.className} text-base lg:text-xl`}>Déploiement</h2>
                  <p className={`text-[#696969] ${delaGothicOne.className} text-xs lg:text-base mt-2`}>Mise en production et suivi des applications.</p>
                </div>
                <div className="text-[#FF5900] ml-25">
                  <h3 className={`${delaGothicOne.className} text-3xl text-right`}>4</h3>
                </div>
              </div>
            </section>     
          </div>

          <div className="mb-15" id='contact'> {/* Quatrième section similaire */}
            <h1 className={`text-white ${delaGothicOne.className} text-[50px] lg:text-7xl uppercase mb-5 lg:mb-10`}>Prendre<p className="text-[#3D3D3F]">Contact</p></h1>
            <p className={`text-[#999393] ${gothamLight.className} text-base lg:text-lg text-left`}>Un projet, une question ou une opportunité ? <br />Je suis ouvert à la discussion.</p>

            <div className="flex flex-row justify-center text-center space-x-10 lg:space-x-16 mt-10 lg:mt-20 text-[#FF5900]">
              <a href="mailto:contact@romainbeka@outlook.fr"><Mail size={40} /></a>
              <a href="https://www.linkedin.com/in/romain-beka-8330481a4/"><Linkedin size={40} /></a>
              <a href="https://github.com/Niooxis"><Github size={40} /></a>
            </div>
          </div>
        </div>
 
      </section> 
    
    </main>
  );
}