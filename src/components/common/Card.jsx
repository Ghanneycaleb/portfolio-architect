import React from 'react';

/**
 * Card Component
 * 
 * Reusable container with beige/navy styling.
 * Composable with Header, Body, Footer sub-components.
 * 
 * @param {string} variant - 'default' | 'hover' | 'flat' | 'elevated'
 * @param {ReactNode} children - Card content
 * @param {string} className - Additional classes
 */
export const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const baseStyles = 'rounded-lg overflow-hidden';
  
  const variants = {
    // Standard card with beige background
    default: `
      bg-beige-100 dark:bg-navy-800 
      border border-beige-300 dark:border-navy-700 
      shadow-sm
    `,
    
    // Interactive card (for clickable items)
    hover: `
      bg-beige-100 dark:bg-navy-800 
      border border-beige-300 dark:border-navy-700 
      shadow-sm hover:shadow-md 
      transition-shadow cursor-pointer
    `,
    
    // Flat card (no shadow, subtle)
    flat: `
      bg-beige-200 dark:bg-navy-800/50
    `,
    
    // Elevated card (prominent)
    elevated: `
      bg-beige-50 dark:bg-navy-800 
      shadow-lg
    `
  };
  
  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card Sub-Components for Composition
 * Usage:
 * <Card>
 *   <Card.Header>Title</Card.Header>
 *   <Card.Body>Content</Card.Body>
 *   <Card.Footer>Actions</Card.Footer>
 * </Card>
 */

Card.Header = ({ children, className = '' }) => (
  <div className={`
    px-6 py-4 
    border-b border-beige-300 dark:border-navy-700 
    ${className}
  `}>
    {children}
  </div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`
    px-6 py-4 
    border-t border-beige-300 dark:border-navy-700 
    ${className}
  `}>
    {children}
  </div>
);