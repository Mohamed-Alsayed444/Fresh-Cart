import React from 'react'
import "./Brands.module.css"
import { useQuery } from 'react-query';
import axios  from 'axios';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export default function Brands() {
  
   function getBrands(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    
  }

  let {data , isError , isFetching , isLoading }= useQuery("getBrands" , getBrands)
  console.log(data?.data.data);


  return <>
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
        
            {data?.data.data.map((brand) => {
              return <div className="col-md-2" key={brand._id}>
                <div className="product m-2 p-2">
                  <img className='w-100 mb-2' src={brand.image} alt="brand" />
                  <h5 className='text-center text-main fw-bolder'>{brand.name}</h5>
                </div>
</div>
            })}
          
      </div>
    }
  </>
}
