import Link from "next/link";
import { HeaderProps } from "./type";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={`bg-background/80 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur ${className ?? ""}`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-semibold">
          MyBet
        </Link>
        <nav className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link href="/matchups">Matchups</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/posts">Posts</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
