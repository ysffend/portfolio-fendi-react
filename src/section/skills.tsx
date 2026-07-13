import {
  Code2,
  Database,
  Palette,
  Monitor,
  Globe,
  Smartphone,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: <Code2 size={40} />,
    color: "text-cyan-400",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: <Database size={40} />,
    color: "text-green-400",
    items: ["PHP", "Laravel", "Node.js", "MySQL", "MongoDB"],
  },
  {
    title: "UI / UX",
    icon: <Palette size={40} />,
    color: "text-pink-400",
    items: ["Figma", "Canva", "Wireframe", "Prototype", "Responsive Design"],
  },
  {
    title: "Tools",
    icon: <Monitor size={40} />,
    color: "text-yellow-400",
    items: ["Git", "GitHub", "VS Code", "Netlify", "Vercel"],
  },
  {
    title: "Web",
    icon: <Globe size={40} />,
    color: "text-blue-400",
    items: ["REST API", "JSON", "Firebase", "SEO"],
  },
  {
    title: "Mobile",
    icon: <Smartphone size={40} />,
    color: "text-purple-400",
    items: ["Responsive Layout", "PWA", "Android Studio"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-12 lg:px-24">
      <h2 className="mb-14 text-center text-4xl font-bold text-white">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg transition hover:-translate-y-2 hover:border-cyan-400"
          >
            <div className={skill.color}>{skill.icon}</div>

            <h3 className="mt-5 mb-5 text-2xl font-semibold text-white">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cyan-500/20 px-3 py-2 text-sm text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
