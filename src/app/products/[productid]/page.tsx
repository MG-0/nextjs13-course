import React from 'react'
import { Metadata } from 'next'

export const generateMetadata = ({params}:{params:{productid:string}}):Metadata=>{
  
    return{
        title:`product ${params.productid}`
    }
     
}

const ProductId = ({params}:{params:{productid:string}}) => {


  return (
    <div>ProductId Page: {params.productid}</div>
  )
}

export default ProductId















