import Image from 'next/image'
import React from 'react'
type ProductCardProps = {
    image:string
    name:string
  markedPrice: number,
     discount: number,
     stock:number,
  className?: string
     alt:string
}
const ProductCard = ({image,name,markedPrice,stock,className,alt,discount}:ProductCardProps) => {
  return (
             <div className={`w-full col-lg-3 col-md-6 col-sm-12 ${className}`}>
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <Image height={100} width={100} className="img-fluid w-100 product-image"   src={image||"/img/product-1.jpg"} alt={alt} />
                    <div className="product-action">
                      <a className="btn btn-outline-dark btn-square" href='/'><i className="fa fa-shopping-cart" /></a>
                      <a className="btn btn-outline-dark btn-square" href='/'><i className="far fa-heart" /></a>
                      <a className="btn btn-outline-dark btn-square" href='/'><i className="fa fa-sync-alt" /></a>
                      <a className="btn btn-outline-dark btn-square" href='/'><i className="fa fa-search" /></a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <a className="h6 text-decoration-none text-truncate" href='/'>{name}</a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>{markedPrice-discount}</h5><h6 className="text-muted ml-2"><del>${markedPrice}</del></h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small>({stock})</small>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default ProductCard