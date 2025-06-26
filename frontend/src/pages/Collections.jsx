import React, {useContext,useEffect,useState} from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import { assets } from '../assets/assets'

  const Collections = () => {
  const {products, search,showSearch}=useContext(ShopContext)
  const [filterProducts,setFilterProducts]=useState([])
  const [showFilter, setShowFilter]=useState(false)
  const [category,setCategory]=useState([])
  const [subCategory, setSubCategory]=useState([])
  const [sortType, setSortType]=useState('relevent')
  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item !==e.target.value))
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item !== e.target.value))
    }else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
    let productCopy=products.slice()
    if(showSearch&& search){
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productCopy=productCopy.filter(item=> category.includes(item.category))
    }
    if(subCategory.length>0){
      productCopy=productCopy.filter(item=>  subCategory.includes(item.subCategory))
    }
    setFilterProducts(productCopy)
  }
  const sortProduct=()=>{
    const fpCopy=filterProducts.slice()
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)))
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
        break;

      default:
        applyFilter()
    }
  }
  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct()
  },[sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'>
      {/* Filter options*/}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter? 'rotate-90':''}`} src={assets.dropdown_icon}/>
        </p>
        {/*Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input className='w-3' type='checkbox' value={'Earings'} onChange={toggleCategory}/>Earings</p>
            <p className='flex gap-2'><input className='w-3' type='checkbox' value={'Necklace'} onChange={toggleCategory}/>Necklace</p>
            <p className='flex gap-2'><input className='w-3' type='checkbox' value={'Bangles'} onChange={toggleCategory}/>Bangles</p>
          </div>
        </div>
        {/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'><input className='w-3' type='checkbox' value={'Golden'} onChange={toggleSubCategory}/>Golden</p>
          <p className='flex gap-2'><input className='w-3' type='checkbox' value={'Silver'} onChange={toggleSubCategory} />Silver</p>
          <p className='flex gap-2'><input className='w-3' type='checkbox' value={'Rosegold'} onChange={toggleSubCategory}/>Rose Gold</p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'}/>
            {/*Products sort */}
              <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
                <option value='relavent'>Sort by: Relevence</option>
                <option value='low-high'>Sort by: Low to high</option>
                <option value='high-low'>Sort by: High to low</option>
              </select>
          </div>
          {/* Map Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item, index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
              ))
            }
            
          </div>
        
      </div>

    </div>
  )
}

export default Collections