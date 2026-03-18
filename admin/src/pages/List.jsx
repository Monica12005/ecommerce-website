import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({token}) => {

  const [list , setList] =useState([])
  const [editingId, setEditingId] = useState(null)
  const [editFormData, setEditFormData] = useState({ name: '', price: '', category: '' })

  const fetchlist = async()=>{
   try{

    const response = await axios.get(backendUrl + '/api/product/list')
    if(response.data.success){
    setList(response.data.products)
}
   else{
    toast.error(response.data.message)
   }
  }
   catch (error){
    console.log(error)
    toast.error(error.message)
   
   }
  }
  const removeProduct = async (id) =>{
    try {
       const response =await axios.post(backendUrl + '/api/product/remove',{id},{headers:{token}})  

       if(response.data.success){
        toast.success(response.data.message)
        await fetchlist();
       } else{
         toast.error(response.data.message)
       }

    } catch (error) {
        console.log(error)
       toast.error(error.message)
   
    }
  }

  const handleEditClick = (item) => {
    setEditingId(item._id)
    setEditFormData({ name: item.name, price: item.price, category: item.category })
  }

  const handleEditSubmit = async (id) => {
    try {
      const payload = {
        id,
        name: editFormData.name,
        price: editFormData.price,
        category: editFormData.category,
      }
      const response = await axios.post(backendUrl + '/api/product/update', payload, { headers: { token } })
      
       if(response.data.success){
        toast.success(response.data.message)
        setEditingId(null)
        await fetchlist();
       } else{
         toast.error(response.data.message)
       }
    } catch(error) {
       console.log(error)
       toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchlist()
  },[])
 return (
  <div className='bg-white shadow-[0_4px_30px_rgb(0,0,0,0.03)] border border-gray-100 p-6 md:p-8 rounded-2xl w-full max-w-6xl transition-all duration-500 hover:shadow-[0_10px_40px_rgb(0,0,0,0.05)]'>
    
    <div className="flex items-center justify-between mb-6">
      <p className='text-xl md:text-2xl font-extrabold text-gray-800 tracking-tight'>All Products List</p>
      <span className="bg-[#5e60ce]/10 text-[#5e60ce] py-1 px-3 rounded-full text-xs font-bold tracking-widest">
        {list.length} ITEMS
      </span>
    </div>

    <div className='flex flex-col rounded-xl overflow-hidden border border-gray-100 shadow-sm'>

      {/* Table Header */}
      <div className='hidden md:grid grid-cols-[1fr_3fr_1.5fr_1fr_1fr] items-center py-4 px-6 bg-gray-50/80 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-widest'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className="text-center">Action</b>
      </div>

      {/* Product Data */}
      {list.length > 0 ? list.map((item, index) => (
        <div
          key={index}
          className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1.5fr_1fr_1fr] items-center py-4 gap-4 px-6 border-b border-gray-100 text-sm bg-white hover:bg-gray-50/50 transition-colors last:border-none group'
        >
          {/* Image */}
          <div className="flex items-center">
             <img className='w-14 h-14 object-cover rounded-lg border border-gray-200' src={item.image[0]} alt="" />
          </div>

          {editingId === item._id ? (
            <>
              {/* EDIT MODE */}
              <input type="text" value={editFormData.name} onChange={(e) => setEditFormData({...editFormData, name: e.target.value})} className='w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5e60ce]/30 focus:border-[#5e60ce] outline-none text-gray-800'/>
              <select value={editFormData.category} onChange={(e) => setEditFormData({...editFormData, category: e.target.value})} className='w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5e60ce]/30 focus:border-[#5e60ce] outline-none text-gray-800'>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
              <input type="number" value={editFormData.price} onChange={(e) => setEditFormData({...editFormData, price: e.target.value})} className='w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5e60ce]/30 focus:border-[#5e60ce] outline-none text-gray-800'/>
            </>
          ) : (
            <>
              {/* DISPLAY MODE */}
              <p className="font-semibold text-gray-700 truncate pr-4">{item.name}</p>
              <p className="text-gray-500 font-medium">{item.category}</p>
              <p className="font-bold text-[#5e60ce]">{currency}{item.price}</p>
            </>
          )}
          
          {/* Actions */}
          <div className='flex flex-row md:justify-center gap-3'>
            {editingId === item._id ? (
              <button onClick={() => handleEditSubmit(item._id)} className='text-white bg-green-500 hover:bg-green-600 px-4 py-1.5 rounded-lg text-xs font-bold tracking-widest transition-colors shadow-sm cursor-pointer'>SAVE</button>
            ) : (
              <button onClick={() => handleEditClick(item)} className='text-[#5e60ce] bg-[#5e60ce]/10 hover:bg-[#5e60ce]/20 px-4 py-1.5 rounded-lg text-xs font-bold tracking-widest transition-colors cursor-pointer'>EDIT</button>
            )}
            <button onClick={()=>removeProduct(item._id)} className='text-red-500 bg-red-500/10 hover:bg-red-500/20 px-4 py-1.5 rounded-lg text-xs font-bold tracking-widest transition-colors cursor-pointer'>DELETE</button>
          </div>
        </div>
      )) : (
        <div className="py-12 text-center text-gray-500 font-medium tracking-wide">
          No products found. Start by adding one!
        </div>
      )}

    </div>
  </div>
)
  
}

export default List