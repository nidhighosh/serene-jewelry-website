# Serene Jewelry Website

A modern, elegant e-commerce platform for jewelry products built with cutting-edge web technologies. This fully responsive website features a beautiful user interface, product showcase, shopping cart functionality, and user authentication.

## 📋 Project Overview

Serene Jewelry Website is a full-featured jewelry e-commerce platform that provides customers with an intuitive shopping experience. The platform includes product browsing, wishlist management, shopping cart, user profiles, and contact functionality. The design emphasizes elegance and simplicity, reflecting the premium nature of jewelry products.

### Key Features

- 🛍️ **Product Showcase** - Browse and filter jewelry collections with detailed product cards
- 🛒 **Shopping Cart** - Add/remove items with a smooth shopping experience
- ❤️ **Wishlist Management** - Save favorite items for later
- 👤 **User Profiles** - Manage account information and preferences
- 🔐 **Authentication** - Secure user signup and login system
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- 🎨 **Dark/Light Theme** - Toggle between dark and light modes
- 📞 **Contact Form** - Get in touch with customer support
- ℹ️ **About Page** - Learn more about the brand and company values

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 16.1.6](https://nextjs.org/)** - React framework with file-based routing, SSR, and built-in optimization
- **[React 19.2.3](https://react.dev/)** - Modern JavaScript library for building user interfaces
- **[React DOM 19.2.3](https://react.dev/)** - React package for working with the DOM

### UI Framework & Components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components library
  - Dialog, Dropdown, Tabs, Tooltips, Navigation, Popover, and many more
- **[Shadcn/ui](https://ui.shadcn.com/)** - High-quality React components built on Radix UI and Tailwind CSS

### Styling
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities for Tailwind
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind CSS classes intelligently
- **[PostCSS 8.5](https://postcss.org/)** - CSS transformation tool
- **[Autoprefixer](https://autoprefixer.github.io/)** - Parse CSS and add vendor prefixes

### Form & Data Management
- **[React Hook Form 7.54.1](https://react-hook-form.com/)** - Flexible form state management
- **[Hook Form Resolvers 3.9.1](https://github.com/react-hook-form/resolvers)** - Validation resolvers for Hook Form
- **[Zod 3.24.1](https://zod.dev/)** - TypeScript-first schema validation with static type inference

### State Management & Context
- Custom Context APIs:
  - `auth-context.tsx` - Authentication state management
  - `cart-context.tsx` - Shopping cart state
  - `wishlist-context.tsx` - Wishlist management

### UI & Visualization
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon set
- **[Recharts 2.15.0](https://recharts.org/)** - Composable charting library
- **[Embla Carousel 8.5.1](https://www.embla-carousel.com/)** - Carousel/slider component
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications library
- **[Vaul](https://vaul.js.org/)** - Unstyled drawer component

### Theme Management
- **[Next Themes 0.4.6](https://github.com/pacocoursey/next-themes)** - Next.js theme switcher with no flash
- **[Class Variance Authority](https://cva.style/)** - CSS class utility for managing variants

### Utilities & Helpers
- **[clsx](https://github.com/lukeed/clsx)** - Tiny utility for constructing className strings
- **[Date-fns 4.1.0](https://date-fns.org/)** - Modern date utility library
- **[Input OTP 1.4.1](https://input-otp.js.org/)** - One-time password input component
- **[React Resizable Panels](https://github.com/bvaughn/react-resizable-panels)** - Resizable panel layouts

### Development Tools
- **[TypeScript 5.7.3](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **@types/react, @types/react-dom, @types/node** - TypeScript type definitions
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## 📁 Project Structure

```
serene-jewelry-website/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── profile/                 # User profile page
│   ├── shop/                    # Shop/products page
│   └── signup/                  # Signup page
├── components/                   # React components
│   ├── ui/                      # Shadcn/Radix UI components
│   ├── about-section.tsx        # About section component
│   ├── hero-section.tsx         # Hero banner section
│   ├── featured-products.tsx    # Featured products display
│   ├── product-card.tsx         # Individual product card
│   ├── shop-grid.tsx            # Product grid layout
│   ├── cart-drawer.tsx          # Shopping cart drawer
│   ├── contact-form.tsx         # Contact form
│   ├── signup-modal.tsx         # Signup modal
│   ├── site-header.tsx          # Site navigation header
│   ├── site-footer.tsx          # Site footer
│   ├── profile-content.tsx      # Profile page content
│   ├── shell-logo.tsx           # Logo component
│   └── theme-provider.tsx       # Theme provider
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx           # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
├── lib/                          # Utility functions & helpers
│   ├── auth-context.tsx         # Auth state context
│   ├── cart-context.tsx         # Cart state context
│   ├── wishlist-context.tsx     # Wishlist state context
│   ├── products.ts              # Product data
│   └── utils.ts                 # Utility functions
├── public/                       # Static assets
│   └── images/
│       └── products/            # Product images
├── styles/                       # Additional styles
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
├── next.config.mjs              # Next.js configuration
├── components.json              # Shadcn/ui configuration
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd serene-jewelry-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 📚 Available Scripts

- **`pnpm dev`** - Start the development server with Turbopack
- **`pnpm build`** - Build the project for production
- **`pnpm start`** - Start the production server
- **`pnpm lint`** - Run ESLint to check code quality

## 🎨 Features in Detail

### User Authentication
- Secure signup and login functionality
- User profile management
- Protected routes and authentication context

### Product Management
- Dynamic product catalog
- Product cards with images and descriptions
- Featured products section
- Product filtering and browsing

### Shopping Features
- Shopping cart with add/remove functionality
- Wishlist to save favorite items
- Cart drawer for quick access

### Theme System
- Dark and light mode support
- Persistent theme preference
- Smooth theme transitions

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interface

## 🔧 Configuration Files

- **`next.config.mjs`** - Next.js configuration with image optimization and TypeScript settings
- **`tailwind.config.ts`** - Tailwind CSS customization for the jewelry brand
- **`postcss.config.mjs`** - PostCSS with Tailwind CSS plugin
- **`tsconfig.json`** - TypeScript compiler options
- **`components.json`** - Shadcn/ui component configuration

## 📦 Build & Deployment

The project is optimized for deployment on modern hosting platforms:

- **Next.js Improvements**:
  - Image optimization disabled for static exports if needed
  - Build indicators turned off for cleaner builds
  - TypeScript configured for flexibility

- **Performance Features**:
  - Tailwind CSS for optimized styling
  - React 19 with latest performance enhancements
  - Next.js 16 with Turbo build support

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is private and proprietary. All rights reserved.

## 👥 Contributing

This is a private project. For contributions or questions, please contact the development team.

---

**Last Updated:** February 2026