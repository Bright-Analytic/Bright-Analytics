import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-neutral-900 min-h-[70vh] flex items-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate__animated animate__fadeIn"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate__animated animate__fadeInUp">
              Transform Your Data Into
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Actionable Insights
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              Powerful analytics platform that helps you understand your data,
              make better decisions, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate__animated animate__fadeInUp animate__delay-2s">
              <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold">
                Get Started Free
              </button>
              <button className="px-8 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-300 font-semibold flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Watch Demo
              </button>
            </div>
            <div className="mt-8 text-gray-400 flex items-center justify-center lg:justify-start gap-4 animate__animated animate__fadeInUp animate__delay-3s">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-neutral-700"></div>
                <div className="w-8 h-8 rounded-full bg-neutral-600"></div>
                <div className="w-8 h-8 rounded-full bg-neutral-500"></div>
              </div>
              <span>Trusted by 10,000+ companies worldwide</span>
            </div>
          </div>

          <div className="relative animate__animated animate__fadeInRight animate__delay-1s">
            <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
              <div className="bg-neutral-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-neutral-700 rounded-full w-3/4"></div>
                  <div className="h-4 bg-neutral-700 rounded-full w-1/2"></div>
                  <div className="h-32 bg-neutral-700 rounded-xl mt-4"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-neutral-700 rounded-xl"></div>
                    <div className="h-20 bg-neutral-700 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
