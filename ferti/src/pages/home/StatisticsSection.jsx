import React from 'react';

// This component displays a set of key statistics or facts.
// It's designed to be clean, responsive, and visually appealing
// with large numbers and descriptive text.
function StatisticsSection() {
  const stats = [
    {
      number: '30+',
      label: 'Agricultural Products',
    },
    {
      number: '10000+',
      label: 'Farmer Touch Points',
    },
    {
      number: '7+',
      label: 'Cities Served',
    },
    {
      number: '30+',
      label: 'Years of Service',
    },
    {
      number: '100+',
      label: 'Retail Stores',
    },
  ];

  return (
    <section className="bg-orange-50 py-16 sm:py-20 md:py-24"> {/* Light orange background, generous vertical padding */}
      <div className="container mx-auto px-4"> {/* Centered container, horizontal padding */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center"> {/* Responsive grid layout */}
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500 mb-2 leading-tight"> {/* Large, bold, orange number */}
                {stat.number}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 font-medium"> {/* Smaller, descriptive label */}
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;