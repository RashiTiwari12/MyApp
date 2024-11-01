import React from "react";

const Features = () => {
  return (
    <div className="  bg-black">
      <p className="text-3xl text-red-300 font-semibold p-3 text-center">
        Why Choose Us?
      </p>
      <div className="flex justify-evenly gap-6 p-6 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {/* Monetization Card */}
          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Monetization
            </h3>
            <p className="text-gray-600">
              Expert guidance to help you effectively monetize your content.
            </p>
          </div>

          {/* Algorithm and Platform Mastery */}
          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Algorithm & Platform Mastery
            </h3>
            <p className="text-gray-600">
              Insights to optimize your content for platform algorithms and
              boost visibility.
            </p>
          </div>

          {/* Boosting Views and Shares */}
          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Boosting Views & Shares
            </h3>
            <p className="text-gray-600">
              Proven strategies to maximize engagement with increased views and
              shares.
            </p>
          </div>

          {/* Personal Branding & Authenticity */}
          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Personal Branding
            </h3>
            <p className="text-gray-600">
              Build an authentic brand identity that resonates with your
              audience.
            </p>
          </div>

          {/* Burnout Prevention */}
          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Burnout Prevention
            </h3>
            <p className="text-gray-600">
              Strategies to help you avoid burnout and maintain creative flow.
            </p>
          </div>

          {/* Creative Freedom */}
          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Creative Freedom
            </h3>
            <p className="text-gray-600">
              Guidance on balancing creative freedom with platform guidelines.
            </p>
          </div>

          {/* Brand & Creator Needs */}
          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Brand & Creator Needs
            </h3>
            <p className="text-gray-600">
              Support in nurturing your brand and fulfilling unique creator
              needs.
            </p>
          </div>

          {/* Niche Guidance */}
          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Niche Guidance
            </h3>
            <p className="text-gray-600">
              Help in selecting the right niche that aligns with your passion
              and skills.
            </p>
          </div>

          {/* Trend Awareness */}
          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Trend Awareness
            </h3>
            <p className="text-gray-600">
              Stay updated with the latest trends to ensure your content stays
              relevant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
