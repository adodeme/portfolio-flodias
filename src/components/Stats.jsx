import { motion } from "framer-motion";

const stats = [
  { number: "5+", title: "Projets" },
  { number: "10+", title: "Technologies" },
  { number: "2+", title: "Années d'apprentissage" },
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {stats.map((stat) => (
          <motion.div
            key={stat.title}
            whileHover={{ y: -10 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center"
          >
            <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {stat.number}
            </h2>

            <p className="mt-4 text-slate-400">
              {stat.title}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}