import { SkillCategory } from '@/lib/types';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiFigma,
} from 'react-icons/si';
import { TbBrandVscode, TbDatabase, TbBrandAzure, TbCode } from 'react-icons/tb';

export const skillCategories: SkillCategory[] = [
  {
    category: 'frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 'expert', category: 'frontend' },
      { name: 'Next.js', icon: SiNextdotjs, level: 'expert', category: 'frontend' },
      { name: 'TypeScript', icon: SiTypescript, level: 'advanced', category: 'frontend' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'expert', category: 'frontend' },
      { name: 'HTML5', icon: SiHtml5, level: 'expert', category: 'frontend' },
      { name: 'CSS3', icon: SiCss3, level: 'expert', category: 'frontend' },
    ],
  },
  {
    category: 'backend',
    skills: [
      { name: 'C#', icon: TbCode, level: 'expert', category: 'backend' },
      { name: '.NET', icon: SiDotnet, level: 'expert', category: 'backend' },
      { name: 'Node.js', icon: SiNodedotjs, level: 'advanced', category: 'backend' },
      { name: 'ASP.NET Core', icon: SiDotnet, level: 'expert', category: 'backend' },
      { name: 'Entity Framework', icon: SiDotnet, level: 'advanced', category: 'backend' },
    ],
  },
  {
    category: 'database',
    skills: [
      {
        name: 'SQL Server',
        icon: TbDatabase,
        level: 'expert',
        category: 'database',
      },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 'advanced', category: 'database' },
      { name: 'Supabase', icon: SiSupabase, level: 'intermediate', category: 'database' },
    ],
  },
  {
    category: 'devops',
    skills: [
      { name: 'Docker', icon: SiDocker, level: 'advanced', category: 'devops' },
      { name: 'Azure', icon: TbBrandAzure, level: 'intermediate', category: 'devops' },
      { name: 'CapRover', icon: SiDocker, level: 'intermediate', category: 'devops' },
      { name: 'GitHub Actions', icon: SiGithubactions, level: 'intermediate', category: 'devops' },
      { name: 'Git', icon: SiGit, level: 'expert', category: 'devops' },
    ],
  },
  {
    category: 'tools',
    skills: [
      { name: 'VS Code', icon: TbBrandVscode, level: 'expert', category: 'tools' },
      { name: 'Cursor', icon: TbBrandVscode, level: 'advanced', category: 'tools' },
      { name: 'Figma', icon: SiFigma, level: 'intermediate', category: 'tools' },
    ],
  },
];
