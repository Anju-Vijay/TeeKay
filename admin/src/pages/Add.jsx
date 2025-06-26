import React,{useState} from "react";
import { assets } from "../assets/assets";
import axios from 'axios'
import {backendUrl} from '../App'
import {toast} from 'react-toastify'
const Add = ({token}) => {

const[image1, setimage1]=useState(false)
const[image2, setimage2]=useState(false)
const[image3, setimage3]=useState(false)
const[image4, setimage4]=useState(false)
 
  const[name,setName]=useState("")
  const[description, setDescription]=useState("")
  const[price,setPrice]=useState("")
  const[category,setCategory]=useState("Earings")
  const[subCategory,setSubCategory]=useState("Golden")
  const[bestSeller,setBestSeller]=useState(false)

const onSubmitHandler=async(e)=>{
  e.preventDefault()
  try {
    const formData=new FormData()

    formData.append("name",name)
    formData.append("description",description)
    formData.append("price",price)
    formData.append("category",category)
    formData.append("subCategory",subCategory)
    formData.append("bestSeller",bestSeller)
    
    
    image1 && formData.append("image1",image1)
    image2 && formData.append("image2",image2)
    image3 && formData.append("image3",image3)
    image4 && formData.append("image4",image4)

    const response= await axios.post(backendUrl+"/api/product/add",formData,{headers:{token}})
    if(response.data.success){
      toast.success(response.data.message)
      setName('')
      setDescription('')
      setimage1(false)
      setimage2(false)
      setimage3(false)
      setimage4(false)
    }else{
      toast.error(response.error.message)
    }

  } catch (error) {
    console.log(error)
    toast.error(error.message) 
  }
}
  return (
    <div className="w-[600px] px-2 sm:px-0">
      <form onSubmit={onSubmitHandler} className="flex flex-col w-3/4 max-w-[500px] items-start gap-3">
        <div>
          <p className="mb-2">Upload Image</p>
          <div className="flex gap-2 ">
            <label htmlFor="image1">
              <img className="w-20 cursor-pointer" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
              <input onChange={(e)=>setimage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>

            <label htmlFor="image2">
              <img className="w-20 cursor-pointer" src={!image2 ? assets.upload_area: URL.createObjectURL(image2)} alt="" />
              <input onChange={(e)=>setimage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>

            <label htmlFor="image3">
              <img className="w-20 cursor-pointer" src={!image3 ? assets.upload_area: URL.createObjectURL(image3)} alt="" />
              <input onChange={(e)=>setimage3(e.target.files[0])} type="file" id="image3" hidden />
            </label>

            <label htmlFor="image4">
              <img className="w-20 cursor-pointer" src={!image3 ? assets.upload_area: URL.createObjectURL(image4)} alt="" />
              <input onChange={(e)=>setimage4(e.target.files[0])} type="file" id="image4" hidden />
            </label>
          </div>
        </div>

        <div className="w-full mt-4 ">
          <p className="mb-1">Product Name</p>
          <input onChange={(e)=>setName(e.target.value)} value={name}
            className="w-full max-w-[500px] px-3 py-2"
            type="text"
            placeholder=" Type Here"
            required
          />
        </div>

        <div className="w-full mt-4">
          <p className="mb-1">Product Description</p>
          <textarea onChange={(e)=>setDescription(e.target.value)} value={description}
            className="w-full max-w-[500px] px-3 py-2"
            type="text"
            placeholder="Write Content Here"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:w-full w-3/4 max-w-[500px] sm:gap-8 ">
          <div className="mt-4 w-full">
            <p className="mb-2">Product Category</p>
            <select onChange={(e)=>setCategory(e.target.value)} value={category} className="w-full px-3 py-2 ">
              <option value="Earings">Earings</option>
              <option value="Necklace">Necklace</option>
              <option value="Bangles">Bangles</option>
            </select>
          </div>
          
          <div className="mt-4 w-full">
            <p className="mb-2">Sub Category</p>
            <select onChange={(e)=>setSubCategory(e.target.value)} value={subCategory} className="w-full px-3 py-2">
              <option value="Golden">Golden</option>
              <option value="Silver">Silver</option>
              <option value="Rosegold">Rose Gold</option>
            </select>
          </div>
          <div className="mt-4 w-full">
            <p className=" mb-2">Product Price</p>
            <input onChange={(e)=>setPrice(e.target.value)} value={price}
              className="w-full px-3 py-2"
              type="Number"
              placeholder="25"
            />
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <input onChange={()=>setBestSeller(prev=>!prev)} checked={bestSeller} type="checkbox" id="bestseller"/>
          <label className="cursor-pointer" htmlFor="bestseller">Add to best seller</label>
        </div>
        <button className="w-28 mt-4 py-3 bg-black text-white cursor-pointer rounded" type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Add;
