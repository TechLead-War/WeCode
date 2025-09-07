import {Vortex} from "@/app/components/ui/Vortex";

export default function Home() {
  return (
      <div>
        <Vortex
          containerClassName="fixed inset-0 -z-10"
          className="pointer-events-none"
        />
      </div>
      );
}
