import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872439711!3d40.74076977132708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sTech%20Plaza!5e0!3m2!1sen!2sus!4v1709702400000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Veron Office Location"
        className="w-full h-[400px]"
      ></iframe>
    </div>
  );
};

export default Map;