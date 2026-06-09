const timeline = [
  {
    year: "2024",
    title: "Début du développement web HTML, CSS et Bootstrap",
  },
  {
    year: "2025",
    title: "Premiers projets HTML CSS Bootstrap",
  },
  {
    year: "2026",
    title: "Projects React.js Laravel",
  },
];

export default function Timeline() {
  return (
    <section className="py-28">
      <h2 className="text-center text-5xl font-bold mb-16">
        Mon Parcours
      </h2>

      <div className="max-w-4xl mx-auto px-6">

        {timeline.map((item) => (
          <div
            key={item.year}
            className="flex gap-8 mb-10"
          >
            <div className="text-cyan-400 font-bold text-xl min-w-[80px]">
              {item.year}
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full">
              {item.title}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}