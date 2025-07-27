import React from "react";
import { FaGraduationCap, FaCloud, FaCheckCircle } from "react-icons/fa";

export default function Badges() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 lg:gap-32 px-4 py-8">
      {/* Education */}
      <div className="flex flex-col items-center text-indigo-800 text-center max-w-[240px]">
        <FaGraduationCap className="text-4xl mb-2" />
        <h3 className="text-lg md:text-xl font-semibold">Education</h3>
        <p className="text-sm text-indigo-700 mt-1">
          Mechatronics Engineer at ITESM, 2021
        </p>
      </div>

      {/* Cloud Certifications */}
      <div className="flex flex-col items-center text-indigo-800 text-center max-w-[240px]">
        <FaCloud className="text-4xl mb-2" />
        <h3 className="text-lg md:text-xl font-semibold">Cloud Certifications</h3>
        <p className="text-sm text-indigo-700 mt-1">
          1 AWS & DevOps Credentials
        </p>
      </div>

      {/* Completed Projects */}
      <div className="flex flex-col items-center text-indigo-800 text-center max-w-[240px]">
        <FaCheckCircle className="text-4xl mb-2" />
        <h3 className="text-lg md:text-xl font-semibold">Completed Projects</h3>
        <p className="text-sm text-indigo-700 mt-1">
          +10 full-stack builds & client apps
        </p>
      </div>
    </div>
  );
}
