import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
            Get in Touch
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto animate__animated animate__fadeInUp">
            Have questions? We'd love to hear from you. Send us a message and
            we'll get back to you shortly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <div className="bg-neutral-900 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-full">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-neutral-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-full">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-neutral-400">contact@analytics.com</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-full">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Office</h3>
                  <p className="text-neutral-400">
                    123 Analytics Street, Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="bg-neutral-900 p-8 rounded-lg animate__animated animate__fadeInRight"
            data-dashlane-rid="5f3a315a6362853a"
            data-dashlane-classification="contact"
          >
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-neutral-400 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  data-dashlane-rid="e48f59e76a5192e0"
                  data-dashlane-classification="name,first"
                  data-kwimpalastatus="alive"
                  data-kwimpalaid="1736081492483-0"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-neutral-400 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  data-dashlane-rid="2e537839c5731f4e"
                  data-dashlane-classification="name,last"
                  data-kwimpalastatus="alive"
                  data-kwimpalaid="1736081492483-1"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                data-dashlane-rid="62d5ef0508d79552"
                data-dashlane-classification="email"
                data-kwimpalastatus="alive"
                data-kwimpalaid="1736081492483-2"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-neutral-400 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                data-dashlane-rid="27c6c45b3408a27d"
                data-dashlane-classification="other"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                data-dashlane-rid="9598a704bc752703"
                data-dashlane-classification="other"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              data-dashlane-label="true"
              data-dashlane-rid="a7ef9add1db122a0"
              data-dashlane-classification="other"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
