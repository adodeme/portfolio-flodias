import {
  FaReact,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";

export default function TechStack() {
  return (
    <section className="py-28">

      <h2 className="text-center text-5xl font-bold mb-16">
        Stack Favorite
      </h2>

      <div className="flex justify-center gap-12 flex-wrap">

        <FaReact
          size={90}
          className="text-cyan-400"
        />

        <FaLaravel
          size={90}
          className="text-red-500"
        />

        <FaPhp
          size={90}
          className="text-indigo-400"
        />

      </div>

    </section>
  );
}