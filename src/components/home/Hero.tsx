import { motion } from 'framer-motion';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/2695232/pexels-photo-2695232.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/30"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
              Experience the Magic of Nepal
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-4 text-shadow">
              Where Ancient Traditions Meet Majestic Mountains
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-white/90 mb-8 text-shadow">
              Discover breathtaking Himalayan treks, vibrant festivals, ancient temples, and rich cultural heritage in the heart of the world's most magnificent mountains.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/treks">
              <Button variant="primary" size="lg">
                Explore Treks <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                Plan Your Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/80 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;