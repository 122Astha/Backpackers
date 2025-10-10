import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, Calendar, Mountain as Mountains, Users, Heart, Star, ChevronRight, ArrowLeft, PlusCircle, MinusCircle, DollarSign } from 'lucide-react';
import Button from '../components/common/Button';
import { treks, Trek } from '../data/treks';
// import { guides, Guide } from '../data/guides';

const TrekDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [trek, setTrek] = useState<Trek | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Pricing calculator state
  const [nights, setNights] = useState(0);
  const [accommodationType, setAccommodationType] = useState<'basic' | 'standard' | 'comfort'>('standard');
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Get trek data
  useEffect(() => {
    const foundTrek = treks.find(t => t.id === id);
    if (foundTrek) {
      setTrek(foundTrek);
      setNights(foundTrek.duration - 1); // Default to full trek duration
      calculatePrice(foundTrek, foundTrek.duration - 1, accommodationType);
    }
  }, [id]);
  
  // Calculate price based on inputs
  const calculatePrice = (trekData: Trek, nightsCount: number, accomType: 'basic' | 'standard' | 'comfort') => {
    const baseCost = trekData.basePrice;
    const accommodationCost = trekData.accommodationOptions[accomType].pricePerNight * nightsCount;
    const total = baseCost + accommodationCost;
    setTotalPrice(total);
  };
  
  const handleNightsChange = (count: number) => {
    const newCount = Math.max(0, Math.min(count, trek ? trek.duration : 0));
    setNights(newCount);
    if (trek) {
      calculatePrice(trek, newCount, accommodationType);
    }
  };
  
  const handleAccommodationChange = (type: 'basic' | 'standard' | 'comfort') => {
    setAccommodationType(type);
    if (trek) {
      calculatePrice(trek, nights, type);
    }
  };
  
  // If trek not found
  if (!trek) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-24 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-semibold mb-4">Trek not found</h2>
          <p className="text-neutral-600 mb-6">The trek you're looking for doesn't exist or has been removed.</p>
          <Link to="/treks">
            <Button variant="primary">Back to All Treks</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Find available guides for this trek
  // const trekGuides = guides.filter(guide => trek.guides.includes(guide.id));

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${trek.images[activeImage]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <Link to="/treks" className="text-white/80 hover:text-white flex items-center">
                <ArrowLeft size={16} className="mr-1" />
                <span>All Treks</span>
              </Link>
              <ChevronRight size={16} className="mx-2 text-white/60" />
              <span className="text-white/80">{trek.region} Region</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {trek.name}
            </h1>
            
            <div className="flex flex-wrap gap-3 md:gap-6">
              <div className="flex items-center text-white/90">
                <Clock size={18} className="mr-2" />
                <span>{trek.duration} days</span>
              </div>
              <div className="flex items-center text-white/90">
                <MapPin size={18} className="mr-2" />
                <span>Max: {trek.maxElevation}m</span>
              </div>
              <div className="flex items-center text-white/90">
                <Mountains size={18} className="mr-2" />
                <span>{trek.difficulty}</span>
              </div>
              <div className="flex items-center text-white/90">
                <Calendar size={18} className="mr-2" />
                <span>{trek.bestSeason}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Gallery Thumbnails */}
      {/* <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {trek.images.map((image, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden border-2 transition-all ${
                  activeImage === index ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${trek.name} view ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div> */}
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs Navigation */}
            <div className="mb-6 border-b border-neutral-200">
              <div className="flex space-x-1 md:space-x-8">
                {['overview', 'itinerary', 'details'].map((tab) => (
                  <button
                    key={tab}
                    className={`py-3 px-2 md:px-4 text-sm md:text-base font-medium border-b-2 transition-colors ${
                      activeTab === tab 
                        ? 'border-primary text-primary' 
                        : 'border-transparent text-neutral-500 hover:text-neutral-800'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Trek Overview</h2>
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    {trek.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                  <ul className="space-y-2 mb-6">
                    {trek.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <Heart size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-neutral-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {trek.mapImage && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-3">Trek Route</h3>
                      <div className="rounded-lg overflow-hidden border border-neutral-200">
                        <img 
                          src={trek.mapImage} 
                          alt={`${trek.name} route map`} 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Itinerary Tab */}
              {activeTab === 'itinerary' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Daily Itinerary</h2>
                  
                  <div className="space-y-6 h-[600px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-100">
                    {trek.itinerary.map((day, index) => (
                      <div 
                        key={index}
                        className="relative pl-8 pb-6 border-l-2 border-neutral-200 last:border-l-0"
                      >
                        {/* Day indicator */}
                        <div className="absolute left-[-15px] top-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                          {day.day}
                        </div>
                        
                        <div className="bg-neutral-50 rounded-lg p-4 md:p-6">
                          <h3 className="text-lg font-semibold mb-2">{day.title}</h3>
                          
                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600 mb-3">
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-1" />
                              <span>Elevation: {day.elevation}m</span>
                            </div>
                            {day.hours > 0 && (
                              <div className="flex items-center">
                                <Clock size={14} className="mr-1" />
                                <span>Walking: {day.hours} hours</span>
                              </div>
                            )}
                            {day.accommodation && (
                              <div className="flex items-center">
                                <Users size={14} className="mr-1" />
                                <span>Stay: {day.accommodation}</span>
                              </div>
                            )}
                          </div>
                          
                          <p className="text-neutral-700">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Details Tab */}
              {activeTab === 'details' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Trek Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Difficulty Level</h3>
                      <p className="text-neutral-700 mb-2">
                        This trek is rated as <span className="font-medium">{trek.difficulty}</span>.
                      </p>
                      <div className="bg-neutral-100 rounded-full h-2 mb-2">
                        <div 
                          className="bg-primary rounded-full h-2"
                          style={{ 
                            width: trek.difficulty === 'Easy' ? '25%' : 
                                  trek.difficulty === 'Moderate' ? '50%' : 
                                  trek.difficulty === 'Challenging' ? '75%' : '100%' 
                          }}
                        ></div>
                      </div>
                      <p className="text-sm text-neutral-600">
                        {trek.difficulty === 'Easy' && 'Suitable for beginners with good fitness. Gentle terrain with moderate ascents.'}
                        {trek.difficulty === 'Moderate' && 'Requires reasonable fitness. Some steep sections and higher altitudes.'}
                        {trek.difficulty === 'Challenging' && 'Good fitness and some trekking experience recommended. Significant ascents and high altitude.'}
                        {trek.difficulty === 'Difficult' && 'Demanding trek requiring excellent fitness and previous experience. Extended periods at high altitude.'}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Best Season</h3>
                      <p className="text-neutral-700 mb-4">
                        {trek.bestSeason}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <h4 className="font-medium mb-2">Spring (March-May)</h4>
                          <p className="text-sm text-neutral-700">
                            Warm temperatures, rhododendron forests in bloom, clear morning views with occasional afternoon clouds.
                          </p>
                        </div>
                        
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <h4 className="font-medium mb-2">Autumn (September-November)</h4>
                          <p className="text-sm text-neutral-700">
                            Stable weather, clear skies, excellent mountain views, and pleasant temperatures. The most popular trekking season.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Accommodation Options</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <h4 className="font-medium mb-1">Basic Teahouse</h4>
                          <p className="text-sm text-neutral-700 mb-1">
                            {trek.accommodationOptions.basic.description}
                          </p>
                          <p className="text-sm font-medium text-neutral-800">
                            ${trek.accommodationOptions.basic.pricePerNight} per night
                          </p>
                        </div>
                        
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <h4 className="font-medium mb-1">Standard Teahouse</h4>
                          <p className="text-sm text-neutral-700 mb-1">
                            {trek.accommodationOptions.standard.description}
                          </p>
                          <p className="text-sm font-medium text-neutral-800">
                            ${trek.accommodationOptions.standard.pricePerNight} per night
                          </p>
                        </div>
                        
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <h4 className="font-medium mb-1">Comfort Lodge</h4>
                          <p className="text-sm text-neutral-700 mb-1">
                            {trek.accommodationOptions.comfort.description}
                          </p>
                          <p className="text-sm font-medium text-neutral-800">
                            ${trek.accommodationOptions.comfort.pricePerNight} per night
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Guides Tab */}
              {/* {activeTab === 'guides' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Available Guides</h2>
                  
                  <div className="space-y-6">
                    {trekGuides.map((guide) => (
                      <div key={guide.id} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                              <img 
                                src={guide.photo} 
                                alt={guide.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex items-center mb-2">
                              <h3 className="text-xl font-semibold">{guide.name}</h3>
                              <div className="ml-auto flex items-center">
                                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                <span className="ml-1 text-neutral-700 font-medium">{guide.ratings}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                {guide.experience} years experience
                              </span>
                              <span className="inline-block bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded">
                                {guide.certification}
                              </span>
                              {guide.specialties.slice(0, 2).map((specialty, index) => (
                                <span key={index} className="inline-block bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded">
                                  {specialty}
                                </span>
                              ))}
                            </div>
                            
                            <p className="text-neutral-700 mb-4 line-clamp-3">
                              {guide.bio}
                            </p>
                            
                            <div className="text-sm text-neutral-600">
                              <span className="font-medium">Languages:</span> {guide.languages.join(', ')}
                            </div>
                          </div>
                        </div>
                        
                        {guide.reviews.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-neutral-200">
                            <h4 className="font-medium mb-3">Recent Reviews</h4>
                            <div className="space-y-3">
                              {guide.reviews.slice(0, 1).map((review, index) => (
                                <div key={index} className="bg-white p-3 rounded border border-neutral-100">
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium">{review.author}</span>
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <Star 
                                          key={i} 
                                          size={14} 
                                          className={`${
                                            i < review.rating 
                                              ? 'text-yellow-400 fill-yellow-400' 
                                              : 'text-neutral-300'
                                          }`} 
                                        />
                                      ))}
                                    </div>
                                  </div>
                                  <p className="text-sm text-neutral-700">
                                    "{review.text}"
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Price Calculator Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Calculate Your Trek</h3>
              
              <div className="space-y-5">
                {/* Number of Nights */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Number of Nights
                  </label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleNightsChange(nights - 1)}
                      className="p-2 text-neutral-600 hover:text-primary"
                      disabled={nights <= 0}
                    >
                      <MinusCircle size={20} />
                    </button>
                    <input
                      type="number"
                      value={nights}
                      onChange={(e) => handleNightsChange(parseInt(e.target.value) || 0)}
                      className="w-16 mx-2 text-center border-b border-neutral-300 focus:outline-none focus:border-primary"
                    />
                    <button 
                      onClick={() => handleNightsChange(nights + 1)}
                      className="p-2 text-neutral-600 hover:text-primary"
                      disabled={nights >= trek.duration}
                    >
                      <PlusCircle size={20} />
                    </button>
                    <span className="ml-2 text-sm text-neutral-600">
                      (max: {trek.duration - 1})
                    </span>
                  </div>
                </div>
                
                {/* Accommodation Type */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Accommodation Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['basic', 'standard', 'comfort'] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => handleAccommodationChange(type)}
                        className={`px-3 py-2 text-sm rounded-md transition-colors ${
                          accommodationType === type
                            ? 'bg-primary text-white'
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Breakdown */}
                <div className="pt-4 border-t border-neutral-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-600">Base trek price</span>
                    <span className="font-medium">${trek.basePrice}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-600">
                      Accommodation ({accommodationType})
                    </span>
                    <span className="font-medium">
                      ${trek.accommodationOptions[accommodationType].pricePerNight} × {nights} nights
                    </span>
                  </div>
                  
                  <div className="flex justify-between pt-3 border-t border-dashed border-neutral-200 mt-3">
                    <span className="text-lg font-semibold">Total Price</span>
                    <span className="text-lg font-semibold text-primary">
                      ${totalPrice}
                    </span>
                  </div>
                </div>
                
                {/* Book Now Button */}
                <Link to="/contact" className="block mt-4">
                  <Button className="bg-blue-500" fullWidth>
                    <DollarSign size={18} className="mr-1" />
                    Book This Trek
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Quick Info Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Duration</span>
                    <span className="text-neutral-600">{trek.duration} days / {trek.duration - 1} nights</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Maximum Elevation</span>
                    <span className="text-neutral-600">{trek.maxElevation} meters</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mountains size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Difficulty</span>
                    <span className="text-neutral-600">{trek.difficulty}</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Best Season</span>
                    <span className="text-neutral-600">{trek.bestSeason}</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Group Size</span>
                    <span className="text-neutral-600">2-12 people</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekDetail;