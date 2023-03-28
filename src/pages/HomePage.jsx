import React from 'react';
import Header from '../components/layout/Header';
import BestDeals from '../components/Route/BestDeals/BestDeals';
import Category from '../components/Route/Category/Category';
import FeaturedProducts from '../components/Route/FeaturedProducts/FeaturedProducts';
import Hero from '../components/Route/Hero/Hero';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <BestDeals />
      <FeaturedProducts/>
    </div>
  );
};

export default HomePage;