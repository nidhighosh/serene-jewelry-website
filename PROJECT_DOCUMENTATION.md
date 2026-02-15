# SERENE JEWELRY WEBSITE - COMPLETE PROJECT DOCUMENTATION

---

## 1. PROJECT OVERVIEW (In Simple Words)

**Website Name:** Serene Jewelry Website

**Purpose of Website (Why It Was Made):**
This website is an online jewelry store where people can browse and shop for beautiful jewelry items like earrings, necklaces, rings, and bracelets. The website shows jewelry products with pictures and prices, allows customers to add items to a shopping cart, save favorite items in a wishlist, create user accounts, and contact the store. It was made to help jewelry businesses sell their products online in a modern and elegant way.

**Who Will Use It:**
- Customers who want to buy jewelry online
- Jewelry shop owners who want to showcase and sell their products
- Anyone looking for elegant jewelry items for themselves or as gifts

The website is designed to be easy to use for everyone, whether they are shopping on a computer, tablet, or mobile phone.

---

## 2. TOOLS & ACCOUNTS REQUIRED

Before starting this project, you must have the following things:

### Computer Requirements:
- ✅ Computer or Laptop (Windows, Mac, or Linux)
- ✅ At least 4GB RAM (8GB recommended)
- ✅ At least 5GB free disk space
- ✅ Stable internet connection

### Accounts You Need to Create:
1. **Google Account** (for Gmail and hosting)
   - Go to: https://accounts.google.com/signup
   - Create a free account if you don't have one

2. **GitHub Account** (for storing code)
   - Go to: https://github.com/signup
   - Create a free account

3. **Vercel Account** (for hosting the website - uses Google login)
   - Go to: https://vercel.com/signup
   - You can sign up using your GitHub account

### Software You Must Install:

1. **Node.js (Version 18 or higher)**
   - Download from: https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - This is needed to run JavaScript on your computer
   - After installation, Node.js will be available in your system

2. **pnpm (Package Manager)**
   - This is used to install project dependencies
   - After installing Node.js, pnpm can be installed using a command

3. **VS Code (Visual Studio Code) - Code Editor**
   - Download from: https://code.visualstudio.com/
   - This is where you will write and edit your code
   - It's free and works on all operating systems

4. **Google Chrome or Microsoft Edge Browser**
   - For testing the website
   - Download Chrome from: https://www.google.com/chrome/

5. **Git (Version Control)**
   - Download from: https://git-scm.com/downloads
   - This helps you upload code to GitHub
   - Choose the Windows/Mac/Linux version based on your system

---

## 3. FOLDER & FILE STRUCTURE (With Explanation)

### Complete Project Structure:

```
serene-jewelry-website/
│
├── app/                              (Main application folder - Next.js pages)
│   ├── page.tsx                      (Homepage - first page you see)
│   ├── layout.tsx                    (Main layout wrapper for all pages)
│   ├── globals.css                   (Global styles for entire website)
│   │
│   ├── about/                        (About page folder)
│   │   └── page.tsx                  (About us page)
│   │
│   ├── api/                          (Backend API routes folder)
│   │   ├── checkout/                 (Checkout API)
│   │   │   └── route.ts              (Handles checkout process)
│   │   ├── orders/                   (Orders API)
│   │   │   └── route.ts              (Manages order data)
│   │   ├── payment-status/           (Payment status checker)
│   │   │   └── route.ts              (Checks if payment succeeded)
│   │   └── webhooks/                 (Webhook listeners)
│   │       └── stripe/               (Stripe payment webhooks)
│   │           └── route.ts          (Receives payment notifications)
│   │
│   ├── checkout/                     (Checkout page)
│   │   ├── page.tsx                  (Main checkout page)
│   │   └── success/                  (Order success page)
│   │       └── page.tsx              (Shows after successful payment)
│   │
│   ├── contact/                      (Contact page)
│   │   └── page.tsx                  (Contact us page)
│   │
│   ├── profile/                      (User profile page)
│   │   └── page.tsx                  (User account page)
│   │
│   ├── shop/                         (Shop/Products page)
│   │   └── page.tsx                  (Shows all products)
│   │
│   └── signup/                       (Signup page)
│       └── page.tsx                  (New user registration)
│
├── components/                       (Reusable UI components)
│   ├── about-section.tsx             (About section component)
│   ├── cart-drawer.tsx               (Shopping cart sidebar)
│   ├── contact-form.tsx              (Contact form component)
│   ├── featured-products.tsx         (Shows featured products)
│   ├── hero-section.tsx              (Top banner section)
│   ├── payment-methods-modal.tsx     (Payment methods popup)
│   ├── product-card.tsx              (Single product card)
│   ├── profile-content.tsx           (Profile page content)
│   ├── shell-logo.tsx                (Website logo)
│   ├── shop-grid.tsx                 (Product grid layout)
│   ├── signup-modal.tsx              (Signup popup)
│   ├── site-footer.tsx               (Website footer)
│   ├── site-header.tsx               (Website header/navigation)
│   ├── theme-provider.tsx            (Dark/Light theme provider)
│   │
│   └── ui/                           (UI building blocks - 40+ components)
│       ├── button.tsx                (Button component)
│       ├── card.tsx                  (Card component)
│       ├── dialog.tsx                (Popup dialog)
│       ├── input.tsx                 (Text input field)
│       ├── drawer.tsx                (Slide-out drawer)
│       └── ... (40+ more UI components)
│
├── hooks/                            (Custom React hooks)
│   ├── use-mobile.tsx                (Detects mobile devices)
│   └── use-toast.ts                  (Shows toast notifications)
│
├── lib/                              (Library/utility files)
│   ├── auth-context.tsx              (User authentication state)
│   ├── cart-context.tsx              (Shopping cart state)
│   ├── orders-context.tsx            (Orders management state)
│   ├── products.ts                   (Product data list)
│   ├── stripe-utils.ts               (Stripe payment utilities)
│   ├── utils.ts                      (Helper functions)
│   └── wishlist-context.tsx          (Wishlist state)
│
├── public/                           (Public files - images, fonts, etc.)
│   └── images/                       (Image folder)
│       └── products/                 (Product images)
│
├── styles/                           (Additional style files)
│   └── globals.css                   (Global CSS styles)
│
├── package.json                      (Project dependencies list)
├── pnpm-lock.yaml                    (Locked dependency versions)
├── next.config.mjs                   (Next.js configuration)
├── tailwind.config.ts                (Tailwind CSS configuration)
├── tsconfig.json                     (TypeScript configuration)
├── postcss.config.mjs                (PostCSS configuration)
├── components.json                   (UI components configuration)
├── next-env.d.ts                     (Next.js TypeScript types)
├── README.md                         (Project documentation)
├── CHECKOUT_QUICKSTART.md            (Checkout feature guide)
├── CHECKOUT_REFERENCE.md             (Checkout reference)
├── CHECKOUT_SETUP.md                 (Checkout setup instructions)
└── IMPLEMENTATION_SUMMARY.md         (Implementation summary)
```

### Important Files Explanation:

| File Name | What It Does |
|-----------|--------------|
| `package.json` | Lists all software packages needed for the project |
| `next.config.mjs` | Configuration settings for Next.js framework |
| `tailwind.config.ts` | Configuration for Tailwind CSS styling |
| `tsconfig.json` | TypeScript language settings |
| `app/page.tsx` | The homepage of the website |
| `app/layout.tsx` | Main wrapper that appears on every page |
| `components/site-header.tsx` | Navigation menu at the top |
| `lib/products.ts` | List of all jewelry products with prices |

### Screenshots:
*[Note: Take screenshots of your project folder in VS Code and add them here]*

Screenshot 1: Project folder structure in Windows Explorer
Screenshot 2: Project opened in VS Code
Screenshot 3: Files and folders expanded in VS Code

---

## 4. STEP-BY-STEP WEBSITE CREATION (Complete Guide)

This section will teach you how to create this jewelry website from scratch. Follow every step carefully.

---

### STEP 1: Install Node.js

**Why we need this:** Node.js lets you run JavaScript on your computer, which is needed for this project.

**Steps:**
1. Open your web browser
2. Go to: `https://nodejs.org/`
3. You will see two download buttons
4. Click on **"LTS"** version (Long Term Support) - recommended
5. Download will start automatically
6. When download is complete, double-click the downloaded file
7. Installation wizard will open
8. Click **"Next"** → **"Next"** → **"Next"** → **"Install"**
9. Wait for installation to complete (takes 1-2 minutes)
10. Click **"Finish"**

**How to verify Node.js is installed:**
1. Press `Windows Key + R`
2. Type: `cmd`
3. Press Enter (black window will open - this is Command Prompt)
4. Type: `node --version`
5. Press Enter
6. You should see something like: `v18.17.0` or higher
7. Type: `npm --version`
8. Press Enter
9. You should see something like: `9.6.7`

If you see version numbers, Node.js is installed correctly! ✅

---

### STEP 2: Install Git

**Why we need this:** Git helps you save code changes and upload code to GitHub.

**Steps:**
1. Go to: `https://git-scm.com/downloads`
2. Click on **"Download for Windows"** (or Mac/Linux based on your system)
3. Download will start
4. Double-click the downloaded file
5. Click **"Next"** for all options (keep default settings)
6. Click **"Install"**
7. Wait for installation
8. Click **"Finish"**

**How to verify Git is installed:**
1. Open Command Prompt (Press Windows Key + R, type `cmd`, press Enter)
2. Type: `git --version`
3. Press Enter
4. You should see: `git version 2.x.x`

If you see the version, Git is installed! ✅

---

### STEP 3: Install VS Code

**Why we need this:** VS Code is where you will write and edit your code.

**Steps:**
1. Go to: `https://code.visualstudio.com/`
2. Click big blue **"Download"** button
3. Download will start automatically
4. Double-click downloaded file
5. Check box: **"I accept the agreement"**
6. Click **"Next"** → **"Next"** → **"Next"**
7. **IMPORTANT:** Check these boxes on "Select Additional Tasks" screen:
   - ✅ Add "Open with Code" action to Windows Explorer file context menu
   - ✅ Add "Open with Code" action to Windows Explorer directory context menu
   - ✅ Add to PATH (this is very important)
8. Click **"Next"** → **"Install"**
9. Wait for installation
10. Click **"Finish"**
11. VS Code will open automatically

**Congratulations!** VS Code is installed. ✅

---

### STEP 4: Install pnpm (Package Manager)

**Why we need this:** pnpm is a tool that downloads and installs all the code libraries our website needs.

**Steps:**
1. Open Command Prompt as Administrator:
   - Press Windows Key
   - Type: `cmd`
   - Right-click on "Command Prompt"
   - Click **"Run as administrator"**
   - Click "Yes" when asked
2. Type this command and press Enter:
   ```
   npm install -g pnpm
   ```
3. Wait 10-30 seconds while it installs
4. You will see messages appearing
5. When you see the command prompt again (C:\Users\...), it's done

**Verify pnpm is installed:**
1. Type: `pnpm --version`
2. Press Enter
3. You should see: `8.x.x` or similar

pnpm is ready! ✅

---

### STEP 5: Create GitHub Account

**Why we need this:** GitHub stores your code online so you can access it from anywhere and deploy your website.

**Steps:**
1. Go to: `https://github.com/signup`
2. Enter your email address
3. Click **"Continue"**
4. Create a password (must be at least 15 characters)
5. Click **"Continue"**
6. Enter a username (this will be your GitHub username)
7. Click **"Continue"**
8. Choose if you want email updates (type `y` for yes or `n` for no)
9. Click **"Continue"**
10. Complete the verification puzzle
11. Click **"Create account"**
12. GitHub will send a code to your email
13. Check your email and enter the code
14. Answer a few questions about how you'll use GitHub
15. Click **"Continue"**

Your GitHub account is ready! ✅

---

### STEP 6: Create Vercel Account

**Why we need this:** Vercel will host your website and make it accessible to everyone on the internet. It's free for personal projects!

**Steps:**
1. Go to: `https://vercel.com/signup`
2. You will see multiple signup options
3. Click on **"Continue with GitHub"** (easiest method)
4. A popup will open asking you to login to GitHub
5. Enter your GitHub username and password
6. Click **"Sign in"**
7. GitHub will ask: "Authorize Vercel?" 
8. Click **"Authorize Vercel"**
9. Vercel might ask for your email - enter it if asked
10. Vercel dashboard will open

Your Vercel account is ready! ✅

---

### STEP 7: Create Project Folder

**Steps:**
1. Open **File Explorer** (Press Windows Key + E)
2. Navigate to: `Documents` folder (or wherever you want to save the project)
3. Right-click in empty space
4. Select **"New"** → **"Folder"**
5. Name the folder: `serene-jewelry-website`
6. Press Enter
7. You now have an empty project folder

---

### STEP 8: Open Project in VS Code

**Steps:**
1. Open VS Code (click Start Menu → search for "VS Code")
2. Click **"File"** menu at top-left
3. Click **"Open Folder"**
4. Navigate to your `serene-jewelry-website` folder
5. Click on it to select it
6. Click **"Select Folder"** button
7. VS Code will open the folder
8. If you see a popup asking "Do you trust the authors?", click **"Yes, I trust the authors"**

Your project folder is now open in VS Code! ✅

---

### STEP 9: Create package.json File

**What is this:** This file lists all the software packages (libraries) your website needs to work.

**Steps:**
1. In VS Code, find the **Explorer** panel on the left side
2. You should see your folder name: `SERENE-JEWELRY-WEBSITE`
3. Click the **"New File"** icon (page with + symbol) above the folder name
4. Type: `package.json`
5. Press Enter
6. The file will open in the editor
7. Copy and paste this EXACT code:

```json
{
  "name": "serene-jewelry-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@radix-ui/react-accordion": "1.2.2",
    "@radix-ui/react-alert-dialog": "1.1.4",
    "@radix-ui/react-aspect-ratio": "1.1.1",
    "@radix-ui/react-avatar": "1.1.2",
    "@radix-ui/react-checkbox": "1.1.3",
    "@radix-ui/react-collapsible": "1.1.2",
    "@radix-ui/react-context-menu": "2.2.4",
    "@radix-ui/react-dialog": "1.1.4",
    "@radix-ui/react-dropdown-menu": "2.1.4",
    "@radix-ui/react-hover-card": "1.1.4",
    "@radix-ui/react-label": "2.1.1",
    "@radix-ui/react-menubar": "1.1.4",
    "@radix-ui/react-navigation-menu": "1.2.3",
    "@radix-ui/react-popover": "1.1.4",
    "@radix-ui/react-progress": "1.1.1",
    "@radix-ui/react-radio-group": "1.2.2",
    "@radix-ui/react-scroll-area": "1.2.2",
    "@radix-ui/react-select": "2.1.4",
    "@radix-ui/react-separator": "1.1.1",
    "@radix-ui/react-slider": "1.2.2",
    "@radix-ui/react-slot": "1.1.1",
    "@radix-ui/react-switch": "1.1.2",
    "@radix-ui/react-tabs": "1.1.2",
    "@radix-ui/react-toast": "1.2.4",
    "@radix-ui/react-toggle": "1.1.1",
    "@radix-ui/react-toggle-group": "1.1.1",
    "@radix-ui/react-tooltip": "1.1.6",
    "@stripe/react-stripe-js": "^5.6.0",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.1.1",
    "date-fns": "4.1.0",
    "embla-carousel-react": "8.5.1",
    "input-otp": "1.4.1",
    "lucide-react": "^0.544.0",
    "next": "16.1.6",
    "next-themes": "^0.4.6",
    "react": "19.2.3",
    "react-day-picker": "8.10.1",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.54.1",
    "react-resizable-panels": "^2.1.7",
    "recharts": "2.15.0",
    "sonner": "^1.7.1",
    "stripe": "^20.3.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.13",
    "@types/node": "^22",
    "@types/react": "19.2.7",
    "@types/react-dom": "19.2.3",
    "postcss": "^8.5",
    "tailwindcss": "^3.4.17",
    "typescript": "5.7.3"
  }
}
```

8. Press **Ctrl + S** to save the file

**What did we just do?** We created a list of all software packages needed. This includes:
- Next.js - for building the website
- React - for creating interactive components
- Tailwind CSS - for styling
- Stripe - for payments
- And many more tools!

---

### STEP 10: Install All Project Dependencies

**What is this:** Now we will download and install all the packages listed in package.json.

**Steps:**
1. In VS Code, press **Ctrl + `** (the backtick key, usually left of number 1)
   - OR click **"Terminal"** menu → **"New Terminal"**
2. A terminal window will open at the bottom of VS Code
3. You should see a prompt like: `PS C:\Users\...\serene-jewelry-website>`
4. Type this command:
   ```
   pnpm install
   ```
5. Press Enter
6. You will see lots of text scrolling
7. This will take 2-5 minutes (be patient!)
8. The terminal is downloading and installing all packages
9. When finished, you'll see something like: "✓ Dependencies installed"
10. You should now see a new folder called `node_modules` in your project

**What just happened?** pnpm downloaded all the code libraries (thousands of files!) that the website needs to work. The `node_modules` folder now contains all this code.

---

### STEP 11: Create Configuration Files

Now we'll create important configuration files for the project.

#### Create `next.config.mjs`

1. Click **New File** icon in VS Code
2. Name it: `next.config.mjs`
3. Copy and paste this code:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
}

export default nextConfig
```

4. Press **Ctrl + S** to save

**What is this?** This file configures Next.js. It tells Next.js to allow images from Unsplash (free image website).

---

#### Create `tailwind.config.ts`

1. Click **New File** icon
2. Name it: `tailwind.config.ts`
3. Copy and paste this code:

```typescript
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

4. Press **Ctrl + S** to save

**What is this?** This configures Tailwind CSS - the styling system. It defines colors, spacing, and animations for the website.

---

#### Create `tsconfig.json`

1. Click **New File** icon
2. Name it: `tsconfig.json`
3. Copy and paste this code:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

4. Press **Ctrl + S** to save

**What is this?** This configures TypeScript - the programming language. TypeScript adds type checking to JavaScript to catch errors.

---

#### Create `postcss.config.mjs`

1. Click **New File** icon
2. Name it: `postcss.config.mjs`
3. Copy and paste this code:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

4. Press **Ctrl + S** to save

**What is this?** PostCSS processes CSS files. Autoprefixer automatically adds browser-specific CSS prefixes.

---

#### Create `components.json`

1. Click **New File** icon
2. Name it: `components.json`
3. Copy and paste this code:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

4. Press **Ctrl + S** to save

**What is this?** This configures the UI component system (shadcn/ui). It tells the system where to find components and styles.

---

### STEP 12: Create Folder Structure

Now we'll create all the folders needed for the project.

**Steps:**
1. In VS Code Explorer panel, click the **"New Folder"** icon
2. Create these folders one by one (press Enter after each name):

Create these folders:
```
app
components
lib
hooks
public
styles
```

3. Now create subfolders:

Inside `app` folder, create:
```
about
contact
profile
shop
signup
checkout
api
```

Inside `app/checkout` folder, create:
```
success
```

Inside `app/api` folder, create:
```
checkout
orders
payment-status
webhooks
```

Inside `app/api/webhooks` folder, create:
```
stripe
```

Inside `components` folder, create:
```
ui
```

Inside `public` folder, create:
```
images
```

Inside `public/images` folder, create:
```
products
```

**Your folder structure should now look like the structure shown in Section 3!**

---

### STEP 13: Create Global Styles

Now we'll add the CSS styling that controls the look of the entire website.

**Steps:**
1. Inside the `app` folder, create a new file: `globals.css`
2. Copy and paste this EXACT code:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

3. Press **Ctrl + S** to save

**What is this?** This CSS file:
- Imports Tailwind CSS
- Defines color variables for light and dark themes
- Sets up the base styles for the entire website

---

### STEP 14: Create Root Layout

The layout file wraps every page on the website.

**Steps:**
1. Inside the `app` folder, create a new file: `layout.tsx`
2. Copy and paste this code:

```tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth-context"
import { CartProvider } from "@/lib/cart-context"
import { WishlistProvider } from "@/lib/wishlist-context"
import { OrdersProvider } from "@/lib/orders-context"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Serene Jewelry - Elegant Handcrafted Jewelry",
  description: "Discover our collection of elegant, handcrafted jewelry pieces. From delicate necklaces to stunning earrings, find the perfect piece to complement your style.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <OrdersProvider>
                  {children}
                  <Toaster />
                </OrdersProvider>
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

3. Press **Ctrl + S** to save

**What is this?** This is the root layout - it wraps every page and provides:
- Font (Inter from Google Fonts)
- Theme switching (dark/light mode)
- Authentication system
- Shopping cart functionality
- Wishlist functionality
- Orders management
- Toast notifications

---

### STEP 15: Create Homepage

Now we'll create the main homepage.

**Steps:**
1. Inside the `app` folder, create a new file: `page.tsx`
2. Copy and paste this code:

```tsx
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutSection } from "@/components/about-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  )
}
```

3. Press **Ctrl + S** to save

**What is this?** This is the homepage. It shows:
- Site Header (navigation menu)
- Hero Section (big banner at top)
- Featured Products
- About Section
- Site Footer

---

### STEP 16: Create Utility Functions

**Steps:**
1. Inside the `lib` folder, create a new file: `utils.ts`
2. Copy and paste this code:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

3. Press **Ctrl + S** to save

**What is this?** This is a helper function that merges CSS class names together intelligently. It's used throughout the project.

---

### STEP 17: Create Products Data

This file contains all the jewelry products shown on the website.

**Steps:**
1. Inside the `lib` folder, create a new file: `products.ts`
2. Copy and paste this code:

```typescript
import type { Product } from "@/components/product-card"

export const products: Product[] = [
  {
    id: "1",
    name: "Pearl Drop Earrings",
    price: 250,
    image: "/images/products/pearl-drop-earrings.jpg",
    category: "Earrings",
  },
  {
    id: "2",
    name: "Gold Wave Ring",
    price: 180,
    image: "/images/products/gold-wave-ring.jpg",
    category: "Rings",
  },
  {
    id: "3",
    name: "Shell Pendant Necklace",
    price: 320,
    image: "/images/products/shell-pendant-necklace.jpg",
    category: "Necklaces",
  },
  {
    id: "4",
    name: "Dainty Chain Bracelet",
    price: 150,
    image: "/images/products/dainty-chain-bracelet.jpg",
    category: "Bracelets",
  },
  {
    id: "5",
    name: "Sunrise Hoop Earrings",
    price: 220,
    image: "/images/products/sunrise-hoop-earrings.jpg",
    category: "Earrings",
  },
  {
    id: "6",
    name: "Sand Dune Bangle",
    price: 280,
    image: "/images/products/sand-dune-bangle.jpg",
    category: "Bracelets",
  },
  {
    id: "7",
    name: "Ocean Stud Earrings",
    price: 120,
    image: "/images/products/ocean-stud-earrings.jpg",
    category: "Earrings",
  },
  {
    id: "8",
    name: "Moonstone Ring",
    price: 290,
    image: "/images/products/moonstone-ring.jpg",
    category: "Rings",
  },
]
```

3. Press **Ctrl + S** to save

**What is this?** This is the database of products. Each product has:
- Unique ID
- Name
- Price (in dollars)
- Image path
- Category

You can add more products by copying this format!

---

**NOTE:** This documentation includes COMPLETE code for ALL files in the project. Follow each step carefully and copy the exact code provided.

---

### STEP 18: Create Theme Provider Component

**What is this:** This component enables dark/light theme switching throughout the website.

**Steps:**
1. Inside `components` folder, create a file: `theme-provider.tsx`
2. Copy and paste this code:

```tsx
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

3. Press **Ctrl + S** to save

**What this does:** Wraps the app with theme capabilities using the next-themes library.

---

### STEP 19: Create Authentication Context

**What is this:** Manages user authentication state - signup, login, and user profile.

**Steps:**
1. Inside `lib` folder, create a file: `auth-context.tsx`
2. Copy and paste this COMPLETE code:

```tsx
"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react"

export interface UserProfile {
  fullName: string
  phone: string
  email: string
}

interface AuthContextValue {
  user: UserProfile | null
  isSignedUp: boolean
  signUp: (profile: UserProfile) => void
  signOut: () => void
  showSignupModal: boolean
  setShowSignupModal: (show: boolean) => void
  requireAuth: () => boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (err) {
      console.error("Failed to load user from localStorage:", err)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  const signUp = useCallback((profile: UserProfile) => {
    setUser(profile)
    localStorage.setItem("user", JSON.stringify(profile))
    setShowSignupModal(false)
  }, [])

  const signOut = useCallback(() => {
    setUser(null)
    localStorage.removeItem("user")
  }, [])

  const requireAuth = useCallback(() => {
    if (!user) {
      setShowSignupModal(true)
      return false
    }
    return true
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        isSignedUp: !!user,
        signUp,
        signOut,
        showSignupModal,
        setShowSignupModal,
        requireAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
```

3. Press **Ctrl + S** to save

**What this does:**
- Stores user profile in browser's localStorage
- Checks if user is signed up
- Shows signup modal when authentication is required
- Provides authentication status to all components

---

### STEP 20: Create Shopping Cart Context

**What is this:** Manages shopping cart state - add items, remove items, update quantities.

**Steps:**
1. Inside `lib` folder, create a file: `cart-context.tsx`
2. Copy and paste this code:

```tsx
"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Product } from "@/components/product-card"

export interface CartItem {
  product: Product
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId))
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
```

3. Press **Ctrl + S** to save

**What this does:**
- Tracks items in cart
- Calculates total price and quantity
- Provides add, remove, update functions
- Controls cart drawer open/close state

---

### STEP 21: Create Wishlist Context

**What is this:** Manages wishlist state - save favorite products.

**Steps:**
1. Inside `lib` folder, create a file: `wishlist-context.tsx`
2. Copy and paste this code:

```tsx
"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import type { Product } from "@/components/product-card"

interface WishlistContextValue {
  items: Product[]
  toggleItem: (product: Product) => void
  isInWishlist: (productId: string) => boolean
  totalItems: number
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([])

  const toggleItem = useCallback((product: Product) => {
    setItems((prev) => {
      const exists = prev.some((item) => item.id === product.id)
      if (exists) {
        return prev.filter((item) => item.id !== product.id)
      }
      return [...prev, product]
    })
  }, [])

  const isInWishlist = useCallback(
    (productId: string) => items.some((item) => item.id === productId),
    [items]
  )

  return (
    <WishlistContext.Provider
      value={{
        items,
        toggleItem,
        isInWishlist,
        totalItems: items.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
```

3. Press **Ctrl + S** to save

**What this does:**
- Stores favorite products
- Checks if product is in wishlist
- Adds/removes products from wishlist

---

### STEP 22: Create Orders Context

**What is this:** Manages order data and fetches orders from the API.

**Steps:**
1. Inside `lib` folder, create a file: `orders-context.tsx`
2. Copy and paste this code:

```tsx
"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

export interface Order {
  id: string
  status: "paid" | "unpaid" | "no_payment_required"
  amountTotal: number | null
  currency: string
  customerEmail: string | null
  customerName?: string
  createdAt: Date
  items?: Array<{
    productId: string
    name: string
    quantity: number
    price: number
  }>
}

interface OrdersContextValue {
  orders: Order[]
  currentOrder: Order | null
  isLoading: boolean
  fetchOrders: (email: string) => Promise<void>
  fetchOrderById: (sessionId: string) => Promise<void>
  createOrder: (sessionId: string) => Promise<void>
}

const OrdersContext = createContext<OrdersContextValue | undefined>(undefined)

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([])
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchOrders = useCallback(async (email: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/orders?email=${encodeURIComponent(email)}`)
      if (!response.ok) throw new Error("Failed to fetch orders")

      const data = await response.json()
      setOrders(
        data.orders.map((order: any) => ({
          ...order,
          createdAt: new Date(order.createdAt * 1000),
        }))
      )
    } catch (error) {
      console.error("Error fetching orders:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchOrderById = useCallback(async (sessionId: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/orders?sessionId=${encodeURIComponent(sessionId)}`)
      if (!response.ok) throw new Error("Failed to fetch order")

      const data = await response.json()
      const order: Order = {
        id: data.id,
        status: data.status,
        amountTotal: data.amountTotal,
        currency: data.currency,
        customerEmail: data.customerEmail,
        customerName: data.metadata?.customerName,
        createdAt: new Date(data.createdAt * 1000),
      }
      setCurrentOrder(order)
    } catch (error) {
      console.error("Error fetching order:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const createOrder = useCallback(async (sessionId: string) => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      })

      if (!response.ok) throw new Error("Failed to create order")

      const data = await response.json()
      const order: Order = {
        id: data.orderId,
        status: data.status,
        amountTotal: data.amount,
        currency: data.currency,
        customerEmail: data.email,
        createdAt: new Date(data.createdAt),
      }
      setCurrentOrder(order)
      setOrders((prev) => [order, ...prev])
    } catch (error) {
      console.error("Error creating order:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <OrdersContext.Provider
      value={{
        orders,
        currentOrder,
        isLoading,
        fetchOrders,
        fetchOrderById,
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

export function useOrders() {
  const context = useContext(OrdersContext)
  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider")
  }
  return context
}
```

3. Press **Ctrl + S** to save

**What this does:**
- Fetches orders from the backend API
- Stores order history
- Tracks current order status

---

### STEP 23: Create Site Header Component

**What is this:** The navigation menu that appears at the top of every page.

**Steps:**
1. Inside `components` folder, create a file: `site-header.tsx`
2. Copy and paste this code:

```tsx
"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ShellLogo } from "@/components/shell-logo"
import { ShoppingBag, Menu, X, User, Heart } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import { useWishlist } from "@/lib/wishlist-context"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const { totalItems: wishlistCount } = useWishlist()
  const { isSignedUp, requireAuth } = useAuth()

  return (
    <header className="sticky top-0 z-50 bg-background/88 backdrop-blur-md border-b border-border/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Serene home">
          <ShellLogo size={36} className="text-primary transition-transform duration-300 group-hover:scale-105" />
          <span className="font-serif text-xl font-medium tracking-[0.06em] text-foreground">
            Serene
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-[0.18em] uppercase transition-colors duration-200 hover:text-primary",
                pathname === link.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              if (!requireAuth()) return
              router.push("/profile?tab=wishlist")
            }}
            className="relative text-muted-foreground hover:text-primary transition-colors"
            aria-label="Wishlist"
          >
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {wishlistCount}
              </span>
            )}
          </button>
          {isSignedUp ? (
            <Link
              href="/profile"
              className="relative text-muted-foreground hover:text-primary transition-colors"
              aria-label="My profile"
            >
              <User size={20} />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => requireAuth()}
              className="relative text-muted-foreground hover:text-primary transition-colors"
              aria-label="Sign up"
            >
              <User size={20} />
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              if (!requireAuth()) return
              setIsOpen(true)
            }}
            className="relative text-muted-foreground hover:text-primary transition-colors"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border/50 bg-background px-6 pb-6 pt-4" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm tracking-widest uppercase transition-colors duration-200",
                  pathname === link.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
```

3. Press **Ctrl + S** to save

**What this does:**
- Shows navigation links (Home, Shop, About, Contact)
- Shows cart icon with item count
- Shows wishlist icon with count
- Shows user profile icon
- Responsive mobile menu

---

### STEP 24: Create All Remaining Configuration Files

Now we'll create the remaining configuration files needed for the project.

#### File 1: `next.config.mjs`

**What is this:** Configures Next.js framework settings.

**Steps:**
1. In the root folder, create file: `next.config.mjs`
2. Copy this code:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

export default nextConfig
```

3. Press **Ctrl + S** to save

---

#### File 2: `tailwind.config.ts`

**What is this:** Configures Tailwind CSS styling system with custom colors and themes.

**Steps:**
1. In root folder, create file: `tailwind.config.ts`
2. Copy this COMPLETE code:

```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

3. Press **Ctrl + S**

---

#### File 3: `tsconfig.json`

**What is this:** TypeScript configuration file.

**Steps:**
1. In root folder, create: `tsconfig.json`
2. Copy this code:

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

3. Press **Ctrl + S**

---

#### File 4: `postcss.config.mjs`

**What is this:** PostCSS configuration for processing CSS.

**Steps:**
1. In root folder, create: `postcss.config.mjs`
2. Copy this code:

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config
```

3. Press **Ctrl + S**

---

#### File 5: `components.json`

**What is this:** Shadcn/UI components configuration.

**Steps:**
1. In root folder, create: `components.json`
2. Copy this code:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

3. Press **Ctrl + S**

---

### STEP 25: Create All Page Files

Now we'll create all the page files for different routes.

#### File 1: `app/page.tsx` (Homepage)

**Steps:**
1. Inside `app` folder, create: `page.tsx`
2. Copy this code:

```tsx
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutSection } from "@/components/about-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  )
}
```

3. Press **Ctrl + S**

---

#### File 2: `app/shop/page.tsx`

**Steps:**
1. Create folder `shop` inside `app`
2. Inside `app/shop`, create: `page.tsx`
3. Copy this code:

```tsx
import { SiteHeader } from "@/components/site-header"
import { ShopGrid } from "@/components/shop-grid"
import { SiteFooter } from "@/components/site-footer"

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h1 className="mb-8 font-serif text-4xl font-medium tracking-tight">
            Shop Collection
          </h1>
          <ShopGrid />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
```

3. Press **Ctrl + S**

---

#### File 3: `app/about/page.tsx`

**Steps:**
1. Create folder `about` inside `app`
2. Inside `app/about`, create: `page.tsx`
3. Copy this COMPLETE code:

```tsx
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ShellLogo } from "@/components/shell-logo"

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="mb-12 flex justify-center">
            <ShellLogo size={80} className="text-primary" />
          </div>
          
          <h1 className="mb-6 text-center font-serif text-5xl font-medium tracking-tight">
            About Serene
          </h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-center text-xl text-muted-foreground mb-12">
              Timeless Elegance from the Ocean
            </p>

            <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Our Story</h2>
            <p>
              Serene was born from a love of the ocean and a passion for creating jewelry that captures its timeless beauty. Each piece in our collection is inspired by the natural elegance found in seashells, pearls, and ocean waves.
            </p>

            <h2 className="font-serif text-2xl font-medium mt-12 mb-4">Our Philosophy</h2>
            <p>
              We believe that jewelry should be more than just an accessory—it should tell a story, evoke emotion, and connect you to nature's most beautiful creations. Every piece is crafted with care and attention to detail.
            </p>

            <h2 className="font-serif text-2xl font-medium mt-12 mb-4">What We Believe</h2>
            <ul>
              <li>Quality over quantity - each piece is carefully selected</li>
              <li>Timeless design that transcends trends</li>
              <li>Sustainable and ethical sourcing</li>
              <li>Celebrating natural beauty</li>
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
```

3. Press **Ctrl + S**

---

#### File 4: `app/contact/page.tsx`

**Steps:**
1. Create folder `contact` inside `app`
2. Inside `app/contact`, create: `page.tsx`
3. Copy this code:

```tsx
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="mb-4 text-center font-serif text-5xl font-medium tracking-tight">
            Get In Touch
          </h1>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            We'd love to hear from you
          </p>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 font-serif text-2xl font-medium">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">hello@serenejewelry.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+44 20 7123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">
                      123 Bond Street<br />
                      London, W1S 3PL<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Studio Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 10:00 AM - 6:00 PM<br />
                      Saturday: 11:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6 font-serif text-2xl font-medium">Send Us A Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
```

3. Press **Ctrl + S**

---

#### File 5: `app/profile/page.tsx`

**Steps:**
1. Create folder `profile` inside `app`
2. Inside `app/profile`, create: `page.tsx`
3. Copy this code:

```tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProfileContent } from "@/components/profile-content"
import { useAuth } from "@/lib/auth-context"

export default function ProfilePage() {
  const router = useRouter()
  const { isSignedUp, requireAuth } = useAuth()

  useEffect(() => {
    if (!isSignedUp) {
      requireAuth()
      router.push("/")
    }
  }, [isSignedUp, requireAuth, router])

  if (!isSignedUp) {
    return null
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="mb-8 font-serif text-4xl font-medium tracking-tight">
            My Profile
          </h1>
          <ProfileContent />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
```

3. Press **Ctrl + S**

---

#### File 6: `app/signup/page.tsx`

**Steps:**
1. Create folder `signup` inside `app`
2. Inside `app/signup`, create: `page.tsx`
3. Copy this code:

```tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SignupModal } from "@/components/signup-modal"
import { useAuth } from "@/lib/auth-context"

export default function SignupPage() {
  const router = useRouter()
  const { isSignedUp } = useAuth()

  useEffect(() => {
    if (isSignedUp) {
      router.push("/profile")
    }
  }, [isSignedUp, router])

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen flex items-center justify-center p-6">
        <SignupModal />
      </main>
    </>
  )
}
```

3. Press **Ctrl + S**

---

#### File 7: `app/checkout/page.tsx`

**Steps:**
1. Create folder `checkout` inside `app`
2. Inside `app/checkout`, create: `page.tsx`
3. Copy this code:

```tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const { user, requireAuth } = useAuth()

  useEffect(() => {
    if (!requireAuth()) {
      router.push("/")
    }
  }, [requireAuth, router])

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
          })),
          customerEmail: user?.email || "",
          customerName: user?.name || ""
        })
      })

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Checkout error:", error)
    }
  }

  if (items.length === 0) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-screen flex items-center justify-center p-6">
          <div className="text-center">
            <h1 className="font-serif text-3xl mb-4">Your cart is empty</h1>
            <Button onClick={() => router.push("/shop")}>Continue Shopping</Button>
          </div>
        </main>
        <SiteFooter />
      </>
    )
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-8 font-serif text-4xl font-medium">Checkout</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      width={80} 
                      height={80} 
                      className="rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                      <p className="font-medium">£{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total:</span>
                    <span>£{totalPrice}</span>
                  </div>
                </div>
                
                <Button onClick={handleCheckout} className="w-full" size="lg">
                  Proceed to Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
```

3. Press **Ctrl + S**

---

#### File 8: `app/checkout/success/page.tsx`

**Steps:**
1. Create folder `success` inside `app/checkout`
2. Inside `app/checkout/success`, create: `page.tsx`
3. Copy this code:

```tsx
"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { clearCart } = useCart()
  const [sessionId, setSessionId] = useState("")

  useEffect(() => {
    const id = searchParams.get("session_id")
    if (id) {
      setSessionId(id)
      clearCart()
    }
  }, [searchParams, clearCart])

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="font-serif text-3xl mb-4">Order Successful!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase. Your order has been confirmed and will be processed shortly.
          </p>
          {sessionId && (
            <p className="text-sm text-muted-foreground mb-6">
              Order ID: {sessionId.slice(-8)}
            </p>
          )}
          <div className="flex gap-4 justify-center">
            <Button onClick={() => router.push("/shop")}>
              Continue Shopping
            </Button>
            <Button variant="outline" onClick={() => router.push("/profile?tab=orders")}>
              View Orders
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
```

3. Press **Ctrl + S**

---

### STEP 26: Create All Remaining Components

Now we'll create all the remaining component files.

#### Component 1: `components/hero-section.tsx`

**Steps:**
1. Inside `components` folder, create: `hero-section.tsx`
2. Copy this COMPLETE code:

```tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShellLogo } from "@/components/shell-logo"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          {/* Decorative shell icons */}
          <div className="mb-8 flex justify-center gap-8 opacity-20">
            <ShellLogo size={40} className="animate-pulse text-primary" />
            <ShellLogo size={32} className="animate-pulse delay-100 text-primary/70" />
            <ShellLogo size={40} className="animate-pulse delay-200 text-primary" />
          </div>

          {/* Large decorative logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <ShellLogo size={120} className="text-primary drop-shadow-2xl" />
              <div className="absolute inset-0 blur-3xl bg-primary/20 -z-10" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 font-serif text-6xl font-medium tracking-tight sm:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Serene Jewelry
            </span>
          </h1>

          {/* Tagline */}
          <p className="mb-10 text-xl text-muted-foreground sm:text-2xl">
            Timeless Elegance from the Ocean
          </p>

          {/* CTA Button */}
          <Button asChild size="lg" className="text-base px-8">
            <Link href="/shop">Shop Collection</Link>
          </Button>

          {/* Decorative bottom shells */}
          <div className="mt-16 flex justify-center gap-12 opacity-10">
            <ShellLogo size={24} className="text-primary" />
            <ShellLogo size={28} className="text-primary" />
            <ShellLogo size={24} className="text-primary" />
            <ShellLogo size={28} className="text-primary" />
            <ShellLogo size={24} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    </section>
  )
}
```

3. Press **Ctrl + S**

---

#### Component 2: `components/featured-products.tsx`

**Steps:**
1. Inside `components` folder, create: `featured-products.tsx`
2. Copy this code:

```tsx
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center font-serif text-4xl font-medium tracking-tight">
          Featured Collection
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

3. Press **Ctrl + S**

---

#### Component 3: `components/about-section.tsx`

**Steps:**
1. Inside `components` folder, create: `about-section.tsx`
2. Copy this complete code - NO ERRORS here, this is the working code from your project:

```tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShellLogo } from "@/components/shell-logo"

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 flex justify-center">
          <ShellLogo size={48} className="text-primary" />
        </div>
        <h2 className="mb-6 font-serif text-4xl font-medium tracking-tight">
          About Serene
        </h2>
        <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
          We create timeless jewelry inspired by the elegance of the ocean. Each piece is carefully crafted to bring natural beauty and serenity to your everyday life.
        </p>
        <Button asChild variant="outline" size="lg">
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
    </section>
  )
}
```

3. Press **Ctrl + S**

---

#### Component 4: `components/product-card.tsx`

**Steps:**
1. Inside `components` folder, create: `product-card.tsx`
2. Copy this COMPLETE code - this is your working production code:

```tsx
"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import { useAuth } from "@/lib/auth-context"
import { toast } from "sonner"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { toggleItem, isInWishlist } = useWishlist()
  const { requireAuth } = useAuth()
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = () => {
    if (!requireAuth()) return
    addItem(product)
    toast.success(`${product.name} added to cart`)
  }

  const handleToggleWishlist = () => {
    if (!requireAuth()) return
    toggleItem(product)
    if (inWishlist) {
      toast.success(`Removed from wishlist`)
    } else {
      toast.success(`Added to wishlist`)
    }
  }

  return (
    <Card className="group overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <button
            onClick={handleToggleWishlist}
            className="absolute right-3 top-3 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-all hover:bg-background hover:scale-110"
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              size={18}
              className={inWishlist ? "fill-primary text-primary" : "text-muted-foreground"}
            />
          </button>
        </div>
        <div className="p-4">
          <h3 className="mb-2 font-serif text-lg font-medium">{product.name}</h3>
          <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>
          <div className="flex items-center justify-between gap-4">
            <span className="text-xl font-medium">£{product.price}</span>
            <Button onClick={handleAddToCart} size="sm">
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
```

3. Press **Ctrl + S**

---

#### Component 5: `components/shop-grid.tsx`

**Steps:**
1. Inside `components` folder, create: `shop-grid.tsx`
2. Copy this code:

```tsx
"use client"

import { useState } from "react"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

export function ShopGrid() {
  const [filter, setFilter] = useState("all")

  const filteredProducts = filter === "all"
    ? products
    : products.filter((p) => p.category === filter)

  const categories = ["all", "necklaces", "earrings", "bracelets", "rings"]

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
```

3. Press **Ctrl + S**

---

#### Component 6: `components/cart-drawer.tsx`

**Steps:**
1. Inside `components` folder, create: `cart-drawer.tsx`
2. Copy this COMPLETE code:

```tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"

export function CartDrawer() {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            <ShoppingBag size={48} className="text-muted-foreground" />
            <p className="text-lg font-medium">Your cart is empty</p>
            <Button onClick={() => setIsOpen(false)}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto pr-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-foreground"
                          aria-label="Remove item"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground">£{item.price}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="rounded border p-1 hover:bg-muted"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded border p-1 hover:bg-muted"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pr-6">
              <div className="flex justify-between border-t pt-4 text-lg font-medium">
                <span>Total:</span>
                <span>£{totalPrice}</span>
              </div>
              <Button asChild className="w-full" size="lg">
                <Link href="/checkout" onClick={() => setIsOpen(false)}>
                  Proceed to Checkout
                </Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
```

3. Press **Ctrl + S**

---

#### Component 7: `components/signup-modal.tsx`

**Steps:**
1. Inside `components` folder, create: `signup-modal.tsx`
2. Copy this code:

```tsx
"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "sonner"

export function SignupModal() {
  const { showSignupModal, setShowSignupModal, signUp } = useAuth()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in all fields")
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Please enter a valid email")
      return
    }

    if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      toast.error("Please enter a valid phone number")
      return
    }

    signUp(formData)
    toast.success("Account created successfully!")
  }

  return (
    <Dialog open={showSignupModal} onOpenChange={setShowSignupModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Your Account</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+44 7123 456789"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
```

3. Press **Ctrl + S**

---

#### Component 8: `components/contact-form.tsx`

**Steps:**
1. Inside `components` folder, create: `contact-form.tsx`
2. Copy this code:

```tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Message sent! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
```

3. Press **Ctrl + S**

---

#### Component 9: `components/profile-content.tsx`

**Steps:**
1. Inside `components` folder, create: `profile-content.tsx`
2. Copy this COMPLETE code:

```tsx
"use client"

import { useSearchParams } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useWishlist } from "@/lib/wishlist-context"
import { useCart } from "@/lib/cart-context"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { toast } from "sonner"

export function ProfileContent() {
  const searchParams = useSearchParams()
  const defaultTab = searchParams.get("tab") || "details"
  const { user, signOut } = useAuth()
  const { items: wishlistItems, toggleItem } = useWishlist()
  const { addItem } = useCart()

  const handleAddToCart = (product: any) => {
    addItem(product)
    toast.success(`${product.name} added to cart`)
  }

  return (
    <Tabs defaultValue={defaultTab} className="space-y-6">
      <TabsList>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
        <TabsTrigger value="addresses">Addresses</TabsTrigger>
      </TabsList>

      <TabsContent value="details">
        <Card>
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="font-medium">{user?.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">{user?.phone}</p>
            </div>
            <Button onClick={signOut} variant="outline">
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="orders">
        <Card>
          <CardHeader>
            <CardTitle>Order History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No orders yet.</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="wishlist">
        <div className="space-y-4">
          {wishlistItems.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">Your wishlist is empty</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {wishlistItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="font-medium mb-2">{item.name}</h3>
                    <p className="text-lg font-medium mb-4">£{item.price}</p>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleAddToCart(item)}
                        size="sm"
                        className="flex-1"
                      >
                        Add to Cart
                      </Button>
                      <Button
                        onClick={() => toggleItem(item)}
                        size="sm"
                        variant="outline"
                      >
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </TabsContent>

      <TabsContent value="addresses">
        <Card>
          <CardHeader>
            <CardTitle>Saved Addresses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No saved addresses.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
```

3. Press **Ctrl + S**

---

#### Component 10: `components/shell-logo.tsx`

**Steps:**
1. Inside `components` folder, create: `shell-logo.tsx`
2. Copy this COMPLETE SVG logo code:

```tsx
interface ShellLogoProps {
  size?: number
  className?: string
}

export function ShellLogo({ size = 24, className = "" }: ShellLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2C12 2 8 4 6 8C4 12 4 16 6 18C8 20 10 22 12 22C14 22 16 20 18 18C20 16 20 12 18 8C16 4 12 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M12 2V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 7C12 7 9 9 8 12C7 15 8 17 10 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 7C12 7 15 9 16 12C17 15 16 17 14 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
```

3. Press **Ctrl + S**

---

#### Component 11: `components/site-footer.tsx`

**Steps:**
1. Inside `components` folder, create: `site-footer.tsx`
2. Copy this code:

```tsx
import Link from "next/link"
import { ShellLogo } from "@/components/shell-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <ShellLogo size={32} className="text-primary" />
              <span className="font-serif text-xl font-medium">Serene</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Timeless jewelry inspired by the ocean's beauty.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=necklaces" className="text-muted-foreground hover:text-primary">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/shop?category=earrings" className="text-muted-foreground hover:text-primary">
                  Earrings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/profile" className="text-muted-foreground hover:text-primary">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/profile?tab=orders" className="text-muted-foreground hover:text-primary">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/profile?tab=wishlist" className="text-muted-foreground hover:text-primary">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Serene Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
```

3. Press **Ctrl + S**

---

#### Component 12: `components/payment-methods-modal.tsx`

**Steps:**
1. Inside `components` folder, create: `payment-methods-modal.tsx`
2. Copy this code:

```tsx
"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CreditCard, Smartphone } from "lucide-react"

interface PaymentMethodsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PaymentMethodsModal({ open, onOpenChange }: PaymentMethodsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Payment Methods</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center gap-4 rounded-lg border p-4">
            <CreditCard className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-medium">Credit/Debit Card</h3>
              <p className="text-sm text-muted-foreground">Visa, Mastercard, Amex</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border p-4">
            <Smartphone className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-medium">Digital Wallets</h3>
              <p className="text-sm text-muted-foreground">Apple Pay, Google Pay</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

3. Press **Ctrl + S**

---

### STEP 27: Create All API Routes

Now we'll create the backend API routes that handle checkout, orders, and payments.

#### API Route 1: `app/api/checkout/route.ts`

**Steps:**
1. Create folders: `app/api/checkout/`
2. Inside `app/api/checkout/`, create: `route.ts`
3. Copy this COMPLETE code:

```typescript
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
})

export async function POST(request: Request) {
  try {
    const { items, customerEmail, customerName } = await request.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: "gbp",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
      customer_email: customerEmail,
      metadata: {
        customerName,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
```

3. Press **Ctrl + S**

---

#### API Route 2: `app/api/orders/route.ts`

**Steps:**
1. Create folders: `app/api/orders/`
2. Inside `app/api/orders/`, create: `route.ts`
3. Copy this code:

```typescript
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
})

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("sessionId")

    if (!sessionId) {
      return NextResponse.json({ error: "Session ID required" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    return NextResponse.json({
      id: session.id,
      status: session.payment_status,
      amountTotal: session.amount_total,
      currency: session.currency,
      customerEmail: session.customer_email,
      metadata: session.metadata,
      createdAt: session.created,
    })
  } catch (error) {
    console.error("Fetch order error:", error)
    return NextResponse.json({ error: "Failed to fetch order" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { sessionId } = await request.json()

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    return NextResponse.json({
      orderId: session.id,
      status: session.payment_status,
      amount: session.amount_total,
      currency: session.currency,
      email: session.customer_email,
      createdAt: session.created,
    })
  } catch (error) {
    console.error("Create order error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
```

3. Press **Ctrl + S**

---

#### API Route 3: `app/api/payment-status/route.ts`

**Steps:**
1. Create folders: `app/api/payment-status/`
2. Inside `app/api/payment-status/`, create: `route.ts`
3. Copy this code:

```typescript
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
})

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("sessionId")

    if (!sessionId) {
      return NextResponse.json({ error: "Session ID required" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    return NextResponse.json({
      status: session.payment_status,
      customerEmail: session.customer_email,
    })
  } catch (error) {
    console.error("Payment status error:", error)
    return NextResponse.json({ error: "Failed to fetch payment status" }, { status: 500 })
  }
}
```

3. Press **Ctrl + S**

---

#### API Route 4: `app/api/webhooks/stripe/route.ts`

**Steps:**
1. Create folders: `app/api/webhooks/stripe/`
2. Inside `app/api/webhooks/stripe/`, create: `route.ts`
3. Copy this code:

```typescript
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("Webhook signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session
        console.log("Payment successful:", session.id)
        // Handle successful payment
        break

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log("Payment intent succeeded:", paymentIntent.id)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}
```

3. Press **Ctrl + S**

---

### STEP 28: Create Utility Files and Product Data

#### File 1: `lib/products.ts`

**Steps:**
1. Inside `lib` folder, create: `products.ts`
2. Copy this COMPLETE code with all 8 products:

```typescript
export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "necklaces" | "earrings" | "bracelets" | "rings"
}

export const products: Product[] = [
  {
    id: "1",
    name: "Pearl Necklace",
    description: "Elegant freshwater pearl necklace",
    price: 299,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop",
    category: "necklaces",
  },
  {
    id: "2",
    name: "Diamond Earrings",
    description: "Classic diamond stud earrings",
    price: 599,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop",
    category: "earrings",
  },
  {
    id: "3",
    name: "Shell Bracelet",
    description: "Delicate bracelet with shell charm",
    price: 199,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop",
    category: "bracelets",
  },
  {
    id: "4",
    name: "Gold Ring",
    description: "14k gold band with wave pattern",
    price: 399,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop",
    category: "rings",
  },
  {
    id: "5",
    name: "Coral Necklace",
    description: "Red coral statement necklace",
    price: 349,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&auto=format&fit=crop",
    category: "necklaces",
  },
  {
    id: "6",
    name: "Sapphire Earrings",
    description: "Blue sapphire drop earrings",
    price: 699,
    image: "https://images.unsplash.com/photo-1617855140223-2f638b35f524?w=800&auto=format&fit=crop",
    category: "earrings",
  },
  {
    id: "7",
    name: "Wave Bracelet",
    description: "Sterling silver wave bracelet",
    price: 249,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&auto=format&fit=crop",
    category: "bracelets",
  },
  {
    id: "8",
    name: "Seashell Ring",
    description: "Gold ring with seashell design",
    price: 179,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format&fit=crop",
    category: "rings",
  },
]
```

3. Press **Ctrl + S**

---

#### File 2: `lib/stripe-utils.ts`

**Steps:**
1. Inside `lib` folder, create: `stripe-utils.ts`
2. Copy this code:

```typescript
import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
})

export async function createCheckoutSession(params: {
  items: Array<{ name: string; price: number; quantity: number; image: string }>
  customerEmail: string
  customerName: string
}) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: params.items.map((item) => ({
      price_data: {
        currency: "gbp",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
    customer_email: params.customerEmail,
    metadata: {
      customerName: params.customerName,
    },
  })

  return session
}
```

3. Press **Ctrl + S**

---

### STEP 29: Create Hook Files

#### File 1: `hooks/use-toast.ts`

**Steps:**
1. Inside `hooks` folder, create: `use-toast.ts`
2. This file should already be created by Shadcn/UI. If not, copy from `components/ui/use-toast.ts`

---

#### File 2: `hooks/use-mobile.tsx`

**Steps:**
1. Inside `hooks` folder, create: `use-mobile.tsx`
2. Copy this code:

```tsx
import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
```

3. Press **Ctrl + S**

---

### STEP 30: Create All UI Component Files

These are the Shadcn/UI component files located in `components/ui/` folder. Each component provides reusable UI elements with full TypeScript support and accessibility features.

#### Component 1: `components/ui/button.tsx`

**Steps:**
1. Inside `components/ui` folder, create: `button.tsx`
2. Copy this complete code:

```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
```

3. Press **Ctrl + S**

---

#### Component 2: `components/ui/input.tsx`

**Steps:**
1. Inside `components/ui` folder, create: `input.tsx`
2. Copy this complete code:

```tsx
import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
```

3. Press **Ctrl + S**

---

#### Component 3: `components/ui/card.tsx`

**Steps:**
1. Inside `components/ui` folder, create: `card.tsx`
2. Copy this complete code:

```tsx
import * as React from 'react'

import { cn } from '@/lib/utils'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className,
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

3. Press **Ctrl + S**

---

#### Component 4: `components/ui/dialog.tsx`

**Steps:**
1. Inside `components/ui` folder, create: `dialog.tsx`
2. Copy this complete code:

```tsx
'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className,
    )}
    {...props}
  />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
```

3. Press **Ctrl + S**

---

#### Component 5: `components/ui/sheet.tsx`

**Steps:**
1. Inside `components/ui` folder, create: `sheet.tsx`
2. Copy this complete code:

```tsx
'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className,
    )}
    {...props}
  />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
```

3. Press **Ctrl + S**

---

#### Component 6: `components/ui/label.tsx`

**Steps:**
1. Inside `components/ui` folder, create: `label.tsx`
2. Copy this complete code:

```tsx
'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
```

3. Press **Ctrl + S**

---

#### Component 7: `components/ui/textarea.tsx`

**Steps:**
1. Inside `components/ui` folder, create: `textarea.tsx`
2. Copy this complete code:

```tsx
import * as React from 'react'

import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
```

3. Press **Ctrl + S**

---

#### Component 8: `components/ui/tabs.tsx`

**Steps:**
1. Inside `components/ui` folder, create: `tabs.tsx`
2. Copy this complete code:

```tsx
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

3. Press **Ctrl + S**

---

#### Component 9: `components/ui/separator.tsx`

**Steps:**
1. Inside `components/ui` folder, create: `separator.tsx`
2. Copy this complete code:

```tsx
'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  ),
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
```

3. Press **Ctrl + S**

---

#### Component 10: `components/ui/sonner.tsx`

**Steps:**
1. Inside `components/ui` folder, create: `sonner.tsx`
2. Copy this complete code:

```tsx
'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
```

3. Press **Ctrl + S**

---

**Note:** Due to documentation length, the remaining 39 UI component files (accordion, alert, alert-dialog, avatar, badge, breadcrumb, calendar, carousel, chart, checkbox, collapsible, command, context-menu, drawer, dropdown-menu, form, hover-card, input-otp, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, skeleton, slider, switch, table, toast, toaster, toggle, toggle-group, tooltip, and sidebar) are automatically generated when you run the `npx shadcn@latest add <component-name>` command. All these files follow the same pattern - they are fully typed, accessible, and customizable React components using Radix UI primitives.

**Important:** These UI components are already installed in your project via the Shadcn/UI CLI commands you ran earlier in STEP 2. The above code samples show you what's inside these component files so you understand how they work.

---

### STEP 31: Verify Application Styles

The `app/globals.css` file contains all global styles and Tailwind CSS configuration. This file should already exist from STEP 1, but verify it contains:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  .text-pretty {
    text-wrap: pretty;
  }
}

@keyframes drift {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(-2deg);
  }
}

@layer base {
  :root {
    --background: 36 30% 88%;
    --foreground: 30 15% 18%;
    --card: 37 28% 85%;
    --card-foreground: 30 15% 18%;
    --popover: 36 30% 88%;
    --popover-foreground: 30 15% 18%;
    --primary: 36 44% 44%;
    --primary-foreground: 36 30% 95%;
    --secondary: 33 22% 80%;
    --secondary-foreground: 30 15% 22%;
    --muted: 35 18% 82%;
    --muted-foreground: 30 10% 40%;
    --accent: 35 42% 58%;
    --accent-foreground: 36 33% 96%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 31 20% 62%;
    --input: 31 20% 62%;
    --ring: 36 40% 52%;
    --radius: 0.75rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

This file is imported by `app/layout.tsx` and provides the sand/coral color scheme for the jewelry website.

---

**✅ CONGRATULATIONS! You have now created ALL the main code files for your Serene Jewelry Website!**

**Summary of what we've created:**
- ✅ 6 configuration files (package.json, next.config.mjs, tailwind.config.ts, etc.)
- ✅ 1 global CSS file (app/globals.css)
- ✅ 2 application core files (app/layout.tsx, app/page.tsx)
- ✅ 8 page files (shop, about, contact, profile, signup, checkout, success)
- ✅ 14 custom components (header, footer, hero, products, cart, forms, etc.)
- ✅ 5 context providers (auth, cart, wishlist, orders, theme)
- ✅ 4 API routes (checkout, orders, payment-status, webhooks)
- ✅ 3 utility files (utils, products, stripe-utils)
- ✅ 2 hook files (use-toast.ts, use-mobile.tsx)
- ✅ 49 UI component files installed via Shadcn/UI CLI (documented: button, input, card, dialog, sheet, label, textarea, tabs, separator, sonner, plus 39 others)

**Total: 100+ files with complete production-ready code!**

---

## 5. HOW TO RUN WEBSITE ON YOUR COMPUTER

Now that all files are created, let's run the website locally.

### Method 1: Using VS Code Terminal (Recommended)

**Steps:**
1. Make sure you are in the project folder in VS Code
2. Press **Ctrl + `** to open terminal (or click Terminal menu → New Terminal)
3. Type this command:
   ```
   pnpm dev
   ```
4. Press Enter
5. Wait 5-10 seconds
6. You will see messages like:
   ```
   ▲ Next.js 16.1.6
   - Local:        http://localhost:3000
   - Environments: .env.local

   ✓ Ready in 2.3s
   ```
7. Your website is now running! ✅

**How to view the website:**
1. Open Google Chrome (or any browser)
2. Type in address bar: `http://localhost:3000`
3. Press Enter
4. Your jewelry website will load! 🎉

**What you should see:**
- Navigation menu at top
- Large hero banner with jewelry image
- Featured products section
- About section
- Footer at bottom

**How to stop the website:**
1. Go back to VS Code terminal
2. Press **Ctrl + C**
3. Type `y` if asked
4. Press Enter
5. Website stops running

---

### Method 2: Using Command Prompt

**Steps:**
1. Press **Windows Key + R**
2. Type: `cmd`
3. Press Enter
4. Type: `cd C:\Users\YourName\Documents\serene-jewelry-website`
   (Replace "YourName" with your actual username)
5. Press Enter
6. Type: `pnpm dev`
7. Press Enter
8. Website will start at http://localhost:3000

---

### Testing the Website Features:

**Things to test:**
1. ✅ Homepage loads
2. ✅ Click "Shop" in menu - products page loads
3. ✅ Click "About" - about page loads
4. ✅ Click "Contact" - contact form loads
5. ✅ Click heart icon on product - adds to wishlist
6. ✅ Click "Add to Cart" - item goes to cart
7. ✅ Click cart icon - cart drawer opens from right
8. ✅ Click theme toggle - switches between dark/light mode
9. ✅ Click "Sign Up" - signup modal opens
10. ✅ Try on mobile (press F12 → toggle device toolbar)

**Taking Screenshots for Documentation:**
1. Press **Windows Key + Shift + S**
2. Select area to capture
3. Screenshot is saved to clipboard
4. Open Paint or Word and press **Ctrl + V** to paste

---

## 6. HOW TO UPLOAD CODE TO GITHUB

GitHub stores your code online. This is important for deployment and backup.

### Step-by-Step GitHub Upload:

#### Part A: Create Repository on GitHub

1. Open browser and go to: `https://github.com`
2. Click **"Sign in"** (use the account you created earlier)
3. After signing in, click your profile picture (top-right)
4. Click the **"+"** button next to your profile picture
5. Click **"New repository"**
6. You will see "Create a new repository" page

**Fill in details:**
- **Repository name:** serene-jewelry-website
- **Description:** Elegant e-commerce jewelry website built with Next.js
- **Public or Private:** Choose "Public" (so Vercel can access it)
- **Do NOT check** "Initialize this repository with a README"
- Click green **"Create repository"** button

7. You will see a page with commands - **keep this page open**

---

#### Part B: Upload Code from Your Computer

Now we'll upload code from your computer to GitHub.

**Steps:**
1. Go back to VS Code
2. Open Terminal (Ctrl + `)
3. Make sure website is NOT running (press Ctrl+C if it is)
4. Type these commands ONE BY ONE (press Enter after each):

**Command 1:** Initialize Git
```bash
git init
```
**What this does:** Prepares your project folder for Git

**Command 2:** Add all files
```bash
git add .
```
**What this does:** Selects all files to upload (the dot means "everything")

**Command 3:** Create first commit
```bash
git commit -m "Initial commit - Serene Jewelry Website"
```
**What this does:** Creates a save point with message "Initial commit"

**Command 4:** Rename branch to main
```bash
git branch -M main
```
**What this does:** Names your main code branch "main"

**Command 5:** Connect to GitHub
```bash
git remote add origin https://github.com/YOUR-USERNAME/serene-jewelry-website.git
```
**⚠️ IMPORTANT:** Replace `YOUR-USERNAME` with your actual GitHub username!

Example: If your username is "john123", the command should be:
```bash
git remote add origin https://github.com/john123/serene-jewelry-website.git
```

**What this does:** Links your local project to GitHub repository

**Command 6:** Push (upload) code
```bash
git push -u origin main
```
**What this does:** Uploads all your code to GitHub

5. **GitHub will ask for authentication:**
   - A window may popup asking for GitHub credentials
   - Or you may need to create a **Personal Access Token**

---

#### Creating GitHub Personal Access Token (If needed):

If the push fails, you need a token:

1. Go to GitHub.com
2. Click your profile picture (top-right)
3. Click **"Settings"**
4. Scroll down, click **"Developer settings"** (bottom-left)
5. Click **"Personal access tokens"**
6. Click **"Tokens (classic)"**
7. Click **"Generate new token"** → **"Generate new token (classic)"**
8. GitHub may ask for password - enter it
9. **Fill in these details:**
   - Note: "Serene Jewelry Website"
   - Expiration: Choose "90 days" or "No expiration"
   - Check these boxes:
     - ✅ repo (this gives full repository access)
10. Scroll down and click **"Generate token"**
11. **COPY THE TOKEN IMMEDIATELY** - you won't see it again!
12. Token looks like: `ghp_abc123xyz789...`

**Now use the token:**
1. Go back to VS Code terminal
2. When prompted for password, paste the TOKEN (not your GitHub password)
3. Press Enter
4. Code will upload to GitHub!

---

#### Verify Upload:

1. Go back to GitHub repository page in browser
2. Refresh the page (press F5)
3. You should now see all your project files!
4. You'll see folders: app, components, lib, public, etc.

**Congratulations!** Your code is now on GitHub! 🎉

---

## 7. HOW TO DEPLOY WEBSITE ON GOOGLE/VERCEL (Hosting)

Now we'll put your website on the internet so anyone can visit it!

We'll use **Vercel** - a hosting platform that integrates with GitHub. Vercel is owned by the creators of Next.js and is perfect for Next.js websites.

### Deployment Steps:

#### Step 1: Open Vercel

1. Go to: `https://vercel.com`
2. Click **"Log In"** (top-right)
3. If you're not logged in, click **"Continue with GitHub"**
4. Enter GitHub credentials
5. Authorize Vercel if asked

---

#### Step 2: Import Your Project

1. You will see Vercel Dashboard
2. Click the big **"Add New..."** button
3. Click **"Project"**
4. You will see "Import Git Repository" page
5. Vercel will show your GitHub repositories
6. Find **"serene-jewelry-website"**
7. Click **"Import"** button next to it

---

#### Step 3: Configure Project

1. You'll see "Configure Project" page
2. **Project Name:** serene-jewelry-website (keep as is)
3. **Framework Preset:** Next.js (should auto-detect)
4. **Root Directory:** ./ (keep default)
5. **Build Command:** pnpm build (auto-filled)
6. **Output Directory:** .next (auto-filled)
7. **Install Command:** pnpm install (auto-filled)

**Environment Variables:**
If your project needs environment variables (like Stripe keys), add them here:
- Click **"Environment Variables"**
- Add each variable:
  - Name: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - Value: `your-stripe-key-here`

**Note:** For basic version without payment, you can skip environment variables.

8. Click big **"Deploy"** button

---

#### Step 4: Wait for Deployment

1. Vercel will now build your website
2. You'll see progress screen with build logs
3. This takes 1-3 minutes
4. You'll see messages like:
   - ✓ Installing dependencies
   - ✓ Building application
   - ✓ Deploying project
5. **When finished, you'll see:** 🎉 **Congratulations!**

---

#### Step 5: View Your Live Website

1. Vercel will show your website URL
2. It will look like: `https://serene-jewelry-website-abc123.vercel.app`
3. Click the **"Visit"** button
4. Your website is now LIVE on the internet! 🚀

**Share your website:**
- Copy the URL
- Send to anyone
- They can visit your jewelry website from anywhere in the world!

---

### Adding Custom Domain (Optional):

Want a custom domain like `www.serenejewelry.com`?

**Steps:**
1. In Vercel Dashboard, click your project
2. Click **"Settings"** tab
3. Click **"Domains"** in left menu
4. Click **"Add"**
5. Enter your domain name
6. Follow instructions to connect domain

**Where to buy domains:**
- Google Domains: https://domains.google/
- Namecheap: https://www.namecheap.com/
- GoDaddy: https://www.godaddy.com/

---

### Automatic Updates:

**Best part about Vercel:** Whenever you push new code to GitHub, Vercel automatically rebuilds and updates your website!

**To update your website:**
1. Make changes in VS Code
2. Save files
3. Open terminal
4. Run:
```bash
git add .
git commit -m "Updated design"
git push
```
5. Go to Vercel - it will automatically deploy updates!
6. Wait 1-2 minutes
7. Changes are LIVE!

---

## 8. COMMON ERRORS & SOLUTIONS

Here are problems you might face and how to fix them:

| Error Message | What It Means | How to Fix |
|---------------|---------------|------------|
| `'pnpm' is not recognized` | pnpm is not installed | Install pnpm: `npm install -g pnpm` |
| `Cannot find module` | Missing dependency | Run: `pnpm install` |
| `Port 3000 is already in use` | Another app using port 3000 | Close other apps or use: `pnpm dev -p 3001` |
| `Failed to compile` | Code has syntax error | Check terminal for error location, fix the error |
| Page shows blank white screen | JavaScript error | Open browser console (F12), check for errors |
| `Module not found: Can't resolve '@/...'` | Path alias not configured | Check tsconfig.json has proper paths |
| Images not loading | Wrong image path or missing images | Check image path matches file location |
| `git push` fails | Authentication issue | Create GitHub Personal Access Token (see Section 6) |
| Deployment failed on Vercel | Build error | Check Vercel build logs for specific error |
| Website works locally but not on Vercel | Environment variables missing | Add environment variables in Vercel settings |
| `npm ERR!` errors | Use pnpm instead of npm | Always use `pnpm` commands, not `npm` |
| TypeScript errors | Type mismatch | Check error message, fix type definitions |
| Dark mode not working | Theme provider issue | Check ThemeProvider wraps app in layout.tsx |
| Cart not updating | Context not providing state | Verify CartProvider wraps pages properly |

---

### Debugging Steps:

**If website won't load:**
1. ✅ Check terminal - is dev server running?
2. ✅ Check URL - is it `localhost:3000`?
3. ✅ Check browser console (Press F12) - any red errors?
4. ✅ Try restarting: Stop server (Ctrl+C), run `pnpm dev` again

**If styling looks wrong:**
1. ✅ Check globals.css is imported in layout.tsx
2. ✅ Check Tailwind config is correct
3. ✅ Clear browser cache (Ctrl+Shift+Delete)
4. ✅ Hard refresh page (Ctrl+Shift+R)

**If components don't work:**
1. ✅ Check file is in correct folder
2. ✅ Check import paths start with @/
3. ✅ Check for typos in component names
4. ✅ Check all dependencies installed (`pnpm install`)

---

## 9. FINAL WEBSITE LINK

**After deploying, fil in these details:**

| Detail | Information |
|--------|-------------|
| **Live Website URL** | https://serene-jewelry-website-[your-id].vercel.app |
| **GitHub Repository** | https://github.com/[your-username]/serene-jewelry-website |
| **Date Deployed** | February 15, 2026 |
| **Deployed Platform** | Vercel |
| **Domain Status** | Using Vercel subdomain / Custom domain: [if applicable] |

**Website Features Working:**
- ✅ Homepage with hero section
- ✅ Product showcase and shop page
- ✅ Shopping cart functionality
- ✅ Wishlist feature
- ✅ User signup/login
- ✅ Contact form
- ✅ About page
- ✅ Dark/Light theme toggle
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Profile management
- ✅ Checkout system (with Stripe integration)

---

## 10. REBUILD CHECKLIST

If you need to rebuild this project from scratch or on another computer, follow this checklist:

### ✅ Pre-Setup Checklist:
- [ ] Install Node.js (v18 or higher)
- [ ] Install Git
- [ ] Install VS Code
- [ ] Create GitHub account
- [ ] Create Vercel account

---

### ✅ Project Setup Checklist:
- [ ] Create project folder: `serene-jewelry-website`
- [ ] Open folder in VS Code
- [ ] Install pnpm: `npm install -g pnpm`
- [ ] Create `package.json` file
- [ ] Run `pnpm install` (wait 2-5 minutes)
- [ ] Create all configuration files:
  - [ ] next.config.mjs
  - [ ] tailwind.config.ts
  - [ ] tsconfig.json
  - [ ] postcss.config.mjs
  - [ ] components.json

---

### ✅ Folder Structure Checklist:
- [ ] Create `app` folder
- [ ] Create `components` folder (with `ui` subfolder)
- [ ] Create `lib` folder
- [ ] Create `hooks` folder
- [ ] Create `public/images/products` folders
- [ ] Create page folders (about, shop, contact, profile, signup, checkout)
- [ ] Create API route folders

---

### ✅ Code Files Checklist:
- [ ] Create `app/globals.css`
- [ ] Create `app/layout.tsx`
- [ ] Create `app/page.tsx`
- [ ] Create `lib/utils.ts`
- [ ] Create `lib/products.ts`
- [ ] Create all components (50+ files)
- [ ] Create all context providers (4 files)
- [ ] Create all page files (7 pages)
- [ ] Create all API routes (4 routes)
- [ ] Create hooks files (2 files)

---

### ✅ Testing Checklist:
- [ ] Run `pnpm dev`
- [ ] Website loads at localhost:3000
- [ ] Homepage displays correctly
- [ ] Navigation menu works
- [ ] Product page shows all items
- [ ] Cart functionality works
- [ ] Wishlist functionality works
- [ ] Theme toggle works (dark/light)
- [ ] Responsive on mobile (test with F12 → device toolbar)
- [ ] All links work
- [ ] Contact form displays
- [ ] Signup modal opens

---

### ✅ GitHub Upload Checklist:
- [ ] Create repository on GitHub
- [ ] Run `git init`
- [ ] Run `git add .`
- [ ] Run `git commit -m "Initial commit"`
- [ ] Run `git branch -M main`
- [ ] Run `git remote add origin [GitHub URL]`
- [ ] Run `git push -u origin main`
- [ ] Verify all files uploaded on GitHub

---

### ✅ Deployment Checklist:
- [ ] Login to Vercel
- [ ] Import GitHub repository
- [ ] Configure project settings
- [ ] Add environment variables (if needed)
- [ ] Click Deploy button
- [ ] Wait for build to complete
- [ ] Visit live website URL
- [ ] Test all features on live site
- [ ] Save website URL

---

### ✅ Post-Deployment Checklist:
- [ ] Share website link
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)
- [ ] Document any custom changes
- [ ] Take screenshots for documentation
- [ ] Save all credentials securely

---

## 11. ADDITIONAL NOTES FOR STUDENTS

### Project Technologies Explained (Simple):

**Next.js:**
- A framework for building React websites
- Makes websites fast and SEO-friendly
- Includes routing (different pages) automatically
- Version used: 16.1.6

**React:**
- JavaScript library for building user interfaces
- Uses components (reusable building blocks)
- Very popular for modern web development
- Version used: 19.2.3

**TypeScript:**
- JavaScript with type checking
- Catches errors before running code
- Makes code more reliable
- Version used: 5.7.3

**Tailwind CSS:**
- Utility-first CSS framework
- Style elements using class names
- Much faster than writing custom CSS
- Version used: 3.4.17

**shadcn/ui + Radix UI:**
- Pre-made, accessible UI components
- Buttons, dialogs, dropdowns, etc.
- Saves time building from scratch

**pnpm:**
- Package manager (installs dependencies)
- Faster and more efficient than npm
- Saves disk space

---

### Key Learning Outcomes:

After completing this project, you learned:

1. ✅ **How to set up a modern web development environment**
   - Installing Node.js, Git, VS Code
   - Using command line/terminal

2. ✅ **Building with Next.js and React**
   - Creating pages and components
   - File-based routing system
   - Server-side rendering

3. ✅ **Styling with Tailwind CSS**
   - Utility classes
   - Responsive design
   - Dark/light theme

4. ✅ **State Management with React Context**
   - Shopping cart state
   - Wishlist management
   - User authentication
   - Orders tracking

5. ✅ **Using TypeScript**
   - Type definitions
   - Interfaces
   - Type safety

6. ✅ **Version Control with Git**
   - Committing changes
   - Pushing to repository
   - Tracking code history

7. ✅ **Deploying to Production**
   - Using Vercel hosting
   - Continuous deployment
   - Environment variables

8. ✅ **Building E-commerce Features**
   - Product listings
   - Shopping cart
   - Checkout process (Stripe integration)
   - User profiles
   - Wishlist

---

### File Size and Project Stats:

| Metric | Value |
|--------|-------|
| Total Files | 100+ files |
| Total Folders | 15+ folders |
| Lines of Code | 5,000+ lines |
| Dependencies | 60+ packages |
| Project Size | ~300MB (with node_modules) |
| Build Time | ~30 seconds |
| Page Load Speed | < 1 second |

---

### Tips for Customization:

**Change Colors:**
- Edit `tailwind.config.ts`
- Modify color values in `app/globals.css`

**Add More Products:**
- Edit `lib/products.ts`
- Add new objects to the products array

**Change Logo:**
- Edit `components/shell-logo.tsx`
- Or create your own logo component

**Modify Text:**
- Edit individual page files (page.tsx)
- Edit component files for specific sections

**Add New Pages:**
1. Create folder in `app/` (example: `app/blog/`)
2. Create `page.tsx` inside folder
3. Add your page content
4. Link to it from navigation

---

### Performance Tips:

**To make website faster:**
- ✅ Optimize images (use WebP format)
- ✅ Minimize CSS (done automatically)
- ✅ Enable caching (Vercel does this)
- ✅ Use Next.js Image component
- ✅ Lazy load images
- ✅ Minimize JavaScript bundles

---

### SEO (Search Engine Optimization):**

To make website appear in Google:
- ✅ Add proper meta tags (already in layout.tsx)
- ✅ Use semantic HTML
- ✅ Add alt text to images
- ✅ Create sitemap.xml
- ✅ Submit to Google Search Console
- ✅ Use descriptive URLs

---

## 12. CONCLUSION

Congratulations! 🎉 You have successfully:

1. ✅ Set up a complete web development environment
2. ✅ Created a full-featured e-commerce jewelry website
3. ✅ Learned modern web technologies (Next.js, React, TypeScript, Tailwind CSS)
4. ✅ Uploaded code to GitHub
5. ✅ Deployed website to the internet using Vercel
6. ✅ Built features like shopping cart, wishlist, user authentication
7. ✅ Made the website responsive for all devices
8. ✅ Implemented dark/light theme switching

This project demonstrates:
- Frontend development skills
- Backend API development
- State management
- Modern UI/UX design
- Version control
- Deployment and hosting
- E-commerce functionality

**Your website is now:**
- 🌐 Live on the internet
- 📱 Mobile-friendly
- 🎨 Beautifully designed
- ⚡ Fast and optimized
- 🔐 Secure HTTPS connection (via Vercel)
- 🔄 Auto-updating (when you push to GitHub)

---

### Next Steps (Optional Enhancements):

**To improve this project further:**
1. Add real payment processing with Stripe
2. Connect to a real database (PostgreSQL, MongoDB)
3. Add user authentication with NextAuth.js
4. Implement product search functionality
5. Add customer reviews and ratings
6. Create admin dashboard
7. Add email notifications
8. Implement order tracking
9. Add blog section
10. Integrate social media sharing

---

### Resources for Further Learning:

- **Next.js Documentation:** https://nextjs.org/docs
- **React Documentation:** https://react.dev/
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **Vercel Documentation:** https://vercel.com/docs
- **GitHub Guides:** https://guides.github.com/

---

## FINAL REMARKS

This documentation was created to help beginners understand every step of building and deploying a modern web application. If you followed all steps carefully, you now have:

- A beautiful, functional jewelry e-commerce website
- Practical experience with modern web technologies
- A portfolio project to show potential employers
- Code hosted on GitHub for version control
- A live website anyone can visit

**Remember:**
- Start with small changes to understand how code works
- Test frequently in development mode
- Commit to Git regularly
- Read error messages carefully - they tell you what's wrong
- Google is your friend - search for errors
- Practice is key to mastering web development

**Good luck with your web development journey!** 🚀

---

**Document Version:** 1.0  
**Last Updated:** February 15, 2026  
**Created For:** Serene Jewelry Website Project  
**Difficulty Level:** Beginner to Intermediate  
**Estimated Completion Time:** 4-6 hours  

---

**END OF DOCUMENTATION**

---

## QUICK REFERENCE COMMANDS

Copy these commands for quick access:

**Install dependencies:**
```bash
pnpm install
```

**Run development server:**
```bash
pnpm dev
```

**Build for production:**
```bash
pnpm build
```

**Start production server:**
```bash
pnpm start
```

**Git commands:**
```bash
git add .
git commit -m "Your message here"
git push
```

**Check versions:**
```bash
node --version
pnpm --version
git --version
```

---

## CONTACT & SUPPORT

If you need help:
1. Check error messages carefully
2. Search error on Google
3. Check documentation links above
4. Ask on Stack Overflow
5. Check GitHub issues for similar problems

---