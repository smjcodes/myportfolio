import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.fullName} portfolio preview`;
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, rgba(29, 140, 255, 0.16), transparent 30%), linear-gradient(135deg, #fffaf4 0%, #fff4ea 50%, #ffffff 100%)",
          color: "#241c15"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: 34,
            fontWeight: 700
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #7c3aed, #1d8cff)",
              color: "#ffffff",
              fontSize: 38
            }}
          >
            {"</>"}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              maxWidth: "980px",
              fontSize: 68,
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-0.04em"
            }}
          >
            {siteConfig.headline}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: "900px",
              color: "#5b514a",
              fontSize: 28,
              lineHeight: 1.45
            }}
          >
            Building scalable web apps, CRM systems, AI voice agents, and LLM-powered
            products.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#5b514a"
          }}
        >
          <div style={{ display: "flex" }}>{siteConfig.fullName}</div>
          <div style={{ display: "flex" }}>{siteConfig.siteUrl.replace(/^https?:\/\//, "")}</div>
        </div>
      </div>
    ),
    size
  );
}
