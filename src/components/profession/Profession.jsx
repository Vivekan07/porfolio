import Roles from "./Roles";
import AnimatedSection from "../common/animations/AnimatedSection";
import AnimatedCard from "../common/animations/AnimatedCard";
import { motion } from "framer-motion";

const rolesData = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      "HTML, CSS, JavaScript, TypeScript, React.js, Next.js - Creating responsive and interactive user interfaces.",
  },
  {
    id: 2,
    title: "Back-End Development",
    description:
      "Node.js, Python, Java, Spring Boot, C#, ASP.NET, PHP - Building robust server-side applications and APIs.",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "MERN Stack (MongoDB, Express.js, React.js, Node.js) - End-to-end web application development.",
  },
  {
    id: 4,
    title: "Database Management",
    description:
      "MongoDB, MySQL, SQL Server - Designing and managing efficient database systems.",
  },
  {
    id: 5,
    title: "Cloud Integration",
    description:
      "AWS S3, Firebase - Implementing cloud storage and authentication features for scalable applications.",
  },
  {
    id: 6,
    title: "Development Tools",
    description:
      "Visual Studio Code, IntelliJ IDEA, NetBeans, Android Studio, Visual Studio - Proficient with industry-standard IDEs.",
  },
  {
    id: 7,
    title: "Professional Skills",
    description:
      "Project Management, Problem Solving, Leadership, Communication, Time Management, Critical Thinking.",
  },
  {
    id: 8,
    title: "Languages",
    description:
      "Tamil, English, Sinhala - Multilingual communication for diverse project requirements.",
  },
];

const Profession = () => {
  return (
    <div
      className="content max-xxl:px-4 xxl:px-2 py-6 md:py-10 lg:py-20"
      id="services"
    >
      {/* Header content above services */}
      <AnimatedSection className="text-center mb-8 lg:mb-12" delay={0.2}>
        <motion.p 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Skills & Expertise
        </motion.p>
        <motion.div 
          className="mt-3 text-[13px] max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-xs sm:text-base font-normal text-gray-400 mb-3">
            Comprehensive technical skills across the full development stack, from front-end design to back-end architecture and database management.
          </p>
          <p className="text-xs sm:text-base font-normal text-gray-400">
            Experienced in modern frameworks, cloud services, and development tools with strong problem-solving and project management abilities.
          </p>
        </motion.div>
        <motion.a
          href="#!"
          className="mt-6 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ 
            scale: 1.05,
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch!
        </motion.a>
      </AnimatedSection>
      
      {/* Services grid - 4 columns on large screens */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {rolesData.map((role, index) => (
          <AnimatedCard 
            key={index}
            delay={0.1 * index}
            className="h-full"
          >
            <Roles role={role} />
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
};

export default Profession;
