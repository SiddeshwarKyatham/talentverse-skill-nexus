
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Briefcase } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple/20 via-white to-mint/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">Ready to Get <span className="gradient-text">Started?</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Pay4Skill today and start your journey towards skill-based earnings and career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 text-center card-hover">
            <div className="bg-purple/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <User className="h-8 w-8 text-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3">For Students</h3>
            <p className="text-gray-600 mb-6">
              Showcase your skills, find real-world projects, get paid, and build your portfolio.
            </p>
            <Button asChild className="bg-purple hover:bg-purple-dark text-white w-full">
              <Link to="/student/register">Join as a Student</Link>
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center card-hover">
            <div className="bg-purple/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-8 w-8 text-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3">For Employers</h3>
            <p className="text-gray-600 mb-6">
              Access a pool of talented students, post tasks, and find the perfect match for your projects.
            </p>
            <Button asChild className="bg-purple hover:bg-purple-dark text-white w-full">
              <Link to="/employer/register">Hire Talent</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
