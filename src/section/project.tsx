import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import astra from "../assets/projects/Astra Presence.jpeg";
import cosmic from "../assets/projects/cosmic spend.jpeg";
import lumina from "../assets/projects/lumina.jpeg";
import orbit from "../assets/projects/orbit.jpeg";

const projects = [
  {
    title: "Astra Presence",
    image: astra,
    description:
      "Website presensi modern dengan antarmuka yang sederhana dan responsif.",
    github: "https://github.com/ysffend/project",
    demo: "https://project.vercel.app",
  },
  {
    title: "Cosmic Spend",
    image: cosmic,
    description:
      "Aplikasi pencatat keuangan dengan dashboard dan visualisasi transaksi.",
    github: "#",
    demo: "#",
  },
  {
    title: "Lumina",
    image: lumina,
    description:
      "Website company profile modern dengan desain elegan dan clean.",
    github: "#",
    demo: "#",
  },
  {
    title: "Orbit",
    image: orbit,
    description:
      "Landing page modern dengan animasi interaktif dan tampilan futuristik.",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 lg:px-24">
      <h2 className="mb-14 text-center text-4xl font-bold text-white">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg transition duration-300 hover:-translate-y-3 hover:border-cyan-400"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover transition duration-500 hover:scale-105"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>

              <p className="mt-4 leading-7 text-gray-300">
                {project.description}
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-white transition hover:bg-cyan-600"
                >
                  <FaGithub size={18} />
                  Github
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 rounded-lg border border-cyan-500 px-5 py-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
                >
                  <ExternalLink size={18} />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
