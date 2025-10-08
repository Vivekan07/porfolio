const educationData = [
  {
    id: 1,
    degree: "BSc (Hons) in Software Engineering",
    level: "(Upper Second Class) (FHEQ / NQL LEVEL 06)",
    institution: "ESOFT Metro Campus (London Metropolitan University)",
    location: "Jaffna, Sri Lanka",
    date: "2023 - 2024",
  },
  {
    id: 2,
    degree: "Higher National Diploma in Computing (Software Engineering)",
    level: "(DITEC) (BTECH Level 05)",
    institution: "ESOFT Metro Campus (London Metropolitan University)",
    location: "Jaffna, Sri Lanka",
    date: "Aug 2023",
  },
  {
    id: 3,
    degree: "Diploma in Information Technology",
    level: "(06 Months)",
    institution: "ESOFT Metro Campus (London Metropolitan University)",
    location: "Jaffna, Sri Lanka",
    date: "Mar 2023",
  },
];

const Education = () => {
  return (
    <div className="content max-xxl:px-4 xxl:px-2 py-6 md:py-10 lg:py-20" id="education">
      <div className="text-center mb-8 lg:mb-12">
        <p className="section-title">Education</p>
        <p className="text-xs sm:text-base font-normal text-gray-400 mt-3 max-w-3xl mx-auto">
          Academic qualifications in Software Engineering and Computing from London Metropolitan University
        </p>
      </div>
      
      <div className="space-y-6">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {edu.degree}
              </h3>
              <span className="text-sm text-picto-primary font-medium whitespace-nowrap">
                {edu.date}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">{edu.level}</p>
            <p className="text-sm font-medium text-gray-700">{edu.institution}</p>
            <p className="text-xs text-gray-500 mt-1">{edu.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

