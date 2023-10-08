import React, { useContext, useEffect, useState } from 'react'
import "./FeaturedProducts.module.css"
import axios from 'axios'
import {useQuery} from "react-query"
import { BallTriangle } from  'react-loader-spinner'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'

import toast from 'react-hot-toast';
export default function FeaturedProducts(product) {


  let {addToCart}   = useContext(cartContext)
  
  
  async function addProduct(id){
    
    let response = await addToCart(id);
    if(response.data.status === 'success'){
      toast.success('Product successfully added', {
        duration: 4000,
        position: 'top-center',
      })
    }else{
      toast.error('Something fail , Try again', {
        duration: 4000,
        position: 'top-center',
      })
    }

    // console.log(response);

  }

  function getAllProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products")
  }

  let {isLoading , isError , isFetching , data} = useQuery("featuredProducts" ,getAllProducts )

  return <><h2 className='mt-2'>Featured Products</h2>
  {isLoading? <div className='w-100 d-flex justify-content-center py-5'>
  <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/></div>:<div className="row">
        
            {data?.data.data.map((product) => {
              return <div className="col-md-2" key={product._id}>
                <div className="product m-2 p-2">
                    <Link to={`/productdetails/${product._id}`}>
                  <img className='w-100 mb-2' src={product.imageCover} alt="product" />
                  <h4 className='font-sm text-main'>{product.category.name}</h4>
                  <h3 className='font-sm'>{product.title.split(" ").slice(0 , 3).join(" ")}</h3>
                  <p className='d-flex justify-content-between'>
                    <span>{product.price} EGY</span>
                    <span>
                      <i className='fa fa-star rating-color me-1'></i>
                      {product.ratingsAverage}
                      </span>
                  </p>
                </Link>
                    <button onClick={()=> addProduct(product._id)} className='btn bg-main text-white w-100 btn-sm '>Add To Cart</button>
                </div>
              </div>
            })}
          
      </div>
    }
  
  </>
}
