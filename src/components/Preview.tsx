"use client";

import { useRef, useEffect } from "react";
import type { CoverStyle } from "@/lib/styles";

interface PreviewProps {
  title: string;
  subtitle: string;
  style: CoverStyle;
  bgColor?: string;
  bgImage?: string | null;
  /** User overrides for font size & color */
  titleSize?: string;
  titleColor?: string;
  onRef: (ref: HTMLDivElement | null) => void;
}

export function Preview({
  title,
  subtitle,
  style,
  bgColor,
  bgImage,
  titleSize: customSize,
  titleColor: customColor,
  onRef,
}: PreviewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onRef(ref.current);
    return () => onRef(null);
  }, [onRef]);

  const bgStyle: React.CSSProperties = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { background: bgColor };

  const fontSize = customSize || style.titleSize;
  const titleColor = customColor || style.titleColor;

  return (
    <div className="flex justify-center">
      {/* 2.35:1 WeChat cover — scaled in browser, full-res on export */}
      <div
        ref={ref}
        data-cover-preview
        className="w-full max-w-[564px] aspect-[47/20] relative overflow-hidden rounded-lg shadow-2xl"
        style={bgStyle}
      >
        {/* Dark overlay for readability on image backgrounds */}
        {bgImage && (
          <div className="absolute inset-0 bg-black/30" />
        )}

        {/* Title + Subtitle overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center gap-3 z-10">
          <span
            style={{
              fontFamily: style.titleFont,
              color: titleColor,
              fontSize,
              lineHeight: 1.25,
              whiteSpace: "pre-line",
              textShadow: bgImage ? "0 2px 12px rgba(0,0,0,0.5)" : "none",
            }}
          >
            {title || " "}
          </span>
          {subtitle && (
            <span
              style={{
                fontFamily: style.subtitleFont,
                color: style.subtitleColor,
                fontSize: style.subtitleSize,
                lineHeight: 1.4,
                textShadow: bgImage ? "0 1px 8px rgba(0,0,0,0.5)" : "none",
              }}
            >
              {subtitle}
            </span>
          )}
        </div>

        {/* Subtle bottom accent bar for refined style */}
        {style.name === "refined" && (
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-400/60 rounded" />
        )}
      </div>
    </div>
  );
}
