import {
  DiagramPanel,
  DiagramNode,
  DiagramConnector,
} from "@/components/case-study/markly/diagram-primitives";
import { Check, X } from "lucide-react";

const steps = [
  { title: "High-confidence duplicate suggested", detail: null },
  { title: "User explicitly chooses to merge", detail: null },
  { title: "Conflict check", detail: "Blocks on unsafe field disagreement" },
  { title: "Merge completes", detail: "Collections, activity, reminders move over" },
];

export function MergeUndoVisual() {
  return (
    <DiagramPanel
      eyebrow="Merge &amp; undo safety"
      caption="Undo compares current state to an exact post-action snapshot — it restores only if nothing real has changed since."
      summary="Merging is always an explicit user action, blocked automatically if the two items disagree in a way Markly can't safely resolve. A completed merge or delete is covered by a short undo window: undo compares current state to a snapshot taken right after the action and restores only if nothing has changed since, otherwise it surfaces a conflict instead of overwriting newer data."
    >
      <div className="mx-auto flex max-w-xs flex-col items-center sm:max-w-sm">
        {steps.map((step, index) => (
          <div key={step.title} className="flex w-full flex-col items-center">
            <DiagramNode title={step.title} detail={step.detail ?? undefined} />
            {index < steps.length - 1 ? <DiagramConnector /> : null}
          </div>
        ))}
        <DiagramConnector label="short undo window" />
        <div className="grid w-full grid-cols-2 gap-3">
          <div className="flex flex-col items-center gap-1.5 rounded-md border border-foreground/25 px-3 py-3 text-center">
            <Check className="h-4 w-4 text-foreground" aria-hidden="true" strokeWidth={1.75} />
            <p className="text-xs font-medium text-foreground">Snapshot matches</p>
            <p className="text-[11px] text-muted-foreground">Undo restores</p>
          </div>
          <div className="flex flex-col items-center gap-1.5 rounded-md border border-border px-3 py-3 text-center">
            <X className="h-4 w-4 text-muted-foreground" aria-hidden="true" strokeWidth={1.75} />
            <p className="text-xs font-medium text-foreground">State changed since</p>
            <p className="text-[11px] text-muted-foreground">Undo blocked, conflict surfaced</p>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
}
