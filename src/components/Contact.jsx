import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        "service_kvntolk",
        "template_7n6dg8a",
        form.current,
        "5Ekhd26GFlUJaJngq"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (err) => {
          console.log(err.text);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-12">
          Contactez-moi
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-8
            space-y-5
          "
        >
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            required
            className="
              w-full
              p-4
              rounded-xl
              bg-slate-800
              text-white
              outline-none
            "
          />

          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            required
            className="
              w-full
              p-4
              rounded-xl
              bg-slate-800
              text-white
              outline-none
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="
              w-full
              p-4
              rounded-xl
              bg-slate-800
              text-white
              outline-none
            "
          />

          <input
            type="text"
            name="sujet"
            placeholder="Sujet"
            required
            className="
              w-full
              p-4
              rounded-xl
              bg-slate-800
              text-white
              outline-none
            "
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Votre message..."
            required
            className="
              w-full
              p-4
              rounded-xl
              bg-slate-800
              text-white
              outline-none
            "
          />

          <button
            type="submit"
            className="
              w-full
              py-4
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-violet-600
              font-bold
              hover:scale-105
              transition
            "
          >
            Envoyer le message
          </button>

          {success && (
            <p className="text-green-400 text-center">
              ✅ Message envoyé avec succès !
            </p>
          )}

          {error && (
            <p className="text-red-400 text-center">
              ❌ Échec de l'envoi du message.
            </p>
          )}
        </form>
        <div className="flex justify-center gap-6 mt-10">

            <a
                href="https://github.com/adodeme"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub
                size={35}
                className="hover:text-cyan-400 transition"
                />
            </a>

            <a
                href="https://www.linkedin.com/in/s%C3%A8d%C3%A9gnon-flodias-adodeme-a17608415/"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedin
                size={35}
                className="hover:text-cyan-400 transition"
                />
            </a>

            <a href="mailto:adodemeflodias@gmail.com">
                <FaEnvelope
                size={35}
                className="hover:text-cyan-400 transition"
                />
            </a>

            </div>
      </div>
    </section>
  );
}