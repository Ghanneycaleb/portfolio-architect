import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Button } from './components/common/Button';
import { Card } from './components/common/Card';
import { profile } from './data/profile';
import './styles/index.css';

/**
 * App Component (Demo with Layout)
 * 
 * Now includes Header and Footer!
 * Test dark mode by clicking the theme toggle.
 */
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - sticky at top */}
      <Header />
      
      {/* Main content */}
      <main className="flex-1 bg-beige-50 dark:bg-navy-900 py-12">
        <div className="container-custom">
          
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="mb-4">{profile.name}</h1>
            <p className="text-xl text-grey-600 dark:text-beige-300">
              {profile.tagline}
            </p>
          </div>
          
          {/* Button Variants */}
          <Card className="mb-8">
            <Card.Header>
              <h3>Button Components</h3>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-grey-600 dark:text-beige-400 mb-4">
                Try clicking the theme toggle in the header! 🌙☀️
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </Card.Body>
          </Card>
          
          {/* Impact Metrics */}
          <Card variant="elevated">
            <Card.Header>
              <h3>Impact Metrics</h3>
            </Card.Header>
            <Card.Body>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {profile.impactMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="
                      text-4xl font-bold 
                      text-navy-600 dark:text-navy-300 
                      mb-2
                    ">
                      {metric.value}
                    </div>
                    <div className="
                      text-sm font-medium 
                      text-grey-800 dark:text-beige-200 
                      mb-1
                    ">
                      {metric.label}
                    </div>
                    <div className="
                      text-xs 
                      text-grey-600 dark:text-beige-400
                    ">
                      {metric.context}
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
          
          {/* Color Palette - Now with dark mode comparison! */}
          <Card className="mt-8">
            <Card.Header>
              <h3>Color Palette (Toggle dark mode to compare!)</h3>
            </Card.Header>
            <Card.Body>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium mb-2">
                    Navy Blue - Primary Brand
                  </p>
                  <div className="flex gap-2">
                    <div className="w-16 h-16 bg-navy-500 rounded flex items-center justify-center">
                      <span className="text-xs text-beige-50">500</span>
                    </div>
                    <div className="w-16 h-16 bg-navy-600 rounded flex items-center justify-center">
                      <span className="text-xs text-beige-50">600</span>
                    </div>
                    <div className="w-16 h-16 bg-navy-700 rounded flex items-center justify-center">
                      <span className="text-xs text-beige-50">700</span>
                    </div>
                    <div className="w-16 h-16 bg-navy-800 rounded flex items-center justify-center">
                      <span className="text-xs text-beige-50">800</span>
                    </div>
                    <div className="w-16 h-16 bg-navy-900 rounded flex items-center justify-center">
                      <span className="text-xs text-beige-50">900</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">
                    Beige - Warm Accent
                  </p>
                  <div className="flex gap-2">
                    <div className="w-16 h-16 bg-beige-100 rounded border border-grey-300 flex items-center justify-center">
                      <span className="text-xs text-navy-700">100</span>
                    </div>
                    <div className="w-16 h-16 bg-beige-300 rounded flex items-center justify-center">
                      <span className="text-xs text-navy-700">300</span>
                    </div>
                    <div className="w-16 h-16 bg-beige-500 rounded flex items-center justify-center">
                      <span className="text-xs text-navy-700">500</span>
                    </div>
                    <div className="w-16 h-16 bg-beige-700 rounded flex items-center justify-center">
                      <span className="text-xs text-beige-50">700</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">
                    Grey - Neutral
                  </p>
                  <div className="flex gap-2">
                    <div className="w-16 h-16 bg-grey-300 rounded flex items-center justify-center">
                      <span className="text-xs text-navy-700">300</span>
                    </div>
                    <div className="w-16 h-16 bg-grey-500 rounded flex items-center justify-center">
                      <span className="text-xs text-beige-50">500</span>
                    </div>
                    <div className="w-16 h-16 bg-grey-700 rounded flex items-center justify-center">
                      <span className="text-xs text-beige-50">700</span>
                    </div>
                    <div className="w-16 h-16 bg-grey-900 rounded flex items-center justify-center">
                      <span className="text-xs text-beige-50">900</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;