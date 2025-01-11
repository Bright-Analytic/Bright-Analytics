import React from "react";

export default function Integrations() {
  return (
    <section id="integrations" className="bg-neutral-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">
            Seamless <span className="text-violet-500">Integrations</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Connect with your favorite tools and supercharge your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#4A154B] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Slack</span>
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold text-lg">
                  Slack Integration
                </h3>
                <p className="text-gray-400 text-sm">Real-time notifications</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Get analytics updates directly in your Slack channels
            </p>
            <button className="text-violet-400 hover:text-violet-300 flex items-center">
              Connect
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#FF4A00] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Zapier</span>
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold text-lg">
                  Zapier Integration
                </h3>
                <p className="text-gray-400 text-sm">Automated workflows</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Automate tasks between 3000+ apps
            </p>
            <button className="text-violet-400 hover:text-violet-300 flex items-center">
              Connect
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#00A4EF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MS</span>
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold text-lg">
                  Microsoft Integration
                </h3>
                <p className="text-gray-400 text-sm">Office 365 connection</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Sync with Microsoft tools seamlessly
            </p>
            <button className="text-violet-400 hover:text-violet-300 flex items-center">
              Connect
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#4285F4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold text-lg">
                  Google Integration
                </h3>
                <p className="text-gray-400 text-sm">Google Workspace sync</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Connect with Google's powerful tools
            </p>
            <button className="text-violet-400 hover:text-violet-300 flex items-center">
              Connect
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#000000] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold text-lg">
                  Notion Integration
                </h3>
                <p className="text-gray-400 text-sm">Documentation sync</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Keep your docs and analytics in sync
            </p>
            <button className="text-violet-400 hover:text-violet-300 flex items-center">
              Connect
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#0079BF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold text-lg">
                  Trello Integration
                </h3>
                <p className="text-gray-400 text-sm">Project tracking</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Link analytics with your project boards
            </p>
            <button className="text-violet-400 hover:text-violet-300 flex items-center">
              Connect
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
