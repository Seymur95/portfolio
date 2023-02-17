import React from 'react'
import { LeftBanner } from './LeftBanner'
import RightBanner from './RightBanner'

export const Banner = () => {
  return (
    <div className='w-full flex border-b-2 border-white py-32'>
        <LeftBanner />
        <RightBanner />
    </div>
  )
}
