import React from 'react'

const Title = ({title,des}) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='text-2xl text-red-500 font-light font-montserrat'>{title}</h4>
      <h3 className='text-5xl font-bold'>{des}</h3>
    </div>
  )
}

export default Title
