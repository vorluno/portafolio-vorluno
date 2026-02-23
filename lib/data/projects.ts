import { Project } from '@/lib/types';

// Orden de imágenes Planilla por timestamp (215934 → 220848)
const planillaImage = (time: string) =>
  `/images/projects/planilla/Captura de pantalla 2026-02-22 ${time}.png`;

export const projects: Project[] = [
  // PROYECTOS FREELANCER
  {
    id: 'planilla-saas-freelance',
    title: 'Planilla — SaaS de Nómina para Panamá',
    description: 'Sistema de nómina empresarial multi-tenant con cumplimiento Ley 462 (CSS), SE, ISR y regulaciones laborales en Panamá.',
    longDescription:
      'Sistema de nómina empresarial multi-tenant para empresas en Panamá, con cumplimiento de la Ley 462 (CSS), Seguro Educativo, ISR y regulaciones laborales locales. Clean Architecture, suscripciones con Stripe y roles por tenant. Disponible en pagly.clau.com.pa (landing) y app.pagly.clau.com.pa (aplicación).',
    technologies: [
      '.NET 9',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'React 19',
      'Vite',
      'Tailwind CSS',
      'PostgreSQL 16+',
      'Stripe',
      'Docker',
      'CapRover',
    ],
    image: planillaImage('215934'),
    github: 'https://github.com/vorluno/Vorluno-Planilla',
    demo: 'https://pagly.clau.com.pa/',
    category: 'fullstack',
    featured: true,
    isFreelance: true,
    features: [
      '🏢 Multi-tenant: varias empresas en una instancia, aislamiento de datos por tenant',
      '💰 Nómina: cálculo CSS, SE, ISR, riesgo profesional, horas extra, adelantos, vacaciones',
      '📋 Flujo: Draft → Calculado → Aprobado → Pagado',
      '👥 Empleados: CRUD, departamentos, cargos, historial salarial y auditoría',
      '💳 Suscripciones: planes Free / Starter / Professional / Enterprise con Stripe',
      '🔐 Roles: Owner, Admin, Manager, Accountant, Employee con permisos por rol',
      '📊 Reportes: comprobantes de pago, reportes CSS, declaraciones ISR, exportación Excel/PDF',
      '🛡️ Filtrado por TenantId en todas las consultas y límites por plan',
      '🔑 JWT con claims tenant_id, tenant_role y plan; middleware de tenant',
      '📡 API REST documentada, DTOs y ActionResponse<T> tipado',
    ],
    gallery: [
      { src: planillaImage('215934'), alt: 'Dashboard Planilla', title: 'Dashboard', description: 'Panel principal del SaaS de nómina con resumen por tenant.' },
      { src: planillaImage('215958'), alt: 'Vista empresas o tenant', title: 'Empresas / Tenants', description: 'Gestión multi-tenant con aislamiento de datos.' },
      { src: planillaImage('220030'), alt: 'Listado de empleados', title: 'Empleados', description: 'CRUD de empleados con departamentos y cargos.' },
      { src: planillaImage('220130'), alt: 'Detalle empleado', title: 'Detalle de empleado', description: 'Historial salarial y auditoría por empleado.' },
      { src: planillaImage('220140'), alt: 'Departamentos y cargos', title: 'Departamentos y cargos', description: 'Organización por departamentos y cargos.' },
      { src: planillaImage('220154'), alt: 'Nómina borrador', title: 'Nómina — Borrador', description: 'Planilla en estado Draft antes del cálculo.' },
      { src: planillaImage('220205'), alt: 'Cálculo de nómina', title: 'Cálculo de nómina', description: 'Cálculo CSS, SE, ISR y riesgo profesional.' },
      { src: planillaImage('220210'), alt: 'Nómina calculada', title: 'Nómina calculada', description: 'Estado Calculado listo para aprobación.' },
      { src: planillaImage('220218'), alt: 'Flujo aprobado pagado', title: 'Flujo Aprobado → Pagado', description: 'Ciclo de vida de la planilla hasta pago.' },
      { src: planillaImage('220227'), alt: 'Horas extra y adelantos', title: 'Horas extra y adelantos', description: 'Gestión de horas extra y adelantos de salario.' },
      { src: planillaImage('220235'), alt: 'Vacaciones', title: 'Vacaciones', description: 'Registro y cálculo de vacaciones.' },
      { src: planillaImage('220239'), alt: 'Reportes CSS', title: 'Reportes CSS', description: 'Reportes para cumplimiento Ley 462 (CSS).' },
      { src: planillaImage('220254'), alt: 'Declaraciones ISR', title: 'Declaraciones ISR', description: 'Declaraciones de impuesto sobre la renta.' },
      { src: planillaImage('220304'), alt: 'Comprobantes de pago', title: 'Comprobantes de pago', description: 'Generación de comprobantes para empleados.' },
      { src: planillaImage('220314'), alt: 'Exportación Excel PDF', title: 'Exportación Excel/PDF', description: 'Exportación según plan de suscripción.' },
      { src: planillaImage('220319'), alt: 'Suscripciones Stripe', title: 'Suscripciones Stripe', description: 'Planes Free, Starter, Professional, Enterprise.' },
      { src: planillaImage('220324'), alt: 'Portal de facturación', title: 'Portal de facturación', description: 'Webhooks y portal de facturación con Stripe.' },
      { src: planillaImage('220329'), alt: 'Roles y permisos', title: 'Roles y permisos', description: 'Owner, Admin, Manager, Accountant, Employee.' },
      { src: planillaImage('220335'), alt: 'Configuración tenant', title: 'Configuración por tenant', description: 'Ajustes y límites por plan.' },
      { src: planillaImage('220521'), alt: 'Vista nómina', title: 'Vista de nómina', description: 'Resumen de planilla por período.' },
      { src: planillaImage('220527'), alt: 'Detalle cálculo', title: 'Detalle de cálculo', description: 'Desglose de deducciones y devengados.' },
      { src: planillaImage('220533'), alt: 'Empleados listado', title: 'Listado de empleados', description: 'Tabla de empleados con filtros.' },
      { src: planillaImage('220542'), alt: 'Reportes', title: 'Reportes', description: 'Panel de reportes y exportaciones.' },
      { src: planillaImage('220546'), alt: 'Dashboard métricas', title: 'Métricas y resumen', description: 'Indicadores del tenant.' },
      { src: planillaImage('220549'), alt: 'Configuración', title: 'Configuración', description: 'Parámetros del sistema de nómina.' },
      { src: planillaImage('220555'), alt: 'Auditoría', title: 'Auditoría', description: 'Historial y trazabilidad de cambios.' },
      { src: planillaImage('220732'), alt: 'Pantalla Planilla', title: 'Planilla', description: 'Vista principal de procesamiento de nómina.' },
      { src: planillaImage('220756'), alt: 'Pantalla Planilla 2', title: 'Procesamiento de nómina', description: 'Flujo de cálculo y aprobación.' },
      { src: planillaImage('220812'), alt: 'Pantalla Planilla 3', title: 'Resumen de nómina', description: 'Resumen antes de marcar como pagado.' },
      { src: planillaImage('220848'), alt: 'Pantalla Planilla 4', title: 'Nómina pagada', description: 'Estado final Pagado y comprobantes.' },
    ],
    readmeContent: `Planilla — SaaS de Nómina para Panamá. Sistema de nómina empresarial multi-tenant para empresas en Panamá, con cumplimiento de la Ley 462 (CSS), Seguro Educativo, ISR y regulaciones laborales locales.

**Qué hace:**
- Multi-tenant: varias empresas en una sola instancia, con aislamiento de datos por tenant.
- Nómina: cálculo de planilla (CSS, SE, ISR, riesgo profesional), horas extra, adelantos, vacaciones y flujo Draft → Calculado → Aprobado → Pagado.
- Empleados: CRUD, departamentos, cargos, historial salarial y auditoría.
- Suscripciones: planes Free / Starter / Professional / Enterprise con Stripe (pagos, webhooks, portal de facturación).
- Roles: Owner, Admin, Manager, Accountant, Employee con permisos por rol.
- Reportes: comprobantes de pago, reportes CSS, declaraciones ISR y exportación Excel/PDF según plan.

**Stack:**
- Backend: .NET 9, ASP.NET Core Web API, Entity Framework Core, ASP.NET Core Identity + JWT.
- Frontend: React 19, Vite, Tailwind CSS, Lucide Icons, Recharts.
- Base de datos: PostgreSQL 16+.
- Pagos: Stripe (suscripciones y facturación).
- Arquitectura: Clean Architecture (Domain / Application / Infrastructure / Web).
- Deploy: Docker, CapRover, DigitalOcean.

**Destacado técnico:**
- Filtrado por TenantId en todas las consultas y verificación de límites por plan antes de crear recursos.
- JWT con claims tenant_id, tenant_role y plan; middleware de tenant en cada request.
- API REST documentada, DTOs en lugar de entidades expuestas y respuestas tipadas (ActionResponse<T>).`,
  },
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

];

// Exportar proyectos separados por tipo
export const freelanceProjects = projects.filter((p) => p.isFreelance);
export const personalProjects = projects.filter((p) => !p.isFreelance);
