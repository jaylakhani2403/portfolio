import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errors, setErrors] = useState({});

  // Initialize EmailJS
  useEffect(() => {
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (emailjsPublicKey) {
      emailjs.init(emailjsPublicKey);
    } else {
      console.warn('EmailJS public key not configured. Please set VITE_EMAILJS_PUBLIC_KEY in .env');
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email format";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration missing');
      }

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, {
        to_email: 'jaylakhani2403@gmail.com',
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        reply_to: form.email
      });

      setSubmitStatus('success');
      setForm({ name: "", email: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 min-h-screen flex items-center transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
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
          <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Send me a message</h3>
              <p className="text-gray-600 dark:text-gray-300">I'll get back to you as soon as possible!</p>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-green-700 dark:text-green-300 font-medium">Message sent successfully! I'll be in touch soon.</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span className="text-red-700 dark:text-red-300 font-medium">Failed to send message. Please try again.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-4 transition-all duration-300 bg-white/50 dark:bg-gray-800 backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white outline-none ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-600 focus:ring-red-100 dark:focus:ring-red-300' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-indigo-100 dark:focus:ring-indigo-300'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-4 transition-all duration-300 bg-white/50 dark:bg-gray-800 backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white outline-none ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-600 focus:ring-red-100 dark:focus:ring-red-300' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-indigo-100 dark:focus:ring-indigo-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block">Your Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project, ask a question, or just say hi!"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-4 transition-all duration-300 bg-white/50 dark:bg-gray-800 backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white resize-none outline-none ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-600 focus:ring-red-100 dark:focus:ring-red-300' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-indigo-100 dark:focus:ring-indigo-300'
                  }`}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 border border-green-200 dark:border-green-700 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-700 dark:text-green-300 font-semibold">Quick Response</span>
              </div>
              <p className="text-green-600 dark:text-green-400 text-sm">
                I typically respond within 24 hours
              </p>
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
