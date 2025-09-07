import { Vortex } from "@/app/components/ui/Vortex";

export default function Home() {
  return (
    <div>
      <Vortex
        containerClassName="fixed inset-0 -z-10"
        className="relative z-10 flex h-screen w-full flex-col text-center"
        backgroundColor="#000"
        baseHue={210}
      >
        <div className="space-y-6 mt-54">
          <h1 className="text-5xl font-bold text-white">
            Welcome to <span className="text-purple-400">WeCode</span>
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto">
            &#34;Where creativity meets code — empowering students to innovate,
            collaborate, and shape the future.&#34;
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-purple-500 text-white font-semibold hover:bg-sky-600">
              Join Discord
            </button>
            <button className="px-6 py-3 rounded-full bg-white text-gray-800 font-semibold hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </Vortex>
    </div>
  );
}