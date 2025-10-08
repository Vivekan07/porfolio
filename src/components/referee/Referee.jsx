import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const refereeData = [
  {
    id: 1,
    name: "Kajenthiran",
    position: "Flutter developer",
    company: "Soft Client - Sri Lanka",
    email: "kajan09@yahoo.com",
    mobile: "+94 76 419 1135",
  },
  {
    id: 2,
    name: "R. Kajan",
    position: "Backend developer",
    company: "Xelonsoft - Sri Lanka",
    email: "ravikajan1998@gmail.com",
    mobile: "+94 76 647 6157",
  },
];

const Referee = () => {
  return (
    <div className="content max-xxl:px-4 xxl:px-2 py-6 md:py-10 lg:py-20 bg-soft-white" id="referee">
      <div className="text-center mb-8 lg:mb-12">
        <p className="section-title">References</p>
        <p className="text-xs sm:text-base font-normal text-gray-400 mt-3 max-w-3xl mx-auto">
          Professional references available upon request
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {refereeData.map((referee) => (
          <div
            key={referee.id}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {referee.name}
            </h3>
            <p className="text-base text-picto-primary font-medium mb-1">
              {referee.position}
            </p>
            <p className="text-sm text-gray-600 mb-4">{referee.company}</p>
            
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="text-picto-primary w-4" 
                />
                <a 
                  href={`mailto:${referee.email}`}
                  className="hover:text-picto-primary transition-colors"
                >
                  {referee.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FontAwesomeIcon 
                  icon={faPhone} 
                  className="text-picto-primary w-4" 
                />
                <a 
                  href={`tel:${referee.mobile}`}
                  className="hover:text-picto-primary transition-colors"
                >
                  {referee.mobile}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referee;

