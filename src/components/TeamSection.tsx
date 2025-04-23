
import React from 'react';
import { Linkedin, GitHub, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  id: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const TeamSection: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Sai Siddeshwar",
      role: "Team Lead",
      id: "23H51A0430",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      social: {
        linkedin: "#",
        github: "#",
        email: "sai@example.com",
      },
    },
    {
      name: "Sowmya",
      role: "Frontend Developer",
      id: "22H51A0490",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      social: {
        linkedin: "#",
        github: "#",
        email: "sowmya@example.com",
      },
    },
    {
      name: "Pranay",
      role: "Backend Developer",
      id: "23H51A0491",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      social: {
        linkedin: "#",
        github: "#",
        email: "pranay@example.com",
      },
    },
    {
      name: "Srikar",
      role: "UI/UX Designer",
      id: "23H51A04B5",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      social: {
        linkedin: "#",
        github: "#",
        email: "srikar@example.com",
      },
    },
    {
      name: "Asvitha",
      role: "Database Engineer",
      id: "23H51A04E3",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
      social: {
        linkedin: "#",
        github: "#",
        email: "asvitha@example.com",
      },
    },
    {
      name: "Sai Venkat",
      role: "QA Engineer",
      id: "23H51A04F1",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      social: {
        linkedin: "#",
        github: "#",
        email: "saivenkat@example.com",
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">Meet Our <span className="gradient-text">Team</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The talented students behind Pay4Skill from CMRCET - ECE Department, 2027 Batch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{member.id}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-purple mb-4">{member.role}</p>
                
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-purple transition-colors">
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-purple transition-colors">
                      <GitHub size={18} />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-purple transition-colors">
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
