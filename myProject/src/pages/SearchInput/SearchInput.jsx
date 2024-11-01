import React, { useState, useEffect } from "react";
import "./SearchInput.css";
function SearchInput() {
  const [placeholder, setPlaceholder] = useState("Search experts");

  // Array of placeholder texts
  const placeholders = [
    "Search for tech experts",
    "Ask about web development",
    "Find Python specialists",
    "Looking for cloud advice?",
  ];

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setPlaceholder(placeholders[index]);
      index = (index + 1) % placeholders.length;
    }, 3000); // Change every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-black min-h-screen w-full p-6 text-white bg-image">
      {/* <img src="https://cdn.pixabay.com/photo/2023/08/05/15/16/columns-8171283_640.jpg" /> */}
      <div className=" p-6 m-10">
        <p className="text-xl p-3 text-center">Ask us Anything</p>
        <input
          placeholder={placeholder}
          style={{
            width: "100%",
            maxWidth: "1300px", // Adjust this as needed
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </div>
    </div>
  );
}

export default SearchInput;
