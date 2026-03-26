# Portfolio Website Documentation

## Table of Contents
1. [Project Structure](#project-structure)
2. [How to Update Your Photo](#how-to-update-your-photo)
3. [How to Update Your Resume](#how-to-update-your-resume)
4. [How to Add/Edit Experience](#how-to-addedit-experience)
5. [How to Update Personal Information](#how-to-update-personal-information)
6. [How to Modify Skills](#how-to-modify-skills)
7. [How to Customize Colors](#how-to-customize-colors)
8. [Running the Project](#running-the-project)
9. [Deployment](#deployment)

---

## Project Structure

```
Portfolio/
├── public/                     # Static files
│   ├── assets/
│   │   └── profile.png        # Your profile photo
│   ├── Vishal_Resume.pdf      # Your resume PDF
│   ├── favicon.svg            # Website icon (VS logo)
│   └── index.html             # HTML template
├── src/
│   ├── components/            # React components
│   │   ├── Navbar.js/.css    # Navigation bar
│   │   ├── Hero.js/.css      # Landing page with terminal
│   │   ├── About.js/.css     # About section
│   │   ├── Experience.js/.css # Work experience
│   │   ├── Skills.js/.css    # Technical skills
│   │   ├── Education.js/.css # Education section
│   │   ├── Contact.js/.css   # Contact information
│   │   ├── Terminal.js/.css  # Interactive terminal
│   │   └── Footer.js/.css    # Footer
│   ├── App.js                # Main app component
│   ├── App.css               # Global app styles
│   ├── index.js              # React entry point
│   └── index.css             # Global styles & colors
├── package.json              # Dependencies
└── README.md                 # Project overview
```

---

## How to Update Your Photo

### Step 1: Prepare Your New Photo
- **Recommended size:** 400x400px to 800x800px
- **Format:** PNG or JPG
- **Aspect ratio:** Square (1:1) works best
- **Quality:** High resolution for better display

### Step 2: Replace the Photo File

**Option A: Replace the existing file**
```bash
# Navigate to the public/assets folder
cd public/assets/

# Replace profile.png with your new photo (keep the same name)
# Just drag and drop your photo and rename it to profile.png
```

**Option B: Use a different filename**

1. Add your photo to `public/assets/` (e.g., `my-photo.jpg`)

2. Update `src/components/About.js`:
```javascript
// Line 46-47
<img 
  src="/assets/my-photo.jpg"  // Change this to your filename
  alt="Vishal Sharma" 
/>
```

### Step 3: Verify Changes
- Save the file
- The development server will auto-reload
- Check your About section to see the new photo

---

## How to Update Your Resume

### Method 1: Replace the Existing PDF (Easiest)

```bash
# Copy your new resume to the public folder
cp /path/to/your/new-resume.pdf public/Vishal_Resume.pdf
```

That's it! The download button already points to this file.

### Method 2: Use a Different Filename

1. **Add your resume** to the `public/` folder (e.g., `MyResume.pdf`)

2. **Update the Hero component** (`src/components/Hero.js`):
```javascript
// Line 73-79 (in the Download Resume button)
<a 
  href="/MyResume.pdf"  // Change this line
  className="cta-button secondary"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  Download Resume
</a>
```

3. **Update the Terminal component** (`src/components/Terminal.js`):
```javascript
// If you have a resume command, update it there too
```

### Tip: Always Use Simple Filenames
- ✅ Good: `Resume.pdf`, `Vishal_Resume.pdf`
- ❌ Avoid: `Resume (1).pdf`, `My Resume 2024.pdf` (spaces and special characters)

---

## How to Add/Edit Experience

### Understanding the Experience Structure

Open `src/components/Experience.js` and find the `experiences` array (around line 7):

```javascript
const experiences = [
  {
    company: 'Company Name',
    title: 'Your Job Title',
    period: 'Start Date – End Date',  // Use 'Present' for current job
    location: 'City, Country',
    details: [
      'Achievement or responsibility bullet point 1',
      'Achievement or responsibility bullet point 2',
      'Achievement or responsibility bullet point 3',
    ]
  },
  // Add more experiences here
];
```

### Adding a New Experience

**Step 1:** Add a new object to the array:

```javascript
const experiences = [
  // NEW EXPERIENCE - Add at the top for most recent
  {
    company: 'New Company',
    title: 'Senior Backend Engineer',
    period: 'Jan 2026 – Present',
    location: 'Cork, Ireland',
    details: [
      'Led development of microservices architecture handling 1M+ requests/day',
      'Reduced system latency by 40% through Redis caching implementation',
      'Mentored team of 5 junior developers',
    ]
  },
  // EXISTING EXPERIENCES below
  {
    company: 'Locus.sh',
    title: 'SDE-2 Backend',
    // ... rest of the code
  },
];
```

**Step 2:** Save the file - changes will auto-reload!

### Editing Existing Experience

Simply modify the values in the existing objects:

```javascript
{
  company: 'Locus.sh',
  title: 'SDE-2 Backend',
  period: 'Jan 2024 – Present',  // Changed from Aug 2025 to Present
  location: 'Bengaluru, India (Acquired by IKEA)',
  details: [
    'Led architectural redesign...',  // Edit these lines
    'Enhanced API performance...',    // Add or remove as needed
  ]
},
```

### Removing an Experience

Simply delete the entire object from the array:

```javascript
const experiences = [
  // Keep this one
  {
    company: 'Locus.sh',
    title: 'SDE-2 Backend',
    // ...
  },
  // DELETE THIS ENTIRE BLOCK to remove it
  // {
  //   company: 'Old Company',
  //   title: 'Old Title',
  //   ...
  // },
];
```

### Updating Terminal Experience

Also update the terminal's experience command in `src/components/Terminal.js` (around line 32):

```javascript
experience: () => [
  'Your Company - Location',
  '├── Job Title (Date – Date)',
  '│   ├── Achievement 1',
  '│   ├── Achievement 2',
  '│   └── Achievement 3',
  // Add more as needed
],
```

---

## How to Update Personal Information

### Contact Information

Edit `src/components/Contact.js`:

```javascript
// Email (lines 26-32)
<a href="mailto:your-email@example.com" className="contact-card">
  <FaEnvelope className="contact-icon" />
  <div className="contact-details">
    <span className="contact-label">Email</span>
    <span className="contact-value">your-email@example.com</span>
  </div>
</a>

// Phone (lines 34-40)
<a href="tel:+1234567890" className="contact-card">
  <FaPhone className="contact-icon" />
  <div className="contact-details">
    <span className="contact-label">Phone</span>
    <span className="contact-value">+1 234 567 890</span>
  </div>
</a>

// LinkedIn (lines 50-60)
<a 
  href="https://www.linkedin.com/in/yourprofile/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="contact-card"
>
  <FaLinkedin className="contact-icon" />
  <div className="contact-details">
    <span className="contact-label">LinkedIn</span>
    <span className="contact-value">yourprofile</span>
  </div>
</a>

// GitHub (lines 63-73)
<a 
  href="https://github.com/yourusername" 
  target="_blank" 
  rel="noopener noreferrer"
  className="contact-card"
>
  <FaGithub className="contact-icon" />
  <div className="contact-details">
    <span className="contact-label">GitHub</span>
    <span className="contact-value">yourusername</span>
  </div>
</a>
```

### Hero Section (Name & Introduction)

Edit `src/components/Hero.js`:

```javascript
// Lines 35-49
<p className="hero-intro">Hi, my name is</p>
<h1 className="hero-name">
  Your Name Here
  <span className="name-cursor">|</span>
</h1>
<h2 className="hero-subtitle typing-text">
  {displayText}
  <span className="typing-cursor">_</span>
</h2>
<p className="hero-description">
  I'm a <span className="highlight">Your Title</span> with X+ years of experience 
  doing amazing things. Currently at{' '}
  <span className="highlight">Your Company/School</span>, specializing in 
  Your Specialties.
</p>
```

### About Section

Edit `src/components/About.js` (lines 15-35):

```javascript
<p>
  Hello! I'm YourName, a [Your Title] based in [Your City]. 
  My journey in software development began...
</p>
<p>
  At <span className="highlight">Company Name</span>, I spent X years 
  building...
</p>
// Add more paragraphs as needed
```

### Terminal Commands

Update `src/components/Terminal.js` (lines 20-50) to reflect your information:

```javascript
about: () => [
  'Hi! I\'m Your Name',
  'Your Title with X+ years of experience',
  'Currently at Your Company/School',
  'Based in Your City',
  '',
  'Your description here...',
],
contact: () => [
  'Email:    your-email@example.com',
  'Phone:    +1 234 567 890',
  'Location: Your City, Country',
  'LinkedIn: linkedin.com/in/yourprofile',
  'GitHub:   github.com/yourusername',
],
```

---

## How to Modify Skills

### Adding/Editing Skills

Edit `src/components/Skills.js` (lines 7-45):

```javascript
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 95 },
      { name: 'Python', icon: <FaPython />, level: 80 },
      // Add more languages
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot />, level: 95 },
      // Add more frameworks
    ]
  },
  // Add more categories
];
```

### Skill Level Guidelines
- **90-100%**: Expert level, daily use
- **75-89%**: Advanced, very comfortable
- **60-74%**: Intermediate, practical experience
- **Below 60%**: Basic understanding

### Adding New Category

```javascript
{
  title: 'Your New Category',
  skills: [
    { name: 'Skill Name', icon: <IconComponent />, level: 85 },
    { name: 'Another Skill', level: 80 }, // Icon is optional
  ]
},
```

### Updating Concepts

Edit lines 49-57:

```javascript
const concepts = [
  'Distributed Systems',
  'RESTful APIs',
  'Your New Concept',
  'Another Concept',
];
```

---

## How to Customize Colors

All colors are defined in `src/index.css` using CSS variables:

```css
:root {
  --primary-color: #0a192f;      /* Dark navy background */
  --secondary-color: #112240;    /* Lighter navy for cards */
  --accent-color: #64ffda;       /* Teal/cyan for highlights */
  --text-color: #8892b0;         /* Light gray text */
  --text-light: #ccd6f6;         /* Lighter text */
  --text-white: #e6f1ff;         /* Almost white text */
}
```

### Popular Color Schemes

**Option 1: Purple Theme**
```css
:root {
  --primary-color: #1a0b2e;
  --secondary-color: #2d1b4e;
  --accent-color: #a855f7;
  --text-color: #c4b5fd;
  --text-light: #e9d5ff;
  --text-white: #faf5ff;
}
```

**Option 2: Green Theme**
```css
:root {
  --primary-color: #0f1c13;
  --secondary-color: #1a2f21;
  --accent-color: #10b981;
  --text-color: #86efac;
  --text-light: #d1fae5;
  --text-white: #f0fdf4;
}
```

**Option 3: Blue/Orange Theme**
```css
:root {
  --primary-color: #0a1929;
  --secondary-color: #132f4c;
  --accent-color: #ff9800;
  --text-color: #b2bac2;
  --text-light: #e3e8ef;
  --text-white: #ffffff;
}
```

---

## Running the Project

### Initial Setup

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm start
```

The site will open at `http://localhost:3000`

### Common Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Check for issues
npm run lint
```

### Development Tips

1. **Hot Reload**: Changes auto-refresh in browser
2. **Console**: Open browser DevTools (F12) to check for errors
3. **Port Conflict**: If port 3000 is busy, React will ask to use 3001

---

## Deployment

### Option 1: Vercel (Recommended)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import `vishiod/portfolio`
5. Click "Deploy"

**Automatic Updates**: Every push to `main` auto-deploys!

### Option 2: Netlify

1. Go to https://netlify.com
2. Sign in with GitHub
3. "New site from Git" → Choose your repo
4. Build command: `npm run build`
5. Publish directory: `build`
6. Deploy!

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://vishiod.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

---

## Troubleshooting

### Issue: Photo not showing
- Check file path in `About.js`
- Ensure photo is in `public/assets/`
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Resume not downloading
- Verify PDF is in `public/` folder
- Check filename matches in `Hero.js`
- Try opening directly: `http://localhost:3000/Vishal_Resume.pdf`

### Issue: Changes not appearing
- Save the file
- Check terminal for errors
- Try stopping server (Ctrl+C) and restart with `npm start`

### Issue: Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## Best Practices

### 1. Keep Content Updated
- Update experience regularly
- Refresh skills as you learn new ones
- Keep resume PDF current

### 2. Use Version Control
```bash
# After making changes
git add .
git commit -m "Update experience section"
git push origin main
```

### 3. Test Before Deploying
- Check all links work
- Test download button
- Verify terminal commands
- Test on mobile (Chrome DevTools → Toggle Device Toolbar)

### 4. Optimize Images
- Compress photos before adding (use tinypng.com)
- Keep under 500KB for faster loading

### 5. Backup Important Files
- Keep original resume PDF
- Save high-res profile photo
- Export git repo occasionally

---

## Need Help?

### Resources
- React Documentation: https://react.dev
- CSS Tricks: https://css-tricks.com
- React Icons: https://react-icons.github.io/react-icons

### Common Issues
1. **Port already in use**: Close other dev servers or use different port
2. **Module not found**: Run `npm install`
3. **Build errors**: Check console for specific error messages

---

**Last Updated:** March 2026

Made with ❤️ using React.js
