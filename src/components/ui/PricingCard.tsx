'use client';

import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { FaCrown } from 'react-icons/fa';
import Button from './Button';
import { useEffect, useState } from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  delay?: number;
  onSelect?: () => void;
  stripeId?: string;
  buyNowText?: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlight = false,
  delay = 0,
  stripeId,
  buyNowText,
}: PricingCardProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`card price-card relative 
        ${name === 'Elite' ? 'bg-gradient-to-br from-yellow-100/10 to-yellow-400/10 border-2 border-yellow-400 shadow-2xl animate-pulse-slow' : ''}
        ${highlight ? 'bg-gradient-to-br from-espia-blue/20 to-espia-mint/20 border-2 border-transparent hover:border-espia-blue/50' : ''}`}
    >
      {/* Etiqueta y corona para Elite */}
      {name === 'Elite' && (
        <div className="flex flex-col items-center mb-4 mt-2">
          <FaCrown className="text-yellow-400 text-3xl mb-1 drop-shadow-lg animate-bounce" />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-yellow-900 text-base font-bold px-8 py-2 rounded-full shadow-lg border border-yellow-200/50 backdrop-blur-sm whitespace-nowrap">
            Elite
          </span>
        </div>
      )}
      {/* Etiqueta para Pro */}
      {highlight && name !== 'Elite' && (
        <div className="flex justify-center">
          <span className="bg-gradient-to-r from-espia-blue to-espia-mint text-white text-base font-bold px-8 py-2 rounded-full shadow-lg border border-white/20 backdrop-blur-sm whitespace-nowrap mt-2 mb-4">
            Más Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8 pt-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-4xl font-bold mb-2 gradient-text">
          {price}
          <span className="text-lg text-gray-400">/mes</span>
        </p>
        <p className="text-gray-400">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center text-gray-300"
          >
            <FiCheck className="w-5 h-5 text-espia-blue mr-3 flex-shrink-0" />
            {feature}
          </motion.li>
        ))}
      </ul>

      {/* Botón de Stripe solo en cliente */}
      {stripeId && isClient && (
        <div className="my-6 text-center">
          <div className="font-bold mb-2">{buyNowText}</div>
          <div
            dangerouslySetInnerHTML={{
              __html: `<stripe-buy-button buy-button-id="${stripeId}" publishable-key="pk_test_51RSms9Q6e2tZXE1ltEzDLzk9aQYW6Hl5DSymsPBCX2P4h4lyiPGyvAykrAhgxE6y9aFswWUllohEj1W18INXfX27007Mh1uhlb"></stripe-buy-button>`,
            }}
          />
        </div>
      )}

      {highlight && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Si pueden estar en cualquier lugar, ¿por qué el tuyo?
          </p>
        </div>
      )}
    </motion.div>
  );
} 