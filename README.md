# 🚀 juliettecougnoux.dev

Personal portfolio of **Juliette Cougnoux** - Backend Engineer & Web Maker

[![Nuxt](https://img.shields.io/badge/Nuxt-4.1.2-00DC82?style=flat&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

🌐 **[juliettecougnoux.dev](https://juliettecougnoux.dev)**

## ✨ Features

- 🌍 **Multilingual site** (French/English) with @nuxtjs/i18n
- 🎨 **Modern design** with smooth animations and transitions
- 🎨 **Tailwind CSS v4** with custom color palette
- 📱 **Responsive design** optimized for all devices
- ⚡ **Optimized performance** with Nuxt 4
- 🔍 **SEO friendly** with sitemap and meta tags
- ♿ **Accessibility** considered

## Installation

```bash
npm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

### Build for Static Hosting (Hostinger)

Generate the static site:

```bash
npm run generate
```

This will create a `.output/public` directory with all static files ready to be deployed.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Deploy to Hostinger

1. Run `npm run generate`
2. Upload the contents of `.output/public` to your Hostinger hosting via FTP or File Manager
3. Make sure to upload to the `public_html` directory (or your domain's root directory)

## 🛠️ Tech Stack

### Frontend

- **Nuxt 4.1.2** - Vue.js framework with SSR
- **Vue.js 3.5** - Progressive JavaScript framework
- **TypeScript 5.9** - Static typing
- **Tailwind CSS v4** - Utility-first CSS framework

### Internationalization

- **@nuxtjs/i18n** - Multilingual management (FR/EN)

### Optimization

- **@nuxt/image** - Automatic image optimization
- **SEO** - XML Sitemap, meta tags, Open Graph
- **Performance** - Lazy loading, code splitting

## 📂 Project Structure

```
juliettecougnoux.dev/
├── app/
│   ├── components/      # Reusable Vue components (Header, etc.)
│   ├── pages/          # Website pages (automatic routing)
│   │   ├── index.vue   # Homepage with presentation and projects
│   │   ├── cv.vue      # Resume with experience, education, skills
│   │   └── contact.vue # Contact information
│   └── assets/
│       └── css/        # Global styles and animations
├── locales/
│   ├── fr.json         # French translations
│   ├── en.json         # English translations
│   ├── projects.fr.js  # Projects data (FR)
│   ├── projects.en.js  # Projects data (EN)
│   ├── cv.fr.js        # Resume data (FR)
│   └── cv.en.js        # Resume data (EN)
├── public/
│   ├── projects/       # Project images
│   ├── robots.txt      # Robots configuration
│   └── sitemap.xml     # Sitemap for SEO
└── nuxt.config.ts      # Nuxt configuration
```

## 🎨 Pages

### 🏠 Home (`/`)

- Personal presentation with photo
- "About me" section
- Professional background
- WordPress projects portfolio
- Ongoing projects (React Native)

### 📄 Resume (`/cv`)

- Professional experience with timeline
- Education
- Technical skills
- Company links

### 📧 Contact (`/contact`)

- Email, phone
- LinkedIn, GitHub, GitLab
- Clickable links with animations

## 🎨 Customization

### Color Palette

Custom colors are defined in `app/assets/css/tailwind.css`:

```css
--color-primary-purple: #9e99ff /* Soft purple */ --color-primary-green: #aaff99
  /* Peps green */ --color-primary-peach: #ffbe99 /* Peach fuzz */
  --color-primary-brown: #aa9c93 /* Natural brown */
  --color-primary-dark: #5b5980 /* Dark purple */;
```

### Translations

Translations are managed through separate files:

- **UI**: `locales/fr.json` and `locales/en.json`
- **Projects**: `locales/projects.fr.js` and `locales/projects.en.js`
- **Resume**: `locales/cv.fr.js` and `locales/cv.en.js`

## 🚀 Deployment

The site is configured for **static generation** and deployed on:

- **Hostinger** (current hosting)
- Can also be deployed on: Vercel, Netlify, Cloudflare Pages
- Any static hosting provider (the site is fully static after `npm run generate`)

## 📈 SEO & Performance

- ✅ **Fully static generation** (SSG) for optimal performance
- ✅ Generated XML sitemap
- ✅ Optimized meta tags
- ✅ Open Graph for social networks
- ✅ Optimized images (WebP)
- ✅ Lazy loading
- ✅ Automatic code splitting
- ✅ Pre-rendered pages for instant loading
- ✅ Lighthouse score > 90

## 👤 Author

**Juliette Cougnoux**

- Backend Engineer Node.js/NestJS @ LeHibou
- 🌐 [juliettecougnoux.dev](https://juliettecougnoux.dev)
- 💼 [LinkedIn](https://www.linkedin.com/in/juliette-cougnoux/)
- 🐙 [GitHub](https://github.com/juliettecougnoux)
- 🦊 [GitLab](https://gitlab.com/jcougnoux)

## 📝 License

© 2025 Juliette Cougnoux. All rights reserved.
