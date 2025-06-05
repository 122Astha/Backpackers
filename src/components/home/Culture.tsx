import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Utensils, Music, Landmark } from 'lucide-react';
import foodimg from '../../../public/images/Nepali-Food.webp';
import danceimg from '../../../public/images/Kumari-Dance.jpg';
import bhaktaputimag from '../../../public/images/Nepal-Bhaktapur.jpg';

const Culture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-3">
            Rich Cultural Heritage
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Immerse yourself in Nepal's diverse cultural traditions, cuisine, and ancient architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Cuisine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Utensils size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Traditional Cuisine</h3>
            <p className="text-neutral-700 mb-4">
              Savor authentic Nepali dishes like Dal Bhat, momos, and traditional street food. Experience the unique blend of flavors influenced by diverse ethnic communities.
            </p>
            <img
              src={foodimg}
              alt="Nepali Cuisine"
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>

          {/* Music and Dance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Music size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Music & Dance</h3>
            <p className="text-neutral-700 mb-4">
              Witness traditional performances featuring ancient instruments and cultural dances that tell stories of Nepal's rich heritage and mythology.
            </p>
            <img
              src={danceimg}
              alt="Traditional Dance"
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>

          {/* Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Landmark size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Ancient Architecture</h3>
            <p className="text-neutral-700 mb-4">
              Explore UNESCO World Heritage sites, ancient temples, and traditional Newari architecture that showcase Nepal's architectural mastery.
            </p>
            <img
              src={bhaktaputimag}
              alt="Temple Architecture"
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Culture;