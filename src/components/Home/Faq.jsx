import { useState } from "react";
import img from "../../assets/faq.jpg";

export default function Faq() {
  // FAQ data array for a charity firm
  const dataArr = [
    {
      title: "How can I donate to your charity?",
      description:
        "You can donate to our charity by visiting our donation page and selecting the amount you wish to contribute. We accept various payment methods, including credit cards, PayPal, and bank transfers.",
    },
    {
      title: "Is my donation tax-deductible?",
      description:
        "Yes, your donation is tax-deductible. We are a registered non-profit organization, and you will receive a receipt for your donation that you can use for tax purposes.",
    },
    {
      title: "How are the funds used?",
      description:
        "The funds we receive are used to support our various programs, including providing food, shelter, education, and medical care to those in need. We ensure transparency in how the funds are allocated.",
    },
    {
      title: "Can I volunteer with your organization?",
      description:
        "Absolutely! We welcome volunteers who want to make a difference. Please visit our volunteer page to learn more about current opportunities and how to apply.",
    }
  ];

  // Toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center py-10 mb-10 px-4">
      {/* Left Section: Accordion */}
      <div className="md:w-1/2 max-w-[550px] space-y-6 mr-8">
        {/* Mapping each accordion */}
        {dataArr.map((data, idx) => (
          <div
            key={idx}
            onClick={() => handleToggle(idx)}
            className="cursor-pointer rounded-lg bg-[#D2F4F4] shadow-md transition-shadow duration-300 hover:shadow-lg border border-gray-200"
          >
            {/* Index Div */}
            <div className="flex items-center p-4">
              <div className="flex size-12 select-none items-center justify-center rounded-md bg-[#1d657a] text-xl font-semibold text-white">
                <span>0{idx + 1}</span>
              </div>

              {/* Title Section */}
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-medium text-gray-800">{data.title}</h1>
              </div>

              {/* Toggle Icon */}
              <div className="flex size-6 items-center justify-center">
                <span
                  className={`transition-transform duration-300 text-2xl ${
                    isOpen === idx ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>
            </div>

            {/* Description Section */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 text-sm text-gray-600">{data.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={img}
          alt="FAQ Illustration"
          className="w-full h-auto max-w-[600px] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}