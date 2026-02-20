import { Hero } from '../components/home/Hero';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Contact } from '../components/home/Contact';
import { projects } from '../data/projects';

/**
 * Home Page
 * 
 * Main landing page combining:
 * - Hero with impact metrics
 * - Project showcase grid
 * 
 * This is what users see at "/"
 */
export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Projects Section */}
      <section 
        id="projects" 
        className="section-padding bg-beige-50 dark:bg-navy-900"
      >
        <div className="container-custom">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-lg text-grey-600 dark:text-beige-400">
              Deep-dive case studies showing problem-solving, 
              architecture decisions, and measurable impact.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
       {/* Contact Section - ADD THIS */}
      <Contact />
    
    </div>
  );
};