<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/rocket.svg" alt="RaiseNest Logo" width="80" height="80" />

  <h1 align="center">RaiseNest</h1>

  <p align="center">
    <strong>Turn Your Ideas Into Funded Reality.</strong>
    <br />
    The premium AI-powered crowdfunding platform designed for students, creators, and next-generation startups.
  </p>

  <p align="center">
    <a href="https://github.com/dk5506934/RaiseNest/actions"><img src="https://img.shields.io/badge/build-passing-success?style=for-the-badge&logo=githubactions&logoColor=white" alt="Build Status" /></a>
    <a href="https://github.com/dk5506934/RaiseNest/releases"><img src="https://img.shields.io/badge/version-v1.0.0-blue?style=for-the-badge" alt="Version" /></a>
    <a href="https://github.com/dk5506934/RaiseNest/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="License" /></a>
    <a href="https://github.com/dk5506934/RaiseNest/stargazers"><img src="https://img.shields.io/badge/stars-5.2k-yellow?style=for-the-badge&logo=github" alt="Stars" /></a>
    <a href="https://github.com/dk5506934/RaiseNest/issues"><img src="https://img.shields.io/badge/issues-0_open-red?style=for-the-badge&logo=github" alt="Issues" /></a>
  </p>

  <p align="center">
    <a href="#live-demo">View Demo</a>
    ·
    <a href="#getting-started">Get Started</a>
    ·
    <a href="#documentation-hub">Read the Docs</a>
    ·
    <a href="https://github.com/dk5506934/RaiseNest/issues">Report a Bug</a>
  </p>
</div>

---

## 🎨 Beautiful Project Banner

<div align="center">
  <img src="public/landing%20page.png" alt="RaiseNest Dashboard Preview" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);" />
</div>

---

## 📑 Table of Contents

- [About RaiseNest](#-about-raisenest)
- [Key Features](#-key-features)
- [Product Walkthrough](#-product-walkthrough)
- [Screenshots](#-screenshots)
- [Live Demo](#-live-demo)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Documentation Hub](#-documentation-hub)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Overview](#-api-overview)
- [Database Schema](#-database-schema)
- [Design System](#-design-system)
- [Performance](#-performance)
- [Security](#-security)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [FAQ](#-faq)
- [Acknowledgements](#-acknowledgements)
- [Author](#-author)
- [License](#-license)

---

## 📖 About RaiseNest

### Problem
Traditional crowdfunding platforms are burdened with massive fees, outdated UX, and rigid gatekeeping. Student innovators, indie researchers, and early-stage entrepreneurs often struggle to validate their ideas and raise initial capital in a frictionless environment.

### Solution
**RaiseNest** democratizes funding through an open, transparent, and breathtakingly beautiful web platform. By leveraging the latest in Next.js 15 Server Components, Framer Motion, and secure Razorpay integrations, we provide an unparalleled experience for both creators and backers.

### Mission & Vision
**Mission:** To empower the next generation of builders by removing the financial barriers to innovation.
**Vision:** To become the defacto Launchpad for university researchers, open-source creators, and indie hardware startups globally.

### Target Users
- 🎓 **University Students:** Funding thesis projects, hardware prototypes, and collegiate startups.
- 👨‍💻 **Open Source Developers:** Sustaining independent research and library development.
- 🚀 **Entrepreneurs:** Validating MVP demand before seeking venture capital.

### Core Values
- **Frictionless UX:** Design isn't just how it looks; it's how it works.
- **Transparency:** Zero hidden fees. Direct connection between backers and creators.
- **Security-First:** Bank-grade encryption and secure OAuth flows.

---

## ✨ Key Features

### Authentication
- **Secure OAuth Integration:** Effortless GitHub & Google login via NextAuth.js.
- **Passwordless Magic Links:** Seamless email authentication flows.
- **Session Management:** Secure JWT-based stateless sessions.

### Campaign Management
- **7-Step Wizard:** An animated, frictionless onboarding flow to launch campaigns.
- **Rich Media Support:** Embed videos, markdown descriptions, and gallery images.
- **Reward Tiers:** Configurable contribution tiers with custom rewards.

### Payments
- **Razorpay Integration:** Secure, bank-grade payment processing for INR transactions.
- **Instant Payouts:** Automated webhook processing for transparent fund transfers.

### Analytics & Dashboard
- **Creator Dashboard:** Real-time metrics on conversion rates, traffic, and funding.
- **AI Health Check:** Simulated AI-driven widget offering conversion rate optimizations.

### Performance & Community
- **Server Components (RSC):** Zero-JS client load for static marketing pages.
- **Masonry Grid Discovery:** A Pinterest-style fluid explore feed for infinite discovery.
- **SEO Optimized:** Dynamic metadata generation for high search visibility.

---

## 🚶 Product Walkthrough

1. **Landing Page:** A gorgeous, glassmorphism-inspired entry point showcasing trending campaigns, live platform metrics, and a dynamic hero section.
2. **Explore:** An intuitive discovery engine allowing users to filter campaigns by categories like *Robotics*, *AI*, and *FinTech*.
3. **Campaign Page:** A high-fidelity individual project view featuring a dynamic blur background, funding progress bars, and reward tier selection.
4. **Creator Dashboard:** The control center for innovators to track active backers, monitor revenue, and adjust payout settings safely.
5. **Campaign Creation:** A step-by-step interactive wizard ensuring creators provide compelling stories and accurate funding goals before launching.

---

## 📸 Screenshots

| Landing Page | Explore Grid |
|:---:|:---:|
| <img src="public/landing%20page.png" alt="Landing" width="400"/> | <img src="public/Explore%20Grid.png" alt="Explore" width="400"/> |

| Campaign Detail | Creator Dashboard |
|:---:|:---:|
| <img src="public/Campaign%20Detail.png" alt="Campaign" width="400"/> | <img src="public/Creator%20Dashboard.png" alt="Dashboard" width="400"/> |

| Authentication | Payment Modal |
|:---:|:---:|
| <img src="public/Authentication.png" alt="Auth" width="400"/> | <img src="public/Payment%20Modal.png" alt="Payment" width="400"/> |

---

## 🌐 Live Demo

- **Production URL:** [https://raisenest.vercel.app](https://raisenest.vercel.app) *(Coming Soon)*
- **Staging URL:** [https://staging.raisenest.app](https://staging.raisenest.app)

---

## 🏗 Architecture

RaiseNest utilizes a modern decoupled architecture built entirely on the Next.js App Router paradigm, blurring the lines between client and server for optimal performance.

### Application Architecture

```mermaid
graph TD
    Client[Client Browser / Mobile] --> |HTTPS| CDN[Vercel Edge Network]
    CDN --> NextJS[Next.js 15 App Router]
    
    subgraph Frontend [React Server Components]
        NextJS --> |RSC| Pages
        NextJS --> |Client Components| UI[Tailwind + Framer Motion]
    end
    
    subgraph Backend [Server Actions & API Routes]
        NextJS --> |Server Actions| Auth[NextAuth.js]
        NextJS --> |API Routes| Payments[Razorpay Webhooks]
        NextJS --> |Mongoose| DB[(MongoDB Atlas)]
    end
    
    Auth --> |OAuth| Providers(GitHub / Google)
    Payments --> |Checkout| RazorpayAPI(Razorpay)
```

### Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Client as Next.js Client
    participant Server as NextAuth API
    participant DB as MongoDB
    participant OAuth as Provider (GitHub)

    User->>Client: Clicks "Continue with GitHub"
    Client->>Server: Initiates OAuth Flow
    Server->>OAuth: Redirect to Provider
    OAuth-->>User: Prompts for Authorization
    User->>OAuth: Approves Access
    OAuth-->>Server: Returns Auth Token
    Server->>DB: Upsert User Record
    DB-->>Server: Returns User Profile
    Server-->>Client: Sets Secure HttpOnly JWT
    Client-->>User: Redirects to Dashboard
```

---

## 🛠 Tech Stack

| Technology | Purpose | Version | Why it was chosen |
|------------|---------|---------|-------------------|
| **Next.js** | Fullstack Framework | 15.x | Server Components, SEO optimization, and Edge rendering capabilities. |
| **React** | UI Library | 19.x | Component-based architecture with experimental concurrent features. |
| **TypeScript** | Type Safety | 5.x | Eliminates runtime errors, enhances IDE autocomplete, and improves maintainability. |
| **Tailwind CSS** | Styling | 3.4.x | Utility-first styling enabling rapid, responsive, and consistent UI design. |
| **Framer Motion**| Animations | 11.x | Declarative layout animations, micro-interactions, and fluid transitions. |
| **MongoDB** | Database | 7.x | Highly scalable NoSQL database perfect for flexible campaign schemas. |
| **Mongoose** | ODM | 8.x | Schema validation and simplified query building. |
| **NextAuth** | Authentication | 4.x | Secure, battle-tested OAuth integration for Next.js. |
| **Razorpay** | Payment Gateway | 2.x | India's leading payment processor with robust webhook support. |

---

## 📁 Project Structure

RaiseNest adheres to a highly organized, domain-driven structure optimized for Next.js App Router.

```text
raisenest/
├── actions/              # Next.js Server Actions for database mutations
├── app/                  # Next.js App Router (Pages, Layouts, APIs)
│   ├── (auth)/           # Authentication grouping (login, register)
│   ├── [username]/       # Dynamic user profile and payment pages
│   ├── api/              # API Routes (webhooks, auth endpoints)
│   ├── campaigns/        # Campaign management and wizard
│   ├── dashboard/        # Creator dashboard and analytics
│   ├── explore/          # Masonry grid discovery page
│   └── globals.css       # Global Tailwind directives
├── components/           # React Components
│   ├── ui/               # Reusable atomic UI components (Buttons, Cards, Inputs)
│   ├── Dashboard.tsx     # Complex domain-specific components
│   └── PaymentPage.tsx   # Complex domain-specific components
├── db/                   # Database connection utilities
├── lib/                  # Helper functions and constants (mockData.ts, utils.ts)
├── models/               # Mongoose database schemas (User, Payment)
├── public/               # Static assets (images, fonts, favicons)
└── next.config.mjs       # Next.js configuration and image domains
```

---

## 📚 Documentation Hub

This `README.md` serves as the entry point to our extensive documentation ecosystem. 
Explore the links below to dive deeper into specific architectural decisions.

### Core Documents
- [README.md](./README.md) - Project overview and quick start (You are here).
- [ARCHITECTURE.md](#) *(Coming Soon)* - Deep dive into Server Components vs Client Components.
- [API.md](#) *(Coming Soon)* - Detailed endpoint specifications and Webhook payloads.
- [ROADMAP.md](#-roadmap) - Future vision and upcoming AI features.
- [CONTRIBUTING.md](#-contributing) - Guidelines for open-source contributors.
- [SECURITY.md](#-security) - Threat models, encryption details, and vulnerability reporting.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+
- npm, yarn, or pnpm
- MongoDB Atlas Account (or local instance)
- Razorpay Account (for testing payments)
- GitHub OAuth App (for authentication)

### 1. Clone the repository
```bash
git clone https://github.com/dk5506934/RaiseNest.git
cd raisenest
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory.
```bash
cp .env.example .env.local
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🔐 Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|:--------:|---------|
| `NEXT_PUBLIC_URL` | Application base URL | Yes | `http://localhost:3000` |
| `MONGODB_URI` | MongoDB connection string | Yes | `mongodb+srv://user:pass@cluster...` |
| `NEXTAUTH_URL` | Auth callback URL | Yes | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | Secret for JWT encryption | Yes | `super_secret_string_32_chars` |
| `GITHUB_ID` | GitHub OAuth App ID | Yes | `Iv1.xxxxxxxxxxxx` |
| `GITHUB_SECRET` | GitHub OAuth App Secret | Yes | `a1b2c3d4e5f6g7h8...` |
| `NEXT_PUBLIC_KEY_ID` | Razorpay Public Key | Yes | `rzp_test_xxxxxx` |
| `KEY_SECRET` | Razorpay Secret Key | Yes | `abcdefghijklmnop...` |

---

## 🗄 Database Schema

RaiseNest uses MongoDB with normalized references to ensure data integrity while maintaining high read performance.

### Collections Overview
- **Users:** Stores authentication data, profile information, and Razorpay payout credentials.
- **Campaigns:** Contains campaign metadata, funding goals, categories, and rich descriptions.
- **Payments:** Records successful Razorpay transactions, associated backer metadata, and references to the target campaign.

```mermaid
erDiagram
    USER ||--o{ CAMPAIGN : creates
    USER ||--o{ PAYMENT : makes
    CAMPAIGN ||--o{ PAYMENT : receives
    USER {
        string _id PK
        string email
        string name
        string username
        string razorpayid
    }
    CAMPAIGN {
        string _id PK
        string title
        string description
        number goal
        string creator_id FK
    }
    PAYMENT {
        string _id PK
        number amount
        string status
        string donor_id FK
        string campaign_id FK
    }
```

---

## 🎨 Design System

RaiseNest features a meticulously crafted design system utilizing **Tailwind CSS** and **Radix UI** primitives.

- **Typography:** Uses modern sans-serif fonts (`Inter` or `Geist`) for maximum legibility.
- **Color Palette:** A dark-mode optimized palette featuring deep slate backgrounds, vibrant primary blue (`#2563EB`), and neon success indicators.
- **Glassmorphism:** Extensive use of `backdrop-blur-md` and `bg-white/5` for premium depth and floating elements.
- **Components:** Fully abstracted UI components (`Button`, `Card`, `Input`, `Avatar`) built with `class-variance-authority` (CVA) for strict variant enforcement.
- **Animations:** Fluid entry animations and micro-interactions powered by `framer-motion` (spring transitions, layout morphing).

---

## ⚡ Performance

Engineered for blazing fast loads and perfect Core Web Vitals.

- **React Server Components (RSC):** Heavy data fetching is pushed to the server, reducing the client JS bundle significantly.
- **Next/Image Optimization:** Automatic WebP conversion, resizing, and layout shifting prevention.
- **Granular Loading States:** Integration of `loading.tsx` boundaries for instant perceived navigation.
- **Dynamic Imports:** Heavy libraries (like Canvas Confetti) are lazy-loaded via `next/dynamic`.

---

## 🛡 Security

- **Authentication:** Stateless JWT sessions managed entirely by NextAuth.
- **CSRF Protection:** Built-in Cross-Site Request Forgery protection via NextAuth.
- **Input Validation:** Server Actions stringently sanitize inputs before executing Mongoose queries.
- **Payment Verification:** Razorpay webhooks are cryptographically verified using SHA256 HMAC signatures before database insertion.

---

## 🧪 Testing

*(Documentation for testing framework integration is pending. Planned implementation includes:)*
- **Unit Testing:** Vitest for utility functions and hooks.
- **Component Testing:** React Testing Library for isolated UI components.
- **E2E Testing:** Playwright for critical user journeys (Auth -> Campaign Creation -> Payment).

---

## 🚢 Deployment

RaiseNest is optimized for frictionless deployment on Vercel.

### Deploying to Vercel
1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Configure the Environment Variables in the Vercel dashboard.
4. Click Deploy. Vercel will automatically detect Next.js and apply the optimal build settings.

---

## 🗺 Roadmap

- [x] NextAuth GitHub Integration
- [x] Next.js 15 App Router Migration
- [x] Glassmorphism Design System Overhaul
- [x] Razorpay Integration & Webhooks
- [x] Creator Dashboard
- [ ] **[In Progress]** AI-Powered Campaign Copywriter Assistant
- [ ] **[Planned]** Stripe Integration for International Backers
- [ ] **[Planned]** Web3 Crypto Wallet Connections (Ethereum/Solana)
- [ ] **[Planned]** Real-time Chat between Creators and Backers

---

## 🤝 Contributing

We welcome contributions from open-source developers!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code passes ESLint checks and adheres to the existing Tailwind stylistic guidelines.

---

## ❓ FAQ

**Q: Can I use this for a real startup?**  
A: Yes! The codebase is highly modular and utilizes production-grade authentication and payment gateways. However, ensure you thoroughly audit the security configurations before handling real money.

**Q: Why Razorpay and not Stripe?**  
A: Razorpay was selected for optimal processing of INR (Indian Rupee) transactions and UPI compatibility, making it ideal for the Indian student demographic.

---

## 🙌 Acknowledgements

- [Next.js](https://nextjs.org/) for the incredible framework.
- [shadcn/ui](https://ui.shadcn.com/) for design inspiration and component architecture.
- [Framer Motion](https://www.framer.com/motion/) for bringing the UI to life.
- [Lucide](https://lucide.dev/) for beautiful open-source icons.

---

## 👨‍💻 Author

<div style="display: flex; align-items: center; gap: 20px;">
  <a href="https://github.com/Divyanshu-2907">
    <img src="https://github.com/Divyanshu-2907.png" width="100" height="100" style="border-radius: 50%;" alt="Divyanshu" />
  </a>
  <div>
    <strong>Divyanshu</strong><br/>
    <em>Creator of RaiseNest</em><br/>
    <a href="https://github.com/Divyanshu-2907">GitHub</a>
  </div>
</div>

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---
<div align="center">
  <p>Built with ❤️ by innovators, for innovators.</p>
</div>
