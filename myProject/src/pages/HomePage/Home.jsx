import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="bg-black h-screen w-full p-2 text-white">
        <div className=" flex justify-between text-white ">
          <h1 className="text-white text-7xl font-sans font-bold ">Creatify</h1>

          <div className="text-3xl flex justify-around gap-9 p-2 font-semibold">
            <p>User</p>
            <p>Expert</p>
          </div>
        </div>

        <div className="mt-9 p-4  flex ">
          <p className="font-semibold text-5xl text-wrap p-9 m-9">
            Empower Your Creative Journey with Personalized Mentorship
            <button className="m-3 p-2 text-xl text-red-200 border-white border-2 rounded-xl">
              Get Started
            </button>
          </p>

          <img
            className="rounded-full size-33 float-animation"
            src="https://cdn.pixabay.com/photo/2015/03/18/20/35/wordcloud-679948_640.png"
          />
        </div>
      </div>
      <div className="bg-black h-screen w-full p-2 text-white">
        <h2 className="flex justify-center font-bold text-3xl text-red-300">
          Why Choose Us?
        </h2>
        {/* <div className="p-3 m-3">
          <div>
            <h3> One-on-One Mentorship</h3>
            <p>
              Get direct access to industry experts for personalized advice and
              feedback tailored to your creative goals.
            </p>
          </div>
          <h3> Growth-Focused Resources:</h3>
          <p>
            {" "}
            Learn new strategies, refine your skills, and gain insights through
            exclusive workshops, tutorials, and community events.
          </p>{" "}
          <h3>Build Your Brand:</h3>
          <p>
            Develop a strong online presence with guidance on content creation,
            audience engagement, and monetization strategies.
          </p>
        </div> */}
        <div className="flex  justify-evenly gap-6 p-6">
          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white/90 backdrop-blur-lg w-full sm:w-1/3  hover:bg-white transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              One-on-One Mentorship
            </h3>
            <p className="text-gray-600 text-center">
              Direct access to experts for personalized advice and feedback
              tailored to your creative goals.
            </p>
          </div>

          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white/90 backdrop-blur-lg w-full sm:w-1/3 h-60 hover:bg-white transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Growth-Focused Resources
            </h3>
            <p className="text-gray-600">
              Learn new strategies and gain insights through exclusive workshops
              and tutorials.
            </p>
          </div>

          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white/90 backdrop-blur-lg w-full sm:w-1/3 h-60 hover:bg-white transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Build Your Brand
            </h3>
            <p className="text-gray-600">
              Guidance on content creation, engagement, and monetization
              strategies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
