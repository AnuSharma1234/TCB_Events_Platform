import { Link } from "react-router-dom";
import Aurora from "../components/Aurora";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="relative text-center">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:70px_70px] h-screen"></div>
        <Aurora
          colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
          blend={0.5}
          amplitude={1.5}
          speed={0.3}
        />

        <div className="relative container mx-auto px-4 py-20">
          <span className="text-3xl font-bold leading-tight">
            thecodebreakers
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 mb-2">
              presents
            </div>
            <span className="block">
              Event<span className="text-cyan-500">Breakers</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            EventBreakers is your one-stop hub for all codebreakers events.
            Easily explore event details, register in seconds, and stay updated
            with instant notifications—all from one clean, user-friendly
            platform designed for smooth participant experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-18 mb-12">
            <Link
              to="/login"
              className="rounded-md border border-zinc-800 px-6 py-4 text-lg font-semibold bg-black text-cyan-500 shadow-[10px_8px_0px_0px_#00BCD4] hover:shadow-[8px_5px_0px_0px_#00BCD4] transition-all duration-300"
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                Login
              </span>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300"
              >
                →
              </span>
            </Link>
            <Link
              to="/signup"
              className="rounded-md border border-zinc-800 px-6 py-4 text-lg font-semibold bg-black text-cyan-500 shadow-[10px_8px_0px_0px_#00BCD4] hover:shadow-[8px_5px_0px_0px_#00BCD4] transition-all duration-300"
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                Sign-Up
              </span>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
