import { profile } from "../../data/profile";

/**
 * Footer Component
 *
 * Contains:
 * - Contact information
 * - Social links
 * - Resume download
 * - Copyright
 *
 * Uses beige background for subtle separation.
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
      bg-beige-100 dark:bg-navy-900 
      border-t border-beige-300 dark:border-navy-800
    "
    >
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3
              className="
              text-sm font-semibold 
              text-navy-900 dark:text-beige-100 
              mb-4
            "
            >
              Contact
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${profile.links.email}`}
                className="
                  text-sm 
                  text-grey-600 dark:text-beige-400 
                  hover:text-navy-600 dark:hover:text-beige-200 
                  transition-colors
                "
              >
                {profile.links.email}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3
              className="
              text-sm font-semibold 
              text-navy-900 dark:text-beige-100 
              mb-4
            "
            >
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm 
                  text-grey-600 dark:text-beige-400 
                  hover:text-navy-600 dark:hover:text-beige-200 
                  transition-colors
                "
              >
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm 
                  text-grey-600 dark:text-beige-400 
                  hover:text-navy-600 dark:hover:text-beige-200 
                  transition-colors
                "
              >
                LinkedIn
              </a>
              {profile.links.twitter && (
                <a
                  href={profile.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm 
                    text-grey-600 dark:text-beige-400 
                    hover:text-navy-600 dark:hover:text-beige-200 
                    transition-colors
                  "
                >
                  Twitter
                </a>
              )}
            </div>
          </div>

          {/* Resume */}
          <div>
            <h3
              className="
              text-sm font-semibold 
              text-navy-900 dark:text-beige-100 
              mb-4
            "
            >
              Resources
            </h3>
            <a
              href={profile.links.resume}
              download
              className="
                text-sm 
                text-grey-600 dark:text-beige-400 
                hover:text-navy-600 dark:hover:text-beige-200 
                transition-colors 
                inline-flex items-center gap-1
              "
            >
              {/* Download icon */}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="
          mt-8 pt-8 
          border-t border-beige-300 dark:border-navy-800 
          text-center
        "
        >
          <p className="text-sm text-grey-600 dark:text-beige-400">
            © {currentYear} {profile.name}. Built with React + Vite + Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};
