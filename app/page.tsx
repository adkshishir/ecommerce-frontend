import Carousel from "./components/Carousel/Carousel";
import FeatureCard from "./components/cards/FeatureCard";
import { CategoryCard } from "./components/cards/CategoryCard";
import ProductCard from "./components/cards/ProductCard";
import SpecialOfferCard from "./components/cards/SpecialOfferCard";
import Vendor from "./components/Carousel/Vendor";

export default function Home() {
    let name='shsihir'
  return (
   <main >
    <button>{name}</button>
         <Carousel/> 
          {/* Featured Start */}
          <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
              <FeatureCard title="Free Shipping" icon="fa fa-shipping-fast"/>
              <FeatureCard title="Return Policy" icon="fa fa-retweet"/>
              <FeatureCard title="Quality Product" icon="fa fa-check"/>
              <FeatureCard title="Secure Payment" icon="fa fa-credit-card"/>
            </div>
          </div>
          {/* Featured End */}
          {/* Categories Start */}
          <div className="container-fluid pt-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
            <div className="row px-xl-5 pb-3">
              <CategoryCard image="/img/cat-1.jpg" categoryName="Category Name" href="/" productCount={100}/>
              <CategoryCard image="/img/cat-2.jpg" categoryName="Category Name" href="/" productCount={100}/>
              <CategoryCard image="/img/cat-3.jpg" categoryName="Category Name" href="/" productCount={100}/>
              <CategoryCard image="/img/cat-4.jpg" categoryName="Category Name" href="/" productCount={100}/>
              <CategoryCard image="/img/cat-1.jpg" categoryName="Category Name" href="/" productCount={100}/>
              <CategoryCard image="/img/cat-2.jpg" categoryName="Category Name" href="/" productCount={100}/>
              <CategoryCard image="/img/cat-3.jpg" categoryName="Category Name" href="/" productCount={100}/>
              <CategoryCard image="/img/cat-4.jpg" categoryName="Category Name" href="/" productCount={100}/>
              <CategoryCard image="/img/cat-1.jpg" categoryName="Category Name" href="/" productCount={100}/>
              <CategoryCard image="/img/cat-3.jpg" categoryName="Category Name" href="/" productCount={100}/>
              <CategoryCard image="/img/cat-2.jpg" categoryName="Category Name" href="/" productCount={100}/>
              <CategoryCard image="/img/cat-4.jpg" categoryName="Category Name" href="/" productCount={100}/>

            </div>
          </div>
          {/* Categories End */}
          {/* Products Start */}
          <div className="container-fluid pt-5 pb-3">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
            <div className="row px-xl-5">
            <ProductCard image="/img/product-1.jpg" name="Product Name" price={123} stock={100}/>
            <ProductCard image="/img/product-2.jpg" name="Product Name" price={124} stock={90}/>
            <ProductCard image="/img/product-3.jpg" name="Product Name" price={123} stock={100}/>
            <ProductCard image="/img/product-4.jpg" name="Product Name" price={123} stock={100}/>
            <ProductCard image="/img/product-1.jpg" name="Product Name" price={123} stock={100}/>
            <ProductCard image="/img/product-3.jpg" name="Product Name" price={123} stock={100}/>
            <ProductCard image="/img/product-4.jpg" name="Product Name" price={123} stock={100}/>
            <ProductCard image="/img/product-1.jpg" name="Product Name" price={123} stock={100}/>
            <ProductCard image="/img/product-1.jpg" name="Product Name" price={123} stock={100}/>
            <ProductCard image="/img/product-3.jpg" name="Product Name" price={123} stock={100}/>
            <ProductCard image="/img/product-4.jpg" name="Product Name" price={123} stock={100}/>
            <ProductCard image="/img/product-1.jpg" name="Product Name" price={123} stock={100}/>     
            </div>
          </div>
          {/* Products End */}
          {/* Offer Start */}
          <div className="container-fluid pt-5 pb-3">
            <div className="row px-xl-5">
              <SpecialOfferCard image="/img/offer-1.jpg" discount="20%" href='/' className="col-md-6"/>
              <SpecialOfferCard image="/img/offer-2.jpg" discount="20%" href='/' className="col-md-6"/>         
            </div>
          </div>
          {/* Offer End */}
          {/* Products Start */}
          <div className="container-fluid pt-5 pb-3">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Recent Products</span></h2>
            <div className="row px-xl-5">
              <ProductCard image="/img/product-1.jpg" name="Product Name" price={123} stock={100}/>
              <ProductCard image="/img/product-2.jpg" name="Product Name" price={124} stock={90}/>
              <ProductCard image="/img/product-3.jpg" name="Product Name" price={123} stock={100}/>
              <ProductCard image="/img/product-4.jpg" name="Product Name" price={123} stock={100}/>
              <ProductCard image="/img/product-1.jpg" name="Product Name" price={123} stock={100}/>
              <ProductCard image="/img/product-3.jpg" name="Product Name" price={123} stock={100}/>
              <ProductCard image="/img/product-4.jpg" name="Product Name" price={123} stock={100}/>
              <ProductCard image="/img/product-1.jpg" name="Product Name" price={123} stock={100}/>
            </div>
          </div>
          {/* Products End */}
          {/* Vendor Start */}
          <div className="container-fluid py-5">
            <div className="row px-xl-5">
              <Vendor/>
            </div>
          </div>
          {/* Vendor End */}
      

   </main>
  );
}
