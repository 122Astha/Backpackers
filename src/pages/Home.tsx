import Hero from '../components/home/Hero';
import AboutNepal from '../components/home/AboutNepal';
import Culture from '../components/home/Culture';
import Festivals from '../components/home/Festivals';
import FeaturedTreks from '../components/home/FeaturedTreks';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
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