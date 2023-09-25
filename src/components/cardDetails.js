import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from 'react-redux'



export default function CardDetails() {

    const products = useSelector(state => state)
    console.log(products);
  return (
    <>
    <div className='alert alert-success'>
        <div className='text-center'>
            Total products - {products.products.length}  |  Total amount - {
                products.products.length > 0 ? 
                products.products.reduce((a,b) => a+b.price,0) : 0
            }
        </div>
    </div>
    </>
  )
}
