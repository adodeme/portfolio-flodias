export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Flodias.dev
        </h1>

        <ul className="hidden md:flex gap-8">
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}