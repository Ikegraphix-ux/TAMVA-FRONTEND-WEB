import { LinkButton } from "./Button";
import { Container } from "./Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <Container className="relative py-20 sm:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">
              One connected platform
            </p>
            <h1 className="mt-4 text-h1-mobile sm:text-h1 font-semibold tracking-tight text-white">
              Financial technology infrastructure for African markets.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-100">
              TAMVA is building products for individuals, businesses,
              institutions and developers. Ghana is our initial market, with a
              broader African outlook.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <LinkButton href="/products" withArrow>
                Explore the platform
              </LinkButton>
              <LinkButton href="/solutions" variant="secondary">
                See who TAMVA serves
              </LinkButton>
            </div>
            <p className="mt-8 text-sm font-medium uppercase tracking-widest text-primary-400">
              People. Data. Trust. Opportunity.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <TrustLayerDiagram />
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustLayerDiagram() {
  const nodes = [
    { label: "Individuals", x: 90, y: 60 },
    { label: "Businesses", x: 310, y: 60 },
    { label: "Institutions", x: 310, y: 260 },
    { label: "Developers", x: 90, y: 260 },
  ];
  const center = { x: 200, y: 160 };

  return (
    <svg
      viewBox="0 0 400 320"
      className="h-auto w-full"
      role="img"
      aria-label="Individuals, businesses, institutions and developers connected through the TAMVA platform"
    >
      <defs>
        <linearGradient id="node-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#33C48E" />
          <stop offset="100%" stopColor="#10A574" />
        </linearGradient>
      </defs>

      {nodes.map((node) => (
        <line
          key={node.label}
          x1={center.x}
          y1={center.y}
          x2={node.x}
          y2={node.y}
          stroke="white"
          strokeOpacity={0.18}
          strokeWidth={1.5}
        />
      ))}

      <circle cx={center.x} cy={center.y} r={40} fill="url(#node-glow)" />
      <text
        x={center.x}
        y={center.y + 5}
        textAnchor="middle"
        className="fill-primary-900 text-[13px] font-bold"
      >
        TAMVA
      </text>

      {nodes.map((node) => (
        <g key={node.label}>
          <circle cx={node.x} cy={node.y} r={32} fill="white" fillOpacity={0.08} />
          <circle
            cx={node.x}
            cy={node.y}
            r={32}
            fill="none"
            stroke="white"
            strokeOpacity={0.35}
            strokeWidth={1.5}
          />
          <text
            x={node.x}
            y={node.y < center.y ? node.y - 44 : node.y + 50}
            textAnchor="middle"
            className="fill-white text-[12px] font-medium"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
