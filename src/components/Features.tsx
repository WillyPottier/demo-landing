import { title } from "process";

export default function Features() {
    const features = [
        {
            title: "Ultra rapide ⚡",
            description: "Optimisé avec Next.js et TailwindCSS pour des performances incroyables.",
        },
        {
            title: "Responsive 📱",
            description: "Compatible avec tous les écrans : mobile, tablette, desktop.",
        },
        {
            title: "Accessible ♿",
            description: "Pensé pour être utilisable par tous, avec un design inclusif.",
        },
        {
            title: "Open Source 🌍",
            description: "Construit sur des technologies modernes et ouvertes."
        }
    ];

    return (
        <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Pourquoi nous ?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Nos points forts
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Une stack moderne et fiable pour ton prochain projet.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-start">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}