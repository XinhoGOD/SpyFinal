import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[600px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <TestimonialCard
                {...testimonials[currentIndex]}
                delay={0}
              />
              <TestimonialCard
                {...testimonials[(currentIndex + 1) % testimonials.length]}
                delay={0.2}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={() => {
            setIsAutoPlaying(false);
            previous();
          }}
          className="p-2 rounded-full bg-espia-charcoal hover:bg-espia-blue transition-colors"
        >
          <FiChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-espia-blue w-6'
                  : 'bg-espia-charcoal hover:bg-espia-blue/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            setIsAutoPlaying(false);
            next();
          }}
          className="p-2 rounded-full bg-espia-charcoal hover:bg-espia-blue transition-colors"
        >
          <FiChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
} 