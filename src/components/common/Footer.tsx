import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/images/himalayan-backpacker-logo.svg"
                alt="Himalayan Backpacker"
                className="h-12 w-auto"
              />
            </div>

            <p className="text-neutral-300 mb-4">
              Your trusted companion for unforgettable trekking adventures in
              Nepal's majestic Himalayan regions.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-300 hover:text-primary-light transition-colors"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="text-neutral-300 hover:text-primary-light transition-colors"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="text-neutral-300 hover:text-primary-light transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2">
              {["Home", "Treks", "Contact", "About Us", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    className="text-neutral-300 hover:text-primary-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trek Regions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trek Regions</h3>

            <ul className="space-y-2">
              {[
                "Everest Region",
                "Annapurna Region",
                "Langtang Region",
                "Mustang Region",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/treks?region=${item.split(" ")[0].toLowerCase()}`}
                    className="text-neutral-300 hover:text-primary-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <ul className="space-y-3">
              {/* Address */}
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-light mt-1 mr-2" />

                <span className="text-neutral-300">
                  Butwal-06, Traffic chowk, Nepal
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center">
                <Phone size={20} className="text-primary-light mr-2" />

                <span className="text-neutral-300">
                  071-419154, +977 9847087647
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center">
                <Mail size={20} className="text-primary-light mr-2" />

                <a
                  href="mailto:hbntrek@gmail.com"
                  className="text-neutral-300 hover:text-primary-light transition-colors"
                >
                  hbntrek@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Backpacker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
