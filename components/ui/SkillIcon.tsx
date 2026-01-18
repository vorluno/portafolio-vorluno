'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/lib/types';

interface SkillIconProps {
  skill: Skill;
  index: number;
}

export default function SkillIcon({ skill, index }: SkillIconProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
    >
      <Icon className="text-4xl text-primary dark:text-primary" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
    </motion.div>
  );
}
