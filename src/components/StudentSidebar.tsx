
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Briefcase,
  Settings,
  LogOut,
  User,
  PieChart
} from 'lucide-react';

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, href, active }) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-purple",
        active ? "bg-purple/10 text-purple" : "text-gray-700"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const StudentSidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="h-screen w-64 flex flex-col fixed left-0 top-0 bg-white border-r border-gray-200">
      <div className="p-4 border-b">
        <Link to="/" className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-purple">Pay4Skill</h3>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-2">
          <NavItem 
            icon={<LayoutDashboard size={18} />} 
            label="Dashboard" 
            href="/student/dashboard"
            active={currentPath === '/student/dashboard'} 
          />
          <NavItem 
            icon={<Briefcase size={18} />} 
            label="Available Tasks" 
            href="/student/tasks"
            active={currentPath === '/student/tasks'} 
          />
          <NavItem 
            icon={<FileText size={18} />} 
            label="My Tasks" 
            href="/student/my-tasks"
            active={currentPath === '/student/my-tasks'} 
          />
          <NavItem 
            icon={<MessageSquare size={18} />} 
            label="Messages" 
            href="/student/messages"
            active={currentPath === '/student/messages'} 
          />
          <NavItem 
            icon={<PieChart size={18} />} 
            label="Earnings" 
            href="/student/earnings"
            active={currentPath === '/student/earnings'} 
          />
        </nav>
        
        <hr className="my-6" />
        
        <nav className="space-y-2">
          <NavItem 
            icon={<User size={18} />} 
            label="Profile" 
            href="/student/profile"
            active={currentPath === '/student/profile'} 
          />
          <NavItem 
            icon={<Settings size={18} />} 
            label="Settings" 
            href="/student/settings"
            active={currentPath === '/student/settings'} 
          />
          <Link
            to="/login"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:text-red-500 transition-all"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default StudentSidebar;
