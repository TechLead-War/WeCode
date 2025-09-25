import { Vortex } from "@/app/components/ui/Vortex";
import Navbar from "@/app/components/Navbar";
import { Cards } from "@/app/components/Cards";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Vortex
        containerClassName=""
        className="relative z-0 flex w-full flex-col items-center text-center pt-20 h-screen pb-12 pointer-events-auto"
        backgroundColor="#000"
        baseHue={210}
      >
        <div className="space-y-6 mt-56">
          <h1 className="text-5xl font-bold text-white">
            Welcome to <span className="text-purple-400">WeCode</span>
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto">
            &#34;Where creativity meets code — empowering students to innovate,
            collaborate, and shape the future.&#34;
          </p>

            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="https://discord.gg/dk25zDfk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-50 px-6 py-3 bg-purple-500 text-white font-semibold rounded-full shadow hover:bg-purple-400 transition cursor-pointer pointer-events-auto"
                >
                    Join Discord
                </a>
                <a
                    href="#events"

                    className="relative z-50 px-6 py-3 bg-white text-[#1e3a8a] font-semibold rounded-full shadow hover:brightness-105 transition cursor-pointer pointer-events-auto"
                >
                    Learn More
                </a>

            </div>
        </div>
      </Vortex>

        <section id="cards" className="relative z-20">
            <Cards/>
        </section>
    </div>
  );
}