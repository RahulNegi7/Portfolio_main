# 🚀 Rahul Negi - Personal Portfolio

A modern, responsive personal portfolio website showcasing projects, skills, and experience. Built with React and Vite.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Typewriter Effect**: [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter)
- **Styling**: Modern Vanilla CSS

---

## 📋 Prerequisites

Make sure you have **Node.js** (v18+ recommended) and **npm** installed on your system.
Verify your installation:

```bash
node -v
npm -v
```

---

## ⚡ Getting Started (Running the Frontend Locally)

Follow these steps to run the portfolio locally on your machine:

### 1. Open Terminal and Navigate to the Project Directory

```bash
cd /Users/rahulnegi/Desktop/Website_MINE
```
*(Or navigate to wherever you have cloned/saved the project folder)*

### 2. Install Dependencies

Install all required packages from `package.json`:

```bash
npm install
```

### 3. Start the Development Server

Run the Vite local development server:

```bash
npm run dev
```

### 4. Open in Your Browser

Once started, Vite will output a local URL (usually `http://localhost:5173`).
Open your browser and navigate to:

👉 **[http://localhost:5173](http://localhost:5173)**

The server supports Hot Module Replacement (HMR), so any code changes you save will reflect instantly in the browser.

---

## 📦 Production Build & Preview

### Portfolio view counter

The footer counter uses GoatCounter to count pageviews. The public endpoint is configured in `src/components/ViewCounter.jsx`. If you want to override it for a deployment, set:

```text
VITE_GOATCOUNTER_URL=https://YOUR-CODE.goatcounter.com/count
```

For local development, put the variable in a `.env.local` file at the project root. The endpoint is public and contains no secret. Enable **Allow adding visitor counts on your website** in your GoatCounter site settings so the displayed total is available.

### Build for Production

To create an optimized production build in the `dist/` directory:

```bash
npm run build
```

### Preview Production Build

To test and preview the production build locally before deploying:

```bash
npm run preview
```

---

## 📜 All Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with HMR |
| `npm run build` | Compiles and bundles production-ready assets to `dist/` |
| `npm run preview` | Serves the production build locally for testing |
| `npm run lint` | Runs ESLint to check for code issues and styling errors |

---

## 📁 Project Structure

```text
Website_MINE/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── assets/          # Component assets & styles
│   ├── components/      # React UI components (Hero, Navbar, About, Projects, etc.)
│   ├── App.jsx          # Root application component
│   ├── index.css        # Global CSS styling & design system
│   └── main.jsx         # React application entry point
├── index.html           # HTML template
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration
```

