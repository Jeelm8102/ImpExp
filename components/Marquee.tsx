const ITEMS = [
  "Cardamom",
  "Turmeric",
  "Black Pepper",
  "Cumin",
  "Chili",
  "Coriander",
  "Fennel",
  "Cloves",
  "Basmati Rice",
  "Sesame",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-pause bg-alabaster text-ink border-y border-ink/[0.08] py-5 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-8 font-display text-xl whitespace-nowrap">
            {item}
            <span className="text-paprika font-body">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
