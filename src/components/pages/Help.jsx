import { useState } from "react";

const Help = () => {
  const faqList = [
    {
      question: "Partner Onboarding",
      answer: "Learn how to register and onboard as a delivery or restaurant partner."
    },
    {
      question: "Legal",
      answer: "Find legal policies, terms of service, and compliance information."
    },
    {
      question: "FAQs",
      answer: "Get answers to the most commonly asked questions."
    }
  ];

  
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto w-full md:w-[80%] lg:w-[81%]">
      
      <div className="py-10 text-xl font-black">
        <h1>Help & Support</h1>
        <h3 className="text-base font-normal">
          Let's take a step ahead and help you better.
        </h3>
      </div>

      
      {faqList.map((item, index) => (
        <div
          key={index}
          className="border-b py-4 cursor-pointer"
          onClick={() => handleToggle(index)}
        >
         
          <div className="flex justify-between items-center font-semibold">
            <span>{item.question}</span>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </div>

          
          {openIndex === index && (
            <p className="mt-2 text-gray-600 text-sm">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Help;
