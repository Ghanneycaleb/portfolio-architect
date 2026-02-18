/**
 * Profile Data
 * 
 * Your personal information, metrics, and bio.
 * UPDATE THIS FILE with your actual information!
 */

export const profile = {
  // Basic Info
  name: "Caleb Ghanney",
  title: "Frontend Architect",
  tagline: "Building scalable, performant web experiences with measurable impact",
  location: "Accra, Ghana",
  
  // Hero Impact Metrics (proof-first approach)
  // These appear above the fold - make them impressive!
  impactMetrics: [
    {
      value: "40%",
      label: "Performance Improvement",
      context: "Avg. across projects"
    },
    {
      value: "500K+",
      label: "Users Impacted",
      context: "Monthly active users"
    },
    {
      value: "95+",
      label: "Lighthouse Score",
      context: "Production average"
    }
  ],
  
  // Core expertise areas
  expertise: [
    "Frontend Architecture",
    "Performance Optimization",
    "UI/UX Engineering",
    "Component Systems",
    "Web Accessibility",
    "Progressive Enhancement"
  ],
  
  // Tech stack with context (not just a list)
  techStack: {
    languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    frameworks: ["React", "Vue", "Next.js", "Vite"],
    tools: ["Webpack", "Tailwind", "Figma", "Git"],
    testing: ["Jest", "React Testing Library", "Cypress", "Lighthouse"],
    practices: ["Performance Budgets", "Code Splitting", "A11y Testing", "Responsive Design"]
  },
  
  // Contact links
  links: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername", // optional
    resume: "/resume.pdf"
  },
  
  // Bio - results-oriented, not generic
  // Focus on WHAT you've achieved, not just what you do
  bio: `Frontend Architect with 5+ years building production-grade web applications. 
Specialized in performance optimization, scalable component architectures, and 
translating complex user needs into elegant technical solutions.

Proven track record of improving Core Web Vitals by 40%+, reducing bundle sizes 
by 60%, and shipping features that delight millions of users.`,

  // Target roles (helps tune messaging)
  targetRoles: [
    "Senior Frontend Engineer",
    "Frontend Architect",
    "Staff Engineer (Frontend)",
    "UI Engineer"
  ]
};