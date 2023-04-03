import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import BestDeals from '../components/Route/BestDeals/BestDeals';
import Category from '../components/Route/Category/Category';
import Events from '../components/Route/Events/Events';
import FeaturedProducts from '../components/Route/FeaturedProducts/FeaturedProducts';
import Hero from '../components/Route/Hero/Hero';
import Sponsors from '../components/Route/Sponsors/Sponsors';

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1}  />
      <Hero />
      <Category />
      <BestDeals />
      <Events />
      <FeaturedProducts />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default HomePage;