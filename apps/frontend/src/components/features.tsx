import React from "react";
import { IoPieChartSharp } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { BsDatabaseCheck } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";

export default function Features() {
  return (
    <div className="items-center relative flex justify-center mx-auto py-10 bg-white border-t text-neutral-800 border-zinc-100">
      <div className="max-w-7xl">
        <h2 className="text-center text-4xl">Our Analytics Services</h2>
        <h3 className="text-center text-sm mt-1 mx-auto text-neutral-600 py-2 max-w-2xl">
          Discover how our comprehensive analytics solutions can transform your
          business data into actionable insights
        </h3>

        <div className="grid my-5 md:grid-cols-2 lg:grid-cols-3 gap-8 animate__animated animate__fadeIn">
          <div className="bg-gray-100 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
            <div className="bg-white border rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-neutral-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Data Analysis</h3>
            <p className="text-gray-600 text-sm">
              Transform raw data into meaningful insights with our advanced
              analysis tools
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
            <div className="bg-white border rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <IoPieChartSharp className="w-6 h-6" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">
              Business Intelligence
            </h3>
            <p className="text-gray-600 text-sm">
              Make data-driven decisions with our comprehensive BI solutions
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
            <div className="bg-white border rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <FaBrain className="w-6 h-6" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Predictive Analytics</h3>
            <p className="text-gray-600 text-sm">
              Forecast trends and prepare for future opportunities with
              ML-powered analytics
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
            <div className="bg-white border rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <TbReportAnalytics className="w-6 h-6" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Custom Reports</h3>
            <p className="text-gray-600 text-sm">
              Tailored reporting solutions designed to meet your specific needs
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
            <div className="bg-white border rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <BsDatabaseCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Data Integration</h3>
            <p className="text-gray-600 text-sm">
              Seamlessly connect and analyze data from multiple sources
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
            <div className="bg-white border rounded-xl w-12 h-12 flex items-center justify-center mb-4">
              <MdOutlineDesignServices className="w-6 h-6" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Consulting Services</h3>
            <p className="text-gray-600 text-sm">
              Expert guidance to maximize the value of your analytics investment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
