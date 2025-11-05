import Navbar from "@/app/components/Navbar";
import WeCodeTimeline from "@/app/components/PastEvents";

export const metadata = {
  title: "wecode Club Timeline | wecode",
  description: "Timeline of events for the wecode Club.",
};

export default function DecodePage() {
  return (
    <div className="min-h-screen bg-black text-white mt-16 dark">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <WeCodeTimeline />
      </main>
    </div>
  );
}