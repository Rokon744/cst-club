import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/rpicc-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-300">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="RPI Computer Club" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm">
              Empowering students through technology and innovation at Rensselaer Polytechnic Institute.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sky-600 dark:text-sky-300 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link to="/notices" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Notices</Link></li>
              <li><Link to="/events" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Events</Link></li>
              <li><Link to="/projects" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sky-600 dark:text-sky-300 font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blogs" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Blogs</Link></li>
              <li><Link to="/executives" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Our Team</Link></li>
              <li><Link to="/gallery" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Gallery</Link></li>
              <li><Link to="/resources" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Learning Resources</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sky-600 dark:text-sky-300 font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic space-y-2">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Rajshahi Polytechnic Institute<br />Sopura, Rajshahi</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:computerclubrpi@gmail.com" className="hover:text-sky-500 transition-colors">computerclubrpi@gmail.com</a>
              </div>
            </address>
            
            {/* Social Media */}
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com/rpicomputerclub" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/rpicomputerclub" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/rpicomputerclub" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://discord.gg/rpicomputerclub" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.053-.933-9.555-3.548-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.158-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.158 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sky-100 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {currentYear} RPI Computer Club. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Terms of Service</Link>
            <Link to="/code-of-conduct" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;