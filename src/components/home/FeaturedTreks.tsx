import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';
import Button from '../common/Button';
import { treks } from '../../data/treks';

const FeaturedTreks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [activeRegion, setActiveRegion] = useState<'all' | 'everest' | 'annapurna'>('all');
  
  const featuredTreks = treks
    .filter(trek => trek.featured)
    .filter(trek => activeRegion === 'all' || trek.region.toLowerCase() === activeRegion);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-3">
            Featured Treks
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Explore our most popular trekking routes in the majestic Himalayas
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-neutral-100 rounded-lg p-1">
            {[
              { value: 'all', label: 'All Regions' },
              { value: 'everest', label: 'Everest Region' },
              { value: 'annapurna', label: 'Annapurna Region' }
            ].map((region) => (
              <button
                key={region.value}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeRegion === region.value 
                    ? 'bg-white shadow-sm text-primary' 
                    : 'text-neutral-600 hover:text-primary'
                }`}
                onClick={() => setActiveRegion(region.value as any)}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTreks.map((trek, index) => (
            <motion.div
              key={trek.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="trek-card bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={trek.images[0]} 
                  alt={trek.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">
                    {trek.region}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{trek.name}</h3>
                
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center text-neutral-600">
                    <Clock size={16} className="mr-2" />
                    <span>{trek.duration} days</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <MapPin size={16} className="mr-2" />
                    <span>Max elevation: {trek.maxElevation}m</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Calendar size={16} className="mr-2" />
                    <span>Best season: {trek.bestSeason}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="text-accent font-semibold">
                    From ${trek.basePrice} USD
                  </div>
                  <Link to={`/treks/${trek.id}`}>
                    <Button variant="outline" size="sm">View Details</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/treks">
            <Button variant="primary" size="lg">
              View All Treks
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreks;