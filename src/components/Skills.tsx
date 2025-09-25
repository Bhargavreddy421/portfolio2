import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
    { name: 'Node.js', level: 88, color: 'bg-green-500' },
    { name: 'Python', level: 85, color: 'bg-yellow-500' },
    { name: 'PostgreSQL', level: 82, color: 'bg-blue-700' },
    { name: 'AWS', level: 78, color: 'bg-orange-500' },
    { name: 'Docker', level: 80, color: 'bg-blue-400' },
    { name: 'GraphQL', level: 75, color: 'bg-pink-500' },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Python',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Redis',
    'GraphQL', 'REST APIs', 'Tailwind CSS', 'Jest', 'Cypress', 'Git'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skill Bars */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Proficiency Levels</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Tags */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">What I'm Currently Learning</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Web3
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Microservices
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;