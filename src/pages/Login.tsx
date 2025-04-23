
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Navbar } from '@/components';
import { ArrowLeft, User, Briefcase, Mail, Lock, ShieldCheck } from 'lucide-react';

const Login: React.FC = () => {
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
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <CardDescription>Log in to your Pay4Skill account</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="student" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="student" className="flex items-center gap-2">
                    <User size={16} />
                    Student
                  </TabsTrigger>
                  <TabsTrigger value="employer" className="flex items-center gap-2">
                    <Briefcase size={16} />
                    Employer
                  </TabsTrigger>
                  <TabsTrigger value="admin" className="flex items-center gap-2">
                    <ShieldCheck size={16} />
                    Admin
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="student">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="email" type="email" placeholder="you@example.com" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="/forgot-password" className="text-sm font-medium text-purple hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-purple hover:bg-purple-dark">Log In</Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="employer">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="employer-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="employer-email" type="email" placeholder="company@example.com" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="employer-password">Password</Label>
                        <Link to="/forgot-password" className="text-sm font-medium text-purple hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="employer-password" type="password" placeholder="Enter your password" className="pl-10" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="employer-remember" />
                      <label
                        htmlFor="employer-remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-purple hover:bg-purple-dark">Log In</Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="admin">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Admin Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="admin-email" type="email" placeholder="admin@pay4skill.com" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Admin Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input id="admin-password" type="password" placeholder="Enter admin password" className="pl-10" />
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-purple hover:bg-purple-dark">Admin Login</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-center text-sm text-gray-700">
                Don't have an account?{" "}
                <Link to="/register" className="font-medium text-purple hover:underline">
                  Create one now
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
