
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import StudentSidebar from '@/components/StudentSidebar';
import { 
  BarChart2, 
  Star, 
  Clock, 
  Award, 
  Send, 
  User,
  MessageSquare,
  Briefcase 
} from 'lucide-react';

const StudentDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <StudentSidebar />
      <div className="flex-1 p-6 lg:ml-64">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Track your progress and find new opportunities.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="bg-purple/10 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Tasks</p>
                <h3 className="text-2xl font-semibold">4</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="bg-purple/10 p-3 rounded-full mr-4">
                <Award className="h-6 w-6 text-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <h3 className="text-2xl font-semibold">12</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="bg-purple/10 p-3 rounded-full mr-4">
                <Star className="h-6 w-6 text-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Rating</p>
                <h3 className="text-2xl font-semibold">4.8</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="bg-purple/10 p-3 rounded-full mr-4">
                <MessageSquare className="h-6 w-6 text-purple" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Messages</p>
                <h3 className="text-2xl font-semibold">6</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Tasks */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Active Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2].map((task) => (
                  <div key={task} className="bg-white p-4 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">UI Design for E-commerce</h4>
                        <p className="text-sm text-gray-600">Client: TechCorp</p>
                      </div>
                      <Badge variant="outline" className="bg-purple/10 text-purple border-purple">
                        In Progress
                      </Badge>
                    </div>
                    <Progress value={65} className="my-2" />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        2 days left
                      </span>
                      <span>₹5,000</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Profile Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-purple/10 mx-auto mb-4 flex items-center justify-center">
                  <User className="h-10 w-10 text-purple" />
                </div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-600">UI/UX Designer</p>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Top Skills</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">UI Design</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Figma</Badge>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-1">Achievements</p>
                  <div className="flex gap-2">
                    <Award className="h-5 w-5 text-purple" />
                    <Award className="h-5 w-5 text-purple" />
                    <Award className="h-5 w-5 text-purple" />
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-6">
                <Send className="mr-2 h-4 w-4" /> Update Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
