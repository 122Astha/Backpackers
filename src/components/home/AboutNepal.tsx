import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutNepal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-3">
            About Nepal
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            A land of breathtaking mountains, ancient temples, and rich cultural heritage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
              Natural Beauty
            </h3>
            <p className="text-neutral-700 mb-6">
              Nepal is home to eight of the world's fourteen highest mountains, including Mount Everest, the tallest peak on Earth. From the towering Himalayas in the north to the lush subtropical forests in the south, Nepal offers diverse landscapes that captivate visitors from around the globe.
            </p>
            <p className="text-neutral-700">
              The country boasts stunning alpine meadows, pristine lakes, and rushing rivers that carve through deep valleys. Nepal's varied terrain supports incredible biodiversity, including rare species like the snow leopard, red panda, and one-horned rhinoceros.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="./images/naturepic.jpg"
              alt="Himalayan Mountains"
              className="w-full h-auto object-cover"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-lg overflow-hidden shadow-lg md:order-3"
          >
            <img
              src="./images/culture.jpg"
              alt="Nepalese Temple"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:order-4"
          >
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
              Rich History & Culture
            </h3>
            <p className="text-neutral-700 mb-6">
              With a history dating back thousands of years, Nepal is a cultural treasure trove. The Kathmandu Valley alone contains seven UNESCO World Heritage Sites, including ancient temples, palaces, and stupas that showcase the country's architectural and artistic achievements.
            </p>
            <p className="text-neutral-700">
              Nepal's culture is a fascinating blend of Hindu and Buddhist traditions, with influences from neighboring Tibet and India. From colorful festivals and intricate wood carvings to traditional music and dance, Nepal's cultural heritage continues to thrive and evolve while maintaining deep connections to its past.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutNepal;