import {
  DiagramPanel,
  DiagramNode,
  DiagramConnector,
} from "@/components/case-study/markly/diagram-primitives";

export function DomainModelVisual() {
  return (
    <DiagramPanel
      eyebrow="Domain model"
      caption="One work can have multiple consumption sources — progress belongs to the LibraryItem, not to any single source."
      summary="A LibraryItem represents the canonical work. One LibraryItem can have several TrackingSource records, each representing a place or way that work is consumed."
    >
      <div className="mx-auto flex max-w-xs flex-col items-center sm:max-w-sm">
        <DiagramNode title="LibraryItem" detail="Canonical work" />
        <DiagramConnector label="one-to-many" />
        <div className="grid w-full grid-cols-3 gap-2">
          <DiagramNode title="TrackingSource" className="px-2 py-2" />
          <DiagramNode title="TrackingSource" className="px-2 py-2" />
          <DiagramNode title="TrackingSource" className="px-2 py-2" />
        </div>
      </div>
    </DiagramPanel>
  );
}
