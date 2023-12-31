import React from 'react'
import "./ProductDetails.module.css"
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import {Helmet} from "react-helmet";

export default function ProductDetails() {

  let params =useParams();
function getAllDetails(){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${params.id}`)
}

let {data , isError , isLoading , isFetching } = useQuery(`productDetails` , getAllDetails )

let Data = data?.data.data
console.log(Data);
  return <>

{Data?

<div className="row align-items-center py-3">
            <Helmet>
                
                <title>{Data.title}</title>
                
            </Helmet>
  <div className="col-md-4">
<img className='w-100' src={Data.imageCover} alt={Data.title} />

  </div>
  <div className="col-md-8 ">

    <h3>{Data.title}</h3>
    <p className='text-main font-sm'>{Data.description}</p>
    <p>{Data.category.name}</p>
    <div className='d-flex  justify-content-between'>
      <span>Price : {Data.price}</span>
      <p>
      <span><i className='me-2 fa fa-star rating-color'></i></span>
      <span>{Data.ratingsAverage}</span>

      </p>
    </div>
    <button className='btn bg-main text-white w-100 btn-sm '>+ Add To Cart</button>
  </div>
</div>:""}




  </>
}
