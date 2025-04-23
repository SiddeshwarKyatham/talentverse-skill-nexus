
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Navbar } from '@/components';
import { ArrowLeft, User, Briefcase, Mail, Lock, CheckCircle } from 'lucide-react';

const Register: React.FC = () => {
  const [activeTab, setActiveTab] = useState('student');
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-md mx-auto">
          <Link to="/" className="inline-flex items-center text-purple hover:text-purple-dark mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Create Your Account</CardTitle>
              <CardDescription>Join Pay4Skill to start your journey</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="student" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="student" className="flex items-center gap-2">
                    <User size={16} />
                    Student
                  </TabsTrigger>
                  <TabsTrigger value="employer" className="flex items-center gap-2">
                    <Briefcase size={16} />
                    Employer
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="student">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="email" type="email" placeholder="you@example.com" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="college-id">College ID</Label>
                      <Input id="college-id" placeholder="Enter your college ID" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="password" type="password" placeholder="Create a password" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" placeholder="Confirm your password" />
                    </div>
                    <Button type="submit" className="w-full bg-purple hover:bg-purple-dark">Register as Student</Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="employer">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" placeholder="Enter your company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employer-name">Your Name</Label>
                      <Input id="employer-name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employer-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="employer-email" type="email" placeholder="company@example.com" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employer-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="employer-password" type="password" placeholder="Create a password" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employer-confirm-password">Confirm Password</Label>
                      <Input id="employer-confirm-password" type="password" placeholder="Confirm your password" />
                    </div>
                    <Button type="submit" className="w-full bg-purple hover:bg-purple-dark">Register as Employer</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-gray-500">
                By registering, you agree to our 
                <Link to="/terms" className="font-medium text-purple hover:underline"> Terms of Service</Link> and 
                <Link to="/privacy" className="font-medium text-purple hover:underline"> Privacy Policy</Link>
              </div>
              <div className="text-center text-sm">
                Already have an account? 
                <Link to="/login" className="font-medium text-purple hover:underline ml-1">
                  Log in
                </Link>
              </div>
            </CardFooter>
          </Card>
          
          <div className="mt-10 bg-purple/5 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple shrink-0" />
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Note:</span> This is a student project developed by CMRCET - ECE Department, 2027 Batch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
