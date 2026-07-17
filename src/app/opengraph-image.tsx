import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "MoveGrid — EV Fleet for Delivery & Business in Delhi NCR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
          backgroundColor: "#0A0A0F",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(60, 181, 74, 0.18) 0%, transparent 45%), radial-gradient(circle at 10% 90%, rgba(27, 95, 166, 0.22) 0%, transparent 50%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={110} height={110} alt="" />
          <div
            style={{
              fontSize: "96px",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-2px",
            }}
          >
            MoveGrid
          </div>
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "40px",
            color: "#A0A0B8",
            lineHeight: 1.35,
            maxWidth: "900px",
          }}
        >
          EV fleet for delivery partners, businesses & investors
        </div>
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "6px",
              borderRadius: "3px",
              backgroundColor: "#3CB54A",
            }}
          />
          <div style={{ fontSize: "30px", color: "#3CB54A", fontWeight: 600 }}>
            movegrid.in · Delhi NCR
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
