export type StyleKey = "refined" | "fresh" | "casual";

export interface CoverStyle {
  name: string;
  label: string;
  titleFont: string;
  subtitleFont: string;
  titleColor: string;
  subtitleColor: string;
  titleSize: string;
  subtitleSize: string;
  /** Suggested backgrounds (user can override) */
  suggestedBg: string;
}

export const STYLES: Record<StyleKey, CoverStyle> = {
  refined: {
    name: "refined",
    label: "质感",
    titleFont: "'Noto Serif SC', serif",
    subtitleFont: "'Noto Sans SC', sans-serif",
    titleColor: "#f5f0e8",
    subtitleColor: "#c4b998",
    titleSize: "52px",
    subtitleSize: "24px",
    suggestedBg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  fresh: {
    name: "fresh",
    label: "清新",
    titleFont: "'Noto Sans SC', sans-serif",
    subtitleFont: "'Noto Sans SC', sans-serif",
    titleColor: "#1a1a2e",
    subtitleColor: "#555",
    titleSize: "48px",
    subtitleSize: "22px",
    suggestedBg: "linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)",
  },
  casual: {
    name: "casual",
    label: "随性",
    titleFont: "'ZCOOL KuaiLe', cursive",
    subtitleFont: "'Noto Sans SC', sans-serif",
    titleColor: "#3e2723",
    subtitleColor: "#6d4c41",
    titleSize: "48px",
    subtitleSize: "20px",
    suggestedBg: "linear-gradient(135deg, #fff8e1 0%, #ffe0b2 100%)",
  },
};
