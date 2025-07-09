import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-clifford-white">
      {/* Header Section */}
      <header className="bg-clifford-navy text-clifford-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-clifford-blue rounded-lg flex items-center justify-center mr-3">
                <span className="text-clifford-navy font-bold text-xl">C</span>
              </div>
              <h1 className="text-xl font-bold">Clifford IT</h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-clifford-blue transition-colors">Services</a>
              <a href="#about" className="hover:text-clifford-blue transition-colors">About</a>
              <a href="#contact" className="hover:text-clifford-blue transition-colors">Contact</a>
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-clifford-blue text-clifford-navy py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Intelligent Technology Solutions
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Clifford IT specializes in software engineering, data analysis, and AI applications. 
            We harness cutting-edge technologies to automate processes and drive efficiency.
          </p>
          <button className="bg-clifford-navy text-clifford-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-clifford-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-clifford-navy mb-4">Our Services</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Software Engineering */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-clifford-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-clifford-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-clifford-navy mb-4">Software Engineering</h4>
              <p className="text-gray-600 leading-relaxed">
                Custom software development, system architecture, and application modernization to streamline your operations.
              </p>
            </div>

            {/* Data Engineering */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-clifford-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-clifford-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-clifford-navy mb-4">Data Engineering & Analysis</h4>
              <p className="text-gray-600 leading-relaxed">
                Data extraction, transformation, analysis, and management solutions to unlock insights from your data.
              </p>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-clifford-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-clifford-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-clifford-navy mb-4">AI & Machine Learning</h4>
              <p className="text-gray-600 leading-relaxed">
                Intelligent automation and machine learning applications to revolutionize your business processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-clifford-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-clifford-navy mb-8">About Clifford IT</h3>
          <div className="text-clifford-navy text-lg leading-relaxed space-y-6">
            <p>
              At Clifford IT, we believe in the intelligent application of cutting-edge technologies 
              to solve real-world business challenges. Our expertise spans software engineering, 
              data science, and artificial intelligence.
            </p>
            <p>
              We specialize in automating complex processes, extracting valuable insights from data, 
              and implementing AI solutions that drive measurable improvements in efficiency and performance.
            </p>
            <p className="font-semibold">
              Our mission is to bridge the gap between innovative technology and practical business solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-clifford-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-clifford-navy mb-4">Get In Touch</h3>
            <p className="text-gray-600 text-lg">
              Ready to transform your business with intelligent technology solutions?
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-clifford-navy mb-4">Let's Discuss Your Project</h4>
                <p className="text-gray-600 leading-relaxed">
                  Whether you need custom software development, data analysis, or AI implementation, 
                  we're here to help you leverage technology for maximum impact.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-clifford-blue rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-clifford-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">contact@clifford-it.com</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-clifford-blue rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-clifford-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Professional Consultancy Services</span>
                </div>
              </div>
            </div>
            
            {/* Contact Button */}
            <div className="flex items-center justify-center lg:justify-start">
              <button className="bg-clifford-navy text-clifford-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-clifford-navy text-clifford-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-clifford-blue rounded-lg flex items-center justify-center mr-3">
                <span className="text-clifford-navy font-bold">C</span>
              </div>
              <span className="text-lg font-semibold">Clifford IT</span>
            </div>
            <p className="text-clifford-blue opacity-80">
              Intelligent Technology Solutions for Modern Business
            </p>
            <p className="text-sm opacity-60 mt-4">
              © 2024 Clifford IT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
