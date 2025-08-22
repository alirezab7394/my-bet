export function shimmerDataURL(width: number, height: number): string {
    const svg = `<?xml version="1.0"?>\n<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#a1a1aa" offset="20%"/>\n      <stop stop-color="#d4d4d8" offset="50%"/>\n      <stop stop-color="#a1a1aa" offset="70%"/>\n    </linearGradient>\n  </defs>\n  <rect width="${width}" height="${height}" fill="#111827"/>\n  <rect id="r" width="${width}" height="${height}" fill="url(#g)"/>\n  <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1.2s" repeatCount="indefinite"  />\n</svg>`;
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}


