import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'


const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("men")
  const [subCategory, setSubCategory] = useState("t-shirt")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))


      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        setName("");
        setDescription("");
        setPrice("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);

      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error.message);
      toast.error(error.message)

    }
  }


  return (
    <div className='bg-white shadow-[0_4px_30px_rgb(0,0,0,0.03)] border border-gray-100 p-8 md:p-10 rounded-2xl w-full max-w-4xl transition-all duration-500 hover:shadow-[0_10px_40px_rgb(0,0,0,0.05)]'>
      <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-6'>
        
        {/* IMAGE UPLOAD */}
        <div className='w-full'>
          <p className='text-xs font-bold text-gray-500 tracking-widest mb-3 uppercase' >Upload Main Images</p>
          <div className='flex gap-4 overflow-x-auto pb-2'>
            <label htmlFor='image1' className="cursor-pointer group relative">
              <img className='w-24 h-24 object-cover rounded-xl border-2 border-dashed border-gray-300 group-hover:border-[#5e60ce] transition-colors p-1' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
              <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>
            <label htmlFor='image2' className="cursor-pointer group relative">
              <img className='w-24 h-24 object-cover rounded-xl border-2 border-dashed border-gray-300 group-hover:border-[#5e60ce] transition-colors p-1' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
              <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>
            <label htmlFor='image3' className="cursor-pointer group relative">
              <img className='w-24 h-24 object-cover rounded-xl border-2 border-dashed border-gray-300 group-hover:border-[#5e60ce] transition-colors p-1' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
              <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
            </label>
            <label htmlFor='image4' className="cursor-pointer group relative">
              <img className='w-24 h-24 object-cover rounded-xl border-2 border-dashed border-gray-300 group-hover:border-[#5e60ce] transition-colors p-1' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
              <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
            </label>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className='w-full'>
          <p className='text-xs font-bold text-gray-500 tracking-widest mb-2 uppercase'>Product Name</p>
          <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[600px] px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#5e60ce]/20 focus:border-[#5e60ce] transition-all outline-none text-gray-800 font-medium shadow-sm' type='text' placeholder='e.g. Mens Cotton Casual Shirt' required />
        </div>

        <div className='w-full'>
          <p className='text-xs font-bold text-gray-500 tracking-widest mb-2 uppercase'>Product Description</p>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[600px] px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#5e60ce]/20 focus:border-[#5e60ce] transition-all outline-none text-gray-800 font-medium shadow-sm min-h-[120px] resize-y' type='text' placeholder='Write detailed content here...' required />
        </div>

        {/* COMBINED FILTERS */}
        <div className='flex flex-col md:flex-row gap-6 w-full max-w-[600px]'>
          <div className="flex-1">
            <p className='text-xs font-bold text-gray-500 tracking-widest mb-2 uppercase'>Category</p>
            <select onChange={(e) => setCategory(e.target.value)} className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#5e60ce]/20 focus:border-[#5e60ce] transition-all outline-none text-gray-800 font-medium shadow-sm cursor-pointer'>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className="flex-1">
            <p className='text-xs font-bold text-gray-500 tracking-widest mb-2 uppercase'>Sub Category</p>
            <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#5e60ce]/20 focus:border-[#5e60ce] transition-all outline-none text-gray-800 font-medium shadow-sm cursor-pointer'>
              <option value="t-shirt">T-shirt</option>
              <option value="jeans">Jeans</option>
              <option value="jacket">Jacket</option>
              <option value="hoodie">Hoodie</option>
            </select>
          </div>
          <div className="w-1/3">
            <p className='text-xs font-bold text-gray-500 tracking-widest mb-2 uppercase'>Price</p>
            <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#5e60ce]/20 focus:border-[#5e60ce] transition-all outline-none text-gray-800 font-bold shadow-sm' type="number" placeholder='25' />
          </div>
        </div>

        {/* SIZES */}
        <div className='w-full'>
          <p className='text-xs font-bold text-gray-500 tracking-widest mb-3 uppercase'>Product Sizes</p>
          <div className='flex flex-wrap gap-3'>
            {["S", "M", "L", "XL", "XXL"].map(size => (
              <div key={size} onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}>
                <p className={`${sizes.includes(size) ? "bg-[#5e60ce] text-white border-[#5e60ce] shadow-[0_4px_12px_rgb(94,96,206,0.3)]" : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"} px-5 py-2.5 rounded-lg border font-semibold cursor-pointer transition-all duration-300 text-sm`}>
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CHECKBOX AND BUTTON */}
        <div className="flex items-center gap-3 mt-4">
          <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" className="w-5 h-5 accent-[#5e60ce] rounded cursor-pointer" />
          <label className='cursor-pointer text-sm font-bold text-gray-700' htmlFor='bestseller'>Add to Bestseller lists</label>
        </div>

        <button type="submit" className="w-full sm:w-auto px-12 py-3.5 mt-4 bg-[#5e60ce] hover:bg-[#4a4c9c] text-white font-bold tracking-widest rounded-xl shadow-[0_8px_15px_rgb(94,96,206,0.25)] hover:shadow-[0_12px_25px_rgb(94,96,206,0.4)] hover:-translate-y-1 transition-all duration-300 uppercase">
          ADD PRODUCT
        </button>

      </form>
    </div>
  )
}

export default Add