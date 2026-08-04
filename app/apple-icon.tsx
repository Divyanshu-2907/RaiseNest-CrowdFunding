import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B1120',
        }}
      >
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* The R */}
          <path d="M25 80V25C25 25 35 25 45 25C55 25 60 30 60 40C60 50 55 55 45 55H35" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* The Arrow */}
          <path d="M15 75C40 75 60 50 80 25V75" stroke="#00d2ff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M70 25H80V35" stroke="#00d2ff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* The Coin */}
          <circle cx="75" cy="25" r="15" fill="#FFD700" />
          <path d="M75 17v16M77 19c-1.5-1.5-4.5-1.5-4.5 1 0 2.5 5 2.5 5 5 0 2.5-3 2.5-4.5 1" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
