"use client";

const Section = ({ title, children }) => (
  <div className="rounded-2xl bg-[#F5F5F7] dark:bg-neutral-800 p-6">
    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
    <div className="mt-2 text-neutral-700 dark:text-neutral-300">{children}</div>
  </div>
);

export default function EventDetails({ event }) {
  const info = event.info?.length ? event.info : [event.description].filter(Boolean);
  const photos = event.photos?.length ? event.photos : (event.src ? [event.src] : []);
  return (
    <div className="space-y-4">

      <Section title="Photos">
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {photos.map((u, i) => (
            <img key={i} src={u} alt={`${event.title} photo ${i+1}`} className="w-full h-96 object-cover rounded-xl" />
          ))}
        </div>
      </Section>
      <Section title="Info">
        <div className="space-y-3">
          {info.map((p, i) => <p key={i} className="leading-relaxed">{p}</p>)}
        </div>
      </Section>

      <Section title="Date, Time, Venue">
        <ul className="space-y-1">
          <li><span className="font-medium">Date:</span> {event.date}</li>
          <li><span className="font-medium">Time:</span> {event.time}</li>
          <li><span className="font-medium">Venue:</span> {event.venue}</li>
        </ul>
      </Section>

      <Section title="Prizes & Registration">
        <p className="mb-2"><span className="font-medium">Registration Fee:</span> {event.registrationFee}</p>
        {!!event.prizes?.length && (
          <ul className="list-disc list-inside space-y-1">
            {event.prizes.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        )}
      </Section>

      <Section title="Links & Contact">
        <ul className="space-y-1">
          {event.links?.register && <li><a className="underline" href={event.links.register}>Register</a></li>}
          {event.links?.rules && <li><a className="underline" href={event.links.rules}>Rules</a></li>}
          {event.links?.photos && <li><a className="underline" href={event.links.photos}>Gallery</a></li>}
          <li><span className="font-medium">Contact:</span> {event.contact}</li>
        </ul>
      </Section>
    </div>
  );
}