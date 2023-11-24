import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const params = useParams()

  return (
    <div className='text-6xl font-bold underline color-red-100 text-center'>
      Product Detail Page: {params.id}
    </div>
  )
}

export default Product