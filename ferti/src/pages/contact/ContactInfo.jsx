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
            📍 <strong>Address:</strong> Near Ganga Bridge, Jajmau kanpur
          </p>
          <p className="text-gray-700 mb-4">
            📞 <strong>Phone:</strong> +91 98765 43210
          </p>
          <p className="text-gray-700 mb-4">
            📧 <strong>Email:</strong> hemantfertilizers.hfpl@gmail.com
          </p>
          <p className="text-gray-700">
            ⏰ <strong>Working Hours:</strong> Mon – Sat, 9:00 AM – 6:00 PM
          </p>
        </div>

      <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
  <iframe
    title="Hemant Fertilizer Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14285.50119869688!2d80.39265584517371!3d26.47515324207914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3629321356a7%3A0x1d58c8a8166d123b!2sJajmau%20Bridge!5e0!3m2!1sen!2sin!4v1721114561841!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
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
