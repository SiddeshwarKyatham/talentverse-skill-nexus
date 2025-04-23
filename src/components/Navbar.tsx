
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-10 bg-white/80 backdrop-blur-md shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-poppins font-bold text-2xl text-purple">Pay4Skill</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple transition-colors">Home</Link>
            <Link to="#how-it-works" className="text-gray-700 hover:text-purple transition-colors">How It Works</Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-purple transition-colors">
                For Students <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 hidden group-hover:block transition-all">
                <Link to="/student/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple/10 rounded-md">Student Login</Link>
                <Link to="/student/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple/10 rounded-md">Student Registration</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-purple transition-colors">
                For Employers <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 hidden group-hover:block">
                <Link to="/employer/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple/10 rounded-md">Employer Login</Link>
                <Link to="/employer/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple/10 rounded-md">Employer Registration</Link>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button asChild variant="outline" className="border-purple text-purple hover:bg-purple/10">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-purple hover:bg-purple-dark text-white">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 z-50 animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-purple py-2 px-4 rounded hover:bg-purple/5" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="#how-it-works" className="text-gray-700 hover:text-purple py-2 px-4 rounded hover:bg-purple/5" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
            
            <div className="border-t border-gray-100 my-2"></div>
            <span className="px-4 text-sm font-semibold text-gray-500">For Students</span>
            <Link to="/student/login" className="text-gray-700 hover:text-purple py-2 px-4 rounded hover:bg-purple/5" onClick={() => setIsMenuOpen(false)}>Student Login</Link>
            <Link to="/student/register" className="text-gray-700 hover:text-purple py-2 px-4 rounded hover:bg-purple/5" onClick={() => setIsMenuOpen(false)}>Student Registration</Link>
            
            <div className="border-t border-gray-100 my-2"></div>
            <span className="px-4 text-sm font-semibold text-gray-500">For Employers</span>
            <Link to="/employer/login" className="text-gray-700 hover:text-purple py-2 px-4 rounded hover:bg-purple/5" onClick={() => setIsMenuOpen(false)}>Employer Login</Link>
            <Link to="/employer/register" className="text-gray-700 hover:text-purple py-2 px-4 rounded hover:bg-purple/5" onClick={() => setIsMenuOpen(false)}>Employer Registration</Link>
            
            <div className="border-t border-gray-100 my-2"></div>
            <div className="flex flex-col space-y-3 px-4 pt-2">
              <Button asChild variant="outline" className="border-purple text-purple hover:bg-purple/10 w-full">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              </Button>
              <Button asChild className="bg-purple hover:bg-purple-dark text-white w-full">
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
