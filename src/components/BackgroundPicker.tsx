"use client";

import { useRef } from "react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

interface BackgroundPickerProps {
  bgColor: string;
  bgImage: string | null;
  lang: Lang;
  onBgColorChange: (v: string) => void;
  onBgImageChange: (v: string | null) => void;
}

const GRADIENT_KEYS = [
  { key: "deepBlue", value: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" },
  { key: "warmGrey", value: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)" },
  { key: "fogBlue", value: "linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)" },
  { key: "sunset", value: "linear-gradient(135deg, #ff6b35 0%, #f7c948 100%)" },
  { key: "forest", value: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)" },
];

const SOLID_KEYS = [
  { key: "pureBlack", value: "#0a0a0a" },
  { key: "pureWhite", value: "#ffffff" },
  { key: "cream", value: "#faf8f5" },
  { key: "darkBlue", value: "#0f172a" },
  { key: "darkGreen", value: "#1a2f1d" },
];

export function BackgroundPicker({
  bgColor,
  bgImage,
  lang,
  onBgColorChange,
  onBgImageChange,
}: BackgroundPickerProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onBgImageChange(reader.result as string);
    reader.readAsDataURL(file);
  };

  const clearImage = () => onBgImageChange(null);

  return (
    <div className="space-y-3">
      <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
        {t(lang, "bgLabel")}
      </label>

      {/* Upload */}
      <div className="flex items-center gap-2">
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
        <button
          onClick={() => fileRef.current?.click()}
          className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
            bgImage
              ? "border-amber-400 text-amber-400 bg-amber-400/10"
              : "border-neutral-700 text-neutral-400 hover:border-neutral-500"
          }`}
        >
          {bgImage ? t(lang, "uploaded") : t(lang, "upload")}
        </button>
        {bgImage && (
          <button
            onClick={clearImage}
            className="px-3 py-1.5 text-xs rounded-lg border border-neutral-700 text-neutral-400 hover:text-red-400 transition-colors"
          >
            {t(lang, "clear")}
          </button>
        )}
      </div>

      {/* Gradients */}
      <div className="flex gap-1.5 flex-wrap">
        {GRADIENT_KEYS.map((g) => (
          <button
            key={g.key}
            onClick={() => { onBgColorChange(g.value); onBgImageChange(null); }}
            title={t(lang, g.key)}
            className={`w-7 h-7 rounded-full border-2 transition-all ${
              bgColor === g.value && !bgImage
                ? "border-amber-400 scale-110"
                : "border-transparent hover:scale-105"
            }`}
            style={{ background: g.value }}
          />
        ))}
      </div>

      {/* Solids */}
      <div className="flex gap-1.5 flex-wrap">
        {SOLID_KEYS.map((s) => (
          <button
            key={s.key}
            onClick={() => { onBgColorChange(s.value); onBgImageChange(null); }}
            title={t(lang, s.key)}
            className={`w-7 h-7 rounded-full border-2 transition-all ${
              bgColor === s.value && !bgImage
                ? "border-amber-400 scale-110"
                : s.value === "#ffffff" || s.value === "#faf8f5"
                  ? "border-neutral-600"
                  : "border-transparent hover:scale-105"
            }`}
            style={{ background: s.value }}
          />
        ))}
      </div>
    </div>
  );
}
