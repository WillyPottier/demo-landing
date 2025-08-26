export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Demo Landing
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Next.js • Tailwind • CI/CD • Qualité de code
            </p>
          </div>

          <nav aria-label="Liens footer" className="flex gap-6 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Pricing
            </a>
            <a href="#cta" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Commencer
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a aria-label="Twitter" href="https://twitter.com/" target="_blank" rel="noreferrer"
               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">X</a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">in</a>
            <a aria-label="GitHub" href="https://github.com/WillyPottier" target="_blank" rel="noreferrer"
               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">GH</a>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Demo Landing — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}