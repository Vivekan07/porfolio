import AnimatedSection from "../common/animations/AnimatedSection";
import AnimatedCard from "../common/animations/AnimatedCard";
import { motion } from "framer-motion";

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
      <AnimatedSection className="text-center mb-8 lg:mb-12" delay={0.2}>
        <motion.p 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Education
        </motion.p>
        <motion.p 
          className="text-xs sm:text-base font-normal text-gray-400 mt-3 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Academic qualifications in Software Engineering and Computing from London Metropolitan University
        </motion.p>
      </AnimatedSection>
      
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <AnimatedCard
            key={edu.id}
            delay={0.1 * index}
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
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
};

export default Education;

