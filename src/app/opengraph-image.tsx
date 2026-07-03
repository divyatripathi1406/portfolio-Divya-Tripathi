import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1000px 500px at 80% -10%, #6d28d9 0%, transparent 60%), #0a0a0b",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#c4b5fd",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg,#8b5cf6,#a855f7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 26,
            }}
          >
            DT
          </div>
          Portfolio
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 82,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 12, fontSize: 40, color: "#a78bfa" }}>
          {siteConfig.role}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#a1a1aa",
            maxWidth: 900,
          }}
        >
          Java &amp; MERN Stack Developer · AI Enthusiast
        </div>
      </div>
    ),
    { ...size }
  );
}
