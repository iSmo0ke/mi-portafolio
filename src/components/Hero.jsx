// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900 text-white">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
        Hola, soy <span className="text-blue-500">Jesús Altamirano Carrillo</span>
      </h1>
      
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
        Desarrollador de Software | Optimización de Sistemas
      </h2>
      
      <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
        Desarrollador de Software enfocado en la resolución de problemas técnicos. Aplico la autonomía, gestión del tiempo y adaptabilidad para transformar 
        ideas en aplicaciones funcionales, asegurando el mejor rendimiento en cada línea de código.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
        <a 
          href="#proyectos" 
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg shadow-blue-500/30"
        >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
          Ver Proyectos
        </a>
        <a 
          href="/public/CV/CV Jesus Altamirano Carrillo- v4.pdf" download
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-900/30 font-medium rounded-lg transition-colors duration-300"
        >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
          Descargar CV
        </a>
      </div>
    </section>
  );
}