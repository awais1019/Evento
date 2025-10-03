# 🎉 Evento

Evento is a modern event discovery platform where users can explore events happening in different cities.
It is built with **Next.js (App Router)**, **TypeScript**, **Prisma**, **TailwindCSS**, and **Framer Motion**. 
The app allows users to search events, browse by city, view event details, and experience smooth animations.

## ✨ Features

- 🔍 **Search Events** – Find events quickly using the search bar on the homepage.
- 🏙 **City-Based Events** – Browse events happening in any city using dynamic routes (`/events/[city]`).
- 📄 **Event Details** – View full details of an event via dynamic slug routes (`/event/[slug]`).
- 📑 **Pagination** – Navigate through event listings with 6 events per page.
- 🎞 **Smooth Animations** – Scroll-based animations powered by **Framer Motion**.
- ✅ **Validation** – Input validation using **Zod** for safe routing and parameters.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Database ORM:** Prisma
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Validation:** Zod

## 📂 Project Structure

```
evento/
 ├── prisma/              # Prisma schema
 ├── public/              # Static assets (images, icons, etc.)
 ├── src/
 │   ├── app/             # Next.js App Router pages
 │   │   ├── events/
 │   │   │   ├── [city]/  # Dynamic city route (with pagination support)
 │   │   │   └── page.tsx # Main events page
 │   │   ├── event/
 │   │   │   └── [slug]/  # Dynamic slug route for event details
 │   │   └── page.tsx     # Home page (with search + all events)
 │   ├── components/      # Reusable UI components (Header,Footer,Container,Eventcard, navbar, inputForm, etc.)
 │   ├── lib/             # Helpers, Prisma queries, validation
 ├── .env        # Environment variables example
 ├── package.json
 └── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL (or any Prisma-supported database)
- npm or yarn package manager

### Installation

```bash
# Clone the repo
git clone https://github.com/awais1019/evento.git
cd evento

# Install dependencies
npm install
```

### Environment Setup

```bash

# Add your database URL and required environment variables in .env file
```

### Database Setup

```bash
npx prisma migrate dev
```

### Run the App

```bash
npm run dev
```

App will run on: [http://localhost:3000](http://localhost:3000) 🚀

## 🎮 Usage

- Open the homepage and explore events.
- Use the search bar to find specific events.
- Browse by city (e.g., `/events/austin`).
- Click an event card to see full details (`/event/[slug]`).
- Navigate using pagination controls.

## 🎓 Learning Purpose

This project is created as part of my Next.js learning journey.
Through this project, I learned and practiced:

- Using the App Router with dynamic routes and parameters
- Implementing pagination with Prisma (skip and take)
- Structuring a project with app/, components/, and lib/ folders
- Adding scroll-based animations using Framer Motion
- Validating inputs and routes with Zod
- Building responsive UI with TailwindCSS
- Writing database seeding scripts using TypeScript and running them with **ts-node** / **tsx**
- Understanding the deployment process with **Vercel** (Next.js hosting)

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
