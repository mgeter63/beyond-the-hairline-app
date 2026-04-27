# Beyond the Hairline — Marketing Website

Full marketing website for beyondthehairline.com.
Built with React + Vite. 6 pages. Mobile responsive. Production ready.

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, stats, mission, testimonials, CTA |
| `/about-the-app` | App features, how it works, screenshots |
| `/the-research` | Research goals, data collection, IRB status |
| `/meet-the-team` | Team bios and specialties |
| `/participate` | Who qualifies, 30-day timeline, FAQ |
| `/contact` | Contact form + email info |
| `/privacy` | Privacy policy placeholder |
| `/terms` | Terms of use placeholder |

---

## Setup (do this once)

1. Open Windows Terminal and navigate to your project folder:
   ```
   cd "C:\Users\mgete\OneDrive\Beyond the Hairline Course\App"
   ```

2. Move this folder into your working directory. Name it something clear like `bth-website`.

3. Open the bth-website folder in terminal:
   ```
   cd bth-website
   ```

4. Install dependencies:
   ```
   npm install
   ```

5. Start the local dev server:
   ```
   npm run dev
   ```
   The site runs at http://localhost:5173

---

## Deployment to Vercel

This is a SEPARATE Vercel project from your app.

1. In the bth-website folder, run:
   ```
   vercel
   ```

2. Follow the prompts — create a new project, accept defaults.

3. Once deployed, go to vercel.com, open this project, and add your custom domain.

4. Since beyondthehairline.com currently points to your app, you have two options:
   - **Option A (Recommended):** Point beyondthehairline.com to the marketing site. Then update your existing app Vercel project to serve at beyondthehairline.com/app using a rewrite rule.
   - **Option B:** Deploy the marketing site at www.beyondthehairline.com and keep the app at beyondthehairline.com.

   **Talk to Claude Code to help you add the rewrite rule if needed.**

---

## Activating the Contact Form

The contact form uses Formspree — free, no backend needed.

1. Go to https://formspree.io and sign up for a free account.
2. Create a new form. Set the recipient to: mgeter@601sistas.com
3. Copy your form ID (it looks like `xyzabc12`).
4. Open `src/pages/Contact.jsx`.
5. Find this line near the top:
   ```
   const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';
   ```
6. Replace `YOUR_FORMSPREE_ID` with your actual form ID.
7. Save the file and redeploy.

Until this is set up, clicking "Send Message" will open a mailto link as a fallback.

---

## Adding Photos

### Team photos
Open `src/pages/Team.jsx`. Find the comment that says:
```
{/* PHOTO PLACEHOLDER — Replace the div below with an <img> tag when photos are available */}
```
Replace the placeholder div with:
```jsx
<img src="/images/mary-geter.jpg" alt="Mary Geter" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
```
Put your photos in the `public/images/` folder.

### App screenshots
Open `src/pages/AboutApp.jsx`. Find the screenshot placeholder section and replace each placeholder div with an `<img>` tag pointing to your screenshot files in `public/images/`.

### Video embed
Open `src/pages/Home.jsx`. Find the video section and replace the placeholder with a YouTube iframe:
```jsx
<iframe
  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Beyond the Hairline App Demo"
  frameBorder="0"
  allowFullScreen
/>
```

---

## To Do Before Launch

- [ ] Set up Formspree and add form ID to Contact.jsx
- [ ] Add team member photos
- [ ] Add app screenshots
- [ ] Add YouTube/Vimeo video embed
- [ ] Write full Privacy Policy and Terms of Use (see src/App.jsx)
- [ ] Deploy to Vercel and connect domain
- [ ] Update all team bio details as needed

---

## Design System

| Token | Value |
|---|---|
| Deep Plum | `#4A235A` |
| Gold | `#D4AF37` |
| Lavender | `#F4F0FA` |
| Headline Font | Playfair Display |
| Body Font | DM Sans |

Do NOT change these. They match the app's design system.

---

*Beyond the Hairline™ — Property of Mary Geter*
