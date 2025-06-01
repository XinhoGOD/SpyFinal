'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  isLoading?: boolean;
  className?: string;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', variant = 'primary', size = 'md', icon, isLoading = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-espia-charcoal disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-espia-blue text-white hover:bg-opacity-90 focus:ring-espia-blue shadow-lg hover:shadow-espia-blue/30 transform hover:-translate-y-0.5',
      secondary: 'bg-transparent border-2 border-espia-blue text-espia-blue hover:bg-espia-blue hover:bg-opacity-10 focus:ring-espia-blue shadow-lg hover:shadow-espia-blue/20 transform hover:-translate-y-0.5',
      outline: 'bg-transparent border border-gray-600 text-gray-300 hover:border-espia-blue hover:text-espia-blue',
      ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Cargando...
          </div>
        ) : (
          <>
            {children}
            {icon || (variant === 'primary' && <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />)}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 