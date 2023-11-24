import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutLogin = () => {
  return (
    <main className='h-screen flex justify-center w-screen overflow-y-auto bg-gray-100'>
      <div  className='w-full max-w-lg h-96 bg-white border border-gray-200 rounded-md shadow-md sm:p-6 md:p-8 mt-32'>
        <div className='flex flex-col justify-between intems-center gap-3'>
          <Outlet/>
        </div>
      </div>
    </main>
  )
}

export default LayoutLogin