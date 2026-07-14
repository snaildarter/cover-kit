"use client";

import { useState, useCallback } from "react";
import { STYLES, type StyleKey } from "@/lib/styles";
import { type Lang, t } from "@/lib/i18n";
import { Preview } from "@/components/Preview";
import { TitleInput } from "@/components/TitleInput";
import { StylePicker } from "@/components/StylePicker";
import { BackgroundPicker } from "@/components/BackgroundPicker";
import { DownloadButton } from "@/components/DownloadButton";

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const [title, setTitle] = useState(t(lang, "defaultTitle"));
  const [subtitle, setSubtitle] = useState("");
  const [styleKey, setStyleKey] = useState<StyleKey>("refined");
  const [bgColor, setBgColor] = useState(STYLES.refined.suggestedBg);
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [previewRef, setPreviewRef] = useState<HTMLDivElement | null>(null);

  const handleStyleChange = useCallback(
    (key: StyleKey) => {
      setStyleKey(key);
      if (!bgImage) {
        setBgColor(STYLES[key].suggestedBg);
      }
    },
    [bgImage]
  );

  const toggleLang = () => {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  };

  const style = STYLES[styleKey];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold tracking-tight">
            Cover<span className="text-amber-400">Kit</span>
          </h1>
          <button
            onClick={toggleLang}
            className="text-xs px-2 py-0.5 rounded border border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-400 transition-colors"
          >
            {lang === "zh" ? "EN" : "中"}
          </button>
        </div>
        <DownloadButton previewRef={previewRef} title={title} lang={lang} />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6 pb-12">
        <Preview
          title={title}
          subtitle={subtitle}
          style={style}
          bgColor={bgImage ? undefined : bgColor}
          bgImage={bgImage}
          onRef={setPreviewRef}
        />

        <section className="space-y-5">
          <TitleInput
            title={title}
            subtitle={subtitle}
            lang={lang}
            onTitleChange={setTitle}
            onSubtitleChange={setSubtitle}
          />

          <StylePicker value={styleKey} lang={lang} onChange={handleStyleChange} />

          <BackgroundPicker
            bgColor={bgColor}
            bgImage={bgImage}
            lang={lang}
            onBgColorChange={setBgColor}
            onBgImageChange={setBgImage}
          />
        </section>
      </main>

      <footer className="text-center py-6 text-xs text-neutral-600">
        {t(lang, "footer")}
      </footer>
    </div>
  );
}
