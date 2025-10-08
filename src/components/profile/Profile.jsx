import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import AnimatedSection from "../common/animations/AnimatedSection";
import AnimatedCard from "../common/animations/AnimatedCard";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Professional Photo Section */}
        <AnimatedSection className="xxl:max-w-106 w-auto h-auto xxl:max-h-126" delay={0.2} direction="left">
          <motion.div 
            className="max-w-106 h-117 object-fill overflow-hidden rounded-xl bg-gradient-to-br from-picto-primary/10 to-picto-primary/5 center flex items-center justify-center"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="text-center p-8">
              <motion.div 
                className="w-32 h-32 mx-auto mb-4 rounded-full bg-picto-primary/20 flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.5, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-5xl font-bold text-picto-primary">RV</span>
              </motion.div>
              <motion.span 
                className="text-gray-600 text-base font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Rasakumar Vivekan
              </motion.span>
            </div>
          </motion.div>
          {/* Social media section */}
          <motion.div 
            className="relative bottom-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex justify-center">
              <motion.div 
                className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                <SocialMedia />
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="max-sm:w-full w-[33rem]" delay={0.4} direction="right">
          <motion.h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Rasakumar Vivekan
          </motion.h2>
          <motion.div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className={``}>
              Enthusiastic full-stack developer with academic and freelance experience in web/mobile applications. 
              Skilled in front-end & back-end development, database management, and basic cloud integration (AWS S3, Firebase).
            </p>
            <p className="mt-3">
              Committed to continuous learning and eager to advance technical expertise through higher studies.
            </p>
          </motion.div>
          <motion.div 
            className="mt-8 flex max-md:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#!"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              My Projects
            </motion.a>
            <motion.a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="#!"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Profile;
