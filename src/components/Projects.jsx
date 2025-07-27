import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectCard({ title, description, image, alt }) {
  return (
    <div
      className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2"
      data-aos="fade-up"
    >
      <img
        src={image}
        alt={alt}
        className="rounded-md w-full h-72 object-cover mb-6"
      />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg text-indigo-100 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-black to-indigo-800 text-white my-16 rounded-lg w-[90%] mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold mb-12 text-center">Proyectos Recientes</h2>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch w-full space-y-10 md:space-y-0 md:space-x-12">
        <ProjectCard
          title="Control de Acceso con Raspberry Pi"
          image="/raspberrypi.webp"
          alt="Proyecto Uno"
          description="Sistema distribuido en Raspberry Pi con dos microservicios: uno en Python para gestión de usuarios, permisos, controles y logs; otro en FastAPI para el manejo de torniquetes y semáforos..."
        />
        <ProjectCard
          title="Sistema de Análisis Policial"
          image="/investigation.webp"
          alt="Proyecto Dos"
          description="Plataforma compuesta por más de 12 microservicios para el análisis de sábanas telefónicas, mapas geográficos, correlación de datos y más..."
        />
      </div>
    </div>
  );
}
