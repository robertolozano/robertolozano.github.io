# Roberto Lozano Jr. - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Framer Motion. This site showcases my projects in web development, machine learning, and software engineering.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **Font**: Poppins (via next/font)
- **Deployment**: Optimized for Vercel or static export

## ✨ Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: Page transitions and scroll animations using Framer Motion
- **SEO Optimized**: Meta tags, OpenGraph support, and semantic HTML
- **Project Filtering**: Dynamic filtering on the portfolio page by category
- **Type-Safe**: Full TypeScript implementation for better DX and fewer bugs
- **Modern UI**: Clean, professional design with custom hover effects
- **Accessible**: ARIA labels, keyboard navigation, and semantic markup

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/             # About page
│   │   ├── portfolio/         # Portfolio page with filtering
│   │   ├── layout.tsx         # Root layout with fonts & metadata
│   │   ├── page.tsx           # Homepage
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # React components
│   │   ├── Button.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── ProjectCard.tsx
│   ├── data/                  # Project and constant data
│   │   ├── projects.ts
│   │   └── constants.ts
│   ├── styles/                # CSS Modules
│   ├── types/                 # TypeScript type definitions
│   └── utils/                 # Utility functions
├── public/                    # Static assets (images, resume, etc.)
└── old-html-site/            # Original HTML version (archived)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/robertolozano/robertolozano.github.io.git
cd robertolozano.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

### Static Export (for GitHub Pages)

1. Uncomment `output: 'export'` in `next.config.ts`
2. Build the project:
```bash
npm run build
```
3. The static files will be in the `out/` directory

## 📄 Pages

- **Home** (`/`): Hero section with introduction and all projects
- **About** (`/about`): Education, skills, and passions
- **Portfolio** (`/portfolio`): Filterable project showcase with statistics
- **404**: Custom not found page

## 🎨 Design

The site uses a consistent color scheme:
- Primary Blue: `#3583de`
- Accent Orange: `rgb(230, 151, 66)`
- Background: `#f9fafa`
- Typography: Poppins font family

## 🔧 Configuration

Key configuration files:
- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `src/app/layout.tsx`: Global metadata and fonts

## 📝 Adding New Projects

Edit `src/data/projects.ts` and add a new project object:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Project description...',
  techStack: ['React', 'Node.js', ...],
  image: 'project-image.png',
  githubLink: 'https://github.com/...',
  liveLink: 'https://...', // optional
  category: 'web' | 'ml' | 'mobile' | 'database' | 'other',
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically

### GitHub Pages

1. Enable `output: 'export'` in `next.config.ts`
2. Build: `npm run build`
3. Deploy the `out/` directory to GitHub Pages

## 📧 Contact

Roberto Lozano Jr.
- GitHub: [@robertolozano](https://github.com/robertolozano)
- LinkedIn: [Roberto Lozano](https://www.linkedin.com/in/roberto-lozano-272503163/)

## 📜 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js and TypeScript
