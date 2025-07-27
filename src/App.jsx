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
            description="Experienced building dynamic, component-based UIs with React. Familiar with hooks, 
            state management, and integrating with APIs."
            data-aos="fade-up"
          />
          <TechCard
            icon={FaNodeJs}
            label="Node.js"
            description="Built fast, scalable server-side applications using Node.js, 
            especially implementing webhook integrations and enabling real-time data flow via WebSockets."
            data-aos="fade-up"
          />
          <TechCard
            icon={FaJava}
            label="Java + Spring Boot"
            description="Crafted high-performance APIs using Spring Boot, with both relational 
            and non-relational databases. Well-versed in integrating API Gateways, enforcing authentication via Spring Security, and leveraging JPA for data persistence."
            data-aos="fade-up"
          />
          <TechCard
            icon={FaPython}
            label="Python + FastAPI & ML/AI"
            description="Designed elegant, data-driven solutions using Python, blending FastAPI for 
            lightweight backend APIs with robust machine learning capabilities. Experienced with libraries like Scikit-learn and Hugging Face Transformers."
            data-aos="fade-up"
          />
          <TechCard
            icon={FaAws}
            label="AWS"
            description="Architects and deploys cloud-first solutions using a suite of AWS services. 
            Proficient with Lambda for serverless computing, S3 for scalable storage, ECS for container orchestration, and skilled in integrating FTP servers."
            data-aos="fade-up"
          />
          <TechCard
            icon={FaDocker}
            label="Docker & Kubernetes"
            description="Containerized diverse applications to streamline development and deployment 
            across environments. Experienced in building efficient Docker images, orchestrating multi-container setups, and deploying microservices."
            data-aos="fade-up"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
