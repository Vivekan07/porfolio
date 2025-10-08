const personalData = [
  { label: "Full Name", value: "Rasakumar Vivekan" },
  { label: "Date of Birth", value: "09/11/2002" },
  { label: "Nationality", value: "Sri Lankan" },
  { label: "Location", value: "Jaffna, Sri Lanka" },
];

const PersonalDetails = () => {
  return (
    <div className="content max-xxl:px-4 xxl:px-2 py-6 md:py-10 lg:py-20" id="personal">
      <div className="text-center mb-8 lg:mb-12">
        <p className="section-title">Personal Details</p>
      </div>
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-lg">
        <div className="grid sm:grid-cols-2 gap-6">
          {personalData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-500 mb-1">{item.label}</p>
              <p className="text-base font-semibold text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

