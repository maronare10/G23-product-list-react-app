import React, { useState, useEffect } from 'react'
import { fetchProducts } from '../services/products'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(function () {
    fetchProducts()
      .then(data => {
        setProducts(data.products)
      })
  }, [])


  return (
    <div className='md:w-11/12 flex flex-col'>
      <div className='flex flex-col justify-between mt-3 mb-1'>

        <div className='mb-6 flex justify-between items-center'>
          <div>
            <h1 className='text-5xl font-semi-bold mb-1'>Productos</h1>
            <small className='text-lg'>Listado de productos</small>
          </div>
          <div className='flex--off gap-3 items-center'>
            <button className='px-4 py-2 text-sm font-medium text-wuite bg-emerald-500 rounded hover:bg-emerald-400'>
              New Product
            </button>
          </div>
        </div>

        <div className='overflow-x-auto relative sm-rounded-lg'>

          <table className='w-full text-sm text-left -text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='py-3 px-6' >#</th>
                <th scope='col' className='py-3 px-6' >Image</th>
                <th scope='col' className='py-3 px-6' >Title</th>
                <th scope='col' className='py-3 px-6' >Price</th>
                <th scope='col' className='py-3 px-6' >Stock</th>
                <th scope='col' className='py-3 px-6' >Category</th>
                <th scope='col' className='py-3 px-6' >Actions</th>
              </tr>
            </thead>
            <tbody>
            {
              products?.map(product => {
                return (
                <tr className='bg-white border-b hover:bg-gray-50 ' key={product.id} >
                  <td className='py-4 px-6 font-semibold text-gray-900'>{product.id}</td>

                  <td className='p-4 w-36 cursor-pointer'>
                    <img src={product.thumbnail} className='aspect-video object-contain' width={144} alt="" />
                  </td>

                  <td className='py-4 px-6 text-gray-900'>
                    <div className='font-semibold mb-1' >{product.title}</div>
                    <div className='font-light' >{product.brand}</div>
                  </td>

                  <td className='py-4 px-6'>{product.price}</td>
                  <td className='py-4 px-6'>{product.stock}</td>

                  <td>
                    <div className='font-semibold -mb-1'>{product.category}</div>
                  </td>

                  <td>
                    <button className='px-4 py-2 text-sm font-medium text-white  rounded bg-sky-500 hover:bg-sky-400'>
                      View
                    </button>
                    <button className='px-4 py-2 text-sm font-medium text-white  rounded bg-amber-500 hover:bg-amber-400'>
                      Edit
                    </button>
                    <button className='px-4 py-2 text-sm font-medium text-white  rounded bg-red-500 hover:bg-red-400'>
                      Delete
                    </button>
                  </td>
                </tr>
                )
              })
            }
          </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Products