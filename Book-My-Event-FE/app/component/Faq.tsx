import React, { useState, useEffect } from 'react';
import { questions } from './Questions';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target || !(event.target instanceof Node) || !event.currentTarget.contains(event.target)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col space-y-4 p-4 bg-black bg-opacity-70 rounded-lg">
          <h2 className="text-3xl font-bold">Additional Questions</h2>
          <div className="space-y-5">
            {questions.map((item, index) => (
              <div
                key={index}
                className={`p-4 bg-gray-100 rounded-xl cursor-pointer border border-gray-600 ${index === 0 ? 'mt-5' : ''}`}
                style={{ backgroundColor: "#22262C", fontFamily: 'Google Sans, sans-serif' }}
                onClick={() => handleQuestionClick(index)}
              >
                <div className="flex items-center justify-between">
                  <p className="text-base lg:text-lg">{item.question}</p> 
                  <div>
                    <svg
                      width="11"
                      height="6"
                      viewBox="0 0 11 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: activeIndex === index ? 'block' : 'none' }}
                    >
                      <path d="M0 5.64282L5 0.642822L10 5.64282H0Z" fill="white" />   
                    </svg>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: activeIndex === index ? 'none' : 'block' }}
                    >
                      <path d="M5.56543 5.35718L0.56543 0.357178H10.5654L5.56543 5.35718Z" fill="white" />
                      
                    </svg>
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="transition-all ease-out duration-500">
                    <p className="text-sm lg:text-base">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default FAQ;
