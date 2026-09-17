import { ChevronDown } from "lucide-react";

const steps = [
  { label: "Admin UI", detail: "Users · Departments · Purpose Assignment · Queue Display" },
  { label: "Next.js API Routes", detail: "Backend-for-Frontend" },
  { label: "REST API", detail: null },
  { label: "Microsoft SQL Server", detail: null },
];

function Connector() {
  return (
    <div aria-hidden="true" className="flex flex-col items-center">
      <span className="h-4 w-px bg-border" />
      <ChevronDown className="-my-1 h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.75} />
      <span className="h-4 w-px bg-border" />
    </div>
  );
}

export function BouvetArchitecture() {
  return (
    <figure className="rounded-md border border-border bg-surface-elevated p-6 transition-colors duration-300 group-hover/visual:border-foreground/20 sm:p-8">
      <p className="mb-5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        Request flow
      </p>
      <div className="flex flex-col items-stretch gap-0">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center">
            <div className="w-full rounded-md border border-border px-4 py-3 text-center">
              <p className="text-sm font-medium text-foreground">
                {step.label}
              </p>
              {step.detail ? (
                <p className="mt-1 text-xs text-muted-foreground">
                  {step.detail}
                </p>
              ) : null}
            </div>
            {index < steps.length - 1 ? <Connector /> : null}
          </div>
        ))}
      </div>
      <figcaption className="sr-only">
        Admin interface requests pass through Next.js API routes before
        reaching the existing REST API backed by Microsoft SQL Server.
      </figcaption>
    </figure>
  );
}
