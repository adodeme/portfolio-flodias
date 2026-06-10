import { motion } from "framer-motion";

const projects = [
  {
    title: "TP Personnel",
    tech: "HTML • CSS • JavaScript",
    image: "/projects/tp-perso.png",
    demo: "https://adodeme.github.io/tp_perso",
    description:
      "Projet personnel de découverte du développement web.",
  },

  {
    title: "Portfolio Awwwards",
    tech: "React",
    image: "/projects/awwards.png",
    demo: "https://porfolio-awwwards.vercel.app/",
    description:
      "Portfolio moderne inspiré des designs Awwwards.",
  },

  {
    title: "Plateforme Vente",
    tech: "PHP • MySQL",
    image: "/projects/vente.png",
    demo:
      "http://plateformevente.infinityfreeapp.com/index.php",
    description:
      "Marketplace de vente en ligne.",
  },

  {
    title: "Annuaire Mairie",
    tech: "React • Laravel",
    image: "/projects/mairie.png",
    demo:
      "https://annuaire-mairie-final.onrender.com/#",
    description:
      "Annuaire numérique pour les administrations.",
  },

  {
    title: "Administration Annuaire",
    tech: "React • Laravel",
    image: "/projects/admin.png",
    demo:
      "https://annuaire-mairie-final.onrender.com/#/admin",
    description:
      "Interface d'administration de l'annuaire.",
  },

  {
    title: "Annuaire Frontend",
    tech: "React • Tailwind",
    image:
      "/projects/frontend.png",
    demo:
      "https://annuaire-frontend-virid.vercel.app/",
    description:
      "Frontend moderne pour un annuaire professionnel.",
  },
  {
  title: "Stage Romas",
  tech: "HTML • Bootstrap",
  image: "/projects/stageromas.png",
  demo: "https://adodeme.github.io/stageromas/",
  description:
    "Site web réalisé dans le cadre d'un projet de stage."
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <h2 className="text-center text-5xl font-bold mb-16">
        Mes Projets
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            className="
              block
              bg-slate-900
              rounded-3xl
              overflow-hidden
              border
              border-slate-800
              hover:border-cyan-400
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-cyan-400 mt-2">
                {project.tech}
              </p>

              <p className="text-slate-400 mt-3">
                {project.description}
              </p>

              <div className="mt-6">
                <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600">
                  Voir le projet →
                </span>
              </div>

            </div>
          </motion.a>
        ))}

      </div>
    </section>
  );
}