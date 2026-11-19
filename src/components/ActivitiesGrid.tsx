"use client";

import { useEffect, useRef, useState } from "react";

type Activity = {
  number: string;
  title: string;
  description: string;
};

type ActivitiesGridProps = {
  activities: readonly Activity[];
};

export function ActivitiesGrid({ activities }: ActivitiesGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (!window.matchMedia("(max-width: 900px)").matches) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!cards.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const index = cards.indexOf(visible.target as HTMLElement);
          if (index >= 0) setActiveIndex(index);
        } else if (entries.some((entry) => !entry.isIntersecting)) {
          setActiveIndex(null);
        }
      },
      { threshold: [0.55, 0.75], rootMargin: "-18% 0px -28% 0px" },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="activity-grid" aria-label="Направления работы клуба">
      {activities.map((activity, index) => (
        <article
          className={`activity-card${activeIndex === index ? " is-active" : ""}`}
          key={activity.number}
          ref={(node) => {
            cardRefs.current[index] = node;
          }}
        >
          <span className="activity-card__number">{activity.number}</span>
          <ActivityIcon index={index} />
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
          <span className="activity-card__arrow" aria-hidden="true">↗</span>
        </article>
      ))}
    </div>
  );
}

function ActivityIcon({ index }: { index: number }) {
  const common = { width: 30, height: 30, viewBox: "0 0 30 30", fill: "none", "aria-hidden": true as const };
  if (index === 0) {
    return <svg {...common}><path d="m15 4 10 5-10 5L5 9l10-5Z" stroke="currentColor" strokeWidth="1.8"/><path d="m5 14 10 5 10-5M5 19l10 5 10-5" stroke="currentColor" strokeWidth="1.8"/></svg>;
  }
  if (index === 1) {
    return <svg {...common}><path d="m11 8-6 7 6 7M19 8l6 7-6 7M17 6l-4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
  if (index === 2) {
    return <svg {...common}><path d="m17 3-9 13h7l-2 11 9-14h-7l2-10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>;
  }
  return <svg {...common}><path d="M8 12h14v11H8zM11 12V8h8v4M5 16h3m14 0h3M12 23v3m6-3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 17h6" stroke="currentColor" strokeWidth="1.8"/></svg>;
}

