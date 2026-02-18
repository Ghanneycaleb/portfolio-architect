import { Button } from './components/common/Button';
import { Card } from './components/common/Card';
import { profile } from './data/profile';
import './styles/index.css';

/**
 * App Component (Temporary Demo)
 * 
 * This is just for testing! We'll replace it with proper routing later.
 * Shows our components with the navy/beige/grey palette.
 */
function App() {
  return (
    <div className="min-h-screen bg-beige-50 dark:bg-navy-900 py-12">
      <div className="container-custom">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">{profile.name}</h1>
          <p className="text-xl text-grey-600 dark:text-beige-300">
            {profile.tagline}
          </p>
        </div>
        
        {/* Button Variants Demo */}
        <Card className="mb-8">
          <Card.Header>
            <h3>Button Components</h3>
          </Card.Header>
          <Card.Body>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-grey-600 dark:text-beige-400 mb-3">
                Different sizes:
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
        
        {/* Card Variants Demo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card variant="default">
            <Card.Header>
              <h4>Default Card</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-grey-700 dark:text-beige-200">
                Standard card with beige background and subtle shadow.
              </p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm" variant="ghost">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="hover">
            <Card.Header>
              <h4>Hover Card</h4>
            </Card.Header>
            <Card.Body>
              <p className="text-grey-700 dark:text-beige-200">
                Interactive card with hover effect. Try hovering!
              </p>
            </Card.Body>
          </Card>
        </div>
        
        {/* Impact Metrics Demo */}
        <Card variant="elevated">
          <Card.Header>
            <h3>Impact Metrics</h3>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profile.impactMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-navy-600 dark:text-navy-300 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-grey-800 dark:text-beige-200 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-grey-600 dark:text-beige-400">
                    {metric.context}
                  </div>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
        
        {/* Color Palette Reference */}
        <Card className="mt-8">
          <Card.Header>
            <h3>Color Palette</h3>
          </Card.Header>
          <Card.Body>
            <div className="space-y-4">
              {/* Navy */}
              <div>
                <p className="text-sm font-medium mb-2">Navy Blue (Primary)</p>
                <div className="flex gap-2">
                  <div className="w-12 h-12 bg-navy-500 rounded"></div>
                  <div className="w-12 h-12 bg-navy-600 rounded"></div>
                  <div className="w-12 h-12 bg-navy-700 rounded"></div>
                  <div className="w-12 h-12 bg-navy-800 rounded"></div>
                </div>
              </div>
              
              {/* Beige */}
              <div>
                <p className="text-sm font-medium mb-2">Beige (Warm Accent)</p>
                <div className="flex gap-2">
                  <div className="w-12 h-12 bg-beige-100 rounded border border-grey-300"></div>
                  <div className="w-12 h-12 bg-beige-300 rounded"></div>
                  <div className="w-12 h-12 bg-beige-500 rounded"></div>
                  <div className="w-12 h-12 bg-beige-700 rounded"></div>
                </div>
              </div>
              
              {/* Grey */}
              <div>
                <p className="text-sm font-medium mb-2">Grey (Neutral)</p>
                <div className="flex gap-2">
                  <div className="w-12 h-12 bg-grey-300 rounded"></div>
                  <div className="w-12 h-12 bg-grey-500 rounded"></div>
                  <div className="w-12 h-12 bg-grey-700 rounded"></div>
                  <div className="w-12 h-12 bg-grey-900 rounded"></div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        
      </div>
    </div>
  );
}

export default App;