import React from 'react';
import { Briefcase, GraduationCap, Award, Download, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="education" className="relative w-full py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-900 dark:via-black dark:to-indigo-950 transition-all duration-700 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Title with Enhanced Styling */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300 bg-clip-text text-transparent mb-6 animate-pulse">
            Education & Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through learning, building, and achieving milestones
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>

          <div className="pl-20 space-y-24">
            {/* === Education === */}
            <div className="relative group">
              <span className="absolute -left-14 top-2 bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <GraduationCap size={20} />
              </span>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400">🎓</span>
                    Education
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 rounded-xl border-l-4 border-indigo-500">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">CHARUSAT University</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">Anand, Gujarat</p>
                      <p className="text-gray-700 dark:text-gray-200 mt-2">B.Tech in Computer Engineering (2023–2027)</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-indigo-600 text-white text-sm rounded-full font-medium">
                        CGPI: 8.62
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <h4 className="font-semibold text-gray-800 dark:text-white">12th Science</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Shree Gyandeep Vidhyalaya, Rajkot (2023)</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <h4 className="font-semibold text-gray-800 dark:text-white">10th Grade</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Shree Gyandeep Vidhyalaya, Rajkot (2021)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === Internships === */}
            <div className="relative group">
              <span className="absolute -left-14 top-2 bg-gradient-to-r from-cyan-600 to-blue-600 p-3 rounded-full text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Briefcase size={20} />
              </span>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">💼</span>
                    Internships
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 rounded-xl border-l-4 border-cyan-500">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Web Development Intern</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">Full-stack web development experience</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {['React', 'Node.js', 'MongoDB', 'TailwindCSS'].map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-cyan-600 text-white text-sm rounded-full font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === Hackathons & Achievements === */}
            <div className="relative group">
              <span className="absolute -left-14 top-2 bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-full text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Award size={20} />
              </span>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                    <span className="text-orange-600 dark:text-orange-400">🏆</span>
                    Hackathons & Achievements
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 rounded-xl border-l-4 border-orange-500">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">🧠 InnoTech 1.0</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">Presented project and received professional feedback</p>
                      
                      <div className="p-4 mt-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 rounded-lg border border-yellow-200 dark:border-yellow-700">
                        <h5 className="text-md font-semibold text-gray-800 dark:text-white mb-2">🍕 Food Fox</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          PHP-based food delivery web application that allows users to browse restaurants, place orders, and manage deliveries. 
                          Features include user authentication, admin dashboard, and order management.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'].map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-orange-600 text-white text-xs rounded-full font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <a href="https://github.com/jaylakhani2403/Food-Fox-food-delivery-web-.git" className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                            <ExternalLink size={12} />
                            GitHub
                          </a>
                          <a href="https://drive.google.com/file/d/1W66P1g3RYfZO7nZSfT3_yJHbk_fkS0Na/view?usp=drive_link" className="inline-flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                            <Award size={12} />
                            Certificate
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl border-l-4 border-purple-500">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">⏱ 48-Hour Hackathon</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">@ Nirma University – Built real-time prototype</p>
                      
                      <div className="p-4 mt-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900 dark:to-teal-900 rounded-lg border border-emerald-200 dark:border-emerald-700">
                        <h5 className="text-md font-semibold text-gray-800 dark:text-white mb-2">🤖 AI Spoilage Detection System</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Petpooja is an AI-powered kitchen management system that leverages computer vision to track inventory and detect food spoilage in real-time. It ensures efficient stock management, reduces waste, and maintains food quality through automated visual monitoring and intelligent alerts.
(YOLOv8 + Flask for fruit quality classification)</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {['YOLOv8', 'Flask', 'AI/ML', 'Computer Vision'].map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-emerald-600 text-white text-xs rounded-full font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <a href="https://github.com/Aaryan013/NU_Petpooja.git" className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                            <ExternalLink size={12} />
                            GitHub
                          </a>
                          <a href="https://drive.google.com/file/d/1XHvIQwFMpKovoT6v0Ya-hlaNGPaaI8-P/view?usp=drive_link" className="inline-flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                            <Award size={12} />
                            Certificate
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 rounded-xl border-l-4 border-indigo-500">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">💻 175+ LeetCode Problems</h4>
                          <p className="text-gray-600 dark:text-gray-300">Solved using multiple programming languages</p>
                        </div>
                        <a href="https://leetcode.com/u/jaylakhani2403/" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mt-3 md:mt-0">
                          <ExternalLink size={16} />
                          View Profile
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['C++', 'Python', 'SQL'].map((lang, index) => (
                          <span key={index} className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full font-medium">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Let's connect and build something amazing together. I'm always excited to work on innovative projects and bring creative ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://drive.google.com/file/d/1HSD6JpdALOp05L-MqwsyOAkok_6-JBW9/view?usp=drive_link"
                target="_blank"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download size={20} className="relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
              </a>
              
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-semibold rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all duration-300"
              >
                <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Get In Touch</span>
              </a>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>💡 Open for opportunities</span>
              <span>•</span>
              <span>🚀 Ready to innovate</span>
              <span>•</span>
              <span>✨ Let's create together</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;