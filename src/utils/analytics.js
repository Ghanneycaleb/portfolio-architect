/**
 * Analytics Utility
 * 
 * Lightweight wrapper for tracking user interactions.
 * Integrates with Vercel Analytics (add script to index.html later).
 * 
 * Events tracked:
 * - Page views
 * - Project clicks
 * - Resume downloads
 * - Contact link clicks
 * - Scroll depth
 */

/**
 * Check if analytics is available
 */
const isAnalyticsEnabled = () => {
  return typeof window !== 'undefined' && window.va;
};

/**
 * Track custom events
 * 
 * @param {string} eventName - Name of the event
 * @param {object} properties - Event properties (optional)
 */
export const trackEvent = (eventName, properties = {}) => {
  // Vercel Analytics
  if (isAnalyticsEnabled()) {
    window.va('event', eventName, properties);
  }
  
  // Console log in development
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', eventName, properties);
  }
};

/**
 * Track page views
 * Called automatically by router, but can be used manually
 */
export const trackPageView = (path) => {
  trackEvent('pageview', { path });
};

/**
 * Track project card clicks
 */
export const trackProjectClick = (projectId, projectTitle) => {
  trackEvent('project_click', {
    project_id: projectId,
    project_title: projectTitle,
  });
};

/**
 * Track resume downloads
 */
export const trackResumeDownload = () => {
  trackEvent('resume_download');
};

/**
 * Track contact link clicks
 */
export const trackContactClick = (platform) => {
  trackEvent('contact_click', {
    platform, // 'email', 'github', 'linkedin', 'twitter'
  });
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url, context) => {
  trackEvent('external_link', {
    url,
    context, // Where the link was clicked from
  });
};

/**
 * Performance monitoring helper
 */
export const trackPerformance = () => {
  if (
    typeof window === 'undefined' ||
    !window.performance ||
    !window.performance.getEntriesByType
  ) {
    return;
  }

  // Wait for page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      const [perfEntry] = window.performance.getEntriesByType('navigation');
      if (perfEntry) {
        const pageLoadTime = perfEntry.duration;
        const connectTime = perfEntry.responseEnd - perfEntry.requestStart;
        trackEvent('performance', {
          page_load_time: pageLoadTime,
          connect_time: connectTime,
        });
      }
    }, 0);
  });
};

export default {
  trackEvent,
  trackPageView,
  trackProjectClick,
  trackResumeDownload,
  trackContactClick,
  trackExternalLink,
  trackPerformance,
};