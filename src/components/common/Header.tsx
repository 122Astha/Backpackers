import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${showTransparent ? 'bg-transparent py-4' : 'bg-white shadow-md py-2'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <MapPin
              size={32}
              className={`transition-colors duration-300 ${showTransparent ? 'text-white' : 'text-primary'
                }`}
            />
            <span
              className={`ml-2 text-2xl font-bold transition-colors duration-300 ${showTransparent ? 'text-white' : 'text-primary'
                }`}
            >
              Backpacker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Treks', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-300 ${showTransparent
                    ? isActive
                      ? 'text-white font-semibold'
                      : 'text-white hover:text-neutral-200'
                    : isActive
                      ? 'text-primary'
                      : 'text-neutral-700 hover:text-primary'
                  }`
                }
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
                className={`${showTransparent ? 'text-white' : 'text-neutral-800'}`}
              />
            ) : (
              <Menu
                size={28}
                className={`${showTransparent ? 'text-white' : 'text-neutral-800'}`}
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
                  className={({ isActive }) =>
                    `text-lg font-medium p-2 rounded ${isActive
                      ? 'bg-primary-light/10 text-primary'
                      : 'text-neutral-700 hover:bg-neutral-100'
                    }`
                  }
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
