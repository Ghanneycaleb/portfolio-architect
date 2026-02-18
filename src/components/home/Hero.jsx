import { profile } from '../../data/profile';
import { MetricBadge } from '../common/MetricBadge';
import { Button } from '../common/Button';

/**
 * Hero Component
 * 
 * Above-the-fold section proving credibility in 15 seconds.
 * 
 * Structure:
 * 1. Name + Title
 * 2. Tagline
 * 3. **IMPACT METRICS** (proof first!)
 * 4. Brief bio
 * 5. CTAs
 * 
 * Uses gradient background (beige → lighter beige)
 */
export const Hero = () => {
  // Smooth scroll to projects section
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="
      section-padding 
      bg-gradient-to-b 
      from-beige-50 to-beige-100 
      dark:from-navy-900 dark:to-navy-800
    ">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Name & Title */}
          <h1 className="mb-4 animate-fade-in">
            {profile.name}
          </h1>
          
          {/* Tagline */}
          <p className="
            text-xl md:text-2xl 
            text-grey-700 dark:text-beige-300 
            mb-8 
            animate-fade-in
          " 
          style={{animationDelay: '100ms'}}
          >
            {profile.tagline}
          </p>
          
          {/* Impact Metrics - PROOF FIRST */}
          <div className="
            grid grid-cols-1 sm:grid-cols-3 gap-4 
            mb-12 
            animate-fade-in
          " 
          style={{animationDelay: '200ms'}}
          >
            {profile.impactMetrics.map((metric, index) => (
              <MetricBadge
                key={index}
                value={metric.value}
                label={metric.label}
                context={metric.context}
                variant="highlight"
                size="lg"
              />
            ))}
          </div>
          
          {/* Brief Bio - Results-focused */}
          <p className="
            text-lg 
            text-grey-700 dark:text-beige-300 
            mb-8 
            leading-relaxed 
            max-w-2xl mx-auto 
            animate-fade-in
          " 
          style={{animationDelay: '300ms'}}
          >
            {profile.bio.split('\n\n')[0]}
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="
            flex flex-col sm:flex-row 
            items-center justify-center 
            gap-4 
            animate-fade-in
          " 
          style={{animationDelay: '400ms'}}
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = `mailto:${profile.links.email}`}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};