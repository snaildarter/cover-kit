"use client";

import { useState } from "react";

interface DownloadButtonProps {
  previewRef: HTMLDivElement | null;
  title: string;
}

export function DownloadButton({ previewRef, title }: DownloadButtonProps) {
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
          // Force the cloned element to exactly 900×500 so there's no whitespace
          const el = clonedDoc.querySelector("[data-cover-preview]");
          if (el instanceof HTMLElement) {
            el.style.width = "900px";
            el.style.height = "500px";
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
      {loading ? "导出中…" : "⬇ 下载封面图"}
    </button>
  );
}
