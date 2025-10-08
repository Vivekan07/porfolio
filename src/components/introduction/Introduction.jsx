import "./introduction.css";
import InformationSummary from "./InformationSummary";
import Terminal from "../common/terminal/Terminal";
import AnimatedSection from "../common/animations/AnimatedSection";
import TypingAnimation from "../common/animations/TypingAnimation";
import { motion } from "framer-motion";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "1+ Year",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "50+",
  },
  {
    id: 3,
    title: "Freelance",
    description: "2024-Present",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <AnimatedSection className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500" delay={0.2}>
          <TypingAnimation 
            text="Hi, I'm"
            className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full"
            speed={0.1}
          />
          <TypingAnimation 
            text="Rasakumar Vivekan"
            className="text-nowrap shrink-0 inline-block w-full text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold text-picto-primary"
            delay={1}
            speed={0.08}
          />
          <motion.p 
            className="text-xs xxs:text-lg lg:text-[18px] my-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            Full-Stack Developer specializing in building modern web and mobile applications with expertise in MERN stack, cloud integration, and database management.
          </motion.p>
          <motion.div 
            className="text-center lg:text-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white hover:scale-105 transition-transform duration-200"
              href="mailto:vivekanv93@gmail.com"
            >
              Say Hello!
            </a>
          </motion.div>
        </AnimatedSection>
        <AnimatedSection className="mx-auto lg:mx-0 relative" delay={0.8} direction="up">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 3 + (index * 0.2), 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <InformationSummary item={item} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection 
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
        delay={1.5}
        direction="right"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            delay: 2.2, 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
        >
          <Terminal />
        </motion.div>
      </AnimatedSection>
    </div>
  );
};

export default Introduction;
