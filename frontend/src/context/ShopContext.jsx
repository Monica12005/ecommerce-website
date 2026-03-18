// import { createContext, useState, useEffect } from "react"
// import { toast } from "react-toastify"
// import axios from "axios"

// export const ShopContext = createContext()

// const ShopContextProvider = ({ children }) => {

//   const currency = "$"
//   const delivery_fee = 10
//   const backendUrl = import.meta.env.VITE_BACKEND_URL

//   const [cartItems, setCartItems] = useState({})
//   const [orders, setOrders] = useState([])
//   const [products, setProducts] = useState([])
//   const [token ,setToken]=useState('')

//   // ---------------- LOAD ORDERS FROM LOCAL STORAGE ----------------
//   useEffect(() => {
//     const savedOrders = localStorage.getItem("orders")
//     if (savedOrders) {
//       setOrders(JSON.parse(savedOrders))
//     }
//   }, [])

//   // ---------------- SAVE ORDERS TO LOCAL STORAGE ----------------
//   useEffect(() => {
//     localStorage.setItem("orders", JSON.stringify(orders))
//   }, [orders])

//   // ---------------- FETCH PRODUCTS ----------------
//   useEffect(() => {

//     const getProductsData = async () => {
//       try {
//         const response = await axios.get(
//           backendUrl + "/api/product/list"
//         )

//         if (response.data.success) {
//           setProducts(response.data.products)
//         }

//       } catch (error) {
//         console.log(error)
//       }
//     }

//     if (backendUrl) {
//       getProductsData()
//     }

//   }, [backendUrl])

//   // ---------------- ADD TO CART ----------------
//   const addToCart = (itemId, size, quantity) => {

//     if (!size) {
//       toast.error("Please select size ❗")
//       return
//     }

//     setCartItems(prev => {

//       let data = structuredClone(prev)

//       if (!data[itemId]) data[itemId] = {}

//       if (!data[itemId][size]) {
//         data[itemId][size] = {
//           quantity: 0,
//           addedAt: new Date().toLocaleString()
//         }
//       }

//       data[itemId][size].quantity += quantity

//       return data
//     })
//     if (token){
//       try {
//         await axios.post (backendUrl +'/api/cart/add',{itemId,size},{headers:{token}})

//       } 
//       catch (error) {
//         console.log(error)
//         toast.error(error.message)
        
//       }
//     }

//     toast.success("Added to Cart 🛒")
//   }

//   // ---------------- REMOVE FROM CART ----------------
//   const removeFromCart = (itemId, size) => {

//     setCartItems(prev => {

//       let data = structuredClone(prev)

//       if (data[itemId]) {
//         delete data[itemId][size]

//         if (Object.keys(data[itemId]).length === 0) {
//           delete data[itemId]
//         }
//       }

//       return data
//     })
//   }

//   // ---------------- CART COUNT ----------------
//   const getCartCount = () => {

//     let total = 0

//     for (const item in cartItems) {
//       for (const size in cartItems[item]) {
//         total += cartItems[item][size].quantity
//       }
//     }

//     return total
//   }

//   // ---------------- CART AMOUNT ----------------
//   const getCartAmount = () => {

//     let total = 0

//     for (const item in cartItems) {

//       const product = products.find(p => p._id === item)
//       if (!product) continue

//       for (const size in cartItems[item]) {
//         total += product.price * cartItems[item][size].quantity
//       }
//     }

//     return total
//   }

//   // ---------------- PLACE ORDER ----------------
//   const placeOrder = (paymentMethod) => {

//     if (Object.keys(cartItems).length === 0) {
//       toast.error("Cart is empty ❗")
//       return
//     }

//     const orderTime = new Date().toLocaleString()
//     let newOrders = []

//     for (const item in cartItems) {

//       const product = products.find(p => p._id === item)
//       if (!product) continue

//       for (const size in cartItems[item]) {

//         newOrders.push({
//           _id: product._id + "-" + size,
//           name: product.name,
//           image: product.image[0],
//           price: product.price,
//           quantity: cartItems[item][size].quantity,
//           size,
//           orderTime,
//           payment: paymentMethod,
//           status: "Order Placed"
//         })
//       }
//     }

//     setOrders(prev => [...prev, ...newOrders])
//     setCartItems({})
//     toast.success("Order Placed Successfully 🎉")
//   }

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     cartItems,
//     orders,
//     addToCart,
//     removeFromCart,
//     getCartCount,
//     getCartAmount,
//     placeOrder,
//     setToken ,token,
//     backendUrl,

//   }

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   )
// }

// export default ShopContextProvider
import { createContext, useState, useEffect } from "react"
import { toast } from "react-toastify"
import axios from "axios"

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {

  const currency = "$"
  const delivery_fee = 10
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [cartItems, setCartItems] = useState({})
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
  const [token, setToken] = useState("")

  // ---------------- LOAD ORDERS ----------------
  useEffect(() => {
    const savedOrders = localStorage.getItem("orders")
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders))
    }
  }, [])

  // ---------------- SAVE ORDERS ----------------
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders))
  }, [orders])

  // ---------------- FETCH PRODUCTS ----------------
  useEffect(() => {

    const getProductsData = async () => {
      try {
        const response = await axios.get(
          backendUrl + "/api/product/list"
        )

        if (response.data.success) {
          setProducts(response.data.products)
        }

      } catch (error) {
        console.log(error)
      }
    }

    if (backendUrl) {
      getProductsData()
    }

  }, [backendUrl])

  // ---------------- ADD TO CART ----------------
  const addToCart = async (itemId, size, quantity) => {

    if (!size) {
      toast.error("Please select size ❗")
      return
    }

    setCartItems(prev => {

      let data = structuredClone(prev)

      if (!data[itemId]) data[itemId] = {}

      if (!data[itemId][size]) {
        data[itemId][size] = {
          quantity: 0,
          addedAt: new Date().toLocaleString()
        }
      }

      data[itemId][size].quantity += quantity

      return data
    })

    if (token) {
      try {

        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        )

      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }

    toast.success("Added to Cart 🛒")
  }

  // ---------------- REMOVE FROM CART ----------------
  const removeFromCart = (itemId, size) => {

    setCartItems(prev => {

      let data = structuredClone(prev)

      if (data[itemId]) {
        delete data[itemId][size]

        if (Object.keys(data[itemId]).length === 0) {
          delete data[itemId]
        }
      }

      return data
    })
  }

  // ---------------- CART COUNT ----------------
  const getCartCount = () => {

    let total = 0

    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        total += cartItems[item][size].quantity
      }
    }

    return total
  }

  // ---------------- CART AMOUNT ----------------
  const getCartAmount = () => {

    let total = 0

    for (const item in cartItems) {

      const product = products.find(p => p._id === item)
      if (!product) continue

      for (const size in cartItems[item]) {
        total += product.price * cartItems[item][size].quantity
      }
    }

    return total
  }

  // ---------------- PLACE ORDER ----------------
  const placeOrder = (paymentMethod) => {

    if (Object.keys(cartItems).length === 0) {
      toast.error("Cart is empty ❗")
      return
    }

    const orderTime = new Date().toLocaleString()
    let newOrders = []

    for (const item in cartItems) {

      const product = products.find(p => p._id === item)
      if (!product) continue

      for (const size in cartItems[item]) {

        newOrders.push({
          _id: product._id + "-" + size,
          name: product.name,
          image: product.image[0],
          price: product.price,
          quantity: cartItems[item][size].quantity,
          size,
          orderTime,
          payment: paymentMethod,
          status: "Order Placed"
        })
      }
    }

    setOrders(prev => [...prev, ...newOrders])
    setCartItems({})
    toast.success("Order Placed Successfully 🎉")
  }

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    orders,
    addToCart,
    removeFromCart,
    getCartCount,
    getCartAmount,
    placeOrder,
    setToken,
    token,
    backendUrl,
    setCartItems,
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider

// import { createContext, useState, useEffect } from "react"
// import { toast } from "react-toastify"
// import axios from "axios"

// export const ShopContext = createContext()

// const ShopContextProvider = ({ children }) => {

//   const currency = "$"
//   const delivery_fee = 10
//   const backendUrl = import.meta.env.VITE_BACKEND_URL

//   const [cartItems, setCartItems] = useState({})
//   const [orders, setOrders] = useState([])
//   const [products, setProducts] = useState([])
//   const [token, setToken] = useState("")

//   // ---------------- LOAD CART ----------------
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cartItems")
//     if (savedCart) {
//       setCartItems(JSON.parse(savedCart))
//     }
//   }, [])

//   // ---------------- SAVE CART ----------------
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems))
//   }, [cartItems])

//   // ---------------- LOAD ORDERS ----------------
//   useEffect(() => {
//     const savedOrders = localStorage.getItem("orders")
//     if (savedOrders) {
//       setOrders(JSON.parse(savedOrders))
//     }
//   }, [])

//   // ---------------- SAVE ORDERS ----------------
//   useEffect(() => {
//     localStorage.setItem("orders", JSON.stringify(orders))
//   }, [orders])

//   // ---------------- FETCH PRODUCTS ----------------
//   useEffect(() => {

//     const getProductsData = async () => {
//       try {

//         const response = await axios.get(
//           backendUrl + "/api/product/list"
//         )

//         if (response.data.success) {
//           setProducts(response.data.products)
//         }

//       } catch (error) {
//         console.log(error)
//       }
//     }

//     if (backendUrl) {
//       getProductsData()
//     }

//   }, [backendUrl])

//   // ---------------- ADD TO CART ----------------
//   const addToCart = async (itemId, size, quantity) => {

//     if (!size) {
//       toast.error("Please select size ❗")
//       return
//     }

//     setCartItems(prev => {

//       let data = structuredClone(prev)

//       if (!data[itemId]) data[itemId] = {}

//       if (!data[itemId][size]) {
//         data[itemId][size] = {
//           quantity: 0,
//           addedAt: new Date().toLocaleString()
//         }
//       }

//       data[itemId][size].quantity += quantity

//       return data
//     })

//     if (token) {
//       try {

//         await axios.post(
//           backendUrl + "/api/cart/add",
//           { itemId, size },
//           { headers: { token } }
//         )

//       } catch (error) {
//         console.log(error)
//         toast.error(error.message)
//       }
//     }

//     toast.success("Added to Cart 🛒")
//   }

//   // ---------------- REMOVE FROM CART ----------------
//   const removeFromCart = (itemId, size) => {

//     setCartItems(prev => {

//       let data = structuredClone(prev)

//       if (data[itemId]) {
//         delete data[itemId][size]

//         if (Object.keys(data[itemId]).length === 0) {
//           delete data[itemId]
//         }
//       }

//       return data
//     })
//   }

//   // ---------------- CART COUNT ----------------
//   const getCartCount = () => {

//     let total = 0

//     for (const item in cartItems) {
//       for (const size in cartItems[item]) {
//         total += cartItems[item][size].quantity
//       }
//     }

//     return total
//   }

//   // ---------------- CART AMOUNT ----------------
//   const getCartAmount = () => {

//     let total = 0

//     for (const item in cartItems) {

//       const product = products.find(p => p._id === item)
//       if (!product) continue

//       for (const size in cartItems[item]) {
//         total += product.price * cartItems[item][size].quantity
//       }
//     }

//     return total
//   }

//   // ---------------- PLACE ORDER ----------------
//   const placeOrder = (paymentMethod) => {

//     if (Object.keys(cartItems).length === 0) {
//       toast.error("Cart is empty ❗")
//       return
//     }

//     const orderTime = new Date().toLocaleString()
//     let newOrders = []

//     for (const item in cartItems) {

//       const product = products.find(p => p._id === item)
//       if (!product) continue

//       for (const size in cartItems[item]) {

//         newOrders.push({
//           _id: product._id + "-" + size,
//           name: product.name,
//           image: product.image[0],
//           price: product.price,
//           quantity: cartItems[item][size].quantity,
//           size,
//           orderTime,
//           payment: paymentMethod,
//           status: "Order Placed"
//         })
//       }
//     }

//     setOrders(prev => [...prev, ...newOrders])
//     setCartItems({})
//     toast.success("Order Placed Successfully 🎉")
//   }

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     cartItems,
//     orders,
//     addToCart,
//     removeFromCart,
//     getCartCount,
//     getCartAmount,
//     placeOrder,
//     setToken,
//     token,
//     backendUrl,
//     setCartItems,
//   }

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   )
// }

// export default ShopContextProvider