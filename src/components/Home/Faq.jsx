import { useState } from "react";
import img from "../../assets/faq.jpg";

export default function Faq() {
  // FAQ data array
  const dataArr = [
    {
      title: "How do I create an account?",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "What is your return policy?",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Can I change my shipping address?",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Are there any discounts for loyal customers?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];

  // Toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-center py-12 px-4">
      {/* Left Section: Accordion */}
      <div className="md:w-1/2 max-w-[550px] space-y-6 mr-8">
        {/* Mapping each accordion */}
        {dataArr.map((data, idx) => (
          <div
            key={idx}
            onClick={() => handleToggle(idx)}
            className="cursor-pointer rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
          >
            {/* Index Div */}
            <div className="flex items-center p-4">
              <div className="flex size-12 select-none items-center justify-center rounded-md bg-zinc-700 text-xl font-semibold text-white">
                <span>0{idx + 1}</span>
              </div>

              {/* Title Section */}
              <div className="ml-4 flex-1">
                <h1 className="text-lg font-medium text-zinc-700">{data.title}</h1>
              </div>

              {/* Toggle Icon */}
              <div className="flex size-6 items-center justify-center">
                <span
                  className={`transition-transform duration-300 ${
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
              <div className="p-4 text-sm text-slate-600">{data.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="FAQ Illustration"
          className="w-full h-auto max-w-[600px] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}