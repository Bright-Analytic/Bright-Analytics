import React from "react";

export default function DemoView() {
  return (
    <section
      id="demo"
      className="bg-neutral-900 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See Our Platform <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                in Action
              </span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8">
              Watch how our analytics platform can transform your data into
              actionable insights in minutes.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-neutral-300">
                  Real-time data visualization
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-neutral-300">
                  Customizable dashboards
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-neutral-300">
                  Advanced reporting features
                </span>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Watch Demo Video
            </button>
          </div>

          <div className="relative animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-neutral-700 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-neutral-700 h-32 rounded-lg animate-pulse"></div>
                  <div className="bg-neutral-700 h-32 rounded-lg animate-pulse"></div>
                </div>
                <div className="bg-neutral-700 h-40 rounded-lg mb-4 animate-pulse"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-neutral-700 h-24 rounded-lg animate-pulse"></div>
                  <div className="bg-neutral-700 h-24 rounded-lg animate-pulse"></div>
                  <div className="bg-neutral-700 h-24 rounded-lg animate-pulse"></div>
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
