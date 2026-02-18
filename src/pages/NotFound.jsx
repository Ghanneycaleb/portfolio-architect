import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';

/**
 * NotFound Page (404)
 * 
 * Displayed when user navigates to non-existent route.
 * Professional, helpful error page.
 */
export const NotFound = () => {
  return (
    <div className="
      min-h-screen 
      bg-beige-50 dark:bg-navy-900 
      flex items-center justify-center
    ">
      <div className="text-center px-4">
        {/* Large 404 */}
        <h1 className="
          text-6xl md:text-8xl font-bold 
          text-beige-300 dark:text-navy-800 
          mb-4
        ">
          404
        </h1>
        
        {/* Error message */}
        <h2 className="
          text-2xl md:text-3xl font-bold 
          text-navy-900 dark:text-beige-100 
          mb-4
        ">
          Page Not Found
        </h2>
        
        <p className="
          text-lg 
          text-grey-600 dark:text-beige-400 
          mb-8 max-w-md mx-auto
        ">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Back to home button */}
        <Link to="/">
          <Button variant="primary" size="lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};