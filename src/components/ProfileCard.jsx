import React from "react";

export default function ProfileCard() {
  return (
    <div 
      className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black to-indigo-800 text-white
      my-16 rounded-lg shadow-md md:h-[75vh] w-[90%] mx-auto px-6 py-10 space-y-10 md:space-y-0 md:space-x-12"
    >
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi! I'm Carlos.</h1>
        <p className="text-lg leading-relaxed">
          I'm a <span className="text-indigo-400 font-semibold"> Backend Developer </span> 
          with experience in designing scalable microservices, implementing CI/CD workflows, 
          and deploying containerized applications. I’ve worked extensively with relational and non-relational databases, 
          contributed to ML/AI-driven projects, and developed reliable systems backed by comprehensive testing practices.
        </p>
        <button 
          className="bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300 
          rounded-xl w-[60%] md:w-[40%] lg:w-[20%] h-12 mt-6 mx-auto md:mx-0"
        >
          Download CV
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center">
        <img 
          src="/carlos.webp" 
          alt="Profile" 
          className="w-[200px] md:w-[250px] lg:w-[500px] rounded-full object-contain"
        />
      </div>
    </div>
  );
}
