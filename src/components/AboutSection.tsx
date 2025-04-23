
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      title: "Skill-Based Tasks",
      description: "Access real-world tasks that match your specific skill set and interests."
    },
    {
      title: "Secure Payments",
      description: "Get paid securely for your completed work through our trusted payment system."
    },
    {
      title: "Portfolio Building",
      description: "Build an impressive professional portfolio with verified work experience."
    },
    {
      title: "Flexible Schedule",
      description: "Work on your own time, balancing studies with skill-based earning."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">About <span className="gradient-text">Pay4Skill</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between talented students and employers looking for fresh skills.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Students collaborating on projects" 
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Empowering Students Through Real-World Skills</h3>
            <p className="text-gray-700 mb-8">
              Pay4Skill was created by students, for students. We understand the challenge of gaining work experience while studying, 
              so we built a platform that connects college talent with businesses looking for fresh perspectives and skills.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-purple shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
