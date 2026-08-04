"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'default' | 'monochrome' | 'white' | 'dark';
  animated?: boolean;
}

export function Logo({ className = '', size = 40, variant = 'default', animated = false }: LogoProps) {
  const isMono = variant === 'monochrome';
  const isWhite = variant === 'white';
  const isDark = variant === 'dark';

  // Base colors
  const primaryColor = isMono ? 'currentColor' : isWhite ? '#FFFFFF' : isDark ? '#000000' : '#FFFFFF';
  const arrowGradientStart = isMono || isWhite || isDark ? primaryColor : '#00F0FF';
  const arrowGradientEnd = isMono || isWhite || isDark ? primaryColor : '#003BFF';
  const coinColor = isMono || isWhite || isDark ? primaryColor : '#FFD700';

  const svgContent = (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={`arrowGrad-${variant}`} x1="20" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor={arrowGradientStart} />
          <stop offset="1" stopColor={arrowGradientEnd} />
        </linearGradient>
        <linearGradient id={`coinGrad-${variant}`} x1="60" y1="20" x2="90" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor={coinColor} />
          <stop offset="1" stopColor={isMono || isWhite || isDark ? primaryColor : '#D4AF37'} />
        </linearGradient>
      </defs>

      {/* The "R" shape */}
      <path 
        d="M25 80V25C25 25 35 25 45 25C55 25 60 30 60 40C60 50 55 55 45 55H35" 
        stroke={primaryColor} 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* The swooping Arrow forming the "N" */}
      <motion.path 
        d="M15 75C40 75 60 50 80 25V75" 
        stroke={`url(#arrowGrad-${variant})`} 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        initial={animated ? { pathLength: 0 } : false}
        animate={animated ? { pathLength: 1 } : false}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path 
        d="M70 25H80V35" 
        stroke={`url(#arrowGrad-${variant})`} 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        initial={animated ? { opacity: 0 } : false}
        animate={animated ? { opacity: 1 } : false}
        transition={{ delay: 1.2, duration: 0.3 }}
      />

      {/* The Gold Coin with Dollar Sign */}
      <motion.g
        initial={animated ? { y: -10, opacity: 0 } : false}
        animate={animated ? { y: 0, opacity: 1 } : false}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      >
        <circle cx="75" cy="25" r="15" fill={`url(#coinGrad-${variant})`} />
        <text 
          x="75" 
          y="31" 
          fontSize="18" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif" 
          textAnchor="middle" 
          fill={isMono || isWhite || isDark ? (isWhite ? '#000' : '#FFF') : '#000'}
        >
          $
        </text>
      </motion.g>
    </svg>
  );

  return svgContent;
}
