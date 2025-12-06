# Starter Project W Astro

A modern web development starter project using the Astro framework with Tailwind CSS v4, designed for building static websites with an optimized build pipeline.

## Tech Stack

- **[Astro](https://astro.build)** v5.15.5 - Modern static site generator
- **[Tailwind CSS](https://tailwindcss.com)** v4.1.17 - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **Additional Libraries:**
  - `class-variance-authority` - For managing component variants
  - `tailwind-merge` - For merging Tailwind classes intelligently
  - `@tailwindcss/forms` - Form styling plugin
  - `@tailwindcss/typography` - Typography plugin

## Project Structure

```
starter-project-w-astro/
├── app/                    # Astro framework source code
│   ├── src/               # Source files
│   │   ├── assets/        # Static assets (images, fonts, etc.)
│   │   ├── components/    # Reusable Astro components
│   │   ├── data/          # Data files
│   │   ├── helpers/       # Helper functions
│   │   ├── icons/         # Icon components
│   │   ├── layouts/       # Page layouts
│   │   ├── pages/         # Page routes
│   │   └── styles/        # Global styles
│   ├── public/            # Public static files
│   ├── dist/              # Build output (temporary)
│   ├── astro.config.mjs   # Astro configuration
│   ├── flush-root.mjs     # Build cleanup script
│   ├── package.json       # Dependencies and scripts
│   └── tsconfig.json      # TypeScript configuration
│
├── html/                  # Production preview (generated from Astro build)
│   ├── assets/            # Compiled CSS, JS, and images
│   ├── index.html         # Generated HTML files
│   └── ...                # Other generated pages
│
└── readme.md              # This file
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. Navigate to the `app` folder:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

### Available Commands

All commands should be run from the `app` directory:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `http://localhost:4321` |
| `npm run build` | Build for production and copy to `../html` folder |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |
| `npm run copy` | Copy built files from `dist/` to `../html/` |
| `npm run rplpath` | Replace asset paths in HTML files |

### Development Workflow

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321` with hot module replacement.

2. **Make your changes** in the `src/` directory:
   - Add pages in `src/pages/`
   - Create components in `src/components/`
   - Add layouts in `src/layouts/`
   - Style with Tailwind CSS classes

3. **Build for production:**
   ```bash
   npm run build
   ```

## Build Process

The production build follows this pipeline:

1. **`astro build`** - Compiles Astro files to static HTML/CSS/JS in `dist/`
2. **`flush-root.mjs`** - Cleans the `../html/` directory (removes old files)
3. **`npm run copy`** - Copies all files from `dist/` to `../html/`
4. **`npm run rplpath`** - Fixes asset paths (changes `/assets` to `assets` for relative paths)

### About `flush-root.mjs`

This script ensures a clean build by:
- Removing all files and folders in `../html/` (except hidden files starting with `.`)
- Preventing stale files from previous builds
- Preparing the directory for fresh production files

### The `html` Folder

The `html` folder contains the **production-ready preview** of your website:
- Generated automatically by `npm run build`
- Contains static HTML, CSS, JS, and assets
- Ready to deploy to any static hosting service
- Asset paths are adjusted for relative linking

## Configuration

### Astro Configuration (`astro.config.mjs`)

Key settings:
- **`compressHTML: false`** - Keeps HTML readable
- **`format: "file"`** - Generates `.html` files (not directories)
- **`assets: "assets"`** - Custom assets folder name
- **`output: "static"`** - Static site generation mode
- **Vite integration** - Tailwind CSS via Vite plugin
- **`cssCodeSplit: false`** - Single CSS file output

### Tailwind CSS

Tailwind CSS v4 is integrated via the Vite plugin with:
- Forms plugin for better form styling
- Typography plugin for rich text content
- Custom configuration in your source files

## Deployment

After running `npm run build`, the `html` folder contains your complete static site. Deploy options:

1. **Static Hosting Services:**
   - Upload the `html` folder to services like Netlify, Vercel, GitHub Pages, or Cloudflare Pages

2. **Traditional Web Servers:**
   - Copy the `html` folder contents to your web server's public directory

3. **CDN:**
   - Upload to any CDN that supports static file hosting

## Using This Starter in a New Project

### Option 1: Clone and Start Fresh

1. **Clone this repository:**
   ```bash
   git clone <repository-url> my-new-project
   cd my-new-project
   ```

2. **Remove the existing Git history:**
   ```bash
   # Windows (PowerShell)
   Remove-Item -Recurse -Force .git
   
   # Linux/Mac
   rm -rf .git
   ```

3. **Initialize a new Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit from Astro starter"
   ```

4. **Connect to your new remote repository:**
   ```bash
   git remote add origin <your-new-repository-url>
   git branch -M main
   git push -u origin main
   ```

5. **Install dependencies and start developing:**
   ```bash
   cd app
   npm install
   npm run dev
   ```

### Option 2: Use as a Template

1. **Copy the project structure:**
   - Copy the entire `starter-project-w-astro` folder to your new project location
   - Rename the folder to your project name

2. **Update project metadata:**
   - Edit `app/package.json` - change the `name` field to your project name
   - Update `app/astro.config.mjs` if needed for your project requirements
   - Modify this `readme.md` with your project details

3. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

### Git Workflow Best Practices

#### Recommended `.gitignore` Additions

The `app/.gitignore` already includes standard Astro ignores. Consider adding to the **root** `.gitignore`:

```gitignore
# Production build output
html/

# Or if you want to track the html folder for deployment:
# html/assets/
# Keep html/*.html tracked
```

#### Branch Strategy

```bash
# Create a development branch
git checkout -b develop

# Create feature branches
git checkout -b feature/new-component

# Merge back to develop
git checkout develop
git merge feature/new-component

# Merge to main for production
git checkout main
git merge develop
```

#### Deployment Workflow

**Option A: Deploy `html` folder (commit built files)**

```bash
# Build the project
cd app
npm run build

# Commit the html folder
cd ..
git add html/
git commit -m "Build: Update production files"
git push origin main
```

**Option B: Build on CI/CD (recommended)**

Don't commit the `html` folder. Instead:
1. Add `html/` to `.gitignore`
2. Set up CI/CD (GitHub Actions, Netlify, Vercel) to run `npm run build`
3. Deploy the generated `html` folder automatically

**Example GitHub Actions workflow:**

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install and Build
        run: |
          cd app
          npm install
          npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./html
```

#### Collaborative Development

```bash
# Always pull latest changes before starting work
git pull origin main

# Create a feature branch
git checkout -b feature/your-feature

# Make changes in the app/ directory
cd app
npm run dev

# Commit your changes
git add .
git commit -m "feat: Add new feature"

# Push to remote
git push origin feature/your-feature

# Create a Pull Request on GitHub/GitLab
```

### Updating from Starter Template

If you want to pull updates from the original starter:

```bash
# Add the starter as a remote
git remote add starter <original-starter-repo-url>

# Fetch updates
git fetch starter

# Merge updates (resolve conflicts if any)
git merge starter/main --allow-unrelated-histories
```

## Tips & Best Practices

- **Development:** Always work in the `app` directory
- **Assets:** Place static assets in `app/public/` or `app/src/assets/`
- **Components:** Create reusable components in `app/src/components/`
- **Styling:** Use Tailwind utility classes for consistent styling
- **Build:** Run `npm run build` before deploying to ensure latest changes
- **Preview:** Use the `html` folder to preview the exact production output

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Discord Community](https://astro.build/chat)

## License

This is a starter project template. Use it freely for your projects.
