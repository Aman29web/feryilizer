import React from "react";

const partners = [
  { name: "AgroTech", logo: "/assets/partner-agrotech.png" },
  { name: "KisanLink", logo: "/assets/partner-kisanlink.png" },
  { name: "GreenGrow", logo: "/assets/partner-greengrow.png" },
  { name: "FarmBuddy", logo: "/assets/partner-farmbuddy.png" },
  { name: "CropSecure", logo: "/assets/partner-cropsecure.png" },
  { name: "EcoFarms", logo: "/assets/partner-ecofarms.png" },
];

const OurPartners = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12" id="partners">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-12">
          Trusted By Industry Leaders
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="opacity-80 hover:opacity-100 transition">
              <img
                src={partner.logo}
                alt={partner.name}
                className="mx-auto h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
