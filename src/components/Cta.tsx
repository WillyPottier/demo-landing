export default function Cta() {
  return (
    <section id="cta" className="bg-indigo-600 dark:bg-indigo-500">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Prêt à construire comme un pro ?
        </h2>
        <p className="mt-4 text-indigo-100">
          Démarre avec un workflow moderne (CI, qualité, déploiement) et shippe plus vite.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Voir les plans
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/80 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}