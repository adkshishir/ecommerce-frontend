import Carousel from '../../components/Carousel/Carousel';
import FeatureCard from '../../components/cards/FeatureCard';
import SpecialOfferCard from '../../components/cards/SpecialOfferCard';
import Vendor from '../../components/Carousel/Vendor';
import CategorySection from '../../components/section/CategorySection';
import ProductSection from '../../components/section/ProductSection';
import FeatureSection from '../../components/section/FeatureSection';

export default function Home() {
  return (
    <main>
      <Carousel />
      {/* Featured Start */}
      <div className='container-fluid pt-5'>
        <div className='row px-xl-5 pb-3'>
          <FeatureCard title='Free Shipping' icon='fa fa-shipping-fast' />
          <FeatureCard title='Return Policy' icon='fa fa-retweet' />
          <FeatureCard title='Quality Product' icon='fa fa-check' />
          <FeatureCard title='Secure Payment' icon='fa fa-credit-card' />
        </div>
      </div>
      {/* Featured End */}
      {/* Categories Start */}
      <CategorySection />
      {/* Categories End */}
      {/* Products Start */}
      <ProductSection />
      {/* Products End */}
      {/* Offer Start */}
      <div className='container-fluid pt-5 pb-3'>
        <div className='row px-xl-5'>
          <SpecialOfferCard
            image='/img/offer-1.jpg'
            discount='20%'
            href='/'
            className='col-md-6'
          />
          <SpecialOfferCard
            image='/img/offer-2.jpg'
            discount='20%'
            href='/'
            className='col-md-6'
          />
        </div>
      </div>
      {/* Offer End */}
      {/* Products Start */}
      <FeatureSection />
      {/* Products End */}
      {/* Vendor Start */}
      <div className='container-fluid py-5'>
        <div className='row px-xl-5'>
          <Vendor />
        </div>
      </div>
      {/* Vendor End */}
    </main>
  );
}
