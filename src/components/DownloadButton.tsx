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
        width: 900,
        height: 500,
        scale: 2, // retina quality
        useCORS: true,
        backgroundColor: null,
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
