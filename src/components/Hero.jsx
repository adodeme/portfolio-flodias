import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600 rounded-full blur-[140px] opacity-30"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full blur-[140px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-extrabold"
          >
            ADODEME
            <br />
            FLODIAS
          </motion.h1>
          

          <TypeAnimation
            sequence={[
                "Développeur React",
                2000,
                "Développeur Laravel",
                2000,
                "Créateur d'applications Web",
                2000,
                "Étudiant en Informatique",
                2000,
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400 text-2xl mt-6 font-semibold"
            />

          <div className="mt-8 flex gap-4">
            <a
            href="#projects"
            className="
                px-6 py-3
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-violet-600
                inline-block
            "
            >
            Voir mes projets
            </a>

            <a
            href="/cv/cvflodiasadodeme.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
                px-6 py-3
                rounded-xl
                border
                border-slate-700
                hover:border-cyan-400
                transition
            "
            >
            Télécharger mon CV
            </a>
      </div>

        </div>

        <div className="flex justify-center">

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
            className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 p-1"
          >
            <img
            src="/cool2.jpeg"
            alt="Flodias"
            className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}