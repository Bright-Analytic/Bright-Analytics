import React from 'react'

export default function Pricing() {
  return (
    <section id="pricing" className="bg-neutral-900 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Choose the perfect plan for your business needs
        </p>
      </div>
 
      <div className="grid md:grid-cols-3 gap-8">
        
        <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-blue-500 transition-colors duration-300 animate__animated animate__fadeInUp">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Starter</h3>
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Popular</span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-neutral-400">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Up to 5,000 visitors/month
            </li>
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Basic analytics dashboard
            </li>
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              3 team members
            </li>
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Email support
            </li>
          </ul>
          <button className="w-full bg-neutral-700 text-white py-3 rounded-lg hover:bg-neutral-600 transition-colors duration-300">
            Get Started
          </button>
        </div>
 
        
        <div className="bg-neutral-800 rounded-2xl p-8 border-2 border-blue-500 transform scale-105 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Professional</h3>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Recommended</span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$99</span>
            <span className="text-neutral-400">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Up to 50,000 visitors/month
            </li>
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Advanced analytics features
            </li>
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              10 team members
            </li>
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Priority support
            </li>
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Custom reporting
            </li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Get Started
          </button>
        </div>
 
        
        <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-blue-500 transition-colors duration-300 animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Enterprise</h3>
            <span className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-sm">Custom</span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">Custom</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Unlimited visitors
            </li>
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Full feature access
            </li>
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Unlimited team members
            </li>
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              24/7 dedicated support
            </li>
            <li className="flex items-center text-neutral-300">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Custom integration
            </li>
          </ul>
          <button className="w-full bg-neutral-700 text-white py-3 rounded-lg hover:bg-neutral-600 transition-colors duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}
