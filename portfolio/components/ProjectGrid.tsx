"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

// Align only the six always-visible rows. Native details keep their own height.
export function ProjectGrid({ children }: { children: ReactNode }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(":scope > .project-card"));
    const rows = cards.map(card => Array.from(card.querySelectorAll<HTMLElement>(
      ":scope > :not(.project-pattern):not(.project-details)",
    )));

    const alignRows = () => {
      const twoColumns = getComputedStyle(grid).gridTemplateColumns.split(" ").length === 2;
      if (!twoColumns) {
        cards.forEach(card => card.style.removeProperty("--project-overview-rows"));
        return;
      }

      for (let index = 0; index < cards.length; index += 2) {
        const pair = rows.slice(index, index + 2);
        const heights = pair[0].map((_, rowIndex) => Math.max(...pair.map(cardRows => {
          const row = cardRows[rowIndex];
          const style = getComputedStyle(row);
          return row.getBoundingClientRect().height + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        })));
        const template = heights.map(height => `${height}px`).join(" ");
        cards.slice(index, index + 2).forEach(card => {
          if (card.style.getPropertyValue("--project-overview-rows") !== template) {
            card.style.setProperty("--project-overview-rows", template);
          }
        });
      }
    };

    // Observe intrinsic rows, not card height: opening details never resizes a peer.
    const observer = new ResizeObserver(alignRows);
    observer.observe(grid);
    rows.flat().forEach(row => observer.observe(row));
    alignRows();
    return () => observer.disconnect();
  }, []);

  return <div ref={gridRef} className="project-grid">{children}</div>;
}
