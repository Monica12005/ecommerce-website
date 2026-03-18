import React from "react"
import { assets } from "../assets/assets"

const About = () => {

  return (
    <div className="pt-16 px-6">

      {/* MAIN ABOUT SECTION */}
      <div className="flex flex-col sm:flex-row items-center gap-12 mb-20">

        {/* LEFT SIDE IMAGE */}
        <div className="flex-1">
          <img
            src={assets.heroimage}
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1 text-gray-600">

          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            About ShopCart
          </h2>

          <p className="mb-4 leading-relaxed">
            Welcome to ShopCart, your trusted online fashion destination.
            We bring you the latest trends in clothing for men, women, and kids
            with a focus on quality, affordability, and style.
          </p>

          <p className="mb-4 leading-relaxed">
            Our platform is designed to make shopping simple and enjoyable.
            From easy browsing to secure checkout and fast delivery,
            we ensure a smooth experience at every step.
          </p>

          <p className="leading-relaxed">
            At ShopCart, customer satisfaction is our top priority.
            We continuously improve our services to meet your expectations
            and deliver excellence every day.
          </p>

        </div>

      </div>


      {/* WHY CHOOSE US SECTION */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Why Choose Us
        </h2>
        <p className="text-gray-500 mt-2">
          Discover what makes ShopCart different from the rest.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* CARD 1 */}
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Premium Quality
          </h3>

          <p className="text-gray-600 leading-relaxed">
            We carefully select high-quality fabrics and materials to ensure
            durability, comfort, and style in every product we offer.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Fast & Secure Delivery
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Enjoy fast shipping and secure packaging. Your orders are handled
            with care and delivered safely to your doorstep.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            24/7 Customer Support
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Our support team is always ready to assist you with any questions,
            ensuring a smooth and satisfying shopping experience.
          </p>

        </div>

      </div>

    </div>
  )
}

export default About
