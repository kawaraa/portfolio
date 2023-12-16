"use client";

export default function TimeByTimezone({ cls = "" }) {
  return (
    <span className={cls}>
      {new Date().toLocaleTimeString("en-US", {
        timeZone: "europe/amsterdam",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </span>
  );
}
