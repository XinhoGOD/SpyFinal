'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import Button from './Button';

interface NavbarProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = ['home', 'features', 'pricing', 'testimonials'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Features', href: '#features', onClick: () => handleNavigation('features') },
    { name: 'Pricing', href: '#pricing', onClick: () => handleNavigation('pricing') },
    { name: 'Testimonials', href: '#testimonials', onClick: () => handleNavigation('testimonials') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-espia-charcoal/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <a href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-espia-mint to-espia-blue">
              EspíaLocal
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  link.onClick();
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`relative text-gray-300 hover:text-white transition-colors ${
                  activeSection === link.href.replace('#', '') ? 'text-white' : ''
                }`}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-espia-blue to-espia-mint"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
            <Button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              variant="ghost"
              className="flex items-center gap-2"
            >
              <FiGlobe className="w-4 h-4" />
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
            <Button 
              onClick={() => window.location.href = 'mailto:contact@espialocal.com'}
              className="btn-primary"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      link.onClick();
                    }}
                    className={`block text-gray-300 hover:text-white transition-colors py-2 ${
                      activeSection === link.href.replace('#', '') ? 'text-white' : ''
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-4 pt-4 border-t border-gray-700">
                  <Button
                    onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                    variant="ghost"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <FiGlobe className="w-4 h-4" />
                    {language === 'en' ? 'ES' : 'EN'}
                  </Button>
                  <Button 
                    onClick={() => window.location.href = 'mailto:contact@espialocal.com'}
                    className="w-full"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 