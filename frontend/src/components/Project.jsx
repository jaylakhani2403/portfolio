import React, { useState } from 'react';
import { ExternalLink, Github, Play, X } from 'lucide-react';

const projects = [
  {
    title: "TAPMS (Teams And Project Management System)",
    tech: "MongoDB, Express.js, React.js, Node.js (MERN)",
    description: "A full-featured platform for managing teams and academic projects, including student-faculty collaboration, join requests, and project tracking.",
    githubLink: "https://github.com/vasu-CE/TAPMS.git",
    liveLink: "https://tapms-1.onrender.com",
    videoId: "",
    featured: true
  },
  {
    title: "Email Marketing Platform",
    tech: "MERN Stack, Nodemailer, Excel Integration",
    description: "A platform to send bulk emails using SMTP settings, Excel upload, campaign tracking, and open/click statistics.",
    githubLink: "https://github.com/jaylakhani2403/email-marketing.git",
    liveLink: "https://email-marketing-1-ki4r.onrender.com",
    videoId: "",
    featured: false
  },
  {
    title: "Food Fox – Food Delivery Web App",
    tech: "PHP, MySQL, HTML, CSS",
    description: "A responsive food delivery system with restaurant menus, cart management, and order history for users.",
    githubLink: "https://github.com/jaylakhani2403/Food-Fox-food-delivery-web-.git",
    liveLink: "",
    videoId: "",
    featured: false
  },
];

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (videoId) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="projects" className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my recent work showcasing full-stack development, modern technologies, and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-bl-lg text-xs font-semibold">
                  Featured
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 dark:text-indigo-300 dark:from-indigo-900 dark:to-purple-900 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {project.tech}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  {project.videoId && (
                    <button
                      onClick={() => openVideo(project.videoId)}
                      className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-lg"
                    >
                      <Play size={16} />
                      Watch Demo
                    </button>
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]">
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300"
              >
                <X size={24} />
              </button>
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Project Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/jaylakhani2403?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
