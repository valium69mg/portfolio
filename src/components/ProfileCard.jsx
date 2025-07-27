import React from "react";

export default function ProfileCard() {
  return (
    <div 
      className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black to-indigo-800 text-white
      my-16 rounded-lg shadow-md md:h-[75vh] w-[90%] mx-auto px-6 py-10 space-y-10 md:space-y-0 md:space-x-12"
    >
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">¡Hola! Soy <span className="text-indigo-400 font-semibold">
          Carlos.
        </span></h1>
        <p className="text-lg leading-relaxed">
          Soy <span className="text-indigo-400 font-semibold"> Desarrollador Backend </span> 
          con experiencia en el diseño de microservicios escalables, implementación de flujos de trabajo CI/CD, 
          y despliegue de aplicaciones contenedorizadas. He trabajado extensamente con bases de datos relacionales y no relacionales, 
          contribuido a proyectos impulsados por ML/IA, y desarrollado sistemas confiables respaldados por prácticas de pruebas integrales.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center">
        <img 
          src="/carlos.webp" 
          alt="Profile" 
          className="w-[200px] md:w-[250px] lg:w-[500px] rounded-full object-contain m-3"
        />
      </div>
    </div>
  );
}
