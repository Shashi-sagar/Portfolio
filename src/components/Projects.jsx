import React, { useState } from 'react';
import { Folder, CheckCircle, Clock, Star, X, FileDown, Image as ImageIcon } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import Portfolio from "../assets/portfolio.png";
import Fods from "../assets/fods.png";

// Categories for filtering projects
const categories = [
  { id: 'all', label: 'All Projects', icon: Folder },
  { id: 'completed', label: 'Completed', icon: CheckCircle },
  { id: 'in-progress', label: 'In Progress', icon: Clock },
  { id: 'upcoming', label: 'Coming Soon', icon: Star }
];

// Project data with added previewDescription field
const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing Skills, Achievements, Journey and Myself",
    previewDescription: "A modern, responsive portfolio website built with React and TailwindCSS. Features smooth animations, dark mode, and a clean UI design.",
    tech: ["React", "TailwindCSS", "MaterialUI"],
    status: "in-progress",
    duration: "01/25 - 02/25",
    link: "#",
    github: "https://github.com/Shashi-sagar/portfolio",
    docs: null,
    image: Portfolio
  },
  {
    title: "BAM 'Book Ambience Moment'",
    description: "BAM – Creating the perfect ambience for your loved ones on any occasion. Stay tuned!",
    previewDescription: " ##Vyom## Coming Soon.. ##Vyom## ",
    tech: ["React", "Redux", "Axios", "Tailwind.css"],
    status: "upcoming",
    duration: "02/25 - ##/25",
    link: "#",
    github: "https://github.com/Shashi-sagar/bam_jone",
    docs: null,
    image: null,
  },
  {
    title: "Food Ordering and Delivery System",
    description: "#AcademicProject, Developed a MySQL-powered Food Ordering System, implementing triggers for automation, stored procedures for efficiency, and normalization for optimized storage. #CollegeProject",
    previewDescription: "A comprehensive food ordering platform with real-time order tracking, payment integration, and an intuitive user interface.",
    tech: ["MySQL", "HTML", "CSS", "PHP"],
    status: "completed",
    duration: "06/18 - 12/19",
    link: "#",
    github: null,
    docs: "/fods.pdf",
    image: Fods
  },
  {
    title: "Object Detection to Speech Using ML",
    description: "#AcademicProject, This project leverages machine learning to detect objects in real time, convert their identities into text, and vocalize the information to the user. Designed primarily for visually impaired individuals, it enhances accessibility by providing auditory feedback about their surroundings, enabling greater independence and awareness. ",
    previewDescription: "The project documentation will be shared soon—I lost the original due to unexpected laptop damage, but I’m working on restoring it.",
    tech: ["Python", "Machine Learning", "pyttsx3"],
    status: "completed",
    duration: "07/19 - 06/20",
    link: "#",
    github: null,
    docs: null,
    image: null,
  }

];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalProject, setModalProject] = useState(null);
  const [activeTab, setActiveTab] = useState('info');

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.status === selectedCategory);

  // Render modal content based on active tab
  const renderModalContent = (project) => {
    switch (activeTab) {
      case 'info':
        return (
          <div className="space-y-4">
            <p className="text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => window.open(project.github, '_blank')}
                disabled={!project.github}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${project.github
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </button>
              <button
                onClick={() => window.open(project.docs, '_blank')}
                disabled={!project.docs}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${project.docs
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
              >
                <FileDown size={20} />
                <span>Documentation</span>
              </button>
            </div>
          </div>
        );
      case 'preview':
        return (
          <div className="space-y-6">
            {/* Preview Image */}
            {project.image ? (
              <div className="relative rounded-lg overflow-hidden flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-[50vh] object-contain"
                />
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center bg-gray-700 rounded-lg">
                <div className="text-center text-gray-400">
                  <ImageIcon size={48} className="mx-auto mb-2 opacity-50" />
                  <p>No preview available</p>
                </div>
              </div>
            )}

            {/* Preview Description */}
            {project.previewDescription && (
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Preview Details</h4>
                <p className="text-gray-300">{project.previewDescription}</p>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div name="projects" className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 border-b-4 border-gray-500 inline-block">Projects</h2>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all transform hover:scale-105
                ${selectedCategory === id ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-800 rounded-lg p-6 h-[280px] transition-all duration-300 hover:scale-105 hover:bg-gray-750"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                <span className={`text-xs px-3 py-1 rounded-full text-white ${project.status === 'completed' ? 'bg-green-500' :
                  project.status === 'in-progress' ? 'bg-yellow-500' :
                    'bg-purple-500'
                  }`}>
                  {project.status.replace('-', ' ')}
                </span>
                <button
                  onClick={() => {
                    setModalProject(project);
                    setActiveTab('info');
                  }}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                </button>
                <span className="text-gray-400 text-sm">{project.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {modalProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
            {/* Sticky Header */}
            <div className="sticky top-0 bg-gray-800 z-10 border-b border-gray-700">
              <div className="flex items-center justify-between p-6">
                <h3 className="text-xl font-bold text-white">{modalProject.title}</h3>
                <button
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => setModalProject(null)}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex border-b border-gray-700">
                <button
                  className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'info'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('info')}
                >
                  Information
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'preview'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('preview')}
                >
                  Preview
                </button>
              </div>
            </div>

            <div className="p-6">
              {renderModalContent(modalProject)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;