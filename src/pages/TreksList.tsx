import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, Calendar, Search, Filter, X } from 'lucide-react';
import Button from '../components/common/Button';
import { treks, Trek } from '../data/treks';

const TreksList = () => {
  const [filteredTreks, setFilteredTreks] = useState<Trek[]>(treks);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    region: 'all',
    difficulty: 'all',
    duration: 'all',
    season: 'all',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // Filter treks based on search term and filters
    const filtered = treks.filter((trek) => {
      // Search term filter
      const matchesSearch =
        searchTerm === '' ||
        trek.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trek.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trek.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Region filter
      const matchesRegion =
        filters.region === 'all' ||
        trek.region.toLowerCase() === filters.region.toLowerCase();

      // Difficulty filter
      const matchesDifficulty =
        filters.difficulty === 'all' ||
        trek.difficulty.toLowerCase() === filters.difficulty.toLowerCase();

      // Duration filter
      const matchesDuration = filters.duration === 'all' ||
        (filters.duration === 'short' && trek.duration <= 7) ||
        (filters.duration === 'medium' && trek.duration > 7 && trek.duration <= 14) ||
        (filters.duration === 'long' && trek.duration > 14);

      // Season filter (simplified for demo)
      const matchesSeason =
        filters.season === 'all' ||
        trek.bestSeason.toLowerCase().includes(filters.season.toLowerCase());

      return matchesSearch && matchesRegion && matchesDifficulty && matchesDuration && matchesSeason;
    });

    setFilteredTreks(filtered);
  }, [searchTerm, filters]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  const clearFilters = () => {
    setFilters({
      region: 'all',
      difficulty: 'all',
      duration: 'all',
      season: 'all',
    });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-900/40"></div>
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Explore Our Trekking Routes
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Discover the beauty of Nepal through our carefully curated trekking experiences,
            from the iconic Everest Base Camp to the scenic Annapurna Circuit.
          </p>
        </div>
      </section>


      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search treks by name or region..."
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-center gap-2 py-2 border border-primary text-primary rounded-lg"
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>
            </div>

            {/* Filter Options (Desktop) */}
            <div className="hidden md:flex gap-4 items-center">
              {/* Region Filter */}
              <select
                className="border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={filters.region}
                onChange={(e) => handleFilterChange('region', e.target.value)}
              >
                <option value="all">All Regions</option>
                <option value="everest">Everest</option>
                <option value="annapurna">Annapurna</option>
                <option value="langtang">Langtang</option>
                <option value="mustang">Mustang</option>
              </select>

              {/* Difficulty Filter */}
              <select
                className="border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={filters.difficulty}
                onChange={(e) => handleFilterChange('difficulty', e.target.value)}
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="challenging">Challenging</option>
                <option value="difficult">Difficult</option>
              </select>

              {/* Duration Filter */}
              <select
                className="border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={filters.duration}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
              >
                <option value="all">All Durations</option>
                <option value="short">Short (≤ 7 days)</option>
                <option value="medium">Medium (8-14 days)</option>
                <option value="long">Long (&gt; 14 days)</option>
              </select>

              {/* Clear Filters Button */}
              {(filters.region !== 'all' || filters.difficulty !== 'all' ||
                filters.duration !== 'all' || filters.season !== 'all' || searchTerm) && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center text-neutral-500 hover:text-primary"
                  >
                    <X size={16} className="mr-1" />
                    Clear
                  </button>
                )}
            </div>
          </div>

          {/* Filter Options (Mobile - Collapsible) */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-neutral-200">
              <div className="space-y-4">
                {/* Region Filter */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Region</label>
                  <select
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={filters.region}
                    onChange={(e) => handleFilterChange('region', e.target.value)}
                  >
                    <option value="all">All Regions</option>
                    <option value="everest">Everest</option>
                    <option value="annapurna">Annapurna</option>
                    <option value="langtang">Langtang</option>
                    <option value="mustang">Mustang</option>
                  </select>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Difficulty</label>
                  <select
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={filters.difficulty}
                    onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                  >
                    <option value="all">All Difficulties</option>
                    <option value="easy">Easy</option>
                    <option value="moderate">Moderate</option>
                    <option value="challenging">Challenging</option>
                    <option value="difficult">Difficult</option>
                  </select>
                </div>

                {/* Duration Filter */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Duration</label>
                  <select
                    className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={filters.duration}
                    onChange={(e) => handleFilterChange('duration', e.target.value)}
                  >
                    <option value="all">All Durations</option>
                    <option value="short">Short (≤ 7 days)</option>
                    <option value="medium">Medium (8-14 days)</option>
                    <option value="long">Long (&gt; 14 days)</option>
                  </select>
                </div>

                {/* Clear Filters Button */}
                <div className="flex justify-end">
                  <button
                    onClick={clearFilters}
                    className="flex items-center text-neutral-500 hover:text-primary"
                  >
                    <X size={16} className="mr-1" />
                    Clear all filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              {filteredTreks.length} {filteredTreks.length === 1 ? 'Trek' : 'Treks'} Found
            </h2>
            <div className="text-neutral-600">
              {filters.region !== 'all' && <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded mr-2 text-sm">{filters.region}</span>}
              {filters.difficulty !== 'all' && <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded mr-2 text-sm">{filters.difficulty}</span>}
              {filters.duration !== 'all' && <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded mr-2 text-sm">{filters.duration}</span>}
            </div>
          </div>

          {filteredTreks.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-neutral-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No treks found</h3>
              <p className="text-neutral-600 mb-4">
                Try adjusting your search criteria or filters.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreks.map((trek, index) => (
                <motion.div
                  key={trek.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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
                      <span className="inline-block ml-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-800/80 text-white">
                        {trek.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{trek.name}</h3>
                    <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                      {trek.shortDescription}
                    </p>

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
          )}
        </div>
      </div>
    </div>
  );
};

export default TreksList;