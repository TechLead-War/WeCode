export const metadata = {
  title: "Decode Club Timeline | WeCode",
  description: "Timeline of events for the Decode Club."
};

import DecodeTimeline from "@/app/components/DecodeTimeline";

export default function DecodePage() {
  return (
    <div className="min-h-screen py-8">
      <DecodeTimeline />
    </div>
  );
}
