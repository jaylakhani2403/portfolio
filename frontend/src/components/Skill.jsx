import React, { useState } from 'react';

const skills = [
  {
    category: "Frontend",
    color: "from-blue-500 to-purple-600",
    bgColor:
      "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30",
    items: [
      { name: "React.js", icon: "⚛️", color: "text-blue-500" },
      { name: "Tailwind CSS", icon: "🎨", color: "text-teal-400" },
      { name: "HTML5", icon: "🌐", color: "text-orange-500" },
      { name: "CSS3", icon: "🎭", color: "text-blue-600" },
      { name: "JavaScript", icon: "⚡", color: "text-yellow-400" },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500 to-emerald-600",
    bgColor:
      "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30",
    items: [
      { name: "Node.js", icon: "🟢", color: "text-green-600" },
      { name: "Express.js", icon: "🚀", color: "text-gray-700 dark:text-gray-300" },
      { name: "MongoDB", icon: "🍃", color: "text-green-500" },
      { name: "MySQL", icon: "🗄️", color: "text-indigo-500" },
    ],
  },
  {
    category: "Programming & Tools",
    color: "from-orange-500 to-red-600",
    bgColor:
      "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30",
    items: [
      { name: "Python", icon: "🐍", color: "text-yellow-500" },
      { name: "C++", icon: "⚙️", color: "text-blue-700" },
      { name: "Git & GitHub", icon: "📝", color: "text-orange-500" },
      { name: "Docker", icon: "🐳", color: "text-blue-400" },
      { name: "AWS (Learning)", icon: "☁️", color: "text-blue-400" },
    ],
  },
  {
    category: "Volunteer Skills",
    color: "from-pink-500 to-rose-600",
    bgColor:
      "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30",
    items: [
      { name: "Event Management", icon: "🎯", color: "text-pink-500" },
      { name: "Team Leadership", icon: "👑", color: "text-purple-600" },
      { name: "Project Coordination", icon: "📊", color: "text-orange-500" },
    ],
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section
  id="skills"
  className="w-full py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 px-4 relative overflow-hidden"
>
  {/* Background decorative elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-pulse">
        Skills & Expertise
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
        Passionate about creating amazing digital experiences with cutting-edge technologies
      </p>
    </div>

    {/* Skills Grid */}
    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
      {skills.map((group, idx) => (
        <div
          key={idx}
          className={`${group.bgColor} dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 dark:border-white/10 backdrop-blur-sm`}
        >
          {/* Category Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-2xl font-bold bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
              {group.category}
            </h3>
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${group.color} animate-ping`}></div>
          </div>

          {/* Skills List */}
          <div className="space-y-4">
            {group.items.map((skill, index) => (
              <div key={index} className="group relative">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/50 hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <span className={`text-2xl group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                    {skill.icon}
                  </span>
                  <div className="flex-1">
                    <span className="text-gray-800 dark:text-gray-200 font-medium text-lg">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Volunteer Certificates Section */}
    <div className="bg-gradient-to-r from-rose-600 to-pink-500 dark:from-rose-800 dark:to-pink-700 rounded-3xl p-8 text-white shadow-2xl mb-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">🤝 Volunteer Certificates</h3>
        <p className="text-rose-100 dark:text-rose-200 mb-6">
          Recognized for contribution to events and student programs
        </p>
        <a
          href="https://drive.google.com/file/d/1W6dWy97qdyVSKnoH3qcOJr_vBPHUV34N/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-rose-600 dark:bg-rose-100 dark:text-rose-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-rose-50"
        >
          <span>📂</span>
          View Volunteer Certificates
        </a>
      </div>
    </div>

    {/* Statistics Section */}
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 rounded-3xl p-8 text-white shadow-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="group hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
          <div className="text-indigo-100 font-medium">Technologies</div>
        </div>
        <div className="group hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
          <div className="text-indigo-100 font-medium">Projects</div>
        </div>
        <div className="group hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold mb-2">freshers</div>
          <div className="text-indigo-100 font-medium">0 Years Experience</div>
        </div>
        <div className="group hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold mb-2">∞</div>
          <div className="text-indigo-100 font-medium">Learning</div>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center mt-12">
      <button className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
        Let's Build Something Amazing Together
      </button>
    </div>
  </div>
</section>

  );
};

export default Skills;