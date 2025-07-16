import React from "react";
import img1 from "../../assets/2.jpg"
import img2 from "../../assets/3.jpg"


const founders = [
 
  {
    name: "Surendra Kushwaha",
    role: "Chairman",
    image: img2,
    bio: "Shri Surendra Kushwaha is the Director of Marketing at Hemant Fertilizers Pvt Ltd. A post-graduate from Kanpur University, he has more than 24 years of experience in the Agri–Input industry. Since the company's inception, he has driven its marketing and development strategies as the Marketing Director. He has played a key role in the company’s growth and has been recognized with numerous awards for his contributions, making him a true asset to the organization.",
  },
   {
    name: "Shri Rameshwar Kushwaha",
    role: "Director",
    image: img1,
  bio: "Shri Rameshwar Kushwaha is the Chairman of Hemant Fertilizers Pvt Ltd. After contributing his 29 years to business and reaching them to greater heights, he established Hemant Fertilizers in 1995. His deep commitment and inspiring leadership in initial turbulent days is an example worth inculcating. His passion to contribute to Indian Agriculture is Organic Fertilizers. His ability to prioritize and deal effectively with multiple tasks, reinforced with the skills to make effective decisions, has transformed the business into one of the fastest-growing agrochemical industries, contributing immensely to its growth and strategic direction.",
  },
];

const FounderSection = () => {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-12" id="founders">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12">Meet Our Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-green-200"
              />
              <h3 className="text-xl font-semibold text-green-800">{founder.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{founder.role}</p>
              <p className="text-sm text-gray-700">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
