import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiLaravel,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={45} /> },
  { name: "CSS3", icon: <FaCss3Alt size={45} /> },
  { name: "JavaScript", icon: <FaJs size={45} /> },
  { name: "React", icon: <FaReact size={45} /> },
  { name: "Laravel", icon: <SiLaravel size={45} /> },
  { name: "PHP", icon: <FaPhp size={45} /> },
  { name: "MySQL", icon: <SiMysql size={45} /> },
  { name: "Git", icon: <FaGitAlt size={45} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={45} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <h2 className="text-center text-5xl font-bold mb-16">
        Mes compétences
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:scale-105 transition duration-300"
          >
            <div className="flex justify-center text-cyan-400 mb-4 group-hover:text-violet-400 transition">
              {skill.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}