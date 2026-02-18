import { Link } from 'react-router-dom';
import { Card } from '../common/Card';

/**
 * ProjectCard Component
 * 
 * Displays project preview in grid.
 * Clickable to go to full case study (we'll add routing later).
 * 
 * Shows:
 * - Thumbnail image
 * - Category & timeline
 * - Title (attention)
 * - Tagline (impact in one sentence)
 * - Summary (2-3 lines)
 * - Top 2 metrics (proof)
 * 
 * @param {Object} project - Project data from projects.js
 */
export const ProjectCard = ({ project }) => {
  // Extract top 2 metrics to display (business preferred)
  const topMetrics = project.results.business?.slice(0, 2) || 
                     project.results.performance?.slice(0, 2) || [];
  
  return (
    <Link 
      to={`/project/${project.id}`}
      className="block group"
    >
      <Card variant="hover" className="h-full">
        
        {/* Thumbnail Image */}
        <div className="
          aspect-video 
          bg-beige-200 dark:bg-navy-700 
          overflow-hidden
        ">
          {project.thumbnail ? (
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="
                w-full h-full object-cover 
                group-hover:scale-105 
                transition-transform duration-300
              "
              loading="lazy"
            />
          ) : (
            // Placeholder icon if no image
            <div className="
              w-full h-full 
              flex items-center justify-center 
              text-beige-400 dark:text-navy-600
            ">
              <svg 
                className="w-16 h-16" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </div>
          )}
        </div>
        
        {/* Content */}
        <Card.Body>
          {/* Category & Timeline */}
          <div className="flex items-center justify-between mb-2">
            <span className="
              text-xs font-medium 
              text-navy-600 dark:text-navy-400 
              uppercase tracking-wide
            ">
              {project.category}
            </span>
            <span className="
              text-xs 
              text-grey-500 dark:text-beige-400
            ">
              {project.timeline}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="
            text-xl font-bold 
            text-navy-900 dark:text-beige-100 
            mb-2 
            group-hover:text-navy-600 dark:group-hover:text-navy-400 
            transition-colors
          ">
            {project.title}
          </h3>
          
          {/* Tagline - Impact in one sentence */}
          <p className="
            text-sm 
            text-navy-600 dark:text-navy-400 
            font-medium mb-3
          ">
            {project.tagline}
          </p>
          
          {/* Summary */}
          <p className="
            text-sm 
            text-grey-600 dark:text-beige-400 
            mb-4 
            line-clamp-3
          ">
            {project.summary}
          </p>
          
          {/* Key Metrics Preview */}
          {topMetrics.length > 0 && (
            <div className="
              space-y-2 pt-4 
              border-t border-beige-300 dark:border-navy-700
            ">
              {topMetrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-grey-600 dark:text-beige-400">
                    {metric.metric}
                  </span>
                  <span className="
                    font-semibold 
                    text-navy-900 dark:text-beige-100
                  ">
                    {metric.improvement || metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}
          
          {/* Read More Indicator */}
          <div className="
            mt-4 
            flex items-center 
            text-sm 
            text-navy-600 dark:text-navy-400 
            font-medium 
            group-hover:gap-2 
            transition-all
          ">
            View case study
            <svg 
              className="
                w-4 h-4 ml-1 
                group-hover:translate-x-1 
                transition-transform
              " 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};