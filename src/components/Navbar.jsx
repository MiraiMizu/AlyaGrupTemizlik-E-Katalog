import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search, Beaker } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Ürünler', path: '/products' },
    { name: 'Hakkımızda', path: '/about' },
    { name: 'İletişim', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors">
            <Beaker className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-primary tracking-tight">ALYA<span className="text-secondary">GRUP</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-gray-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-secondary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/contact" className="btn btn-primary text-sm px-5 py-2.5">
              Teklif Al
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-base font-medium text-gray-600 hover:text-secondary py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <hr className="border-gray-100" />
            <Link
              to="/contact"
              className="btn btn-primary w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
