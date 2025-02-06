import React, { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase, Heart, Brain, Mountain, Code, School } from "lucide-react";

const sections = [
  {
    id: "professional",
    title: "Professional Journey",
    icon: <Briefcase className="w-6 h-6 text-blue-400" />,
    content: [
      {
        icon: <Code className="w-5 h-5 text-blue-400" />,
        title: "Infinity Learn",
        description: "My journey at Infinity Learn (formerly Wizklub) from March 2022 to February 2024, spanning 1 year and 11 months, provided me with a structured learning path in coding and development. It strengthened my problem-solving skills, deepened my technical understanding, and instilled a mindset of continuous growth, shaping me into a confident and adaptable developer."
      },
      {
        icon: <School className="w-5 h-5 text-blue-400" />,
        title: "Veave Technology",
        description: "During my 6-month Web Developer internship at Veave Technology, I discovered my passion for Front-End Development. The knowledge I gained and the realization that the front end is the face of the digital world inspired me to pursue this path. The ability to craft seamless, engaging user experiences and make a lasting impact solidified my decision to specialize in Front-End Development."
      }
    ]
  },
  {
    id: "personal",
    title: "Personal Interests",
    icon: <Heart className="w-6 h-6 text-pink-400" />,
    content: [
      {
        icon: <Brain className="w-5 h-5 text-pink-400" />,
        title: "Technical Interests",
        description: [
          "Exploring AI & Machine Learning for web development.",
          "Integrating LLM-powered features for user interaction automation.",
          "Engaging in professional development through courses and workshops.",
          "Keeping up with the latest advancements in web technologies."
        ]
      },
      {
        icon: <Mountain className="w-5 h-5 text-pink-400" />,
        title: "Personal Activities",
        description: [
          "Enjoy trekking for work-life balance and resilience-building.",
          "Crafting data-driven business solutions.",
          "Focusing on innovation, growth, and competitive advantage.",
          "Developing strategic thinking through various activities."
        ]
      }
    ]
  }
];

const AccordionItem = ({ title, children, isOpen, onToggle, icon }) => (
  <div className="border border-gray-700 rounded-lg shadow-md overflow-hidden mb-6">
    <button className="w-full px-4 py-4 flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition-colors" onClick={onToggle}>
      <div className="flex items-center gap-3">{icon}<span className="text-lg font-medium text-gray-100">{title}</span></div>
      {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
    </button>
    {isOpen && <div className="px-4 py-6 bg-gray-800">{children}</div>}
  </div>
);

const About = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-100 mb-8 border-b-4 border-gray-500 inline-block">About</h1>
        {sections.map(({ id, title, icon, content }) => (
          <AccordionItem key={id} title={title} isOpen={openSection === id} onToggle={() => toggleSection(id)} icon={icon}>
            {content.map(({ icon, title, description }, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-2">{icon}<h3 className="text-xl font-semibold text-gray-100">{title}</h3></div>
                {Array.isArray(description) ? (
                  <ul className="list-disc list-inside text-gray-300 pl-7 pb-2">
                    {description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 pl-7 pb-2">{description}</p>
                )}
              </div>
            ))}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

export default About;
