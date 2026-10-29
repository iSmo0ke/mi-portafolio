import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Cotizador de Ensambles PC',
    description: 'Aplicación web que permite a los usuarios seleccionar componentes de hardware y calcula la compatibilidad, el consumo en watts y el presupuesto total.',
    technologies: ['React', 'JavaScript', 'Node.js'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'Dashboard Financiero para Conductores',
    description: 'Plataforma para registrar viajes diarios, calcular el rendimiento de combustible por kilómetro y visualizar gráficas de ingresos netos semanales.',
    technologies: ['HTML', 'Tailwind', 'React', 'Chart.js'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'Sistema de Gestión (Prácticas)',
    description: 'Desarrollo de un sistema interno para la optimización de procesos, levantamiento de requerimientos y despliegue de módulos funcionales.',
    technologies: ['React', 'Express', 'MySQL'],
    githubUrl: '#',
    liveUrl: '#'
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Proyectos <span className="text-blue-500">Destacados</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <article 
              key={project.id} 
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-900 text-blue-400 text-sm font-medium rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto pt-4 border-t border-gray-700">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
                >
                  Ver Código
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
                >
                  Demo en Vivo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}