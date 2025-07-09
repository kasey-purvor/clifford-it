import Header from './components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-clifford-white">
      {/* Dynamic Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-start justify-center overflow-hidden">
        {/* Background Image using Next.js Image component */}
        <div className="absolute inset-0">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            className="object-cover  brightness-50   opacity-40"
            priority
            quality={85}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-[20vh]">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6  drop-shadow-lg">
            Intelligent IT & Data Solutions <br/> 
            Cut through the AI Hype 
          </h2>
          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-2xl mx-auto drop-shadow-md text-clifford-navy font-bold">
            Clifford IT specializes in AI applications, software engineering, and data solutions.
            Let us help you understand how modern technology can help you.
          </p>
          <a href="#contact" className="inline-block bg-clifford-navy text-clifford-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-clifford-blue transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </a>
        </div>
      </section>

      {/* Recent Work Section */}
      <section id="recent-work" className="py-16 lg:py-24 bg-clifford-blue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-clifford-navy mb-4">Recent Work</h3>
            <p className="text-clifford-navy text-lg max-w-2xl mx-auto">
              Discover some example projects we have worked on
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Chatbot */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 hover:border-clifford-navy/20 transition-all duration-300">
              <div className="w-12 h-12 bg-clifford-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-clifford-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-clifford-navy mb-4">Chatbot</h4>
              <p className="text-gray-600 leading-relaxed">
                Whether you want to be able to just talk to you database with natural language or want a fully autonomous customer service agent. Our solutions have got you covered at competitive prices.
              </p>
            </div>

            {/* Automated Web Browsing & Data harvesting */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 hover:border-clifford-navy/20 transition-all duration-300">
              <div className="w-12 h-12 bg-clifford-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-clifford-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-clifford-navy mb-4">Automated Web Browsing</h4>
              <p className="text-gray-600 leading-relaxed">
                Want to automate your lead generation process or know your competitors prices? Our tried and tested solution consistently outperforms 'off the shelf' solutions from large scraping bureaus.
              </p>
            </div>

            {/* Database Design */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 hover:border-clifford-navy/20 transition-all duration-300">
              <div className="w-12 h-12 bg-clifford-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-clifford-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-clifford-navy mb-4">Database Design</h4>
              <p className="text-gray-600 leading-relaxed">
                Lots of messy data? With extensive experience with data management - we can help you organise your data intelligently.
              </p>
            </div>

            {/* Full consultation */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 hover:border-clifford-navy/20 transition-all duration-300">
              <div className="w-12 h-12 bg-clifford-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-clifford-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-clifford-navy mb-4">Full Consultation</h4>
              <p className="text-gray-600 leading-relaxed">
                If you simply don't know quite what you need - let us give you a free consultation to help assess what solutions are suitable for you and your data.
              </p>
            </div>
          </div>
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
              At Clifford IT, we're passionate about applying modern technology to solve business problems. Our expertise spans software engineering, 
              data science, and artificial intelligence.
            </p>
            <p>
              We specialize in automating complex processes, extracting valuable insights from data, 
              and implementing Machine Learning & AI solutions that drive measurable improvements in efficiency and performance.
            </p>
            <p className="font-bold">
              Our mission is to help people avoid the AI hype train and bridge the gap between technology and business.
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
                {/* <div className="flex items-center">
                  <div className="w-10 h-10 bg-clifford-blue rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-clifford-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">contact@clifford-it.com</span>
                </div> */}
                
                {/* <div className="flex items-center">
                  <div className="w-10 h-10 bg-clifford-blue rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-clifford-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Professional Consultancy Services</span>
                </div> */}
              </div>
            </div>
            
            {/* Contact Button */}
            <div className="flex items-center justify-center lg:justify-start">
              <Link href="/contact" className="inline-block bg-clifford-navy text-clifford-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-clifford-navy text-clifford-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="mr-3">
                <Image
                  src="/logo_black_no_background.png"
                  alt="Clifford IT Logo"
                  width={300}
                  height={300}
                  className="object-contain filter invert brightness-0 contrast-100"
                  style={{
                    filter: 'invert(1) brightness(2) contrast(1)'
                  }}
                />
              </div>
              {/* <span className="text-lg font-semibold">Clifford IT</span> */}
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
