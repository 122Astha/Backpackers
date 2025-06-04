import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    country: 'United States',
    image: '/images/EverestBaseCamp.jpg',
    trek: 'Everest Base Camp',
    rating: 5,
    text: 'The Everest Base Camp trek was the adventure of a lifetime. Our guide was incredibly knowledgeable and made sure we were safe throughout the journey. The views were absolutely breathtaking!'
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    country: 'Nepal',
    image: '/images/Annapurna_base_camp.jpg',
    trek: 'Annapurna Circuit',
    rating: 5,
    text: 'The Annapurna Circuit exceeded all my expectations. The diverse landscapes and local villages we encountered were amazing. Our guide shared fascinating cultural insights that really enhanced the experience.'
  },
  {
    id: 3,
    name: 'Elena Petrov',
    country: 'Nepal',
    image: '/images/Gokyo_Nepal.jpg',
    trek: 'Gokyo Lakes Trek',
    rating: 5,
    text: 'The Gokyo Lakes trek offered stunning views with fewer crowds than EBC. The turquoise lakes against the mountain backdrop were simply magical. Bagpacker provided excellent service from start to finish.'
  },
  {
    id: 4,
    name: 'Takashi Yamamoto',
    country: 'Japan',
    image: '/images/mustang.jpg',
    trek: 'Upper Mustang',
    rating: 5,
    text: 'Upper Mustang felt like stepping back in time. The ancient Buddhist culture and dramatic landscapes were fascinating. Our guide was excellent and made the entire journey comfortable and educational.'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-3">
            What Our Trekkers Say
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Read about the experiences of adventurers who have explored Nepal with us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-grow text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        <p className="text-neutral-700 mb-6 italic">
                          "{testimonial.text}"
                        </p>

                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-neutral-600">{testimonial.country}</p>
                          <p className="text-primary mt-1">Trek: {testimonial.trek}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white rounded-full p-2 shadow-md text-neutral-600 hover:text-primary transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white rounded-full p-2 shadow-md text-neutral-600 hover:text-primary transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${current === index ? 'bg-primary' : 'bg-neutral-300'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;