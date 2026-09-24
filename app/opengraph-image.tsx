import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt =
  "Kamsiyonna Obi, full-stack developer building financial technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [poppinsSemiBold, poppinsBold, avatar] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/poppins-latin-600-normal.woff")),
    readFile(join(process.cwd(), "assets/fonts/poppins-latin-700-normal.woff")),
    readFile(join(process.cwd(), "public/kamsidev.png")),
  ]);
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3F8FF",
          borderLeft: "20px solid #FFBE62",
          padding: "64px 80px 64px 68px",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img
            src={avatarSrc}
            width={96}
            height={96}
            alt=""
            style={{ borderRadius: 48 }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#151E2C",
                letterSpacing: -0.5,
              }}
            >
              Kamsiyonna Obi
            </div>
            <div style={{ fontSize: 26, fontWeight: 600, color: "#0252CD" }}>
              Full-stack software developer · Winnipeg, Canada
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -1.5,
            color: "#151E2C",
            maxWidth: 1000,
          }}
        >
          I build financial technology that gives people clarity, confidence,
          and control.
        </div>
        <div style={{ fontSize: 28, fontWeight: 600, color: "#5E6A7E" }}>
          kamsiyonna.site
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Poppins", data: poppinsSemiBold, weight: 600, style: "normal" },
        { name: "Poppins", data: poppinsBold, weight: 700, style: "normal" },
      ],
    }
  );
}
