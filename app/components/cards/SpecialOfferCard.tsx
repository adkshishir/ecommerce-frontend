import Image from 'next/image'
import React from 'react'

interface SpecialOfferCardProps {
    image:string
    discount:string
    href:string
    className?:string
}

const SpecialOfferCard = ({image,discount,href,className}:SpecialOfferCardProps) => {
  return (
    <div className={`col-lg-6 ${className}`}>
    <div className="product-offer mb-30" style={{height: 300}}>
      <Image height={100} width={100} className="img-fluid" src={image} alt='this is image' />
      <div className="offer-text">
        <h6 className="text-white text-uppercase">Save {discount}</h6>
        <h3 className="text-white mb-3">Special Offer</h3>
        <a href={href} className="btn btn-primary">Shop Now</a>
      </div>
    </div>
  </div>
  )
}

export default SpecialOfferCard