export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white dark:bg-gray-900"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:py-28">
        <div className="sm:max-w-2xl">
          <h1
            id="hero-title"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-white"
          >
            Construis des sites <span className="underline decoration-indigo-500">comme un pro</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Next.js • Tailwind • CI/CD • Qualité de code. Apprends un vrai workflow de dev
            et shippe plus vite, sans sacrifier la qualité.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 dark:focus:ring-offset-gray-900"
            >
              Commencer maintenant
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium border border-gray-300 text-gray-900 hover:bg-gray-50 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Voir les plans
            </a>
          </div>
        </div>

        {/* Décor léger */}
        <div
          className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-400/20"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}