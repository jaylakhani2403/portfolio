import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle, LinkIcon, X } from 'lucide-react';

const Certifications = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      issueDate: 'January 2025',
      expiryDate: 'January 2027',
      credentialId: 'AWS-CP-2025-001',
      verifyUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
      description: 'Demonstrates foundational AWS Cloud knowledge including core AWS services, security, compliance, and billing.',
      skills: ['AWS Services', 'Cloud Concepts', 'Security & Compliance', 'Pricing'],
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800',
      icon: '☁️',
      image: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.3d348937c80a8e38582559205a335a909e36b0b9.png',
      badgeUrl: 'https://www.credly.com/badges/aws-cloud-practitioner'
    },
    {
      id: 2,
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      issueDate: 'February 2025',
      expiryDate: 'February 2027',
      credentialId: 'AWS-SA-2025-001',
      verifyUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
      description: 'Validates ability to design and deploy dynamically scalable, highly available, and fault-tolerant systems on AWS.',
      skills: ['Architecture Design', 'EC2', 'RDS', 'S3', 'VPC', 'Lambda', 'DynamoDB', 'CloudFormation'],
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-100 dark:from-yellow-900 dark:to-orange-800',
      icon: '🏗️',
      image: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3e4df189092b9ea1b09ada3e3bfc5e2570fbbbf1.png',
      badgeUrl: 'https://www.credly.com/badges/aws-solutions-architect-associate'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="certifications"
      className="relative w-full py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-blue-950 transition-all duration-700 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-orange-600 dark:text-orange-400 animate-bounce" />
              <span className="text-sm font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900 px-4 py-2 rounded-full">
                Professional Certifications
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 dark:from-orange-400 dark:via-red-400 dark:to-yellow-400 bg-clip-text text-transparent mb-6">
              AWS Certified
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Validated expertise in AWS cloud architecture and foundational cloud computing concepts
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group cursor-pointer transition-all duration-300"
              onClick={() => toggleExpand(cert.id)}
            >
              <div
                className={`relative h-full bg-gradient-to-br ${cert.bgColor} rounded-2xl p-8 border-2 border-opacity-20 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
              >
                {/* Background Accent */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${cert.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Certificate Image */}
                  <div className="mb-6 flex justify-center">
                    <div 
                      className="relative group/img cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(cert.image);
                      }}
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-contain rounded-lg shadow-lg group-hover/img:shadow-xl transition-all duration-300 group-hover/img:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 rounded-lg bg-black/0 group-hover/img:bg-black/10 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-300">
                        <span className="text-white text-sm font-semibold">Click to expand</span>
                      </div>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-5xl">{cert.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                          <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="inline-block mb-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${cert.color}`}>
                      Verified
                    </span>
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <p className="text-xs text-gray-600 dark:text-gray-400">Issued</p>
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">{cert.issueDate}</p>
                    </div>
                    <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <p className="text-xs text-gray-600 dark:text-gray-400">Expires</p>
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">{cert.expiryDate}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Expandable Section */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedId === cert.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-300/50 dark:border-gray-600/50 space-y-4">
                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Key Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/70 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-200 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Credential ID */}
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Credential ID</p>
                        <p className="text-sm font-mono font-semibold text-gray-800 dark:text-white">{cert.credentialId}</p>
                      </div>

                      {/* Verify Buttons */}
                      <div className="flex gap-3 flex-wrap">
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105`}
                        >
                          <LinkIcon className="w-4 h-4" />
                          Verify
                        </a>
                        <a
                          href={cert.badgeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105`}
                        >
                          <Award className="w-4 h-4" />
                          Credly
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {expandedId === cert.id ? 'Hide Details' : 'View Details'}
                    </div>
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white transition-transform duration-300 ${expandedId === cert.id ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Cloud-Ready</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Certified expertise in AWS services, architecture best practices, and cloud-native development
            </p>
          </div>

          <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Security-Focused</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Deep knowledge of AWS security, compliance, and risk management principles
            </p>
          </div>

          <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Scalable Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Ability to design and implement scalable, highly available AWS infrastructure
            </p>
          </div>
        </div>

        {/* Continuous Learning Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 rounded-3xl p-10 border-2 border-indigo-200 dark:border-indigo-700 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
            Committed to Continuous Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Beyond these certifications, I'm consistently exploring advanced AWS topics, staying updated with latest cloud technologies, and planning to pursue higher-level certifications including AWS Certified Solutions Architect Professional.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
              AWS Services
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 rounded-full text-sm font-medium">
              Cloud Architecture
            </span>
            <span className="px-4 py-2 bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-200 rounded-full text-sm font-medium">
              DevOps & Automation
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 rounded-full text-sm font-medium">
              Cloud Security
            </span>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 bg-gray-900/80 hover:bg-gray-900 text-white p-2 rounded-full transition-all"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};
export default Certifications;
