import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MilestoneForm from "../components/MilstoneForm";
import MilestoneList from "../components/MilestoneList";
import Modal from "../components/Modal";

const Welcome = () => {
  const [isModal, setIsModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    date: "",
    note: "",
  });

  return (
    <>
      <Navbar />
      <div className="p-4">
        <button
          onClick={() => setIsModal(true)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Milestone
        </button>
      </div>

      <div className="p-4 max-w-2xl mx-auto">
        <MilestoneList form={form} setIsModal1={setIsModal} />
      </div>

      {isModal && (
        <Modal onClose={() => setIsModal(false)}>
          <MilestoneForm
            name={"Save Milstone"}
            form={form}
            setForm={setForm}
            setIsModal={setIsModal}
          />
        </Modal>
      )}
    </>
  );
};

export default Welcome;
