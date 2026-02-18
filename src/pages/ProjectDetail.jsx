import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import { MetricComparison } from '../components/common/MetricBadge';
import { Card } from '../components/common/Card';

/**
 * ProjectDetail Page
 * 
 * Full case study with sections:
 * - Hero (title, tagline, meta)
 * - Problem (what was broken)
 * - Constraints (limitations)
 * - Architecture (decisions + reasoning)
 * - Results (metrics!)
 * - Tech stack & links
 * 
 * URL: /project/:projectId
 */
export const ProjectDetail = () => {
  // Get project ID from URL params
  const { projectId } = useParams();
  
  // Find project data
  const project = getProjectById(projectId);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);
  
  // 404 if project not found
  if (!project) {
    return <Navigate to="/404" replace />;
  }
  
  return (
    <div className="min-h-screen bg-beige-50 dark:bg-navy-900">
      
      {/* Hero Section */}
      <section className="
        bg-beige-100 dark:bg-navy-800 
        py-16 
        border-b border-beige-300 dark:border-navy-700
      ">
        <div className="container-custom">
          {/* Back button */}
          <Link 
            to="/#projects"
            className="
              inline-flex items-center 
              text-sm 
              text-grey-600 dark:text-beige-400 
              hover:text-navy-600 dark:hover:text-navy-400 
              mb-6 
              transition-colors
            "
          >
            <svg 
              className="w-4 h-4 mr-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Back to projects
          </Link>
          
          <div className="max-w-4xl">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="
                text-sm font-medium 
                text-navy-600 dark:text-navy-400 
                uppercase tracking-wide
              ">
                {project.category}
              </span>
              <span className="text-sm text-grey-500 dark:text-beige-400">
                {project.timeline}
              </span>
              <span className="text-sm text-grey-500 dark:text-beige-400">
                {project.role}
              </span>
            </div>
            
            {/* Title & tagline */}
            <h1 className="mb-4">{project.title}</h1>
            <p className="
              text-xl 
              text-navy-600 dark:text-navy-400 
              font-medium mb-6
            ">
              {project.tagline}
            </p>
            
            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="
                    px-3 py-1 text-sm 
                    bg-beige-50 dark:bg-navy-700 
                    border border-beige-300 dark:border-navy-600 
                    rounded-full 
                    text-grey-700 dark:text-beige-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Summary */}
          <section>
            <p className="text-lg text-grey-700 dark:text-beige-300 leading-relaxed">
              {project.summary}
            </p>
          </section>
          
          {/* Problem Section */}
          <section>
            <h2 className="mb-6">The Problem</h2>
            <div className="space-y-4">
              <p className="text-lg text-grey-700 dark:text-beige-300">
                {project.problem.context}
              </p>
              
              {/* Challenges */}
              <Card variant="flat">
                <Card.Body>
                  <h4 className="text-lg font-semibold mb-3 text-navy-900 dark:text-beige-100">
                    Key Challenges
                  </h4>
                  <ul className="space-y-2">
                    {project.problem.challenges.map((challenge, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-2 text-grey-700 dark:text-beige-300"
                      >
                        {/* Warning icon */}
                        <svg 
                          className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                          />
                        </svg>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
              
              {/* Business impact callout */}
              {project.problem.businessImpact && (
                <div className="
                  p-4 
                  bg-amber-50 dark:bg-amber-900/20 
                  border-l-4 border-amber-500 
                  rounded
                ">
                  <p className="text-sm font-medium text-amber-900 dark:text-amber-200">
                    <strong>Business Impact:</strong> {project.problem.businessImpact}
                  </p>
                </div>
              )}
            </div>
          </section>
          
          {/* Constraints Section */}
          <section>
            <h2 className="mb-6">Constraints</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Technical Constraints */}
              <Card>
                <Card.Header>
                  <h3 className="text-lg font-semibold">Technical</h3>
                </Card.Header>
                <Card.Body>
                  <ul className="space-y-2">
                    {project.constraints.technical.map((constraint, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-2 text-sm text-grey-700 dark:text-beige-300"
                      >
                        {/* Checkmark icon */}
                        <svg 
                          className="w-4 h-4 text-beige-400 dark:text-navy-400 mt-0.5 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        {constraint}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
              
              {/* Business Constraints */}
              <Card>
                <Card.Header>
                  <h3 className="text-lg font-semibold">Business</h3>
                </Card.Header>
                <Card.Body>
                  <ul className="space-y-2">
                    {project.constraints.business.map((constraint, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-2 text-sm text-grey-700 dark:text-beige-300"
                      >
                        <svg 
                          className="w-4 h-4 text-beige-400 dark:text-navy-400 mt-0.5 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        {constraint}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </section>
          
          {/* Architecture Section */}
          <section>
            <h2 className="mb-6">Architecture Decisions</h2>
            <div className="space-y-6">
              {project.architecture.decisions.map((decision, index) => (
                <Card key={index}>
                  <Card.Body>
                    <h4 className="text-lg font-semibold mb-3 text-navy-900 dark:text-beige-100">
                      {decision.decision}
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-grey-600 dark:text-beige-400">
                          Reasoning:
                        </span>
                        <p className="text-grey-700 dark:text-beige-300 mt-1">
                          {decision.reasoning}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-grey-600 dark:text-beige-400">
                          Trade-off:
                        </span>
                        <p className="text-grey-700 dark:text-beige-300 mt-1">
                          {decision.tradeoff}
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Results Section - THE PROOF */}
          <section>
            <h2 className="mb-6">Results</h2>
            
            {/* Performance Metrics */}
            {project.results.performance && project.results.performance.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-navy-900 dark:text-beige-100">
                  Performance Impact
                </h3>
                <div className="space-y-3">
                  {project.results.performance.map((metric, index) => (
                    <MetricComparison
                      key={index}
                      metric={metric.metric}
                      before={metric.before}
                      after={metric.after}
                      improvement={metric.improvement}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Business Metrics */}
            {project.results.business && project.results.business.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-navy-900 dark:text-beige-100">
                  Business Impact
                </h3>
                <div className="space-y-3">
                  {project.results.business.map((metric, index) => (
                    <MetricComparison
                      key={index}
                      metric={metric.metric}
                      before={metric.before}
                      after={metric.after}
                      improvement={metric.improvement}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
          
        </div>
      </div>
    </div>
  );
};