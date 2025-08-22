export default function OfflinePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold">You are offline</h1>
      <p className="text-muted-foreground mt-2">
        Cached content is still available. Reconnect to refresh data.
      </p>
    </div>
  );
}
