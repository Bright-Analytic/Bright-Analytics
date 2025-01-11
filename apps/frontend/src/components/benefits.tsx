import React from "react";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Our Analytics Platform?
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Transform your business with data-driven insights and powerful
            analytics tools
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4 items-start animate__animated animate__fadeInLeft">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  10x Faster Analysis
                </h3>
                <p className="text-neutral-400">
                  Process and analyze large datasets in seconds with our
                  optimized analytics engine.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate__animated animate__fadeInLeft animate__delay-1s">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Enterprise-Grade Security
                </h3>
                <p className="text-neutral-400">
                  Bank-level encryption and security measures to protect your
                  sensitive data.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate__animated animate__fadeInLeft animate__delay-2s">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Real-Time Updates
                </h3>
                <p className="text-neutral-400">
                  Get instant insights with real-time data processing and live
                  dashboards.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:mt-12 relative">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 animate__animated animate__fadeInRight">
              <div className="relative">
                <div className="bg-neutral-800 rounded-xl p-6 mb-6 shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-white font-semibold">
                      Performance Metrics
                    </h4>
                    <span className="text-blue-500">+24%</span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-blue-500"></div>
                    </div>
                    <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-purple-500"></div>
                    </div>
                    <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-green-500"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-semibold">
                      Growth Analysis
                    </h4>
                    <span className="text-green-500">↑ 12.5%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-neutral-700/50 p-3 rounded-lg">
                      <div className="text-sm text-neutral-400">Users</div>
                      <div className="text-white font-semibold">2.4k</div>
                    </div>
                    <div className="bg-neutral-700/50 p-3 rounded-lg">
                      <div className="text-sm text-neutral-400">Revenue</div>
                      <div className="text-white font-semibold">$32k</div>
                    </div>
                    <div className="bg-neutral-700/50 p-3 rounded-lg">
                      <div className="text-sm text-neutral-400">Growth</div>
                      <div className="text-white font-semibold">+18%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
