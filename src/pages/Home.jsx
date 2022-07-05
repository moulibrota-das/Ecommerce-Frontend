import React from "react";
import Announcement from "../components/Announcement";
// import ExpSlider from "../components/ExpSlider";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
}

export default Home;
