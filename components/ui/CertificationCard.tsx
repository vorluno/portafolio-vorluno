'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

interface CertificationCardProps {
  name: string;
  preview: string;
  file: string;
  issuer: string;
  index: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function CertificationCard({
  name,
  preview,
  file,
  issuer,
  index,
  onMouseEnter,
  onMouseLeave,
}: CertificationCardProps) {
  const handleViewCertificate = () => {
    window.open(file, '_blank');
  };

  // Efecto flotante tipo nube - cada tarjeta tiene un delay diferente
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3 + (index % 3) * 0.5, // 3s, 3.5s, 4s variaciones
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: index * 0.2, // Delay escalonado
    }
  };

  return (
    <motion.div
      animate={floatingAnimation}
      whileHover={{
        scale: 1.05,
        y: -20,
        transition: { duration: 0.3 }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] h-[400px] md:h-[450px] lg:h-[500px]"
    >
      <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-4 h-full flex flex-col transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20">
        {/* Preview Image */}
        <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
          <Image
            src={preview}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
          />
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col">
          <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
            {name}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {issuer}
          </p>

          {/* View Button */}
          <div className="mt-auto">
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              onClick={handleViewCertificate}
            >
              View Certificate
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
