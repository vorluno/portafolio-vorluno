export type WorkExperience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bulletKeys: string[];
  tech?: string[];
  current?: boolean;
};

export type Education = {
  id: string;
  degreeKey: string;
  institution: string;
  year: string;
  ongoing?: boolean;
};

export const workExperiences: WorkExperience[] = [
  {
    id: 'ancer',
    role: 'DESARROLLADOR .NET',
    company: 'Ancer.Network',
    period: 'Ene 2025 – Presente',
    location: 'Remoto',
    bulletKeys: ['ancer_b1', 'ancer_b2', 'ancer_b3'],
    tech: ['.NET', 'C#', 'SQL Server', 'React', 'ERP'],
    current: true,
  },
  {
    id: 'clau-kyc',
    role: 'DESARROLLADOR FREELANCE',
    company: 'Cáceres López Auditores',
    period: 'Nov 2025',
    location: 'Panamá',
    bulletKeys: ['clauKyc_b1', 'clauKyc_b2', 'clauKyc_b3'],
    tech: ['ASP.NET Core', 'React', 'Docker', 'KYC'],
  },
  {
    id: 'clau-contable',
    role: 'ASISTENTE CONTABLE & SOPORTE TÉCNICO',
    company: 'Cáceres López Auditores',
    period: 'Ene 2024 – Dic 2025',
    location: 'Panamá',
    bulletKeys: ['clauContable_b1', 'clauContable_b2', 'clauContable_b3'],
    tech: ['Excel', 'Soporte TI', 'Contabilidad'],
  },
];

export type Course = {
  id: string;
  titleKey: string;
  institution: string;
  hours?: number;
  date: string;
  ongoing?: boolean;
};

export const courseEntries: Course[] = [
  {
    id: 'inadeh-fundamentos',
    titleKey: 'inadeh_fundamentos',
    institution: 'INADEH',
    hours: 40,
    date: 'Ago 2025',
  },
  {
    id: 'inadeh-calc-basica',
    titleKey: 'inadeh_calcBasica',
    institution: 'INADEH',
    hours: 50,
    date: 'Sep 2025',
  },
  {
    id: 'inadeh-calc-intermedio',
    titleKey: 'inadeh_calcIntermedio',
    institution: 'INADEH',
    hours: 60,
    date: 'Oct 2025',
  },
  {
    id: 'udemy-csharp-poo',
    titleKey: 'udemy_csharpPoo',
    institution: 'Udemy',
    date: '2026 – Presente',
    ongoing: true,
  },
  {
    id: 'google-ai',
    titleKey: 'google_ai',
    institution: 'Google',
    date: '2026 – Presente',
    ongoing: true,
  },
];

export const educationEntries: Education[] = [
  {
    id: 'umecit',
    degreeKey: 'umecit_degree',
    institution: 'UMECIT',
    year: '2024 – Presente',
    ongoing: true,
  },
  {
    id: 'iced',
    degreeKey: 'iced_degree',
    institution: 'ICED Panama',
    year: '2020 – 2023',
  },
];
