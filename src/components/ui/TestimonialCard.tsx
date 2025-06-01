'use client';

import { motion } from 'framer-motion';
import { FiStar, FiMessageSquare } from 'react-icons/fi';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  rating,
  image
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-espia-charcoal/50 p-6 rounded-2xl border border-gray-700/50 hover:border-espia-blue/30 transition-all duration-300"
    >
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-espia-blue to-espia-mint flex items-center justify-center">
          <FiMessageSquare className="w-4 h-4 text-white" />
        </div>
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <FiStar className="w-5 h-5 text-yellow-400 fill-current" />
            </motion.div>
          ))}
        </div>
        <blockquote className="text-gray-300 mb-6 relative pl-4 border-l-2 border-espia-blue/30">
          {quote}
        </blockquote>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-espia-blue/20 to-espia-mint/20">
          {image ? (
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 48px, 48px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-espia-blue font-semibold">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold hover:text-espia-mint transition-colors duration-300">{author}</h4>
          <p className="text-sm text-gray-400">{role} at {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 