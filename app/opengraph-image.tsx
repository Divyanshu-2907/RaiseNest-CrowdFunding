import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B1120',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
          <svg 
            width="200" 
            height="200" 
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
        
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontFamily: 'sans-serif',
            color: 'white',
            fontWeight: 800,
            letterSpacing: '-0.05em',
            marginBottom: 20
          }}
        >
          RaiseNest
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 32,
            fontFamily: 'sans-serif',
            color: '#a1a1aa',
            fontWeight: 500,
          }}
        >
          Turn Your Ideas Into Funded Reality.
        </div>
      </div>
    ),
    { ...size }
  )
}
