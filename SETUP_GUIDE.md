# 🚀 Setup & Customization Guide - Premium Frontend Portfolio

## Quick Start (5 Minutes)

### 1. Install & Run
```bash
cd my-app
npm install
npm run dev
```
Visit: `http://localhost:3000`

### 2. Update Your Info
Edit `src/utils/constants.js`:
```javascript
export const PORTFOLIO_DATA = {
  personal: {
    name: "Your Name",           // Change this
    role: "Senior Frontend Developer",
    email: "your.email@gmail.com",
    location: "Your City",
  },
  // ... rest
};
```

### 3. Add Project Images
1. Create folder: `public/portfolio/`
2. Add 7 images (one per project):
   - `soundbox.jpg`
   - `emis4.jpg`
   - `bmovie.jpg`
   - `lsp.jpg`
   - `distribution.jpg`
   - `weboh.jpg`
   - `receiving.jpg`

### 4. Deploy
```bash
npm run build
vercel
```

---

## ✅ What's New in This Version

### 1. **Prominent 3D Features** 🔮
**Interactive Particle System:**
- 800+ animated particles in spherical formation
- Real-time mouse tracking for parallax effect
- Smooth color gradients (blue → purple)
- Optimized for 60fps performance

**Where:** Hero section background
**Customization:** `src/components/3d/FloatingParticles.jsx`

### 2. **3D Project Cards** 🎴
**New Card Features:**
- 3D tilt effect that follows mouse movement
- Hover animations with glow and shadows
- Dynamic color-coded badges
- Smooth image zoom on hover

**Where:** Projects section
**Example Hover:** Move mouse over a project card to see it tilt in 3D

### 3. **Timeline/Journey Section** 📍
**New Section:**
- Vertical animated timeline of your experience
- Connected line segments that grow on scroll
- 4 real jobs from your experience
- Professional card layout for each role

**Where:** Between Projects and Skills (new navigation link)
**Data Source:** `src/utils/constants.js` - `journeyData`

### 4. **Real Project Data** 📊
**7 Real Frontend Projects:**
- All 7 projects from your portfolio
- Each with title, date, description, tech stack
- Live demo links (where available)
- Optimized sorting (newest first)

**Data Source:** `src/utils/constants.js` - `projectsData`

---

## 📝 Detailed Customization

### A. Update Personal Information

**File:** `src/utils/constants.js` (Lines 2-12)

```javascript
export const PORTFOLIO_DATA = {
  personal: {
    name: "Bambang Solehudin",              // ✏️ Your name
    role: "Senior Frontend Developer",       // ✏️ Your title
    bio: "Building exceptional web experiences...", // ✏️ Your bio
    email: "bambang@example.com",            // ✏️ Your email
    location: "Indonesia",                   // ✏️ Your location
    resumeUrl: "/resume.pdf",                // ✏️ Resume link
  },
  
  aboutSections: [
    {
      title: "About Me",
      content: "✏️ Your about me text", // Edit this
    },
    {
      title: "My Approach",
      content: "✏️ Your approach text", // Edit this
    },
  ],

  skills: {
    frontend: ["React", "Next.js", "Vue.js", "React Native", "TypeScript", "TailwindCSS"],
    styling: ["TailwindCSS", "Bootstrap", "CSS3", "SCSS", "Styled Components"],
    stateManagement: ["Redux", "Context API", "Vuex", "Pinia"],
    tools: ["Git", "Figma", "VS Code", "Webpack", "Vite", "Docker"],
    other: ["RESTful APIs", "GraphQL", "Performance Optimization", "Component Architecture"],
  },

  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    dribbble: "https://dribbble.com/yourusername",
  },
};
```

### B. Configure Your Projects

**File:** `src/utils/constants.js` (Lines 69-155)

The projects are already populated with your 7 real projects. To modify:

```javascript
export const projectsData = [
  {
    id: 8,
    title: "Project Name",                    // ✏️ Edit
    image: "/portfolio/soundbox.jpg",         // ✏️ Ensure image exists
    date: "Company (Year)",                   // ✏️ Edit
    description: "Project description...",    // ✏️ Edit
    url: "https://live-demo.com",            // ✏️ Edit
    tech: ["React", "Node.js", "MongoDB"],   // ✏️ Edit tech stack
  },
  // ... more projects
];
```

**Where to add images:**
1. Create: `public/portfolio/`
2. Add: `soundbox.jpg`, `emis4.jpg`, `bmovie.jpg`, etc.
3. Image specs: 1200x700px, JPG/PNG, optimized

### C. Update Your Experience Timeline

**File:** `src/utils/constants.js` (Lines 157-210)

```javascript
export const journeyData = [
  {
    events: [
      {
        month: "May 2025 - Present",         // ✏️ Your dates
        title: "CODE.ID - Senior Frontend Developer", // ✏️ Your role
        description: "Developed new features...", // ✏️ Your description
      },
      // ... more events
    ],
  },
];
```

The timeline currently shows your 4 recent positions. To add more:

```javascript
export const journeyData = [
  {
    events: [
      { month: "...", title: "...", description: "..." },
      { month: "...", title: "...", description: "..." },
      // Add more here
    ],
  },
];
```

### D. Customize Colors

**Brand Color Locations:**

1. **Primary Blue (#3B82F6):**
   - Search: `from-blue-600`
   - Replace in: Button styles, badges, accents
   - Change to: Your brand color

2. **Project Card Colors:**
   - File: `src/components/sections/Projects.jsx`
   - Lines: 48-54
   ```javascript
   color: [
     "#3B82F6",  // Blue
     "#10B981",  // Green
     "#8B5CF6",  // Purple
     // Change these to your colors
   ][index % 7],
   ```

3. **Hero Gradient:**
   - File: `src/components/sections/Hero.jsx`
   - Line: 45
   ```jsx
   <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600">
     // Change colors here
   </span>
   ```

### E. Customize 3D Effects

**Project Card Tilt Sensitivity:**
- File: `src/components/sections/ProjectCard.jsx`
- Line: 21-26

```javascript
// Adjust tilt intensity
setTilt({
  x: x * 15,  // Change 15 to: 10 (subtle), 20 (extreme)
  y: y * -15, // Change 15 to adjust parallax
});
```

**3D Particle Animation:**
- File: `src/components/3d/FloatingParticles.jsx`
- Line: 44-50

```javascript
useFrame(() => {
  if (ref.current && ref.current.rotation) {
    ref.current.rotation.x += 0.0001;        // Rotation speed X
    ref.current.rotation.y += 0.0002;        // Rotation speed Y
    ref.current.rotation.z += 0.00003;       // Rotation speed Z
  }
});
```

**Particle Count:**
- Line: 18
```javascript
const particlesCount = 800;  // Change for more/fewer particles
```

---

## 🎯 Section-by-Section Guide

### Hero Section
**File:** `src/components/sections/Hero.jsx`

What to change:
- Line 72: Headline text
- Line 77: Subheading text
- Line 88: First button text
- Line 95: Second button text
- Lines 103-107: Tech stack pills

### About Section
**File:** `src/components/sections/About.jsx`

What to change:
- Update PORTFOLIO_DATA.aboutSections in constants.js
- Experience timeline is pulled from PORTFOLIO_DATA.experience
- Stats are hardcoded (lines 65-74)

### Projects Section
**File:** `src/components/sections/Projects.jsx`

What to change:
- Projects auto-load from projectsData
- Colors are auto-assigned (but can be customized)
- Stats (lines 53-60) - update as needed

### Journey Timeline Section
**File:** `src/components/sections/Journey.jsx`

What to change:
- Events auto-load from journeyData in constants.js
- Timeline styling: lines 50-70
- Call-to-action button: lines 126-135

### Skills Section
**File:** `src/components/sections/Skills.jsx`

What to change:
- Update PORTFOLIO_DATA.skills in constants.js
- Skill categories at lines 35-42
- Proficiency bars at lines 85-100

### Contact Section
**File:** `src/components/sections/Contact.jsx`

What to change:
- Form styling and validation
- Email recipient
- Social media links from PORTFOLIO_DATA.social

---

## 🔧 Advanced Customizations

### Add Custom 3D Model
1. Import three.js model
2. Create component in `src/components/3d/CustomModel.jsx`
3. Use in Hero section:

```jsx
import CustomModel from "@/components/3d/CustomModel";

// In Hero.jsx:
<div className="w-full h-96">
  <CustomModel />
</div>
```

### Modify Navigation
**File:** `src/components/common/Navigation.jsx` (Lines 28-33)

```javascript
const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },    // New!
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
```

### Add Dark Mode Toggle
Create: `src/components/common/ThemeToggle.jsx`

```jsx
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
```

---

## 📦 Build & Deploy

### Local Development
```bash
npm run dev
# http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
# Runs on http://localhost:3000
```

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel

# Follow prompts to connect GitHub/GitLab
# Auto-deploys on every push
```

### Deploy to Netlify
```bash
# Build first
npm run build

# Drag .next folder to Netlify
# Or use Netlify CLI:
npm i -g netlify-cli
netlify deploy --prod
```

---

## 🆘 Troubleshooting

### "Cannot find module" Error
```bash
rm -rf node_modules
npm install
npm run dev
```

### Images Not Showing
- Check path: `/public/portfolio/image-name.jpg`
- Verify file exists
- Use Next.js Image component properly

### 3D Not Rendering
- Check browser console for WebGL errors
- Verify Three.js is installed
- Enable GPU acceleration in browser

### Build Fails
- Clear .next: `rm -rf .next`
- Check for syntax errors
- Run `npm run lint` to find issues

---

## 📊 Performance Tips

1. **Optimize Images:**
   - Use TinyPNG.com or Squoosh
   - Save as JPG (not PNG) for photos
   - Aim for < 100KB per image

2. **Reduce 3D Load:**
   - Decrease particle count in FloatingParticles.jsx
   - Use canvas optimization

3. **Lazy Load Components:**
   - Components load on scroll/demand
   - Critical content loads first

4. **Monitor Performance:**
   - Use Google PageSpeed Insights
   - Check DevTools Lighthouse
   - Target 80+ score

---

## 🎨 Design Inspiration

The portfolio uses:
- **Color:** Blue as primary, complemented by grays
- **Typography:** Geist Sans (headlines) + Geist Mono (code)
- **Spacing:** 8px grid system (multiples of 8)
- **Animations:** Smooth, subtle, purpose-driven

To change aesthetic:
1. Update color variables (primary, secondary, accent)
2. Adjust border radius (8px, 12px, 16px)
3. Modify animation duration (see `src/utils/animations.js`)

---

## ✨ Final Checklist Before Launch

- [ ] Updated name and email
- [ ] Added portfolio images
- [ ] Updated about/bio text
- [ ] Configured social links
- [ ] Tested on mobile
- [ ] Tested 3D on low-end device
- [ ] Run `npm run build` (success)
- [ ] Deployed to Vercel
- [ ] Added domain (optional)
- [ ] Set up analytics (optional)

---

## 🚀 You're Ready!

Your premium portfolio is now ready. It showcases:
✅ 8+ years of frontend expertise
✅ 7 real projects with proper data
✅ Professional experience timeline
✅ Prominent 3D visualizations
✅ Smooth, refined animations
✅ Premium, polished design
✅ Mobile-responsive layout
✅ Production-ready code

**Next:** Deploy it and share with the world! 🌟
