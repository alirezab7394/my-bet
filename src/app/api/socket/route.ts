export const runtime = "edge";

export function GET() {
    // Create a WebSocket pair and accept the server side
    // @ts-ignore - WebSocketPair is provided by Edge runtime
    const { 0: client, 1: server } = new (globalThis as any).WebSocketPair();
    // @ts-ignore
    server.accept();

    let counter = 0;
    const interval = setInterval(() => {
        try {
            counter += 1;
            // @ts-ignore
            server.send(String(counter));
        } catch (err) {
            clearInterval(interval);
        }
    }, 3000);

    server.addEventListener("message", (event: any) => {
        try {
            // @ts-ignore
            server.send(`echo:${event.data}`);
        } catch { }
    });

    server.addEventListener("close", () => clearInterval(interval));
    server.addEventListener("error", () => clearInterval(interval));

    return new Response(null, { status: 101, webSocket: client });
}


