import WeCodeTimeline from "@/app/components/DecodeTimeline";

export const metadata = {
  title: "wecode Club Timeline | wecode",
  description: "Timeline of events for the wecode Club."
};


export default function DecodePage() {
  return (
    <div className="min-h-screen py-8">
      <WeCodeTimeline />
    </div>
  );
}
