# Portfolio

A minimal, fast, and functional personal portfolio built to showcase projects, research, and technical work without unnecessary fluff.

This is not a template-heavy, overdesigned portfolio. The focus is on clarity, performance, and content.

http://portfolio-jg5e.vercel.app/

---

## Overview

This portfolio is built as a single-page application using React and Vite. It is structured around modular components for each section such as projects, skills, research, and contact.

The goal is simple:

* Present technical work clearly
* Keep UI responsive and clean
* Avoid over-engineering

---

## Tech Stack

* React (component-based UI)
* Vite (fast build tool and dev server)
* JavaScript (ES6+)
* CSS (custom styling)
* ESLint (code quality)

---

## Features

* Modular component structure for easy scaling
* Fast load times using Vite
* Clean navigation with section-based layout
* Dedicated sections for:

  * Hero / Introduction
  * Projects
  * Skills
  * Research Work
  * Resume
  * Contact
* Terminal-style UI component for interactive feel

---

## Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── FeaturedResearch.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Skills.jsx
│   │   └── TerminalScreen.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
```

---

## Getting Started

Clone the repository:

```
git clone https://github.com/praju120056/portfolio.git
cd portfolio
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

---

## Customization

* Update content inside `/src/components`
* Modify styles in `App.css` and `index.css`
* Add new sections by creating new components and importing them into `App.jsx`

---

## Design Philosophy

* Keep it simple
* Avoid unnecessary animations and libraries
* Focus on content over decoration
* Build something that can be iterated on, not something “perfect” on day one

---

## Future Improvements

* Better responsiveness across edge screen sizes
* Improved project filtering / categorization
* Integration with backend or CMS if needed
* Performance optimizations (lazy loading, code splitting)

---

## Deployment

Can be deployed using:

* Vercel
* Netlify
* GitHub Pages

---

## Contact

If you want to collaborate, discuss projects, or talk tech, reach out through the contact section on the site.

---

## Note

This is a working project. Expect changes, iterations, and improvements over time.
