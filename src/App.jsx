import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { NotFound } from './pages/NotFound';
import './styles/index.css';

/**
 * App Component
 * 
 * Root component with:
 * - React Router setup
 * - Layout (Header + Footer on all pages)
 * - Route definitions
 * 
 * Routes:
 * - / → Home page
 * - /project/:projectId → Project detail
 * - * → 404 page
 */
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header on all pages */}
        <Header />
        
        {/* Main content - routes swap here */}
        <main className="flex-1">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />
            
            {/* Project detail pages */}
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            
            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* Footer on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;