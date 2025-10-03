import React, { useEffect } from 'react';
import Logo from '../assets/rpicc-logo.png';
import { FaGithub, FaDiscord, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

// Add tech grid background component
const TechGridBackground = () => {
  const gridPattern = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236d28d9' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E";
  
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/5 opacity-30"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("${gridPattern}")`,
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
};

const Hello = () => {
  // Add animation effect for the container
  useEffect(() => {
    document.body.classList.add('font-orbitron');
    return () => {
      document.body.classList.remove('font-orbitron');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <TechGridBackground />
      
      {/* Animated border effect */}
      <div className="absolute inset-0 border-4 border-transparent">
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-brand"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-brand"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-brand"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-brand"></div>
      </div>
      
      {/* Under Development Badge */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-3 animate-pulse border border-amber-300/50">
        <span className="flex items-center">
          <span className="flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          ACTIVE DEVELOPMENT
        </span>
      </div>
      
      <div className="w-full max-w-2xl bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent"></div>
          <figure className="px-10 pt-12 relative z-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-brand/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <img 
                src={Logo} 
                alt="RPI Computer Club Logo" 
                className="relative max-w-[180px] mx-auto transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </figure>
        </div>
        <div className="p-8 pt-2 text-center">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500 mb-2 tracking-tight">WELCOME TO</h1>
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6 tracking-tight">RPI COMPUTER CLUB</h2>
          <div className="mb-8">
            <h3 className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-brand to-sky-300 text-2xl tracking-wider mb-2">
              Learn • Build • Innovate
            </h3>
            <p className="text-center text-gray-400 text-sm">
              Empowering students through technology, innovation, and community , FROM ROKON
            </p>
          </div>
          
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-bold text-amber-500 mb-6 tracking-wider">CONNECT WITH US</h3>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700/50 shadow-xl backdrop-blur-sm w-full max-w-md">
              <div className="flex flex-wrap justify-center gap-4 p-2">
                <a href="https://www.facebook.com/people/Computer-Club-Rpi/61581226467108" target="_blank" rel="noopener noreferrer" className="group p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-[#1877F2]/20 hover:to-transparent border border-gray-700 hover:border-[#1877F2]/50 transition-all duration-300" aria-label="Facebook">
                  <FaFacebook size={20} className="text-gray-300 group-hover:text-[#1877F2] transition-colors" />
                </a>
                <a href="https://instagram.com/rpi.cc" target="_blank" rel="noopener noreferrer" className="group p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-[#E4405F]/20 hover:to-transparent border border-gray-700 hover:border-[#E4405F]/50 transition-all duration-300" aria-label="Instagram">
                  <FaInstagram size={20} className="text-gray-300 group-hover:text-[#E4405F] transition-colors" />
                </a>
                <a href="https://github.com/RPI-Computer-Club-rpicc" target="_blank" rel="noopener noreferrer" className="group p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700/20 hover:to-transparent border border-gray-700 hover:border-gray-300/50 transition-all duration-300" aria-label="GitHub">
                  <FaGithub size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a href="https://www.linkedin.com/company/rpi-computer-club/" target="_blank" rel="noopener noreferrer" className="group p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-[#0A66C2]/20 hover:to-transparent border border-gray-700 hover:border-[#0A66C2]/50 transition-all duration-300" aria-label="LinkedIn">
                  <FaLinkedin size={20} className="text-gray-300 group-hover:text-[#0A66C2] transition-colors" />
                </a>
                <a href="https://youtube.com/@rpicomputerclub" target="_blank" rel="noopener noreferrer" className="group p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-[#FF0000]/20 hover:to-transparent border border-gray-700 hover:border-[#FF0000]/50 transition-all duration-300" aria-label="YouTube">
                  <FaYoutube size={20} className="text-gray-300 group-hover:text-[#FF0000] transition-colors" />
                </a>
                <a href="https://discord.gg/4RDVuuJW" target="_blank" rel="noopener noreferrer" className="group p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-[#5865F2]/20 hover:to-transparent border border-gray-700 hover:border-[#5865F2]/50 transition-all duration-300" aria-label="Discord">
                  <FaDiscord size={20} className="text-gray-300 group-hover:text-[#5865F2] transition-colors" />
                </a>
                <a href="https://twitter.com/rpi.cc" target="_blank" rel="noopener noreferrer" className="group p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-[#1DA1F2]/20 hover:to-transparent border border-gray-700 hover:border-[#1DA1F2]/50 transition-all duration-300" aria-label="Twitter">
                  <FaTwitter size={20} className="text-gray-300 group-hover:text-[#1DA1F2] transition-colors" />
                </a>
              </div>
              <button className="mt-6 w-full bg-gradient-to-r from-brand to-brand/80 hover:from-brand/90 hover:to-brand text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand/50 border border-brand/30 hover:border-brand/50 shadow-lg hover:shadow-brand/20 relative overflow-hidden group">
                <span className="relative z-10">JOIN OUR COMMUNITY</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full"></span>
              </button>
            </div>
            
            <div className="relative mt-8 p-4 rounded-lg w-full max-w-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-transparent opacity-30"></div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600"></div>
              <div className="relative flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-500/20">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h2a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-amber-200 font-mono tracking-wide">
                    <span className="font-bold text-amber-300">[NOTE]</span> SITE UNDER ACTIVE DEVELOPMENT. WE'VE OFFICIALLY COMMENCED OUR WORK! FOR INQUIRIES, CONTACT: {' '}
                    <a href="mailto:computerclubrpi@gmail.com" className="text-amber-400 hover:text-white underline underline-offset-2">computerclubrpi@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
       
    <footer className="mt-8 w-full max-w-2xl text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} RPI Computer Club And <a href="https://absyd.xyz" className="text-amber-400 hover:text-white underline underline-offset-2">Abu Sayed</a>. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Hello;