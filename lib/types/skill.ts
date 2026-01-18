import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}
