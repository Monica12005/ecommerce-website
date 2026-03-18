
import React, { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import axios from "axios"
import { toast } from "react-toastify"

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext)

  const [orderData, setorderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setorderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className="pt-16 px-6">

      <h2 className="text-2xl font-semibold mb-6">
        My Orders
      </h2>

      {orderData.length === 0 ? (
        <p>No Orders Yet.</p>
      ) : (
        orderData.map((item, index) => (

          <div
            key={index}
            className="border p-6 mb-6 rounded flex flex-col sm:flex-row justify-between items-center gap-6"
          >

            <div className="flex items-center gap-6">

              <img
                src={item.image}
                className="w-24 h-24 object-cover rounded"
                alt=""
              />

              <div>
                <p className="font-semibold text-lg">
                  {item.name}
                </p>

                <p>Size: {item.size}</p>
                <p>Qty: {item.quantity}</p>
                <p>{currency}{item.price}</p>

                <p className="text-sm text-gray-500">
                  Ordered At: {new Date(item.date).toDateString()}
                </p>

                <p className="text-sm">
                  Payment: {item.paymentMethod.toUpperCase()} - {item.payment ? 'Done' : 'Pending'}
                </p>
              </div>

            </div>

            <div className="text-center">
              <p className="text-green-600 font-semibold mb-2">
                {item.status}
              </p>
            </div>

          </div>

        ))
      )}

    </div>
  )
}

export default Orders