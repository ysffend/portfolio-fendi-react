import profileImage from "../assets/Fendi.jpeg";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 lg:px-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-[320px_1fr]">
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Fendi"
            className="w-72 rounded-2xl object-cover shadow-2xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="mb-4 text-3xl font-semibold text-cyan-400">
            Muhammad Effendi Yusuf
          </h3>

          <p className="leading-8 text-gray-300">
            Saya adalah mahasiswa Informatika Universitas Ahmad Dahlan yang
            memiliki minat pada Front-End Development, UI/UX Design, dan
            pengembangan aplikasi web modern.
          </p>

          <p className="mt-6 leading-8 text-gray-300">
            Saya senang membangun website yang modern, responsif, interaktif,
            serta memiliki tampilan yang menarik dengan memanfaatkan teknologi
            HTML, CSS, JavaScript, React, Tailwind CSS, dan TypeScript.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300">
              React
            </span>

            <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300">
              TypeScript
            </span>

            <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300">
              Tailwind CSS
            </span>

            <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300">
              JavaScript
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
