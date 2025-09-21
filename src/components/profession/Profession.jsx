import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "User Experience (UX)",
    description:
      "I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.",
  },
  {
    id: 2,
    title: "User Interface (UI)",
    description:
      "I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
  },
  {
    id: 4,
    title: "Website Maintenance & Updates",
    description:
      "Ongoing content, security, and performance updates to keep your site reliable and current.",
  },
  {
    id: 5,
    title: "Social Media Graphics",
    description:
      "Branded creatives for your social platforms to increase engagement and consistency.",
  },
  {
    id: 6,
    title: "Google Business / Local SEO",
    description:
      "Optimize Google Business Profile and local SEO to improve visibility and local discovery.",
  },
  {
    id: 7,
    title: "Email Newsletter / Automation",
    description:
      "Set up and manage email campaigns and automations that nurture and convert leads.",
  },
  {
    id: 8,
    title: "E-Commerce Setup",
    description:
      "Configure online stores, products, payments, and shipping for seamless selling.",
  },
];

const Profession = () => {
  return (
    <div
      className="content max-xxl:px-4 xxl:px-2 py-6 md:py-10 lg:py-20"
      id="services"
    >
      {/* Header content above services */}
      <div className="text-center mb-8 lg:mb-12">
        <p className="section-title">What we do?</p>
        <div className="mt-3 text-[13px] max-w-3xl mx-auto">
          <p className="text-xs sm:text-base font-normal text-gray-400 mb-3">
            We specialize in user experience, modern interfaces, and robust web applications that deliver business value and usability.
          </p>
          <p className="text-xs sm:text-base font-normal text-gray-400">
            Our approach combines creativity and technical expertise to deliver solutions that are both visually appealing and highly functional for users.
          </p>
        </div>
        <a
          href="#!"
          className="mt-6 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold"
        >
          Say Hello!
        </a>
      </div>
      
      {/* Services grid - 4 columns on large screens */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
