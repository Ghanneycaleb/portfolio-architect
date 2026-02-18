/**
 * MetricBadge Component
 * 
 * Displays quantified impact with:
 * - Large value (the number that impresses)
 * - Label (what the number represents)
 * - Context (additional details)
 * 
 * Used for: Hero metrics, project results, anywhere we show data
 * 
 * @param {string} value - The impressive number (e.g., "40%", "500K+")
 * @param {string} label - What it represents (e.g., "Performance Improvement")
 * @param {string} context - Additional detail (e.g., "Avg. across projects")
 * @param {string} variant - 'default' | 'minimal' | 'highlight'
 * @param {string} size - 'sm' | 'md' | 'lg'
 */
export const MetricBadge = ({ 
  value, 
  label, 
  context,
  variant = 'default',
  size = 'md',
  className = '' 
}) => {
  const baseStyles = 'flex flex-col items-start gap-1';
  
  // Variant styles
  const variants = {
    // Standard metric box
    default: `
      p-4 rounded-lg 
      bg-beige-200 dark:bg-navy-800/50 
      border border-beige-300 dark:border-navy-700
    `,
    
    // No background (just text)
    minimal: '',
    
    // Highlighted with accent color
    highlight: `
      p-4 rounded-lg 
      bg-navy-50 dark:bg-navy-900/50 
      border border-navy-200 dark:border-navy-800
    `
  };
  
  // Size configurations
  const sizes = {
    sm: { 
      value: 'text-2xl', 
      label: 'text-xs', 
      context: 'text-xs' 
    },
    md: { 
      value: 'text-3xl md:text-4xl', 
      label: 'text-sm', 
      context: 'text-xs' 
    },
    lg: { 
      value: 'text-4xl md:text-5xl', 
      label: 'text-base', 
      context: 'text-sm' 
    }
  };
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {/* Value - The big number */}
      <div className={`
        ${sizes[size].value} 
        font-bold 
        text-navy-600 dark:text-navy-300
      `}>
        {value}
      </div>
      
      {/* Label - What it represents */}
      <div className={`
        ${sizes[size].label} 
        font-medium 
        text-navy-900 dark:text-beige-100
      `}>
        {label}
      </div>
      
      {/* Context - Additional detail */}
      {context && (
        <div className={`
          ${sizes[size].context} 
          text-grey-600 dark:text-beige-400
        `}>
          {context}
        </div>
      )}
    </div>
  );
};

/**
 * MetricComparison Component
 * 
 * Shows before/after comparison with improvement percentage.
 * Used in project case studies to show impact.
 * 
 * @param {string} metric - Name of metric (e.g., "Load Time")
 * @param {string} before - Before value (e.g., "8.5s")
 * @param {string} after - After value (e.g., "2.1s")
 * @param {string} improvement - Percentage change (e.g., "-74%")
 */
export const MetricComparison = ({ 
  metric, 
  before, 
  after, 
  improvement,
  className = '' 
}) => {
  // Determine if improvement is positive (green) or negative (red)
  const isPositive = improvement?.startsWith('+');
  const isNegative = improvement?.startsWith('-');
  
  const improvementColor = isPositive
    ? 'text-green-600 dark:text-green-400' 
    : isNegative
    ? 'text-red-600 dark:text-red-400'
    : 'text-grey-600 dark:text-beige-400';
  
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1">
        {/* Metric name */}
        <div className="text-sm text-grey-600 dark:text-beige-400 mb-1">
          {metric}
        </div>
        
        {/* Before → After with improvement */}
        <div className="flex items-baseline gap-2">
          {/* Before (crossed out) */}
          <span className="
            text-sm 
            text-grey-500 dark:text-grey-500 
            line-through
          ">
            {before}
          </span>
          
          {/* Arrow */}
          <svg 
            className="w-4 h-4 text-grey-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
          
          {/* After (emphasized) */}
          <span className="
            text-xl font-bold 
            text-navy-900 dark:text-beige-100
          ">
            {after}
          </span>
          
          {/* Improvement percentage */}
          {improvement && (
            <span className={`text-sm font-semibold ${improvementColor}`}>
              {improvement}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};