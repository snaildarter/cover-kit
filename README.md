<p align="center">
  <img src="https://img.shields.io/badge/built%20with-Next.js-black?logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT License">
</p>

# CoverKit

> Ship your WeChat cover image in 10 seconds. / 公众号封面图，10 秒搞定。

**[English](#english) | [中文](#中文)**

---

## English

### What is CoverKit?

A dead-simple cover image generator for WeChat Official Account (公众号) bloggers. Open the page, type your title, pick a style, download. No login, no design skills, no template browsing.

### Why?

I've been blogging daily for 337+ days on WeChat. Every single day I spent 5-10 minutes making a cover image in Canva — open, log in, search templates, pick one, edit text, align, export, upload. Over 337 days, that's ~30 hours of my life.

Canva is too heavy. AI image generators are too unpredictable. **There was nothing in between.**

So I built CoverKit in an afternoon.

### Features

- 🏷️ Title + optional subtitle, live preview
- 🎨 3 preset styles (Refined / Fresh / Casual)
- 🌅 5 gradients + 5 solid colors + custom image upload
- 📐 2.35:1 ratio — exact WeChat cover spec
- ⚡ One-click PNG download (2x retina quality)
- 🌍 English / Chinese UI
- 🚫 No login. No templates. No history. No database.

### Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Export:** html2canvas
- **Fonts:** Noto Serif SC, Noto Sans SC, ZCOOL KuaiLe
- **Deploy:** Vercel (free)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/snaildarter/cover-kit)

### Local Dev

```bash
git clone https://github.com/snaildarter/cover-kit.git
cd cover-kit
npm install
npm run dev
```

Open http://localhost:3000.

### Roadmap

- [ ] More presets (Dark mode academic, Minimalist white, Vintage film)
- [ ] Custom font upload
- [ ] Batch export (multiple titles)
- [ ] RedNote (小红书) & Twitter card sizes

### Author

Neal — developer, daily blogger living in Dapeng, Shenzhen. I build tiny tools that solve my own problems.

---

## 中文

### 这是什么

一个极简公众号封面图生成工具。打开网页 → 输入标题 → 选风格 → 下载。不用登录、不用设计、不用翻模板。

### 为什么做这个

日更 337 天，每天花 5-10 分钟做封面图。打开 Canva → 登录 → 搜模板 → 选 → 改字 → 对齐 → 导出 → 上传。337 天就是 30 个小时。Canva 太重，AI 生成太飘。中间什么都没有。所以我花了一个下午自己写了 CoverKit。

### 功能

- 🏷️ 标题 + 可选副标题，实时预览
- 🎨 3 种预设风格（质感 / 清新 / 随性）
- 🌅 5 种渐变 + 5 种纯色 + 上传自定义图片
- 📐 2.35:1 比例，公众号封面原生尺寸
- ⚡ 一键下载 PNG（2x Retina 质量）
- 🌍 中 / 英文界面切换
- 🚫 没有登录、没有模板市场、没有历史记录、没有数据库

### 技术栈

- **框架:** Next.js 16 (App Router)
- **样式:** Tailwind CSS
- **导出:** html2canvas
- **字体:** Noto Serif SC, Noto Sans SC, ZCOOL KuaiLe
- **部署:** Vercel（免费）

### 本地运行

```bash
git clone https://github.com/snaildarter/cover-kit.git
cd cover-kit
npm install
npm run dev
```

打开 http://localhost:3000。

### 作者

Neal，程序员，公众号日更作者，住在深圳大鹏。自己遇到什么麻烦，就写个工具干掉它。

---

MIT License
