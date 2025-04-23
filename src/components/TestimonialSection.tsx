
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
      content: "Pay4Skill helped me land my first paying gig while still in college. The experience I gained working with real clients has been invaluable for my portfolio and resume."
    },
    {
      name: "Rahul Mehta",
      role: "Employer - TechFusion",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
      content: "We've found amazing student talent through Pay4Skill. The quality of work has been exceptional, and the platform makes it easy to find students with the exact skills we need."
    },
    {
      name: "Aisha Patel",
      role: "Design Student",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4,
      content: "As a design student, Pay4Skill has given me opportunities to work on real projects and build my professional portfolio. The feedback from employers has helped me grow my skills."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4">What People <span className="gradient-text">Say About Us</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students and employers who have found success on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 card-hover"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-gray-700">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
