# Vorluno Portfolio

Modern portfolio built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Features

- Next.js 15 with App Router
- TypeScript (strict mode)
- Tailwind CSS v4
- Framer Motion animations
- Internationalization (ES/EN) with next-intl
- Dark/Light mode toggle
- Responsive design (mobile-first)
- SEO optimized
- Glassmorphism design with violet→cyan gradients

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Internationalization:** next-intl
- **Icons:** react-icons
- **Font:** Geist (Vercel)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

### Docker

```bash
# Build and run with Docker Compose
docker-compose up

# Or build Docker image manually
docker build -t vorluno-portfolio .
docker run -p 3000:3000 vorluno-portfolio
```

## Project Structure

```
vorluno-portfolio/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, About, Projects, Skills, Contact
│   └── ui/                # Reusable UI components
├── lib/
│   ├── data/              # Static data (projects, skills, social)
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
├── messages/              # Translation files (es.json, en.json)
└── public/                # Static assets
```

## Configuration

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=https://vorluno.dev
NEXT_PUBLIC_EMAIL=vorluno@gmail.com
NEXT_PUBLIC_GITHUB=https://github.com/vorluno
NEXT_PUBLIC_LINKEDIN=https://linkedin.com/in/vorluno
```

## Customization

### Update Project Data

Edit `lib/data/projects.ts` to update project information.

### Update Skills

Edit `lib/data/skills.ts` to add or modify skills and categories.

### Update Translations

- Spanish: `messages/es.json`
- English: `messages/en.json`

### Update Colors

Modify the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#7C3AED',      // Violet
  secondary: '#06B6D4',    // Cyan
  // ...
}
```

## Deployment

### CapRover

1. Build Docker image
2. Deploy to CapRover using the Dockerfile
3. Configure environment variables in CapRover dashboard

### Vercel (Alternative)

```bash
# Deploy to Vercel
vercel
```

## License

MIT

## Author

**Vorluno**
- Email: vorluno@gmail.com
- GitHub: [@vorluno](https://github.com/vorluno)
- LinkedIn: [vorluno](https://linkedin.com/in/vorluno)
