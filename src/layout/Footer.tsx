import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 py-10 text-center">
      <p className="text-gray-400">© 2026 Muhammad Effendi Yusuf</p>

      <p className="mt-3 flex items-center justify-center gap-2 text-gray-500">
        Made with
        <Heart size={16} className="fill-red-500 text-red-500" />
        using React & Tailwind CSS
      </p>
    </footer>
  );
}
