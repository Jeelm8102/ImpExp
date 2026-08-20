const ACCENTS = {
  sage: "linear-gradient(155deg, rgba(91,115,96,.34), rgba(247,243,234,.95))",
  clay: "linear-gradient(155deg, rgba(177,74,50,.34), rgba(247,243,234,.95))",
  ochre: "linear-gradient(155deg, rgba(201,138,43,.34), rgba(247,243,234,.95))",
};

export default function Crate({
  size,
  accent,
  label,
  spinDuration = 26,
  reverse = false,
  x,
  y,
  z,
  bobDuration = 7,
  bobDelay = 0,
}: {
  size: number;
  accent: keyof typeof ACCENTS;
  label: React.ReactNode;
  spinDuration?: number;
  reverse?: boolean;
  x: number;
  y: number;
  z: number;
  bobDuration?: number;
  bobDelay?: number;
}) {
  const half = size / 2;
  const bg = ACCENTS[accent];
  const faceBase: React.CSSProperties = { width: size, height: size, background: bg };

  const faces: { key: string; transform: string; front?: boolean }[] = [
    { key: "front", transform: `translateZ(${half}px)`, front: true },
    { key: "right", transform: `rotateY(90deg) translateZ(${half}px)` },
    { key: "left", transform: `rotateY(-90deg) translateZ(${half}px)` },
    { key: "back", transform: `rotateY(180deg) translateZ(${half}px)` },
    { key: "top", transform: `rotateX(90deg) translateZ(${half}px)` },
    { key: "bottom", transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div className="crate-pos" style={{ transform: `translate3d(${x}px, ${y}px, ${z}px)` }}>
      <div className="crate-float" style={{ animationDuration: `${bobDuration}s`, animationDelay: `${bobDelay}s` }}>
        <div
          className="cube-spin"
          style={{
            width: size,
            height: size,
            marginLeft: -half,
            marginTop: -half,
            animationDuration: `${spinDuration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {faces.map((f) => (
            <div
              key={f.key}
              className={`cube-face ${f.front ? "cube-face-front" : "cube-face-plain"}`}
              style={{ ...faceBase, transform: f.transform, color: "#141B2E" }}
            >
              {f.front && <span>{label}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
