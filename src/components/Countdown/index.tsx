"use client";
import { useEffect, useMemo, useState } from "react";
import { CountdownProps } from "./type";
import { cn } from "@/lib/utils";

function formatRemaining(ms: number) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds };
}

export function Countdown({
  targetIso,
  onCompleteText = "Starting soon",
  className,
}: CountdownProps) {
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [now, setNow] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (!isMounted) {
    return (
      <div
        className={cn("flex items-center gap-2 text-sm", className)}
        aria-busy
      >
        <TimeBox label="D" value={0} />
        <TimeBox label="H" value={0} />
        <TimeBox label="M" value={0} />
        <TimeBox label="S" value={0} />
      </div>
    );
  }
  const remaining = target - now;
  if (remaining <= 0) {
    return (
      <span className={cn("text-muted-foreground text-sm", className)}>
        {onCompleteText}
      </span>
    );
  }
  const { days, hours, minutes, seconds } = formatRemaining(remaining);
  return (
    <div className={cn("flex items-center gap-2 text-sm", className)}>
      <TimeBox label="D" value={days} />
      <TimeBox label="H" value={hours} />
      <TimeBox label="M" value={minutes} />
      <TimeBox label="S" value={seconds} />
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="inline-flex items-center rounded-md border px-2 py-1">
      <span className="font-medium tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-muted-foreground ml-1 text-xs">{label}</span>
    </div>
  );
}

export default Countdown;
