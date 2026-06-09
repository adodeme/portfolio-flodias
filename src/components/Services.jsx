const services = [
  "Sites web modernes",
  "Applications React",
  "Backends Laravel",
  "Interfaces responsives",
];

export default function Services() {
  return (
    <section className="py-28">

      <h2 className="text-center text-5xl font-bold mb-16">
        Ce que je construis
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {services.map((service) => (
          <div
            key={service}
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-10
            "
          >
            {service}
          </div>
        ))}

      </div>

    </section>
  );
}