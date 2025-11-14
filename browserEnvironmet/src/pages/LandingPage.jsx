import React from 'react'
import ministryLogo from '../assets/ministryLogo.png'

const LandingPage = () => {
  return (
    
          <div className="h-screen w-full flex flex-col items-center justify-between bg-white">
      {/* Top content */}
      <div className="flex flex-col items-center mt-16 px-4 relative top-40">
        <img
          src={ministryLogo}
          alt="ministry Logo"
          className="w-6- h-60 object-contain"
        />

        <div className="text-center mt-6 leading-tight">
          <p className="font-semibold text-xs tracking-wide">
            THE MINISTRY OF REPENTANCE
          </p>
          <p className="font-semibold text-xs tracking-wide">AND</p>
          <p className="font-semibold text-xs tracking-wide">HOLINESS</p>
        </div>
      </div>

      {/* Arrow */}
      <div className="mb-4">
        <span className="text-[60px] text-blue-600">↓</span>
      </div>

      {/* Bottom curved section */}
      <div className="w-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-full py-10 flex justify-center">
        <p className="text-white font-bold text-2xl">Presents</p>
      </div>
    </div>
    
  )
}

export default LandingPage
