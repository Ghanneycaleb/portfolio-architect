import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { ProjectCard } from './components/projects/ProjectCard';
import { Card } from './components/common/Card';
import { projects } from './data/projects';
import './styles/index.css';

/**
 * App Component (Day 2 Demo)
 * 
 * Now includes:
 * - Hero with impact metrics
 * - Project cards grid
 */
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
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
        
        {/* Placeholder for future sections */}
        <section className="section-padding bg-beige-100 dark:bg-navy-800">
          <div className="container-custom text-center">
            <Card>
              <Card.Body>
                <h3 className="mb-4">Coming Soon</h3>
                <p className="text-grey-600 dark:text-beige-400">
                  Technical notes, testimonials, and more sections 
                  will be added in Day 3!
                </p>
              </Card.Body>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;