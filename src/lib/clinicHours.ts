export type ClinicStatus = {
  isOpen: boolean;
  pillLabel: string;
  callLabel: string;
};

const SESSIONS = [
  { start: 10 * 60, end: 14 * 60 },
  { start: 17 * 60, end: 19 * 60 },
];

function istParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(date);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  return { weekday, minutesOfDay: hour * 60 + minute };
}

function formatClock(minutesOfDay: number) {
  const h24 = Math.floor(minutesOfDay / 60) % 24;
  const m = minutesOfDay % 60;
  const suffix = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return m === 0 ? `${h12}:00 ${suffix}` : `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function getClinicStatus(date: Date = new Date()): ClinicStatus {
  const { weekday, minutesOfDay } = istParts(date);
  const isSunday = weekday === "Sun";

  if (!isSunday) {
    const activeSession = SESSIONS.find(
      (s) => minutesOfDay >= s.start && minutesOfDay < s.end
    );
    if (activeSession) {
      return {
        isOpen: true,
        pillLabel: `Open now · closes ${formatClock(activeSession.end)}`,
        callLabel: "Call the hospital",
      };
    }

    const nextSessionToday = SESSIONS.find((s) => minutesOfDay < s.start);
    if (nextSessionToday) {
      return {
        isOpen: false,
        pillLabel: `Closed · opens ${formatClock(nextSessionToday.start)}`,
        callLabel: `Opens ${formatClock(nextSessionToday.start)}`,
      };
    }
  }

  const todayIndex = WEEKDAYS.indexOf(weekday);
  let nextOpenDay = WEEKDAYS[(todayIndex + 1) % 7];
  if (nextOpenDay === "Sun") {
    nextOpenDay = "Mon";
  }
  const dayLabel = nextOpenDay === weekday ? "" : `${nextOpenDay} `;

  return {
    isOpen: false,
    pillLabel: `Closed · opens ${dayLabel}${formatClock(SESSIONS[0].start)}`,
    callLabel: `Opens ${dayLabel}${formatClock(SESSIONS[0].start)}`,
  };
}
