import { Mail, Phone, MapPin, Send } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-24">
      <h2 className="mb-14 text-center text-4xl font-bold text-white">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        {/* Left */}
        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg">
          <h3 className="mb-6 text-3xl font-bold text-white">
            Let's Work Together 🚀
          </h3>

          <p className="mb-8 leading-8 text-gray-300">
            Saya terbuka untuk peluang kerja, freelance, maupun kolaborasi dalam
            pengembangan website dan aplikasi modern.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" />
              <span className="text-gray-300">email@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400" />
              <span className="text-gray-300">+62 xxx xxxx xxxx</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" />
              <span className="text-gray-300">Yogyakarta, Indonesia</span>
            </div>
          </div>

          <div className="mt-10 flex gap-5">
            <a
              href="https://github.com/"
              className="rounded-full bg-cyan-500 p-3 text-white transition hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              className="rounded-full bg-cyan-500 p-3 text-white transition hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right */}

        <form className="space-y-6 rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-cyan-500/20 bg-black/20 p-4 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-cyan-500/20 bg-black/20 p-4 text-white outline-none"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full rounded-xl border border-cyan-500/20 bg-black/20 p-4 text-white outline-none"
          />

          <button className="flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600">
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
