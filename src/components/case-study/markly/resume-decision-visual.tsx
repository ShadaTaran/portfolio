import {
  DiagramPanel,
  DiagramRuleRow,
} from "@/components/case-study/markly/diagram-primitives";

export function ResumeDecisionVisual() {
  return (
    <DiagramPanel
      eyebrow="Resume decision"
      summary="Markly's Continue engine applies three rules: a single eligible source is used directly; multiple sources are auto-selected only when their timestamps are genuinely comparable, picking the latest; otherwise Markly asks the user rather than guessing. Catalog identity is never consulted by this engine."
    >
      <div className="flex flex-col gap-3">
        <DiagramRuleRow
          condition="One eligible source"
          outcome="Open it directly"
        />
        <DiagramRuleRow
          condition="Multiple sources, timestamps comparable"
          outcome="Select the latest"
        />
        <DiagramRuleRow
          condition="Recency can't be trusted"
          outcome="Ask the user"
        />
      </div>
      <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
        Catalog identity — the AniList or Open Library id used to find a
        work — is set only at import time and never consulted by this
        engine. Identifying a work and continuing to consume it stay two
        separate questions.
      </p>
    </DiagramPanel>
  );
}
