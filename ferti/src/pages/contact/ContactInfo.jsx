import React from "react";

const ContactInfo = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Details */}
        <div>
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            Contact Details
          </h2>
          <p className="text-gray-700 mb-4">
            📍 <strong>Address:</strong> 123 Agri Lane, Bhilai, Chhattisgarh, India
          </p>
          <p className="text-gray-700 mb-4">
            📞 <strong>Phone:</strong> +91 98765 43210
          </p>
          <p className="text-gray-700 mb-4">
            📧 <strong>Email:</strong> contact@hemantfertilizers.in
          </p>
          <p className="text-gray-700">
            ⏰ <strong>Working Hours:</strong> Mon – Sat, 9:00 AM – 6:00 PM
          </p>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Hemant Fertilizer Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.924898180366!2d81.3441421!3d21.1651795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2921c168c56c03%3A0x87fbb0b1dc52a2e0!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1619604972345!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
