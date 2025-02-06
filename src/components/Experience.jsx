import { experienceData } from '../data/experienceData';

const Experience = () => {

  const colorMap = {
    blue: "marker:text-blue-400",
    red: "marker:text-red-400",
    green: "marker:text-green-400",
    yellow: "marker:text-yellow-400",
  };
  return (
    <div name="experience" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-2">
          <h2 className="text-4xl font-bold text-white border-b-4 border-gray-500 inline-block">
            Professional Journey
          </h2>
        </div>
        {experienceData.map((section, index) => (
          <div key={section.company} className={index !== experienceData.length - 1 ? "mb-16" : ""}>
            <div className="flex items-center gap-3 mb-6">
              <section.icon className={`text-${section.color}-400 w-8 h-8`} />
              <h3 className="text-2xl font-bold text-white">{section.company}</h3>
            </div>

            <div className={`relative pl-8 border-l-2 border-${section.color}-400 space-y-10`}>
              {section.items.map((item) => (
                <div key={item.title} className="relative">
                  {/* Adjusted positioning of the icon container */}
                  <div className={`absolute -left-[57px] top-6 flex items-center justify-center w-12 h-12`}>
                    <div className={`absolute w-full h-0.5 bg-${section.color}-400`} />
                    <div className={`relative z-10 p-2 bg-gray-900 rounded-full border-2 border-${section.color}-400`}>
                      <item.icon className={`text-${section.color}-400 w-5 h-5`} />
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02]">
                    <h4 className={`text-xl font-semibold text-${section.color}-400 mb-4`}>
                      {item.title}
                    </h4>
                    <ul className="space-y-3 list-disc pl-5">
                      {item.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className={`text-gray-300 list-item ${colorMap[section.color] || "marker:text-white-400"}`}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>


                    {/* Render Projects if they exist */}
                    {item.projects && item.projects.length > 0 && (
                      <div className="mt-6">
                        <h5 className={`text-lg font-semibold text-${section.color}-400 mb-3`}>Projects:</h5>
                        <ul className="space-y-3 ">
                          {item.projects.map((project, projectIndex) => (
                            <li key={projectIndex} className={`text-gray-300 list-item ${colorMap[section.color] || "marker:text-white-400"}`}>
                              <strong className="text-white">{project.name}:</strong>
                              <ul className="ml-4 list-disc">
                                {project.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="text-gray-300">{detail}</li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
