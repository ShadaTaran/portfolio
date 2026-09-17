import { ChevronDown } from "lucide-react";

type FlowStep = { label: string; detail: string | null };

function FlowBox({ label, detail }: FlowStep) {
  return (
    <div className="w-full rounded-md border border-border px-4 py-3 text-center">
      <p className="text-sm font-medium text-foreground">{label}</p>
      {detail ? (
        <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
      ) : null}
    </div>
  );
}

function Connector() {
  return (
    <div aria-hidden="true" className="flex flex-col items-center">
      <span className="h-4 w-px bg-border" />
      <ChevronDown className="-my-1 h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.75} />
      <span className="h-4 w-px bg-border" />
    </div>
  );
}

const locationFlow: FlowStep[] = [
  { label: "Driver App", detail: "React Native" },
  { label: "Firebase Realtime Database", detail: null },
  { label: "Admin Dashboard / Leaflet", detail: "Current location display" },
];

const businessFlow: FlowStep[] = [
  { label: "Admin Dashboard", detail: "PHP / Bootstrap" },
  { label: "PHP / MySQL", detail: "Drivers · Trips · Maintenance · Expenses" },
];

export function MansarArchitecture() {
  return (
    <figure className="@container rounded-md border border-border bg-surface-elevated p-6 transition-colors duration-300 group-hover/visual:border-foreground/20 sm:p-8">
      <div className="flex flex-col gap-8 @lg:flex-row @lg:gap-6">
        <div className="flex flex-1 flex-col items-center">
          <p className="mb-4 self-start text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Location
          </p>
          {locationFlow.map((step, index) => (
            <div key={step.label} className="flex w-full flex-col items-center">
              <FlowBox {...step} />
              {index < locationFlow.length - 1 ? <Connector /> : null}
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="hidden w-px self-stretch bg-border @lg:block"
        />
        <div aria-hidden="true" className="h-px w-full bg-border @lg:hidden" />

        <div className="flex flex-1 flex-col items-center">
          <p className="mb-4 self-start text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Business data
          </p>
          {businessFlow.map((step, index) => (
            <div key={step.label} className="flex w-full flex-col items-center">
              <FlowBox {...step} />
              {index < businessFlow.length - 1 ? <Connector /> : null}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="sr-only">
        Driver location state is stored separately in Firebase while
        operational business records are managed through the PHP/MySQL side
        of the system.
      </figcaption>
    </figure>
  );
}
