/**
 * Button Component
 *
 * Reusable button with multiple variants and sizes.
 * Uses our navy/beige/grey color palette.
 *
 * @param {string} variant - 'primary' | 'secondary' | 'ghost' | 'outline'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {ReactNode} children - Button content
 * @param {string} className - Additional Tailwind classes
 */
export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  // Base styles applied to all buttons
  const baseStyles = `
    inline-flex items-center justify-center 
    font-medium transition-all 
    focus-ring rounded-lg 
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  // Variant styles using our color palette
  const variants = {
    // Navy background, beige text
    primary: `
      bg-navy-600 text-beige-50 
      hover:bg-navy-700 
      dark:bg-navy-500 dark:hover:bg-navy-400
      shadow-sm hover:shadow-md
    `,

    // Beige background, navy text
    secondary: `
      bg-beige-300 text-navy-900 
      hover:bg-beige-400 
      dark:bg-beige-700 dark:text-beige-50 dark:hover:bg-beige-600
    `,

    // No background, subtle hover
    ghost: `
      text-navy-700 hover:bg-beige-200 
      dark:text-beige-300 dark:hover:bg-navy-800
    `,

    // Border only
    outline: `
      border-2 border-navy-600 text-navy-700 
      hover:bg-navy-50 
      dark:border-navy-400 dark:text-beige-300 dark:hover:bg-navy-800
    `,
  };

  // Size variations
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
