import { SignalsProps } from "./type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getSignals } from "@/features/matchup/api";

export default async function Signals({ matchId, className }: SignalsProps) {
  const signals = await getSignals(matchId);
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Signals (Mock)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {signals.map((s) => (
          <div key={s.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="font-medium">{s.title}</div>
              <div className="text-muted-foreground text-sm">
                {s.confidencePct}%
              </div>
            </div>
            <Progress value={s.confidencePct} />
            <p className="text-muted-foreground text-sm">{s.body}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
