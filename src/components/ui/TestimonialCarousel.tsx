import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    
    const indices = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      indices.push(index);
    }
    return indices.map(i => testimonials[i]);
  };

  return (
    <div className="relative">
      {/* Testimonios */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 * (index + 1) }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles de navegación */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full bg-espia-charcoal hover:bg-espia-blue/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-espia-blue transform hover:scale-110"
          aria-label="Testimonio anterior"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-400" />
        </button>

        {/* Indicadores */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-espia-blue w-4'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-espia-charcoal hover:bg-espia-blue/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-espia-blue transform hover:scale-110"
          aria-label="Siguiente testimonio"
        >
          <FiChevronRight className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 