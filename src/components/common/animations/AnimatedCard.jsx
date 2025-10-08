import { motion } from "framer-motion";

const AnimatedCard = ({ 
  children, 
  className = "",
  delay = 0,
  hover = true
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = hover ? {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  } : {};

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      whileHover={hover ? "hover" : undefined}
      viewport={{ once: true, amount: 0.2 }}
      variants={{ ...cardVariants, ...hoverVariants }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
