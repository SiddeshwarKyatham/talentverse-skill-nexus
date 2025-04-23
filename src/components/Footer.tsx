
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold text-purple">Pay4Skill</h3>
            </Link>
            <p className="text-gray-600 mt-2">
              Connecting student talent with real-world opportunities. Our platform helps students monetize their skills while helping businesses find fresh talent.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-purple transition-colors">Home</Link></li>
              <li><Link to="#about" className="text-gray-600 hover:text-purple transition-colors">About Us</Link></li>
              <li><Link to="#how-it-works" className="text-gray-600 hover:text-purple transition-colors">How It Works</Link></li>
              <li><Link to="#team" className="text-gray-600 hover:text-purple transition-colors">Meet the Team</Link></li>
              <li><Link to="/login" className="text-gray-600 hover:text-purple transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-gray-600 hover:text-purple transition-colors">Register</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">For Users</h4>
            <ul className="space-y-2">
              <li><Link to="/student/login" className="text-gray-600 hover:text-purple transition-colors">Student Login</Link></li>
              <li><Link to="/student/register" className="text-gray-600 hover:text-purple transition-colors">Student Registration</Link></li>
              <li><Link to="/employer/login" className="text-gray-600 hover:text-purple transition-colors">Employer Login</Link></li>
              <li><Link to="/employer/register" className="text-gray-600 hover:text-purple transition-colors">Employer Registration</Link></li>
              <li><Link to="/tasks" className="text-gray-600 hover:text-purple transition-colors">Browse Tasks</Link></li>
              <li><Link to="/post-task" className="text-gray-600 hover:text-purple transition-colors">Post a Task</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-purple shrink-0" size={20} />
                <span className="text-gray-600">CMRCET - ECE Department, Hyderabad, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-purple shrink-0" size={20} />
                <span className="text-gray-600">contact@pay4skill.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-purple shrink-0" size={20} />
                <span className="text-gray-600">+91 8000-000-000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Pay4Skill. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 text-center">
              <p className="text-gray-500 text-sm">
                Developed by CMRCET - ECE Department, 2027 Batch | 
                Team: Sai Siddeshwar (23H51A0430), Sowmya (22H51A0490), Pranay (23H51A0491), 
                Srikar (23H51A04B5), Asvitha (23H51A04E3), Sai Venkat (23H51A04F1)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
