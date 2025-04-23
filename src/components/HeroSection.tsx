
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-purple/5 to-mint/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="font-bold mb-6">
              <span className="gradient-text">Get Paid for Your Skills.</span> <br />
              Find Opportunities. <br />
              Deliver Talent.
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Connect with employers looking for your unique skills. Complete real-world tasks, build your portfolio, and get paid for your expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-purple hover:bg-purple-dark text-white text-lg px-8 py-6">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple text-purple hover:bg-purple/10 text-lg px-8 py-6">
                <Link to="#how-it-works" className="flex items-center gap-2">
                  How It Works <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main image */}
              <div className="bg-white rounded-2xl shadow-xl p-4 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Students collaborating" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-5 -right-5 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="bg-green-100 rounded-full p-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Task Completed</p>
                  <p className="font-bold">Web Development</p>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '0.7s' }}>
                <div className="text-center">
                  <p className="text-xs text-gray-600">Payment Received</p>
                  <p className="font-bold text-lg text-purple">₹12,500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white rounded-xl shadow-md p-6 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-4xl font-bold text-purple mb-2">500+</p>
            <p className="text-gray-600">Active Students</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-4xl font-bold text-purple mb-2">200+</p>
            <p className="text-gray-600">Employers</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-4xl font-bold text-purple mb-2">₹15L+</p>
            <p className="text-gray-600">Payments Processed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
