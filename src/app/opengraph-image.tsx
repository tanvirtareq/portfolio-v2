import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = `${portfolio.name} — ${portfolio.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#05050a",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,92,255,0.55) 0%, rgba(124,92,255,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.4) 0%, rgba(34,211,238,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            color: "#22d3ee",
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>{"</>"}</div>
          <div style={{ display: "flex" }}>Software Engineer</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 700,
            color: "#f1f2f7",
            marginTop: 20,
          }}
        >
          {portfolio.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#a3a7bd",
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          Java &amp; Spring · React &amp; Next.js · Codeforces Candidate Master · 4x Meta Hacker Cup T-shirt Winner
        </div>
      </div>
    ),
    { ...size }
  );
}
