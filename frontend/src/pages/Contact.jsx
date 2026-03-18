import React from "react"
import { assets } from "../assets/assets"

const Contact = () => {

  const exploreJobsHandler = () => {
    alert("Careers page coming soon 🚀")
  }

  return (
    <div className="pt-16 px-6">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-500 mt-2">
          We'd love to hear from you
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-12">

        {/* LEFT SIDE - CONTACT DETAILS */}
        <div className="flex-1 text-gray-600">

          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Our Store
          </h3>

          <p className="mb-3">
            📍 123 Fashion Street,<br />
            Chennai, Tamil Nadu,<br />
            India - 600001
          </p>

          <p className="mb-3">
            📞 +91 98765 43210
          </p>

          <p className="mb-6">
            ✉ support@shopcart.com
          </p>

          <hr className="my-6" />

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Careers at ShopCart
          </h3>

          <p className="mb-6">
            Learn more about our teams and current job openings.
            Join us and be part of our growing fashion journey.
          </p>

          <button
            onClick={exploreJobsHandler}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Explore Jobs
          </button>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex-1">
          <img
            src={assets.heroimage}
            alt="Contact"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

      </div>

    </div>
  )
}

export default Contact
