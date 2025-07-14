import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Database, Globe, Sparkles } from 'lucide-react';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['MERN Stack Developer', 'Full Stack Engineer', 'Open to Internships'];
 const handleDownload = () => {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=1HSD6JpdALOp05L-MqwsyOAkok_6-JBW9';
  link.download = 'Jay_Lakhani_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  const skills = [
    { icon: Code, name: 'React', color: 'text-blue-500' },
    { icon: Database, name: 'MongoDB', color: 'text-green-500' },
    { icon: Globe, name: 'Node.js', color: 'text-yellow-500' },
    { icon: Code, name: 'Express', color: 'text-purple-500' }
  ];

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;
    const t=setTimeout(() => {
      
    }, typingSpeed);
   
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRoleText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(prev =>
          isDeleting
            ? prev.slice(0, -1)
            : currentRoleText.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  const FloatingParticle = ({ delay, duration, size }) => (
    <div
      className={`absolute ${size} bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-20 animate-bounce`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  );

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center
        bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50
        dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#312e81]
        px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.5}
            duration={3 + Math.random() * 2}
            size={Math.random() > 0.5 ? 'w-2 h-2' : 'w-1 h-1'}
          />
        ))}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-6xl text-center">
        {/* Welcome Badge */}
        <div className="mb-8 mt-30">
        
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-gray-800 dark:text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Jay Lakhani
            </span>
          </h1>
        </div>

        {/* Typing Effect */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-2 min-h-[3rem] flex items-center justify-center">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent font-semibold">
              {displayText}
            </span>
            <span className="ml-1 w-0.5 h-8 bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
          </h2>
        </div>

        {/* Skills */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group flex items-center gap-2 px-4 py-2
                  bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl
                  border border-gray-200 dark:border-gray-700
                  hover:border-indigo-300 dark:hover:border-indigo-500
                  transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <skill.icon className={`w-5 h-5 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting exceptional digital experiences with modern web technologies. I love turning ideas into reality through clean, efficient code and thoughtful design.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a
            href="/projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Code className="w-5 h-5" />
              View My Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>

        
         <button
    onClick={handleDownload}
    className="group px-8 py-4 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-300 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
  >
    <span className="flex items-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
      Download Resume
    </span>
  </button>
        </div>

        {/* Scroll Down Indicator */}
        {/* <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col items-center text-gray-400 dark:text-gray-500">
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </div> */}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
