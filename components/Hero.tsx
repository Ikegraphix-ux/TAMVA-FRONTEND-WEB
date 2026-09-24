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
              Financial trust infrastructure for Africa
            </p>
            <h1 className="mt-4 text-h1-mobile sm:text-h1 font-semibold tracking-tight text-white">
              TAMVA: the financial identity and risk layer for institutions
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-100">
              Real-time, explainable transaction-risk decisions and consent-aware financial
              data, delivered through one API. Built in Ghana, designed for Africa.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <LinkButton href="/contact" withArrow>
                Request Sandbox Access
              </LinkButton>
              <LinkButton href="/resources" variant="secondary">
                Explore the API
              </LinkButton>
            </div>
            <p className="mt-8 text-sm font-medium uppercase tracking-widest text-primary-400">
              More than a score. A trusted financial identity.
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
    { label: "Consent", x: 90, y: 60 },
    { label: "Risk", x: 310, y: 60 },
    { label: "Decisions", x: 310, y: 260 },
    { label: "Transactions", x: 90, y: 260 },
  ];
  const center = { x: 200, y: 160 };

  return (
    <svg
      viewBox="0 0 400 320"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram showing consent, risk, decisions and transactions connecting around a central TAMVA node"
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
          <circle cx={node.x} cy={node.y} r={26} fill="white" fillOpacity={0.08} />
          <circle
            cx={node.x}
            cy={node.y}
            r={26}
            fill="none"
            stroke="white"
            strokeOpacity={0.35}
            strokeWidth={1.5}
          />
          <text
            x={node.x}
            y={node.y < center.y ? node.y - 38 : node.y + 44}
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

