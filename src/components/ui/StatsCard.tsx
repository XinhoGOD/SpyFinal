'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  description?: string;
  delay?: number;
}

export default function StatsCard({
  title,
  value,
  icon,
  description,
  delay = 0,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card hover-lift"
    >
      <div className="feature-icon">{icon}</div>
      <h3 className="text-2xl font-bold mb-2 gradient-text">{value}</h3>
      <p className="text-lg font-semibold mb-2">{title}</p>
      {description && (
        <p className="text-gray-400">{description}</p>
      )}
    </motion.div>
  );
} 