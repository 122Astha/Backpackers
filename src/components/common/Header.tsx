import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <MapPin
              size={32}
              className={`transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'
                }`}
            />
            <span
              className={`ml-2 text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'
                }`}
            >
              Bagpacker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Treks', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => `
                  text-lg font-medium transition-colors duration-300
                  ${scrolled
                    ? (isActive ? 'text-primary' : 'text-neutral-700 hover:text-primary')
                    : (isActive ? 'text-white font-semibold' : 'text-white hover:text-neutral-200')}
                `}
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                size={28}
                className={`transition-colors duration-300 ${scrolled ? 'text-neutral-800' : 'text-white'
                  }`}
              />
            ) : (
              <Menu
                size={28}
                className={`transition-colors duration-300 ${scrolled ? 'text-neutral-800' : 'text-white'
                  }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {['Home', 'Treks', 'Contact'].map((item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={({ isActive }) => `
                    text-lg font-medium p-2 rounded
                    ${isActive ? 'bg-primary-light/10 text-primary' : 'text-neutral-700 hover:bg-neutral-100'}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;