'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiUser } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
  rating,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card testimonial-card pl-8 hover-lift"
    >
      <div className="flex items-center mb-6">
        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-espia-blue to-espia-mint flex items-center justify-center mr-4 shadow-lg">
          <span className="text-white font-bold text-lg select-none">
            {author.split(' ').map(n => n[0]).join('').slice(0,2)}
          </span>
          <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
            <FaStar className="w-3 h-3 text-yellow-400" />
          </span>
        </div>
        <div>
          <p className="font-semibold text-lg">{author}</p>
          <p className="text-espia-blue">{role}</p>
          <p className="text-sm text-gray-400">{company}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-xl mb-8 italic text-gray-300 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-espia-blue animate-pulse" />
          <span className="text-sm text-gray-400">Cliente verificado</span>
        </div>
        <div className="text-sm text-gray-400">
          {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
        </div>
      </div>
    </motion.div>
  );
} 