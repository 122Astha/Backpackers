import { useEffect, useState } from 'react';
import Hero from '../components/home/Hero';
import AboutNepal from '../components/home/AboutNepal';
import Culture from '../components/home/Culture';
import Festivals from '../components/home/Festivals';
import FeaturedTreks from '../components/home/FeaturedTreks';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null; // or a fallback loader

  return (
    <div>
      <Hero />
      <AboutNepal />
      <Culture />
      <Festivals />
      <FeaturedTreks />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
