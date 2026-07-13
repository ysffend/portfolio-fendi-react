import { ShaderAnimation } from "../ui/shader-animation";
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Shader */}
      <ShaderAnimation />

      {/* Overlay agar teks mudah dibaca */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Isi Hero */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-6xl font-bold">Muhammad Effendi Yusuf</h1>

        <p className="mt-5 text-2xl text-cyan-300">Front-End Developer</p>
      </div>
    </section>
  );
}
