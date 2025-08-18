import React, { useState } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
const base_url=import.meta.env.VITE_API_BASE_URL;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${base_url}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Error: ${errorData.message}`);
        return;
      }

      const data = await res.json();
      alert(data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed to send message. Server might be down.");
      console.error("Submit error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 min-h-screen flex items-center transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 relative">
              Let's Connect
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mt-8">
            I'd love to hear from you! Whether you want to collaborate, have a question, 
            or just want to say hello, don't hesitate to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Send me a message</h3>
              <p className="text-gray-600 dark:text-gray-300">I'll get back to you as soon as possible!</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-300 transition-all duration-300 bg-white/50 dark:bg-gray-800 backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white outline-none"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-300 transition-all duration-300 bg-white/50 dark:bg-gray-800 backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white outline-none"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block">Your Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project, ask a question, or just say hi!"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-300 transition-all duration-300 bg-white/50 dark:bg-gray-800 backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white resize-none outline-none"
                />
              </div>
              
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
               <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 border border-green-200 dark:border-green-700 rounded-3xl p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-700 dark:text-green-300 font-semibold">Quick Response</span>
              </div>
              <p className="text-green-600 dark:text-green-400 text-sm">
                I typically respond within 24 hours
              </p>
            </div>
            </div>
            
          </div>
          

          {/* Social Links & Info */}
          <div className="space-y-8">
            {/* Social Media */}
            <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Connect with me</h3>
              <div className="grid grid-cols-2 gap-4 dark:text-white">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/jay-lakhani-5468ab286", label: "LinkedIn", color: "hover:bg-blue-600" },
                  { icon: Github, href: "https://github.com/jaylakhani2403", label: "GitHub", color: "hover:bg-gray-800" },
                  { icon: Mail, href: "mailto:jaylakhani2403@gmail.com", label: "Email", color: "hover:bg-red-500" },
                  { icon: Twitter, href: "https://x.com/jaylakhani2403?t=epATrngSfG5kpRN1L2WjsA&s=09", label: "Twitter", color: "hover:bg-blue-400" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                    rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                    className={`group flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 mb-2 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
              

              {/* LeetCode Link */}
              <div className="mt-4">
                <a
                  href="https://leetcode.com/u/jaylakhani2403/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-6 h-6 mr-2 bg-white rounded text-orange-500 flex items-center justify-center font-bold text-sm">
                    LC
                  </div>
                  <span className="font-medium">LeetCode Profile</span>
                </a>
              </div>
            </div>
            

            {/* Quick Info */}
            <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Let's talk about</h3>
              <div className="space-y-4">
                {[
                  { emoji: "🚀", text: "Web Development Projects" },
                  { emoji: "💡", text: "Collaboration Opportunities" }, 
                  { emoji: "🎯", text: "Career Advice & Mentoring" },
                  { emoji: "☕", text: "Just a friendly chat" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 border border-indigo-100 dark:border-indigo-700 hover:shadow-md transition-shadow duration-300">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="text-gray-700 dark:text-gray-100 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
