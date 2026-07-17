"use client";

import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

interface TitleInputProps {
  title: string;
  subtitle: string;
  lang: Lang;
  onTitleChange: (v: string) => void;
  onSubtitleChange: (v: string) => void;
}

export function TitleInput({
  title,
  subtitle,
  lang,
  onTitleChange,
  onSubtitleChange,
}: TitleInputProps) {
  return (
    <div className="space-y-3">
      <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
        {t(lang, "titleLabel")}
      </label>
      <div className="space-y-2">
        <textarea
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder={t(lang, "titlePlaceholder")}
          rows={2}
          className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
        />
        <input
          type="text"
          value={subtitle}
          onChange={(e) => onSubtitleChange(e.target.value)}
          placeholder={t(lang, "subtitlePlaceholder")}
          className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-amber-400/50 transition-colors"
        />
      </div>
    </div>
  );
}
