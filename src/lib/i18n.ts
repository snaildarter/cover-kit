export type Lang = "zh" | "en";

const zh: Record<string, string> = {
  titleLabel: "标题",
  titlePlaceholder: "输入主标题…",
  subtitlePlaceholder: "可选副标题…",
  styleLabel: "风格",
  bgLabel: "背景",
  upload: "上传图片",
  uploaded: "已上传图片",
  clear: "清除",
  download: "⬇ 下载封面图",
  exporting: "导出中…",
  footer: "打开 → 输入 → 下载。每天 10 秒搞定封面图。",
  defaultTitle: "你的标题",
  refined: "质感",
  fresh: "清新",
  casual: "随性",
  deepBlue: "深邃蓝",
  warmGrey: "暖灰",
  fogBlue: "雾蓝",
  sunset: "日落",
  forest: "森林",
  pureBlack: "纯黑",
  pureWhite: "纯白",
  cream: "米白",
  darkBlue: "深蓝",
  darkGreen: "墨绿",
};

const en: Record<string, string> = {
  titleLabel: "Title",
  titlePlaceholder: "Enter title…",
  subtitlePlaceholder: "Optional subtitle…",
  styleLabel: "Style",
  bgLabel: "Background",
  upload: "Upload Image",
  uploaded: "Image Added",
  clear: "Remove",
  download: "⬇ Download Cover",
  exporting: "Exporting…",
  footer: "Open → Type → Download. Ship your cover in 10 seconds.",
  defaultTitle: "Your Title",
  refined: "Refined",
  fresh: "Fresh",
  casual: "Casual",
  deepBlue: "Deep Blue",
  warmGrey: "Warm Grey",
  fogBlue: "Fog Blue",
  sunset: "Sunset",
  forest: "Forest",
  pureBlack: "Black",
  pureWhite: "White",
  cream: "Cream",
  darkBlue: "Dark Blue",
  darkGreen: "Dark Green",
};

const dict: Record<string, Record<string, string>> = { zh, en };

export function t(lang: Lang, key: string): string {
  return dict[lang]?.[key] || zh[key] || key;
}

export const MID_LABELS: Record<string, string> = zh;
