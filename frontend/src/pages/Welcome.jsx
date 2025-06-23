import React from "react";
import Navbar from "../components/Navbar";
import MilestoneList from "../components/MilestoneList";

const Welcome = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 max-w-2xl mx-auto">
        <MilestoneList />
      </div>
    </>
  );
};

export default Welcome;
