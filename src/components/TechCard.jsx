import React from "react";

export default function TechCard({ icon: Icon, label, description, ...rest }) {
  return (
    <div
      {...rest}
      className="group w-full sm:w-[20rem] transition-transform duration-500 ease-in-out"
    >
      <div className="bg-indigo-800 text-white px-6 py-6 rounded-2xl shadow-lg transform group-hover:scale-105 
            transition-transform duration-500 min-h-[240px] flex flex-col justify-start">
        <div className="flex items-center gap-3 mb-4 min-h-[4rem]">
          <Icon className="text-3xl text-white shrink-0" />
          <h2 className="text-xl font-semibold">{label}</h2>
        </div>

        <div className="flex-1">
          <p className="text-sm text-indigo-100 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
