import React from 'react'

export default function Features () {
  return (
    
  <section id="services" className="bg-neutral-800 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
        Our Analytics Services
      </h2>
      <p className="text-neutral-400 max-w-2xl mx-auto animate__animated animate__fadeInUp">
        Discover how our comprehensive analytics solutions can transform your business data into actionable insights
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate__animated animate__fadeIn">
      <div className="bg-neutral-900 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
        <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Data Analysis</h3>
        <p className="text-neutral-400">Transform raw data into meaningful insights with our advanced analysis tools</p>
      </div>

      <div className="bg-neutral-900 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
        <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Business Intelligence</h3>
        <p className="text-neutral-400">Make data-driven decisions with our comprehensive BI solutions</p>
      </div>

      <div className="bg-neutral-900 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
        <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Predictive Analytics</h3>
        <p className="text-neutral-400">Forecast trends and prepare for future opportunities with ML-powered analytics</p>
      </div>

      <div className="bg-neutral-900 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
        <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Custom Reports</h3>
        <p className="text-neutral-400">Tailored reporting solutions designed to meet your specific needs</p>
      </div>

      <div className="bg-neutral-900 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
        <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Data Integration</h3>
        <p className="text-neutral-400">Seamlessly connect and analyze data from multiple sources</p>
      </div>

      <div className="bg-neutral-900 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
        <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Consulting Services</h3>
        <p className="text-neutral-400">Expert guidance to maximize the value of your analytics investment</p>
      </div>
    </div>
  </div>
</section>

  )
}
