'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  className = '',
  disabled = false,
  loading = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl';
  
  const variants = {
    primary: 'bg-espia-blue text-white hover:bg-opacity-90 shadow-lg hover:shadow-espia-blue/30',
    secondary: 'bg-transparent border-2 border-espia-blue text-espia-blue hover:bg-espia-blue hover:bg-opacity-10 shadow-lg hover:shadow-espia-blue/20',
    outline: 'bg-transparent border border-gray-600 text-gray-300 hover:border-espia-blue hover:text-espia-blue',
    ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5'}
    ${className}
  `;

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
      ) : (
        <>
          {children}
          {icon || (variant === 'primary' && <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />)}
        </>
      )}
    </motion.button>
  );
} 