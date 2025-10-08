import AnimatedSection from "../common/animations/AnimatedSection";
import AnimatedCard from "../common/animations/AnimatedCard";
import { motion } from "framer-motion";

const Experience = () => {
  const responsibilities = [
    "Design and develop web and mobile applications as part of freelance project delivery, ensuring solutions meet client expectations and follow best practices in usability and performance.",
    "Apply full stack development to create complete digital products that include both front-end interfaces and back-end services, with focus on responsive design and reliable functionality.",
    "Manage databases by structuring and maintaining information to support application efficiency, data accuracy, security, and long-term scalability.",
    "Implement cloud integration features such as storage and authentication to enhance accessibility, improve performance, and provide seamless user experiences.",
    "Collaborate with clients throughout the project lifecycle by gathering requirements, preparing proposals, and delivering customized applications within agreed timelines.",
  ];

  return (
    <div className="content max-xxl:px-4 xxl:px-2 py-6 md:py-10 lg:py-20" id="experience">
      <AnimatedSection className="text-center mb-8 lg:mb-12" delay={0.2}>
        <motion.p 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Experience
        </motion.p>
        <motion.p 
          className="text-xs sm:text-base font-normal text-gray-400 mt-3 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Professional experience in full-stack development and freelance projects
        </motion.p>
      </AnimatedSection>
      
      <AnimatedCard 
        delay={0.4}
        className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Full Stack Developer
            </h3>
            <p className="text-base text-picto-primary font-medium mt-1">
              Freelance
            </p>
            <p className="text-sm text-gray-600 mt-1">Sri Lanka</p>
          </div>
          <span className="text-sm text-gray-700 font-medium whitespace-nowrap">
            2024 - Present
          </span>
        </div>
        
        <div className="mt-6">
          <h4 className="text-base font-semibold text-gray-700 mb-3">
            Key Responsibilities:
          </h4>
          <ul className="space-y-3">
            {responsibilities.map((responsibility, index) => (
              <motion.li 
                key={index} 
                className="flex gap-3 text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.6 + (index * 0.1), 
                  duration: 0.4 
                }}
              >
                <span className="text-picto-primary mt-1 flex-shrink-0">•</span>
                <span>{responsibility}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Experience;

