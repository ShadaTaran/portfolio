import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME} — Software Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Echoes the contribution-graph motif: fixed cells, varying dot diameters.
const DOT_SIZES = [
  6, 3, 14, 4, 20, 3, 8, 3, 3, 11, 4, 3, 26, 5, 3, 9, 3, 16, 3, 4, 6, 3, 12, 3,
  3, 22, 4, 3, 7, 3,
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#f4f4f5",
              letterSpacing: -3,
            }}
          >
            {SITE_NAME}
          </div>
          <div style={{ fontSize: 40, color: "#a0a0a8", marginTop: 12 }}>
            Software Developer
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {DOT_SIZES.map((diameter, index) => (
            <div
              key={index}
              style={{
                width: diameter,
                height: diameter,
                borderRadius: 9999,
                background: "#f4f4f5",
                opacity: diameter <= 4 ? 0.22 : 0.92,
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
