# Happy Birthday, Nitika ❤️

A cinematic, interactive birthday surprise website, made by Aman.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
npm run preview
```

## Add your real photos

Drop up to 8 photos into `public/images/` using these exact filenames:

```
photo1.jpg
photo2.jpg
photo3.jpg
photo4.jpg
photo5.jpg
photo6.jpg
photo7.jpg
photo8.jpg
```

Any photo that's missing shows an elegant placeholder instead of breaking the page — so you don't need all 8 to get started. JPG, PNG, or WEBP all work; just keep the filenames matching what's listed in `src/data/birthdayData.js` (or edit that file to point at whatever filenames you use).

## Add music (optional)

Drop an MP3 file at:

```
public/music/birthday.mp3
```

The floating 🎵 button in the bottom-right toggles it on/off. If the file isn't there, the button quietly disables itself — the site still works perfectly without it.

## Editing everything else

Every piece of text on the site — the intro lines, the story chapters, the love letter, the random reasons, the final message — lives in one place:

```
src/data/birthdayData.js
```

Open that file, edit the strings, save, and the site updates. You don't need to touch any component files to personalize the content further.

## Deploying it so she can actually open it

The easiest free options:

- **Vercel** — `npm i -g vercel` then `vercel` in this folder.
- **Netlify** — drag the `dist/` folder (after `npm run build`) into Netlify's dashboard.
- **GitHub Pages** — push this repo and use a Vite GitHub Pages action.

Any of these will give you a link you can send her.
