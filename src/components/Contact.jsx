import React from 'react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 bg-gray-900 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          ¿Listo para <span className="text-blue-500">conectar?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          Actualmente estoy buscando nuevas oportunidades como Desarrollador de Software. 
          Si tienes una vacante, una pregunta técnica o simplemente quieres platicar sobre código o hardware, ¡mi bandeja de entrada está abierta!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:tu-correo@ejemplo.com" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Envíame un Correo
          </a>
          
          <a 
            href="https://linkedin.com/in/tu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-8 py-4 bg-gray-900 border border-gray-700 hover:border-blue-500 hover:text-blue-400 text-gray-300 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            LinkedIn
          </a>
          
          <a 
            href="https://github.com/tu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-8 py-4 bg-gray-900 border border-gray-700 hover:border-white hover:text-white text-gray-300 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}