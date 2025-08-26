import React from 'react'
import { Link } from 'react-router-dom'
import { authStore } from '../store/authStore.js'

const AboutUsPage = () => {
  const { authUser } = authStore()
  const isSeller = authUser?.role === 'seller'
  const ctaHref = isSeller ? '/sell' : '/shop'
  const ctaText = isSeller ? 'Sell Now' : 'Shop Now'

  return (
    <div className='w-full flex justify-center pt-18 relative'>
      <div className="grid grid-cols-2 w-full">
        
        {/* Left Image */}
        <div className="bg-green-400">
          <img 
            src="https://res.cloudinary.com/dezj3e0et/image/upload/v1756213142/89648f8c-98d1-4071-aed5-343964e3fe4e_omiqiz.png" 
            alt="electronics showcase"
          />
        </div>

        {/* First Two Descriptions */}
        <div className="grid gap-6 bg-white shadow-lg rounded-2xl p-6">
          <div className="p-4 border-l-4 border-black bg-gray-50 rounded">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Professional & Trustworthy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold">PixelCrate</span>, we are passionate 
              about bringing you the latest and most reliable electronic gadgets 
              at the best value. From smartphones and laptops to accessories and 
              home electronics, we ensure quality, affordability, and trusted 
              service. Our mission is to make technology accessible to everyone, 
              backed by secure shopping and fast delivery.
            </p>
          </div>

          <div className="p-4 border-l-4 border-black bg-gray-50 rounded">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Friendly & Customer-Focused
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to <span className="font-semibold">PixelCrate</span> – your 
              one-stop destination for all things electronics! Whether you're 
              upgrading your smartphone, looking for powerful laptops, or 
              shopping for everyday gadgets, we’ve got you covered. We believe 
              in making your shopping simple, affordable, and exciting with 
              top-quality products and customer-first service.
            </p>
          </div>
        </div>

        {/* Other Two Descriptions */}
        <div className="grid gap-6 bg-gray-50 shadow-inner rounded-2xl p-6">
          <div className="p-4 border-l-4 border-black bg-white rounded">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Tech-Savvy & Modern
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Technology is evolving every day – and so are we. At 
              <span className="font-semibold"> PixelCrate</span>, we bring you 
              cutting-edge electronics that fit perfectly into your lifestyle. 
              Our carefully curated collection includes the latest smartphones, 
              laptops, audio devices, and accessories from trusted brands, 
              ensuring you always stay ahead in the digital world.
            </p>
          </div>

          <div className="p-4 border-l-4 border-black bg-white rounded">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Short & Catchy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your trusted hub for the latest and greatest in electronics. Quality 
              products, affordable prices, and a hassle-free shopping experience – 
              that’s the <span className="font-semibold">PixelCrate</span> promise.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="bg-red-400">
          <img 
            src="https://res.cloudinary.com/dezj3e0et/image/upload/v1756213608/4a96571b-5fb0-4753-b2cf-76b941028288_x1hdu1.png" 
            alt="tech accessories"
          />
        </div>

        {/* CTA Section at Bottom */}
        <div className="col-span-2 flex flex-col items-center text-center mt-6 space-y-4">
          <p className="text-lg text-gray-700 max-w-2xl">
            Ready to experience the best of modern technology? 
            {isSeller 
              ? " Start selling your products to thousands of buyers on PixelCrate today." 
              : " Explore our wide collection of gadgets, laptops, and accessories curated just for you."
            }
          </p>
          <Link to={ctaHref}>
            <button className='bg-black text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transition-transform'>
              {ctaText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
