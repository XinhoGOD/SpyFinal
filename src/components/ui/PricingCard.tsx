'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiZap } from 'react-icons/fi';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  deliverables: string[];
  highlight?: boolean;
  buyNowText: string;
}

const PricingCard = ({
  name,
  price,
  description,
  deliverables,
  highlight = false,
  buyNowText
}: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative p-8 rounded-2xl border ${
        highlight
          ? 'bg-gradient-to-br from-espia-blue/10 to-espia-mint/10 border-espia-blue/30 shadow-lg shadow-espia-blue/10'
          : 'bg-espia-charcoal/50 border-gray-700/50 hover:border-espia-blue/20 transition-all duration-300'
      }`}
    >
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-espia-blue/5 to-espia-mint/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-espia-blue to-espia-mint text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg shadow-espia-blue/20">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          {highlight && <FiZap className="w-5 h-5 text-yellow-400" />}
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-espia-blue to-espia-mint">
            {price}
          </span>
          <span className="text-gray-400">/project</span>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {deliverables.map((feature, index) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 group"
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-espia-blue/20 flex items-center justify-center mt-0.5 group-hover:bg-espia-blue/30 transition-colors duration-300">
              <FiCheck className="w-3 h-3 text-espia-blue" />
            </div>
            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <Button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className={`w-full ${
          highlight
            ? 'btn-primary shadow-lg shadow-espia-blue/20'
            : 'bg-espia-charcoal/50 hover:bg-espia-charcoal border border-gray-700 hover:border-espia-blue/30 hover:shadow-lg hover:shadow-espia-blue/10'
        }`}
      >
        {buyNowText}
      </Button>
    </motion.div>
  );
};

export default PricingCard; 