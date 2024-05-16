import React from 'react'
 type FeatureCardProps={
    icon: string
    title: string
 }
const FeatureCard = ({icon, title}: FeatureCardProps) => {
  return (
        <>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
            <h1 className={`${icon} text-primary m-0 mr-3`}/>
            <h5 className="font-weight-semi-bold m-0">{title}</h5>
        </div>
        </div>
    </>
  )
}

export default FeatureCard