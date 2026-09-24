import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { client } from "@/.sanity/lib/client";
import { PROJECT_OG_QUERY } from "@/.sanity/lib/queries";

export const alt = "Case study by Kamsiyonna Obi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Project = { title?: string; desc?: string; color?: string } | null;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [project, poppinsSemiBold, poppinsBold] = await Promise.all([
    client.fetch<Project>(PROJECT_OG_QUERY, { slug }),
    readFile(join(process.cwd(), "assets/fonts/poppins-latin-600-normal.woff")),
    readFile(join(process.cwd(), "assets/fonts/poppins-latin-700-normal.woff")),
  ]);

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
          borderLeft: `20px solid ${project?.color ?? "#FFBE62"}`,
          padding: "64px 80px 64px 68px",
          fontFamily: "Poppins",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 6,
            color: "#0252CD",
          }}
        >
          CASE STUDY
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#151E2C",
            }}
          >
            {project?.title ?? "Case study"}
          </div>
          {project?.desc ? (
            <div
              style={{
                display: "flex",
                fontSize: 38,
                fontWeight: 600,
                lineHeight: 1.3,
                color: "#5E6A7E",
                maxWidth: 960,
              }}
            >
              {project.desc}
            </div>
          ) : null}
        </div>
        <div style={{ fontSize: 28, fontWeight: 600, color: "#151E2C" }}>
          Kamsiyonna Obi · kamsiyonna.site
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
