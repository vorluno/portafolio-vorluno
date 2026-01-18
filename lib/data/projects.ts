import { Project } from '@/lib/types';

export const projects: Project[] = [
  // PROYECTO FREELANCER
  {
    id: 'clau-formulario-freelance',
    title: 'Formulario CLAU - Trabajo Freelance',
    description: 'Sistema de formularios en producción para empresa CLAU',
    longDescription:
      'Proyecto freelance en producción utilizado por la empresa CLAU. Stack moderno con ASP.NET Core 9 backend, React 18 + Vite frontend, containerizado con Docker y CapRover ready. Integración con Brevo para gestión de emails.',
    technologies: ['React', 'TypeScript', 'ASP.NET Core', 'Vite', 'Docker', 'Brevo'],
    image: '/images/projects/proyecto freelancer/formulario - clau.png',
    videoPreview: '/images/projects/proyecto freelancer/proyecto - freelancer.mp4',
    demo: 'https://formulario.clau.com.pa/',
    category: 'fullstack',
    featured: true,
    isFreelance: true,
    features: [
      '🎨 Modern UI: Vorluno brand colors (#7C3AED violet, #06B6D4 cyan)',
      '✅ Form Validation: React Hook Form + Zod schema validation',
      '📱 Responsive Design: Mobile-first with glassmorphism effects',
      '♿ Accessible: ARIA labels, keyboard navigation, screen reader support',
      '🔄 Offline Support: Automatic retry queue when connection returns',
      '🌐 i18n Ready: Spanish language support',
      '⚡ ASP.NET Core 9: Latest .NET with minimal APIs',
      '📧 Email Service: Brevo (SendinBlue) transactional emails',
      '🔒 Security: Non-root Docker user, security headers, input validation',
      '📊 Google Sheets: Optional webhook integration for lead tracking',
      '🏥 Health Checks: Built-in /healthz endpoint',
      '🐳 Docker: Multi-stage build, Alpine Linux (~90MB final image)',
      '🚢 CapRover Ready: One-click deployment with captain-definition',
    ],
    gallery: [
      
      {
        src: '/images/projects/proyecto freelancer/acuse-cliente-clau.png',
        alt: 'Acuse de recibo para cliente',
        title: 'Acuse de Recibo',
        description:
          'Confirmación instantánea enviada al cliente después de enviar el formulario. Muestra que su mensaje fue recibido exitosamente y proporciona un número de referencia. Email transaccional enviado vía Brevo con plantilla HTML personalizada.',
      },
      {
        src: '/images/projects/proyecto freelancer/formulario-correo-clau.png',
        alt: 'Email de notificación para administrador',
        title: 'Notificación de Lead',
        description:
          'Email de notificación enviado al equipo de CLAU con todos los datos del contacto. Incluye información estructurada del lead, timestamp y opción de integración con Google Sheets para tracking automático de leads.',
      },
    ],
    readmeContent: `Enterprise-grade contact form application for CLAU, featuring a React frontend with Vite and ASP.NET Core backend. Optimized for CapRover deployment with Docker, complete with email notifications via Brevo and optional Google Sheets integration.

**Frontend Features:**
- Modern UI with Vorluno brand colors
- Form validation with React Hook Form + Zod
- Responsive design with glassmorphism effects
- Accessible with ARIA labels and keyboard navigation
- Offline support with automatic retry queue
- Spanish language support

**Backend Features:**
- ASP.NET Core 9 with minimal APIs
- Brevo email service for transactional emails
- Security headers and input validation
- Google Sheets webhook integration
- Health check endpoint
- Structured logging

**DevOps:**
- Docker multi-stage build
- CapRover ready deployment
- Environment variables for all secrets
- Response compression (Brotli + Gzip)`,
  },

  // PROYECTOS PERSONALES
  {
    id: 'menu-digital',
    title: 'VOR-MENU - Menú Digital PWA',
    description: 'Progressive Web App para menús de restaurantes',
    longDescription:
      'PWA moderna para visualización de menús digitales con gestión de productos, categorías y disponibilidad en tiempo real. Incluye panel de administración completo con autenticación, CRUD de categorías y productos, y soporte bilingüe.',
    technologies: ['Next.js', 'Supabase', 'PWA', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    image: '/images/projects/menu/portfolio_menu_banner.png',
    videoPreview: '/images/projects/menu/menu-vorluno.mp4',
    github: 'https://github.com/vorluno/Vorluno-Menu',
    category: 'fullstack',
    featured: true,
    isFreelance: false,
    features: [
      '🌐 Public Menu: Landing page with all menu categories',
      '📱 Mobile-first design: Optimized for smartphones and tablets',
      '🌍 Bilingual support: Spanish/English with next-intl',
      '📴 PWA capabilities: Install as app, offline support',
      '🔐 Admin Panel: Authentication with Supabase Auth',
      '✏️ Categories CRUD: Create, edit, delete, restore',
      '🍽️ Products CRUD: Full product management',
      '📷 Image upload: Supabase Storage integration',
      '🔍 Search & Filters: Find products/categories quickly',
      '♻️ Soft delete: Items can be restored after deletion',
      '💰 Dual pricing: Support for glass/bottle pricing',
      '🔢 Sort order: Custom ordering of items',
    ],
    gallery: [
     
      {
        src: '/images/projects/menu/menu-claro.png',
        alt: 'Modo claro del menú',
        title: 'Modo Claro',
        description:
          'Tema claro del menú digital, perfecto para ambientes bien iluminados. Diseño limpio y profesional con excelente contraste que facilita la lectura de nombres de productos y precios. Ideal para uso durante el día o en restaurantes con buena iluminación.',
      },
      {
        src: '/images/projects/menu/menu-negro.png',
        alt: 'Modo oscuro del menú',
        title: 'Modo Oscuro',
        description:
          'Tema oscuro del menú digital, ideal para ambientes con poca luz. Reduce la fatiga visual en condiciones de baja luminosidad, perfecto para bares o restaurantes con ambiente tenue. Los colores se ajustan automáticamente manteniendo la legibilidad y el diseño elegante.',
      },
    ],
    readmeContent: `VOR-MENU by Vorluno - Modern digital menu PWA (Progressive Web App) for restaurants with public menu viewing and admin panel for content management.

**Public Menu Features:**
- Landing page with all menu categories
- Category pages displaying products with images and prices
- Bilingual support (Spanish/English) with next-intl
- PWA capabilities - Install as app, offline support
- Mobile-first design - Optimized for smartphones and tablets
- Responsive images with automatic fallback for broken URLs

**Admin Panel Features:**
- Authentication with Supabase Auth (email/password)
- Categories CRUD - Create, edit, delete, restore
- Products CRUD - Full product management
- Image upload to Supabase Storage
- Search & Filters - Find products/categories quickly
- Soft delete - Items can be restored after deletion
- Dual pricing - Support for glass/bottle pricing
- Sort order - Custom ordering of items

**Tech Stack:**
- Framework: Next.js 15 (App Router, React Server Components)
- Language: TypeScript (strict mode)
- Backend: Supabase (PostgreSQL + Auth + Storage)
- Styling: Tailwind CSS v4 + shadcn/ui components
- i18n: next-intl (Spanish/English)
- PWA: next-pwa with offline caching`,
  },

  {
    id: 'formulario-vorluno',
    title: 'Vorluno Contact Form',
    description: 'Formulario de contacto moderno y listo para producción',
    longDescription:
      'Formulario de contacto enterprise-grade con React frontend y ASP.NET Core backend. Optimizado para deployment en CapRover con Docker, incluye notificaciones por email vía Brevo e integración opcional con Google Sheets.',
    technologies: ['React', 'TypeScript', 'ASP.NET Core', 'Vite', 'Docker', 'Brevo'],
    image: '/images/projects/formulario/portfolio_form_banner.png',
    videoPreview: '/images/projects/formulario/proyecto - formulario.mp4',
    github: 'https://github.com/vorluno/Vorluno-Form',
    category: 'fullstack',
    featured: true,
    isFreelance: false,
    features: [
      '🎨 Modern UI: Vorluno brand colors (#7C3AED violet, #06B6D4 cyan)',
      '✅ Form Validation: React Hook Form + Zod schema validation',
      '📱 Responsive Design: Mobile-first with glassmorphism effects',
      '♿ Accessible: ARIA labels, keyboard navigation, screen reader support',
      '🔄 Offline Support: Automatic retry queue when connection returns',
      '🌐 i18n Ready: Spanish language support',
      '⚡ ASP.NET Core 9: Latest .NET with minimal APIs',
      '📧 Email Service: Brevo (SendinBlue) transactional emails',
      '🔒 Security: Non-root Docker user, security headers, input validation',
      '📊 Google Sheets: Optional webhook integration for lead tracking',
      '🐳 Docker: Multi-stage build, Alpine Linux (~90MB final image)',
      '🚢 CapRover Ready: One-click deployment',
    ],
    gallery: [
    
      {
        src: '/images/projects/formulario/acuse-vorluno.png',
        alt: 'Acuse de recibo Vorluno',
        title: 'Acuse de Recibo',
        description:
          'Email de confirmación automático enviado al usuario después de completar el formulario. Incluye número de referencia único y confirmación de que su mensaje fue recibido. Template HTML personalizado enviado vía Brevo con diseño consistente con la marca.',
      },
      {
        src: '/images/projects/formulario/lead-vorluno.png',
        alt: 'Notificación de lead Vorluno',
        title: 'Notificación de Lead',
        description:
          'Email de notificación enviado al administrador con información completa del contacto. Incluye todos los datos del formulario estructurados, timestamp y metadatos. Opcionalmente se puede integrar con Google Sheets para tracking automático de todos los leads.',
      },
    ],
    readmeContent: `Modern, production-ready contact form built for CapRover deployment. Enterprise-grade contact form application featuring a React frontend with Vite and ASP.NET Core backend.

**Frontend Features:**
- Modern UI with Vorluno brand colors
- Form validation with React Hook Form + Zod
- Responsive design with glassmorphism effects
- Accessible with ARIA labels and keyboard navigation
- Offline support with automatic retry queue
- Spanish language support

**Backend Features:**
- ASP.NET Core 9 with minimal APIs
- Brevo email service for transactional emails
- Security headers and input validation
- Google Sheets webhook integration
- Health check endpoint
- Structured logging

**DevOps:**
- Docker multi-stage build
- CapRover ready deployment
- Environment variables for all secrets
- Response compression (Brotli + Gzip)
- Static file caching`,
  },

  {
    id: 'sistema-planilla',
    title: 'Vorluno Planilla - Sistema de Nómina',
    description: 'Sistema integral de gestión de nómina empresarial',
    longDescription:
      'Sistema completo para gestión de nómina con arquitectura limpia, procesamiento de pagos, reportes y administración de empleados. Implementa CQRS y Clean Architecture para máxima mantenibilidad.',
    technologies: ['.NET', 'SQL Server', 'Clean Architecture', 'CQRS', 'Entity Framework'],
    image: '/images/projects/planilla/project-planilla-banner.png',
    github: 'https://github.com/vorluno/Vorluno-Planilla',
    category: 'backend',
    featured: true,
    isFreelance: false,
    features: [
      '💼 Gestión de empleados completa',
      '💰 Procesamiento de nómina automatizado',
      '📊 Reportes y analytics detallados',
      '🏗️ Clean Architecture para mantenibilidad',
      '⚡ CQRS para separación de comandos y queries',
      '🔒 Entity Framework con migraciones',
      '📈 SQL Server para almacenamiento robusto',
    ],
    readmeContent: `Sistema integral de gestión de nómina empresarial con Clean Architecture y CQRS. Incluye procesamiento automatizado de pagos, reportes detallados y administración completa de empleados.`,
  },
];

// Exportar proyectos separados por tipo
export const freelanceProjects = projects.filter((p) => p.isFreelance);
export const personalProjects = projects.filter((p) => !p.isFreelance);
