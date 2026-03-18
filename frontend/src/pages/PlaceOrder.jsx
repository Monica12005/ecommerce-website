
// import React, { useContext, useState } from "react"
// import { ShopContext } from "../context/shopContext"
// import { useNavigate } from "react-router-dom"


// const PlaceOrder = () => {
//   const {navigate ,backendUrl , token , cartItems , setCartItems, getCartAmount,} = useContext(ShopContext)
//   const [formData , setFormData] = useState({
//     firstName :'',
//     lastName :'',
//     email:'',
//     street:'',
//     city:'',
//     state:'',
//     zipcode:'',
//     country:'',
//     phone:'' 
//     })

//     const onChangeHandler = (event)=>{
//       const name = event.target.name
//       const value = event.target.value

//       setFormData(data=>({...data,[name]:value}))
//     }
//      const onsubmitHandler= async (event)=>{
//       event.preventDefault()
//       try {
//         let orderItems =[]
//         for (const item in cartItems [items])
//       } catch (error) {
        
//       }

//      } 

//   const navigate = useNavigate()

//   const {
//     currency,
//     delivery_fee,
//     getCartCount,
//     getCartAmount,
//     placeOrder
//   } = useContext(ShopContext)

//   const [paymentMethod, setPaymentMethod] = useState("cod")

//   const onSubmitHandler = (e) => {
//     e.preventDefault()

//     placeOrder(paymentMethod)

//     navigate("/orders")   // ✅ must be lowercase
//   }

//   return (
//     <form 
//       onSubmit={onSubmitHandler}
//       className="flex flex-col sm:flex-row gap-10 pt-16 px-6"
//     >

//       {/* LEFT SIDE */}
//       <div className="flex-1">
//         <h2 className="text-2xl font-semibold mb-6">
//           DELIVERY INFORMATION
//         </h2>

//         <input onChange={onChangeHandler}name='firstName' value={formData.firstName  } required placeholder="First Name" className="border p-2 w-full mb-3" />
//         <input onChange={onChangeHandler}name='lastName' value={formData.lastName  } required placeholder="Last Name" className="border p-2 w-full mb-3" />
//         <input onChange={onChangeHandler}name='email' value={formData.email  } required placeholder="Email" className="border p-2 w-full mb-3" />
//         <input onChange={onChangeHandler}name='street' value={formData.street  } required placeholder="Street" className="border p-2 w-full mb-3" />
//         <input onChange={onChangeHandler}name='city' value={formData.city  } required placeholder="City" className="border p-2 w-full mb-3" />
//         <input onChange={onChangeHandler}name='state' value={formData.state  } required placeholder="State" className="border p-2 w-full mb-3" />
//         <input onChange={onChangeHandler}name='zipcode' value={formData.zipcode  } required placeholder="Zipcode" className="border p-2 w-full mb-3" />
//         <input onChange={onChangeHandler}name='country' value={formData.country  } required placeholder="country" className="border p-2 w-full mb-3" />
//          <input onChange={onChangeHandler}name='phone' value={formData.phone  } required placeholder="Phone" className="border p-2 w-full mb-3" />
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="w-full sm:w-96 border p-6 h-fit">

//         <h2 className="text-xl font-semibold mb-6">
//           CART TOTAL
//         </h2>

//         <p>Total Products: {getCartCount()}</p>
//         <p>Subtotal: {currency}{getCartAmount().toFixed(2)}</p>
//         <p>Delivery Fee: {currency}{delivery_fee}</p>

//         <p className="text-lg font-semibold mb-6">
//           Total: {currency}
//           {(getCartAmount() + delivery_fee).toFixed(2)}
//         </p>

//         <h3 className="font-semibold mb-3">Payment Method</h3>

//         {["razorpay", "stripe", "cod"].map(method => (
//           <div
//             key={method}
//             onClick={() => setPaymentMethod(method)}
//             className={`border p-3 mb-3 cursor-pointer rounded flex justify-between items-center ${
//               paymentMethod === method
//                 ? "border-green-600 bg-green-50"
//                 : ""
//             }`}
//           >
//             <span>{method.toUpperCase()}</span>

//             {paymentMethod === method && (
//               <div className="w-3 h-3 bg-green-600 rounded-full"></div>
//             )}
//           </div>
//         ))}

//         <button
//           type="submit"
//           className="bg-black text-white w-full py-3 mt-6"
//         >
//           Place Order
//         </button>

//       </div>

//     </form>
//   )
// }

// export default PlaceOrder

import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {

  const navigate = useNavigate();

  const {
    backendUrl,
    token,
    cartItems,
    setCartItems,
    products,
    currency,
    delivery_fee,
    getCartAmount
  } = useContext(ShopContext);

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_YourKey',
      amount: order.amount,
      currency: order.currency,
      name: 'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          // verify payment endpoint
          const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } })
          if (data.success) {
            setCartItems({})
            navigate('/orders')
          }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {

      let orderItems = [];

      for (const itemId in cartItems) {

        const product = products.find((p) => p._id === itemId);
        if (!product) continue;

        for (const size in cartItems[itemId]) {

          const quantity = cartItems[itemId][size].quantity;

          if (quantity > 0) {

            orderItems.push({
              productId: itemId,
              name: product.name,
              price: product.price,
              size,
              quantity,
              image: product.image[0]
            });
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        paymentMethod
      };

      if (paymentMethod === "cod") {
        const response = await axios.post(
          backendUrl + "/api/order/place",
          orderData,
          { headers: { token } }
        );

        if (response.data.success) {
          toast.success("Order Placed Successfully 🎉");
          setCartItems({});
          localStorage.removeItem("cartItems");
          navigate("/orders");
        } else {
          toast.error(response.data.message);
        }
      } else if (paymentMethod === "razorpay") {
        const response = await axios.post(
          backendUrl + "/api/order/razorpay",
          orderData,
          { headers: { token } }
        );

        if (response.data.success) {
          initPay(response.data.order);
        } else {
          toast.error(response.data.message || "Razorpay Error: Check your API Keys.");
        }
      }

    } catch (error) {
      console.log(error);
      toast.error("Order Failed ❌");
    }
  };

  return (

    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row gap-10 pt-16 px-6"
    >

      {/* LEFT SIDE */}
      <div className="flex-1">

        <h2 className="text-2xl font-semibold mb-6">
          DELIVERY INFORMATION
        </h2>

        <input name="firstName" value={formData.firstName} onChange={onChangeHandler} required placeholder="First Name" className="border p-2 w-full mb-3" />
        <input name="lastName" value={formData.lastName} onChange={onChangeHandler} required placeholder="Last Name" className="border p-2 w-full mb-3" />
        <input name="email" value={formData.email} onChange={onChangeHandler} required placeholder="Email" className="border p-2 w-full mb-3" />
        <input name="street" value={formData.street} onChange={onChangeHandler} required placeholder="Street" className="border p-2 w-full mb-3" />
        <input name="city" value={formData.city} onChange={onChangeHandler} required placeholder="City" className="border p-2 w-full mb-3" />
        <input name="state" value={formData.state} onChange={onChangeHandler} required placeholder="State" className="border p-2 w-full mb-3" />
        <input name="zipcode" value={formData.zipcode} onChange={onChangeHandler} required placeholder="Zipcode" className="border p-2 w-full mb-3" />
        <input name="country" value={formData.country} onChange={onChangeHandler} required placeholder="Country" className="border p-2 w-full mb-3" />
        <input name="phone" value={formData.phone} onChange={onChangeHandler} required placeholder="Phone" className="border p-2 w-full mb-3" />

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full sm:w-96 border p-6 h-fit">

        <h2 className="text-xl font-semibold mb-6">
          CART TOTAL
        </h2>

        <p>Subtotal: {currency}{getCartAmount().toFixed(2)}</p>

        <p>Delivery Fee: {currency}{delivery_fee}</p>

        <p className="text-lg font-semibold mb-6">
          Total: {currency}{(getCartAmount() + delivery_fee).toFixed(2)}
        </p>

        <h3 className="font-semibold mb-3">Payment Method</h3>

        {["razorpay", "stripe", "cod"].map((method) => (

          <div
            key={method}
            onClick={() => {
              if (method === "razorpay" || method === "stripe") {
                toast.info("Updating Soon! Please select COD instead.", { autoClose: 2000 })
              } else {
                setPaymentMethod(method)
              }
            }}
            className={`border p-3 mb-3 cursor-pointer rounded flex justify-between items-center ${
              paymentMethod === method
                ? "border-green-600 bg-green-50"
                : ""
            }`}
          >

            <span>{method.toUpperCase()}</span>

            {paymentMethod === method &&
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            }

          </div>
        ))}

        <button
          type="submit"
          className="bg-black text-white w-full py-3 mt-6"
        >
          Place Order
        </button>

      </div>

    </form>
  );
};

export default PlaceOrder;