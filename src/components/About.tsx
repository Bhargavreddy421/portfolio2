import React from 'react';
import { Download, User, Code, Coffee } from 'lucide-react';
import profilePic from './download.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developer with 5+ years of experience creating innovative web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a full stack developer who loves turning complex problems into simple, 
                beautiful designs. When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the developer community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey in web development started 5 years ago, and I've had the privilege 
                of working with startups and established companies to create digital experiences 
                that make a difference.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="flex justify-center mb-2">
                    <Code className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Clean Code</h3>
                  <p className="text-sm text-gray-600">Maintainable & Scalable</p>
                </div>
                <div className="p-4">
                  <div className="flex justify-center mb-2">
                    <User className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">User Focused</h3>
                  <p className="text-sm text-gray-600">Great User Experience</p>
                </div>
                <div className="p-4">
                  <div className="flex justify-center mb-2">
                    <Coffee className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Always Learning</h3>
                  <p className="text-sm text-gray-600">Staying Current</p>
                </div>
              </div>

              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg">
                <Download className="h-5 w-5" />
                Download Resume
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-sm font-semibold text-gray-900">5+ Years Experience</p>
                <p className="text-xs text-gray-600">Full Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;