import userModel from '../models/userModel.js'

//add products to user cart

const addToCart= async (req,res)=>{
    try {
        const {userId,itemId}=req.body
        
        const userData=await userModel.findById(userId)
        let cartData = userData.cartData || {}

        if (cartData[itemId]){
            cartData[itemId] +=1
        }else{
            cartData[itemId]=1
        }
        await userModel.findByIdAndUpdate(userId,{cartData})

        res.json({success:true,message:"Added to Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}

//updata user cart

const updateCart=async(req,res)=>{
try {
    const {userId,itemId,quantity}=req.body

    const userData=await userModel.findById(userId)
    let cartData = userData.cartData || {}

    cartData[itemId]=quantity

    await userModel.findByIdAndUpdate(userId,{cartData})
    res.json({success:true,message: "Updated Cart"})


} catch (error) {
     console.log(error)
     res.json({success:false, message:error.message})
    
}

}

//get user cart data

const getUserCart=async(req,res)=>{
    try {
        
        const{userId}=req.body

        const userData=await userModel.findById(userId)
        let cartData = userData.cartData || {}
        res.json({success:true, cartData})

    } catch (error) {
        console.log(error)
     res.json({success:false, message:error.message})
        
    }

}

export {addToCart, updateCart, getUserCart}