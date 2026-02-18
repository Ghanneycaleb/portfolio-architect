/**
 * Projects Data Model
 * 
 * Each project is a case study proving engineering competence.
 * 
 * Structure:
 * - Problem (what was broken?)
 * - Constraints (what limited you?)
 * - Architecture (what did you build? why?)
 * - Trade-offs (what did you sacrifice?)
 * - Results (METRICS!)
 */

export const projects = [
  {
    id: "e-commerce-performance",
    title: "E-commerce Performance Overhaul",
    tagline: "Reduced load time by 3.2s, increased conversion by 18%",
    thumbnail: "/projects/ecommerce-thumb.jpg", // Add actual image later
    category: "Performance Optimization",
    timeline: "Q2 2024 - 3 months",
    role: "Lead Frontend Engineer",
    team: "4 engineers, 1 designer, 1 PM",
    
    // High-level summary for cards
    summary: "Re-architected a legacy e-commerce platform serving 200K daily users, achieving 40% faster page loads and measurable business impact.",
    
    // The problem section
    problem: {
      context: "Legacy monolith serving 200K+ daily users with deteriorating performance. Customer complaints rising, cart abandonment at 68%.",
      challenges: [
        "Bundle size exceeded 2MB (uncompressed)",
        "Time to Interactive averaging 8.5 seconds on 4G",
        "No code splitting - entire app loaded on homepage",
        "Third-party scripts blocking main thread",
        "Unoptimized images causing layout shifts"
      ],
      businessImpact: "15% quarter-over-quarter revenue decline attributed to poor UX"
    },
    
    // Technical and business constraints
    constraints: {
      technical: [
        "Cannot rewrite - must incrementally migrate",
        "Support IE11 (12% of user base)",
        "Maintain 99.9% uptime during migration",
        "Legacy API contracts must remain intact"
      ],
      business: [
        "3-month deadline for Black Friday",
        "No budget for infrastructure changes",
        "Team of 4 (including me) for entire frontend"
      ]
    },
    
    // Architecture decisions with reasoning
    architecture: {
      decisions: [
        {
          decision: "Route-based code splitting with React.lazy",
          reasoning: "Reduced initial bundle from 2.1MB to 340KB. Users only load what they need.",
          tradeoff: "Added 200ms for lazy-loaded routes, but eliminated 5s+ initial load"
        },
        {
          decision: "Implement facade pattern for third-party scripts",
          reasoning: "Defer analytics/chat until user interaction. Cleared main thread.",
          tradeoff: "Lost some early tracking data, but TBT improved from 3.2s to 0.8s"
        }
      ]
    },
    
    // Measurable results
    results: {
      performance: [
        { metric: "Largest Contentful Paint", before: "8.2s", after: "2.1s", improvement: "-74%" },
        { metric: "Time to Interactive", before: "8.5s", after: "3.2s", improvement: "-62%" },
        { metric: "Bundle Size (initial)", before: "2.1MB", after: "340KB", improvement: "-84%" }
      ],
      business: [
        { metric: "Conversion Rate", before: "2.1%", after: "2.5%", improvement: "+18%" },
        { metric: "Cart Abandonment", before: "68%", after: "54%", improvement: "-21%" },
        { metric: "Bounce Rate", before: "58%", after: "41%", improvement: "-29%" }
      ]
    },
    
    // Tech stack used
    techStack: ["React 18", "Webpack 5", "Cloudinary", "Vercel"],
    
    // Links
    links: {
      live: null, // Add if public
      github: null, // Add if public
    }
  },
  
  {
    id: "design-system",
    title: "Enterprise Design System",
    tagline: "Unified component library serving 15+ product teams",
    thumbnail: "/projects/design-system-thumb.jpg",
    category: "Architecture",
    timeline: "Q1 2023 - 6 months",
    role: "Frontend Architect",
    team: "2 engineers, 1 designer",
    
    summary: "Built scalable component library used by 15 teams, reducing development time by 30% and ensuring brand consistency.",
    
    problem: {
      context: "Product teams building duplicate components. No single source of truth. Brand inconsistency across 8 different apps.",
      challenges: [
        "Each team re-implementing buttons, modals, forms",
        "No accessibility standards being followed",
        "Designer handoffs causing 2-3 day delays",
        "Bundle duplication across micro-frontends"
      ],
      businessImpact: "Estimated 40 hours/month wasted per team on redundant UI work"
    },
    
    constraints: {
      technical: [
        "Must support React, Vue, and Web Components",
        "Framework-agnostic styling approach needed",
        "Tree-shaking essential for bundle optimization",
        "TypeScript support required"
      ],
      business: [
        "Cannot block existing team roadmaps",
        "Adoption must be gradual, not forced",
        "Must prove value within 3 months"
      ]
    },
    
    architecture: {
      decisions: [
        {
          decision: "Monorepo with component versioning",
          reasoning: "Allows independent releases. Teams can upgrade incrementally.",
          tradeoff: "Added CI complexity, but enabled safe iteration"
        },
        {
          decision: "CSS-in-JS with zero-runtime (Vanilla Extract)",
          reasoning: "Type-safe styles, scoped CSS, framework agnostic, no runtime cost.",
          tradeoff: "Build step required, but eliminated className conflicts"
        }
      ]
    },
    
    results: {
      performance: [
        { metric: "Component bundle size", value: "82KB gzipped", context: "Full library" },
        { metric: "Tree-shaking efficiency", value: "Only 8KB", context: "For typical page" }
      ],
      business: [
        { metric: "Development velocity", improvement: "+30%", context: "Measured via sprint points" },
        { metric: "Teams adopted", value: "15 of 18", context: "Within 4 months" },
        { metric: "Components shipped", value: "64 components", context: "From 12 base primitives" }
      ]
    },
    
    techStack: ["React", "TypeScript", "Vanilla Extract", "Turborepo", "Storybook"],
    
    links: {
      live: null,
      github: null,
    }
  },
  
  {
    id: "checkout-redesign",
    title: "One-Click Checkout Redesign",
    tagline: "A/B tested feature increasing completion rate by 23%",
    thumbnail: "/projects/checkout-thumb.jpg",
    category: "UI/UX Engineering",
    timeline: "Q4 2023 - 2 months",
    role: "Frontend Lead",
    team: "Solo project",
    
    summary: "Redesigned checkout flow based on user research and A/B testing. Reduced steps from 5 to 2, improving completion by 23%.",
    
    problem: {
      context: "Checkout completion rate stagnant at 58%. Qualitative research showed frustration with multi-step process.",
      challenges: [
        "5-step checkout causing drop-offs",
        "Mobile UX particularly poor (41% completion)",
        "Form validation unclear",
        "No saved payment methods"
      ],
      businessImpact: "Lost ~$180K annually in abandoned carts"
    },
    
    constraints: {
      technical: [
        "Payment gateway integration cannot change (PCI compliance)",
        "Must maintain fraud detection checks",
        "Support all existing payment methods"
      ],
      business: [
        "Cannot launch without A/B test validation",
        "Must maintain current conversion as baseline",
        "2-month deadline"
      ]
    },
    
    architecture: {
      decisions: [
        {
          decision: "Single-page checkout with progressive disclosure",
          reasoning: "Research showed users want speed. Hide complexity until needed.",
          tradeoff: "More complex state management, but 70% faster perceived speed"
        },
        {
          decision: "Optimistic UI for form validation",
          reasoning: "Instant feedback vs waiting for server. Users feel in control.",
          tradeoff: "Rare edge case where optimistic UI wrong, but 95% accuracy"
        }
      ]
    },
    
    results: {
      performance: [
        { metric: "Steps reduced", before: "5", after: "2", improvement: "-60%" },
        { metric: "Time to complete", before: "4.2min", after: "1.8min", improvement: "-57%" }
      ],
      business: [
        { metric: "Completion rate", before: "58%", after: "71%", improvement: "+23%" },
        { metric: "Mobile completion", before: "41%", after: "64%", improvement: "+56%" },
        { metric: "Revenue impact", value: "$420K annually", context: "Based on 6-month A/B test" }
      ]
    },
    
    techStack: ["React", "Formik", "Stripe API", "Google Optimize", "Mixpanel"],
    
    links: {
      live: null,
      github: null,
    }
  }
];

// Helper to get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

// Helper to get projects by category
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};