import { useState, useEffect } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfileCard from './components/ProfileCard'
import TechCard from './components/TechCard'
import { FaReact, FaNodeJs, FaJava, FaPython, FaAws, FaDocker } from 'react-icons/fa'
import { DiCode } from 'react-icons/di'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Badges from './components/Badges'
import Footer from './components/Footer'
import Projects from './components/Projects'

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="bg-gradient-to-r from-black to-indigo-800 min-h-screen w-full flex flex-col items-center justify-center">
      <ProfileCard />
      <div className="bg-gray-100 min-h-screen w-full rounded-[3rem] py-24 px-4 sm:px-8 md:px-16">
        <Badges data-aos="fade-up"/>
        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 items-start justify-items-center py-24">
          <TechCard
          icon={FaReact}
          label="React"
          description="Experiencia en la creación de interfaces dinámicas basadas en componentes con React. Familiarizado con hooks, 
          gestión de estado e integración con APIs."
          data-aos="fade-up"
        />
        <TechCard
          icon={FaNodeJs}
          label="Node.js"
          description="Desarrolló aplicaciones del lado del servidor rápidas y escalables usando Node.js, 
          implementando especialmente integraciones de webhooks y habilitando flujo de datos en tiempo real mediante WebSockets."
          data-aos="fade-up"
        />
        <TechCard
          icon={FaJava}
          label="Java + Spring Boot"
          description="Desarrolló APIs de alto rendimiento utilizando Spring Boot, con bases de datos relacionales 
          y no relacionales. Con experiencia en la integración de API Gateways, aplicación de autenticación mediante Spring Security, y uso de JPA para persistencia de datos."
          data-aos="fade-up"
        />
        <TechCard
          icon={FaPython}
          label="Python + FastAPI & ML/IA"
          description="Diseñó soluciones elegantes basadas en datos usando Python, combinando FastAPI para 
          APIs backend ligeras con sólidas capacidades de aprendizaje automático. Con experiencia en bibliotecas como Scikit-learn y Hugging Face Transformers."
          data-aos="fade-up"
        />
        <TechCard
          icon={FaAws}
          label="AWS"
          description="Arquitecta y despliega soluciones cloud-first utilizando una suite de servicios de AWS. 
          Competente en Lambda para computación sin servidor, S3 para almacenamiento escalable, ECS para orquestación de contenedores, y con habilidades en integración de servidores FTP."
          data-aos="fade-up"
        />
        <TechCard
          icon={FaDocker}
          label="Docker & Kubernetes"
          description="Contenerizó diversas aplicaciones para optimizar el desarrollo y despliegue 
          en distintos entornos. Con experiencia en construir imágenes Docker eficientes, orquestar configuraciones multi-contenedor y desplegar microservicios."
          data-aos="fade-up"
        />

        </div>
      </div>
      <Projects/>
      <Footer />
    </div>
  )
}

export default App
