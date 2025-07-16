import React from "react";

const teamMembers = [
  {
    name: "Hemant Singh",
    role: "Founder & CEO",
    image: "/assets/team-hemant.jpg",
  },
  {
    name: "Rina Mehta",
    role: "Head of Operations",
    image: "/assets/team-rina.jpg",
  },
  {
    name: "Ravi Sharma",
    role: "Chief Agronomist",
    image: "/assets/team-ravi.jpg",
  },
  {
    name: "Priya Desai",
    role: "Marketing Manager",
    image: "/assets/team-priya.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-12" id="team">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-green-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
