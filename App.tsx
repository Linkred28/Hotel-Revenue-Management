
import React, { useEffect } from 'react';
import { tools } from './constants';

const App: React.FC = () => {

    useEffect(() => {
        const slides = document.querySelectorAll('.slide-content');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        slides.forEach(slide => {
            observer.observe(slide);
        });

        return () => {
            slides.forEach(slide => {
                observer.unobserve(slide);
            });
        };
    }, []);

    return (
        <div className="presentation-container">

            {/* Slide 1: Cover */}
            <section id="slide1" className="slide bg-primary-blue text-white">
                <div className="slide-content text-center">
                    <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6">
                        Revenue Management y Optimización Financiera
                    </h1>
                    <p className="text-2xl md:text-4xl text-gray-300">Sección: Administración + Gerencia</p>
                </div>
            </section>


            {/* Slide 2: Common Problems */}
            <section id="slide2" className="slide bg-white">
                <div className="slide-content">
                    <h2 className="text-4xl md:text-6xl font-bold text-dark mb-16 text-center">Áreas de oportunidad:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
                            <p className="text-dark text-xl md:text-2xl font-semibold">La estrategia de precios actual carece de dinamismo y ajustes oportunos, lo que limita el potencial de ingresos y la competitividad frente a otros hoteles de la zona.</p>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                            <p className="text-dark text-xl md:text-2xl font-semibold">
                                Los servicios adicionales no se monetizan de manera estructurada.
                                <span className="block mt-2 text-gray-600 font-normal">
                                    (lavandería, transporte, upgrades, estacionamiento y desayuno)
                                </span>
                            </p>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 21.75a8.967 8.967 0 01-5.454-1.31m5.454 0L13.988 15.51a23.848 23.848 0 00-5.454-1.31M13.988 15.51a23.848 23.848 0 01-5.454-1.31A8.967 8.967 0 016 21.75a8.967 8.967 0 01-5.454-1.31M6 21.75L3.143 17.082m2.857 0L6 15.51a23.848 23.848 0 015.454-1.31m5.454 0L14.988 17.082" /></svg>
                           <p className="text-dark text-xl md:text-2xl font-semibold">
                                La gerencia carece de tableros financieros que muestren ROI en tiempo real.
                                <span className="block mt-2 text-gray-600 font-normal">
                                    (Return On Investment – cuánto se recupera por cada peso invertido)
                                </span>
                           </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slide 3: What We Do */}
            <section id="slide3" className="slide bg-primary-dark">
                 <div className="slide-content">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">El enfoque que sugerimos es:</h2>
                    <div className="max-w-5xl mx-auto space-y-8">
                        <div className="bg-light p-6 rounded-xl shadow-lg flex items-center space-x-6 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V6a2.25 2.25 0 012.25-2.25h3.75a2.25 2.25 0 012.25 2.25v.75m-10.5 6v6a2.25 2.25 0 002.25 2.25h3.75a2.25 2.25 0 002.25-2.25v-6" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75h3.75m-3.75 3h3.75M9 18h3.75m-3.75-9h3.75" /></svg>
                            <p className="text-dark text-xl md:text-2xl font-semibold">Definimos políticas claras de tarifas dinámicas por segmento y temporada.</p>
                        </div>
                        <div className="bg-light p-6 rounded-xl shadow-lg flex items-center space-x-6 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                            <p className="text-dark text-xl md:text-2xl font-semibold">
                                Implementamos tableros financieros con indicadores clave:
                                <span className="block mt-2 font-normal text-gray-700">
                                    ADR (Average Daily Rate – tarifa promedio que pagan los huéspedes por cada habitación ocupada)
                                </span>
                                <span className="block mt-2 font-normal text-gray-700">
                                    y RevPAR (Revenue per Available Room – ingreso promedio por cada habitación disponible, incluyendo las que no se ocuparon).
                                </span>
                            </p>
                        </div>
                        <div className="bg-light p-6 rounded-xl shadow-lg flex items-center space-x-6 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
                            <p className="text-dark text-xl md:text-2xl font-semibold">Diseñamos esquemas de revenue management con IA (modelos que predicen la demanda y ayudan a ajustar precios automáticamente).</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Slide 4: Benefits */}
            <section id="slide4" className="slide bg-white">
                <div className="slide-content">
                    <h2 className="text-4xl md:text-6xl font-bold text-dark mb-16 text-center">📊 Beneficios:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-200 h-full justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h3 className="font-semibold text-xl md:text-2xl text-dark">Incremento de ingresos en 20–25% en 12 meses.</h3>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-200 h-full justify-center">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h3 className="font-semibold text-xl md:text-2xl text-dark">Mayor rentabilidad de estancias largas.</h3>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-200 h-full justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.43-7.108a1.012 1.012 0 011.59-.444l4.223 2.943a1.012 1.012 0 001.215 0l4.223-2.943a1.012 1.012 0 011.59.444l4.43 7.108a1.012 1.012 0 010 .639l-4.43 7.108a1.012 1.012 0 01-1.59.444l-4.223-2.943a1.012 1.012 0 00-1.215 0l-4.223-2.943a1.012 1.012 0 01-1.59-.444L2.036 12.322z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <h3 className="font-semibold text-xl md:text-2xl text-dark">Mejor control de márgenes y decisiones basadas en datos.</h3>
                        </div>
                    </div>
                </div>
            </section>


            {/* Slide 5: Deliverables */}
            <section id="slide5" className="slide bg-primary-dark">
                <div className="slide-content">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">📦 Entregables:</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                           "Políticas de revenue management → establecen reglas claras de precios dinámicos para maximizar ingresos según temporada y segmento.",
                           "Tableros financieros en Power BI → muestran en tiempo real indicadores como ADR y RevPAR, facilitando decisiones basadas en datos y no en intuición.",
                           "Plan de monetización de servicios adicionales → convierte extras como lavandería, transporte, upgrades, estacionamiento y desayuno en nuevas fuentes de ingresos estables."
                        ].map((item, index) => (
                            <div key={index} className="bg-light p-6 rounded-lg flex items-center space-x-6 text-left shadow-md transition-all hover:shadow-lg hover:bg-gray-200 border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10 text-accent-green flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                                <h3 className="font-semibold text-xl md:text-2xl text-dark">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Slide 6: KPIs */}
            <section id="slide6" className="slide bg-primary-blue">
                <div className="slide-content">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">📈 KPIs:</h2>
                    <div className="timeline-container">
                        <div className="timeline-item timeline-left">
                            <div className="timeline-content">
                                <h3 className="text-xl md:text-2xl font-bold text-dark">
                                    ADR
                                    <span className="block mt-2 font-normal text-gray-700">
                                        (tarifa promedio que pagan los huéspedes por cada habitación ocupada).
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className="timeline-item timeline-right">
                             <div className="timeline-content">
                                <h3 className="text-xl md:text-2xl font-bold text-dark">
                                    RevPAR
                                    <span className="block mt-2 font-normal text-gray-700">
                                        (ingreso promedio total considerando todas las habitaciones, incluso las que no se rentan).
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className="timeline-item timeline-left">
                            <div className="timeline-content">
                                <h3 className="text-xl md:text-2xl font-bold text-dark">
                                    % de ingresos por servicios complementarios
                                    <span className="block mt-2 font-normal text-gray-700">
                                        (qué parte del total proviene de extras como lavandería, transporte, upgrades, estacionamiento o desayuno).
                                    </span>
                                </h3>
                            </div>
                        </div>
                         <div className="timeline-item timeline-right">
                            <div className="timeline-content">
                                <h3 className="text-xl md:text-2xl font-bold text-dark">
                                    Margen operativo neto
                                    <span className="block mt-2 font-normal text-gray-700">
                                        (lo que realmente queda después de cubrir todos los costos operativos).
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slide 7: Tools */}
            <section id="slide7" className="slide bg-primary-dark">
                <div className="slide-content text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">🛠 Herramientas:</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                        {tools.map((tool, index) => (
                             <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-100">
                                <div className="h-28 w-28 md:h-32 md:w-32 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                    {tool.icon}
                                </div>
                                <span className="font-semibold text-xl text-dark">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default App;
