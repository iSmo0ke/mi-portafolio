import React, { useState } from 'react';

const certificatesData = [
  {
    id: 1,
    title: 'Get Connected',
    issuer: 'Cisco Networking Academy',
    date: 'Septiembre 2022',
    year: '2022',
    credentialUrl: '/public/certificados/2022/get-connected.pdf' 
  },
  {
    id: 2,
    title: 'Citas y referencias bibliográficas',
    issuer: 'Capacítate para el empleo',
    date: 'Noviembre 2022',
    year: '2022',
    credentialUrl: '/public/certificados/2022/citas.pdf'
  },
  {
    id: 3,
    title: 'Introducción a Redes',
    issuer: 'Cisco Networking Academy',
    date: 'Febrero 2023',
    year: '2023',
    credentialUrl: '/public/certificados/2022/fundamentos.pdf' 
  },
  {
    id: 4,
    title: 'La moral y la responsabilidad en nuestra toma de decisiones',
    issuer: 'Aprendo+',
    date: 'Junio 2023',
    year: '2023',
    credentialUrl: '/public/certificados/2023/moral.pdf' 
  },
  {
    id: 5,
    title: 'De gamer a experto AWS',
    issuer: 'Netec',
    date: 'Noviembre 2023',
    year: '2023',
    credentialUrl: '/public/certificados/2023/aws.pdf'
  },
  
  {
    id: 6,
    title: 'Tester',
    issuer: 'Capacítate para el empleo',
    date: 'Noviembre 2023',
    year: '2023',
    credentialUrl: '/certificados/2022/fundamentos.pdf' 
  },
  {
    id: 7,
    title: 'Hacking Ético Gamificado',
    issuer: 'Academia de Ciberseguridad',
    date: 'Marzo 2024',
    year: '2024',
    credentialUrl: '/public/certificados/2024/hacking.pdf' 
  },
    {
    id: 8,
    title: 'Scrum Fundamentals Certified',
    issuer: 'SCRUMstudy',
    date: 'Agosto 2024',
    year: '2024',
    credentialUrl: '/public/certificados/2024/scrum.pdf' 
  },
  {
    id: 9,
    title: 'CONITI-2025',
    issuer: 'Universidad Tecnológica de Tehuacán',
    date: 'Noviembre 2025',
    year: '2025',
    credentialUrl: '/public/certificados/2025/coniti.pdf' 
  },
  {
    id: 10,
    title: 'EXCEL INTERMEDIO AVANZADO Y POWER BI',
    issuer: 'Global Click',
    date: 'Enero 2026',
    year: '2026',
    credentialUrl: '/public/certificados/2026/excel.pdf' 
  },
];

export default function Certificates() {
  const [activeYear, setActiveYear] = useState('Todos');

  const uniqueYears = [...new Set(certificatesData.map(cert => cert.year))].sort((a, b) => b - a);
  const filterOptions = ['Todos', ...uniqueYears];

  const filteredCertificates = activeYear === 'Todos' 
    ? certificatesData 
    : certificatesData.filter(cert => cert.year === activeYear);

  return (
    <section id="certificados" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Mis <span className="text-blue-500">Certificados y Talleres</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map(year => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeYear === year
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40'
                  : 'bg-gray-900 text-gray-400 border border-gray-700 hover:text-white hover:border-blue-500'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <article 
              key={cert.id} 
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 font-medium text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-6">{cert.date}</p>
              </div>
              
              <a 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-center w-full py-2 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white font-medium rounded-lg transition-colors border border-gray-700 hover:border-blue-600"
              >
                Ver Documento
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}