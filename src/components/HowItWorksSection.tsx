
import React from 'react';
import { UserRound, Search, FileCheck, DollarSign } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <UserRound className="h-10 w-10 text-purple" />,
      title: "Create Your Profile",
      description: "Sign up and showcase your skills, education, and experience to stand out to potential employers.",
      color: "bg-purple/10",
    },
    {
      icon: <Search className="h-10 w-10 text-purple" />,
      title: "Find Relevant Tasks",
      description: "Browse through tasks that match your skills and apply to those that interest you.",
      color: "bg-mint",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-purple" />,
      title: "Complete the Work",
      description: "Once selected, communicate with employers, deliver quality work, and get reviews.",
      color: "bg-purple/10",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-purple" />,
      title: "Get Paid",
      description: "Receive secure payment directly to your account once your work is approved.",
      color: "bg-mint",
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">How <span className="gradient-text">Pay4Skill</span> Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform makes it simple to find opportunities, showcase your talent, and get paid for your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden card-hover"
            >
              <div className={`${step.color} p-6 flex justify-center`}>
                <div className="bg-white rounded-full p-4 shadow-md">
                  {step.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full bg-purple/10 px-3 py-1 text-sm font-medium text-purple mb-4">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
