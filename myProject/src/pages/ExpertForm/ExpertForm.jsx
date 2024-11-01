import React from "react";

const ExpertForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-white">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Create Expert
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block mb-2">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-white"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="experience" className="block mb-2">
              Experience (years):
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpertForm;
