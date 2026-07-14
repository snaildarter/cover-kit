"use client";

import { STYLES, type StyleKey } from "@/lib/styles";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

interface StylePickerProps {
  value: StyleKey;
  lang: Lang;
  onChange: (key: StyleKey) => void;
}

const LABEL_COLORS: Record<StyleKey, string> = {
  refined: "bg-neutral-700 text-amber-400",
  fresh: "bg-blue-100 text-blue-700",
  casual: "bg-orange-100 text-orange-800",
};

const LABEL_COLORS_ACTIVE: Record<StyleKey, string> = {
  refined: "bg-amber-400 text-black",
  fresh: "bg-blue-500 text-white",
  casual: "bg-orange-500 text-white",
};

export function StylePicker({ value, lang, onChange }: StylePickerProps) {
  const keys = Object.keys(STYLES) as StyleKey[];

  return (
    <div className="space-y-3">
      <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
        {t(lang, "styleLabel")}
      </label>
      <div className="flex gap-2">
        {keys.map((key) => {
          const isActive = value === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? LABEL_COLORS_ACTIVE[key]
                  : `${LABEL_COLORS[key]} hover:opacity-80`
              }`}
            >
              {t(lang, key)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
