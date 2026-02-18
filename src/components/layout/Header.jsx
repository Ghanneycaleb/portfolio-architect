import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Header Component
 *
 * Main navigation with:
 * - Logo/name
 * - Navigation links
 * - Theme toggle
 * - Mobile menu (hamburger)
 *
 * Sticky at top with backdrop blur effect.
 */
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "#projects" },
    { name: "Notes", path: "#notes" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header
      className="
      sticky top-0 z-50 
      bg-beige-50/80 dark:bg-navy-900/80 
      backdrop-blur-sm 
      border-b border-beige-300 dark:border-navy-800
    "
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <a
            href="/"
            className="
              text-xl font-bold 
              text-navy-900 dark:text-beige-50 
              hover:text-navy-600 dark:hover:text-beige-200 
              transition-colors
            "
          >
            <span className="hidden sm:inline">Frontend Architect</span>
            <span className="sm:hidden">FA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="
                  text-sm font-medium 
                  text-grey-700 dark:text-beige-300 
                  hover:text-navy-600 dark:hover:text-beige-100 
                  transition-colors
                "
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                text-navy-700 dark:text-beige-300 
                hover:text-navy-600 dark:hover:text-beige-100 
                focus-ring p-2
              "
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                // X icon (close)
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon (menu)
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when hamburger clicked) */}
        {mobileMenuOpen && (
          <div
            className="
            md:hidden py-4 
            border-t border-beige-300 dark:border-navy-800
          "
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    text-base font-medium 
                    text-grey-700 dark:text-beige-300 
                    hover:text-navy-600 dark:hover:text-beige-100 
                    transition-colors
                  "
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
