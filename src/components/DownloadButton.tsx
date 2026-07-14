"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

interface DownloadButtonProps {
  previewRef: HTMLDivElement | null;
  title: string;
  lang: Lang;
}

export function DownloadButton({ previewRef, title, lang }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!previewRef) return;
    setLoading(true);

    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(previewRef, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        onclone: (clonedDoc) => {
          const el = clonedDoc.querySelector("[data-cover-preview]");
          if (el instanceof HTMLElement) {
            el.style.width = "940px";
            el.style.height = "400px";
            el.style.maxWidth = "none";
            el.style.aspectRatio = "auto";
          }
        },
      });

      const link = document.createElement("a");
      link.download = `cover-${title.slice(0, 20) || "untitled"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="px-4 py-2 bg-amber-400 text-black text-sm font-semibold rounded-lg hover:bg-amber-300 disabled:opacity-50 transition-colors"
    >
      {loading ? t(lang, "exporting") : t(lang, "download")}
    </button>
  );
}
