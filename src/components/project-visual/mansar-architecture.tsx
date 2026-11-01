import { ChevronDown } from "lucide-react";

type FlowNode = { label: string; detail: string };

function FlowBox({ label, detail }: FlowNode) {
  return (
    <div className="w-full rounded-md border border-border px-4 py-3 text-center">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
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

const clients: FlowNode[] = [
  { label: "Admin web app", detail: "Next.js · BFF with HttpOnly cookies" },
  { label: "Driver app", detail: "React Native · Android" },
];

const api: FlowNode = {
  label: "NestJS API",
  detail: "REST · admin and driver roles",
};

const stores: FlowNode[] = [
  { label: "PostgreSQL", detail: "Prisma · constraints enforce trip rules" },
  { label: "Private object storage", detail: "Receipts · presigned uploads" },
];

export function MansarArchitecture() {
  return (
    <figure className="@container rounded-md border border-border bg-surface-elevated p-6 transition-colors duration-300 group-hover/visual:border-foreground/20 sm:p-8">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        System overview
      </p>
      <div className="flex flex-col items-center">
        <div className="grid w-full grid-cols-1 gap-2 @sm:grid-cols-2">
          {clients.map((node) => (
            <FlowBox key={node.label} {...node} />
          ))}
        </div>
        <Connector />
        <FlowBox {...api} />
        <Connector />
        <div className="grid w-full grid-cols-1 gap-2 @sm:grid-cols-2">
          {stores.map((node) => (
            <FlowBox key={node.label} {...node} />
          ))}
        </div>
      </div>
      <figcaption className="sr-only">
        The Next.js admin web app, through its Backend-for-Frontend, and the
        React Native driver app both call the NestJS API. The API stores
        records in PostgreSQL through Prisma and authorizes direct receipt
        uploads to private object storage.
      </figcaption>
    </figure>
  );
}
