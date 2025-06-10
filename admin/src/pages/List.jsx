import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { backendUrl, currency } from '../App'
import {toast} from 'react-toastify' 

const List = ({token}) => {

 const[list,setList]=useState([])
 
 const fetchList=async()=>{
  try {
    
    const response=await axios.get(backendUrl+'/api/product/list' )
    if(response.data.success){
      setList(response.data.products)
    } else{
      toast.error(response.data.message)
    }
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
 }
 const removeProduct=async(id)=>{
  try {

    const response=await axios.post(backendUrl+ '/api/product/remove',{id}, {headers:{token}})
    if(response.data.success){
      toast.success(response.data.message)
      await fetchList();
    }else{
      toast.error(response.data.message)
    }
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}
 useEffect(()=>{
 fetchList()


 },[])


 return (
  <>
    <p className="mb-2 px-4 font-semibold text-lg">All Products List</p>

    <div className="flex px-4 flex-col gap-2">
      {/* Header for larger screens */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border border-gray-200 bg-gray-100 text-sm font-bold">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className='text-center'>Action</b>
      </div>

      {/* Product Rows */}
      {list.map((item, index) => (
        <div key={index}>
          {/* Mobile layout */}
          <div className="block  md:hidden relative border border-gray-100 p-3 text-sm space-y-2 shadow-md">
            <div className="flex items-center gap-2">
              <img src={item.image[0]} alt={item.name} className="w-14 h-14 object-cover rounded" />
              <p className="font-medium">{item.name}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Category:</p>
              <p>{item.category}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Price:</p>
              <p>{currency}{item.price}</p>
            </div>
            <div className="flex justify-end">
              <p onClick={()=>removeProduct(item._id)} className=" absolute top-2 right-2 text-gray-400 hover:text-red-700 cursor-pointer text-lg">X</p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-3 border border-gray-100 text-sm">
            <img className="w-12 h-12 object-cover rounded" src={item.image[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p onClick={()=>removeProduct(item._id)} className="text-right md:text-center text-gray-400 hover:text-red-700 cursor-pointer text-lg">X</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

}

export default List