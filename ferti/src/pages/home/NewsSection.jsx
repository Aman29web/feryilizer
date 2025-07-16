import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/img19.jpeg"
import img2 from "../../assets/img20.jpeg"
import img3 from "../../assets/img18.jpeg"


// Dummy data (replace with dynamic content later)
const newsPosts = [
  {
    title: "5 Tips for Maximizing Crop Yield This Season",
    image: img1, // Make sure to add these images
    desc: "Learn how to optimize fertilizer usage and soil conditions for better harvests.",
  },
  {
    title: "New Organic Product Line Launched",
    image:img2,
    desc: "Introducing our latest eco-friendly fertilizers — safe, effective, and sustainable.",
  },
  {
    title: "Hemant Fertilizer Partners with Local Farmers",
    image: img3,
    desc: "Our collaboration supports over 2,000 farmers with better pricing and training.",
  },
];

const NewsSection = () => {
  return (
    <section className="bg-[var(--light)] py-20 px-6 md:px-12" id="news">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-12">
          Latest News & Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {newsPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-green-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 text-sm">{post.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
