import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar } from 'lucide-react';
import dashainimg from '../../../public/images/Dashain-Festival.webp';
import tiharimg from '../../../public/images/tihar-social.webp';
import holiimg from '../../../public/images/holi-in-nepal.webp';

const festivals = [
  {
    name: "Dashain",
    description: "Nepal's biggest festival celebrating the victory of good over evil with traditional rituals and family gatherings.",
    date: "September-October",
    image: dashainimg
  },
  {
    name: "Tihar",
    description: "The festival of lights honoring Laxmi, the goddess of wealth, with beautiful light displays and rangoli art.",
    date: "October-November",
    image: tiharimg
  },
  {
    name: "Holi",
    description: "The colorful spring festival where people celebrate with vibrant colors, music, and dance.",
    date: "March",
    image: holiimg
  }
];

const Festivals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

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
            Vibrant Festivals of Nepal
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Experience the rich cultural heritage through Nepal's colorful festivals and celebrations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {festivals.map((festival, index) => (
            <motion.div
              key={festival.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{festival.name}</h3>
                <div className="flex items-center text-neutral-600 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{festival.date}</span>
                </div>
                <p className="text-neutral-700">
                  {festival.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Festivals;