"use client";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocketTesterProps } from "./type";

export default function SocketTester({
  defaultUrl = "wss://echo.websocket.events",
  className,
}: SocketTesterProps) {
  const [url, setUrl] = useState(defaultUrl);
  const [connected, setConnected] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const wsRef = useRef<WebSocket | null>(null);

  function append(line: string) {
    setLog((prev) =>
      [...prev, `${new Date().toLocaleTimeString()} • ${line}`].slice(-200),
    );
  }

  function connect() {
    disconnect();
    try {
      const ws = new WebSocket(url);
      wsRef.current = ws;
      ws.onopen = () => {
        setConnected(true);
        append("connected");
      };
      ws.onmessage = (e) =>
        append(`recv: ${typeof e.data === "string" ? e.data : "[binary]"}`);
      ws.onclose = () => {
        setConnected(false);
        append("closed");
      };
      ws.onerror = () => append("error");
    } catch (e) {
      append("failed to connect");
    }
  }

  function disconnect() {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
  }

  function send() {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(message);
    append(`send: ${message}`);
    setMessage("");
  }

  useEffect(() => () => disconnect(), []);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Socket Tester</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-col gap-2 md:flex-row">
          <Input
            aria-label="Socket URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="wss://..."
          />
          <div className="flex gap-2">
            <Button
              variant="default"
              onClick={connect}
              aria-pressed={connected}
            >
              {connected ? "Reconnect" : "Connect"}
            </Button>
            <Button
              variant="secondary"
              onClick={disconnect}
              disabled={!connected}
            >
              Disconnect
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setUrl(
                  `${location.protocol === "https:" ? "wss" : "ws"}://${location.host}/api/socket`,
                )
              }
            >
              Use local server
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <Input
            aria-label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type message"
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <Button onClick={send} disabled={!connected || !message.trim()}>
            Send
          </Button>
        </div>
        <Textarea
          readOnly
          className="h-56 w-full"
          value={log.join("\n")}
          aria-label="Socket log"
        />
      </CardContent>
    </Card>
  );
}
