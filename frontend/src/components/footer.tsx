import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" className="bg-neutral-900 text-neutral-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <div className="space-y-6">
          <div className="text-2xl font-bold text-white">Analytics<span className="text-blue-500">Pro</span></div>
          <p className="text-neutral-400">
            Transform your data into actionable insights with our powerful analytics platform.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
 
        
        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><a href="#features" className="hover:text-white transition-colors duration-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors duration-300">Pricing</a></li>
            <li><a href="#about" className="hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors duration-300">Testimonials</a></li>
          </ul>
        </div>
 
        
        <div>
          <h3 className="text-white font-semibold mb-6">Support</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
          </ul>
        </div>
 
        
        <div>
          <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
          <p className="mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
          <form className="space-y-4" data-dashlane-rid="9059171ef38a8e68" data-dashlane-classification="newsletter">
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-800 border border-neutral-700" data-dashlane-rid="bf616e8fdd237356" data-dashlane-classification="email" data-kwimpalastatus="alive" data-kwimpalaid="1736079264982-2"/>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-300" data-dashlane-label="true" data-dashlane-rid="840d37470267fd12" data-dashlane-classification="action,subscribe">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
 
      
      <div className="border-t border-neutral-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 AnalyticsPro. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
