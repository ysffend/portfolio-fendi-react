export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-cyan-500/20 bg-black/40 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <h1 className="text-3xl font-bold text-white">
          Fendi<span className="text-cyan-400">.</span>
        </h1>

        <nav className="hidden gap-10 text-lg text-white md:flex">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
