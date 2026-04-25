# Quick Start Guide - Portfolio Customization

Get your portfolio up and running in 5 minutes by following these steps:

## Step 1: Update Your Information (2 min)

Edit `src/utils/constants.js` and update:

```javascript
// Line 2-9
personal: {
  name: "Your Name",
  role: "Your Job Title",
  bio: "Your professional tagline",
  email: "your.email@gmail.com",
  location: "Your City, Country",
}

// Line 37-51
social: {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_PROFILE",
  twitter: "https://twitter.com/YOUR_HANDLE",
  dribbble: "https://dribbble.com/YOUR_PROFILE",
}
```

## Step 2: Add Your Projects (2 min)

Still in `src/utils/constants.js`, update the `projects` array:

```javascript
projects: [
  {
    id: 1,
    title: "Your Project Name",
    description: "One-line description",
    longDescription: "Detailed project overview",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/images/project-1.jpg",
    link: "https://your-project.com",
    github: "https://github.com/you/project",
    color: "#3B82F6",  // Project theme color
    year: "2024",
  },
]
```

## Step 3: Add Project Images (1 min)

1. Save images to `public/images/`
2. Name them: `project-1.jpg`, `project-2.jpg`, etc.
3. Update image paths in constants.js

**Image Tips:**
- Size: 1200x675px (16:9 ratio)
- Format: JPG or PNG
- Optimize with TinyPNG or Squoosh

## Step 4: Customize Colors (Optional - 30 sec)

Search for `from-blue-600` in components and replace with your color:
- `from-purple-600` (Purple)
- `from-green-600` (Green)
- `from-red-600` (Red)
- `from-pink-600` (Pink)
- `from-indigo-600` (Indigo)

## Step 5: Deploy (Optional - 1 min)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Or build for other hosting
npm run build
npm start
```

## 🎨 Customization Shortcuts

### Change Hero Background Color
File: `src/components/sections/Hero.jsx` (Line 30)
```jsx
{/* Change: from-white via-blue-50/30 to-white */}
className="bg-gradient-to-b from-YOUR_COLOR via-blue-50/30 to-YOUR_COLOR"
```

### Add More Skills
File: `src/utils/constants.js` (Line 24-28)
```javascript
skills: {
  frontend: ["Add", "Your", "Skills", "Here"],
  backend: ["Your", "Backend", "Tech"],
  tools: ["Figma", "Docker", "AWS"],
  soft: ["Leadership", "Communication"],
}
```

### Update Section Order
File: `src/pages/index.js` (Lines 39-48)
Simply reorder the sections:
```jsx
<Hero />
<About />        {/* Reorder these */}
<Projects />
<Skills />
<Contact />
```

### Modify Animations Speed
File: `src/utils/animations.js`
Change `duration` values (smaller = faster):
```javascript
transition: {
  duration: 0.6,  // Try 0.3 for fast, 1.5 for slow
}
```

## 📝 What You Should Update

### Essential (Required)
- [ ] Personal name and role
- [ ] Email and social links
- [ ] Project titles and descriptions
- [ ] Project images

### Recommended
- [ ] About section bio
- [ ] Experience history
- [ ] Skills list
- [ ] Contact section message

### Optional
- [ ] Colors and theme
- [ ] Animation speeds
- [ ] Section descriptions

## 🚀 Run & Test

```bash
# Development (with hot reload)
npm run dev

# Production build
npm run build

# Production server
npm start
```

Open `http://localhost:3000` to preview.

## 📱 Mobile Testing

In development:
1. Open Chrome DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Test on different screen sizes

## ✨ Pro Tips

1. **Use descriptive project titles** - Be specific about what you built
2. **Show real metrics** - "Improved performance by 40%" vs vague descriptions
3. **Keep content current** - Update projects annually
4. **Use high-quality images** - Blurry images look unprofessional
5. **Test on mobile** - 60% of traffic is mobile
6. **Proofread everything** - Grammar errors hurt credibility
7. **Add real dates** - "2024" is better than vague "Recently"

## 🔗 Social Media Links

How to find your profile URLs:

**GitHub:**
1. Go to github.com/YOUR_USERNAME
2. Copy URL

**LinkedIn:**
1. Visit linkedin.com
2. Click profile icon → "View profile"
3. URL shows "linkedin.com/in/your-name"

**Twitter/X:**
1. Go to twitter.com/YOUR_HANDLE
2. Copy URL

## 🎯 Deployment Checklist

Before deploying:
- [ ] All projects have images
- [ ] Links point to correct URLs
- [ ] Social media links work
- [ ] Contact form is functional
- [ ] Mobile layout looks good
- [ ] No broken links in navigation
- [ ] Resume PDF added (if applicable)

## 📞 Need Help?

### Common Issues

**Q: Images not showing?**
A: Check file names match in constants.js and files exist in `public/images/`

**Q: Build fails?**
A: Run `npm install` again, then `npm run build`

**Q: Animations are choppy?**
A: Reduce particle count in `FloatingParticles.jsx` line 12

**Q: Colors don't change?**
A: Search component files for old color code and replace all instances

## 📈 Next Steps

Once portfolio is live:
1. Add to resume/LinkedIn
2. Share on Twitter/social media
3. Set up Google Analytics
4. Monitor website performance
5. Collect feedback from peers
6. Update with new projects quarterly

---

**That's it! Your portfolio is ready to impress.** 🎉
