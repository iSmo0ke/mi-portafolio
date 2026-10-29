// src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Sobre <span className="text-blue-500">Mí</span>
        </h2>
        
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Soy un Ingeniero en Desarrollo de Software con experiencia práctica en arquitecturas Full-Stack y metodologías seguras. 
            Me apasiona crear herramientas digitales eficientes, estructurando sistemas robustos y escribiendo código limpio.
          </p>
          <p>
            Mi visión integral me permite abarcar todo el ciclo de desarrollo, desde la creación de servicios REST y bases de datos, hasta la integración de Inteligencia Artificial para optimizar procesos. 
            Busco siempre asegurar el rendimiento, la escalabilidad y la calidad del software que construyo.
          </p>
          
          <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500 shadow-lg mt-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Habilidades Transferibles</h3>
            <p className="text-gray-400 text-base">
              Durante mi etapa como desarrollador en Finasist, me especialicé en la mitigación de vulnerabilidades mediante análisis SAST y el manejo de datos sensibles. 
              Esta experiencia forjó mi capacidad para implementar técnicas de programación segura y validación estricta desde las primeras líneas de código, garantizando aplicaciones robustas y confiables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}