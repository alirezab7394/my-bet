import Image from "next/image";
import { cn } from "@/lib/utils";
import { TeamItemProps } from "./type";

export default function TeamItem({
  name,
  logoUrl,
  align = "start",
  large = false,
  className,
}: TeamItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        align === "end" && "flex-row-reverse text-right",
        className,
      )}
    >
      <Image
        src={logoUrl}
        alt={name}
        width={large ? 48 : 32}
        height={large ? 48 : 32}
        className="rounded-full"
      />
      <span className="text-xl font-semibold">{name}</span>
    </div>
  );
}
