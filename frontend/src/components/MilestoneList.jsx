import React, { useState } from "react";
import MilestoneForm from "./MilstoneForm";
import Modal from "./Modal";
import TipForm from "./TipForm";
const dummyMilestones = [
  {
    title: "Project Kickoff",
    date: "2025-06-01",
    note: "Initial team meeting and scope discussion.",
    tips: [
      "Make sure everyone understands the project goals.",
      "Assign clear roles and responsibilities.",
    ],
  },
  {
    title: "Design Finalized",
    date: "2025-06-05",
    note: "All UI screens approved by the client.",
    tips: [
      "Get written approval from stakeholders.",
      "Double-check responsiveness and accessibility.",
    ],
  },
  {
    title: "Backend Setup",
    date: "2025-06-07",
    note: "MongoDB and Express configured.",
    tips: [
      "Ensure secure DB connection (e.g., with env vars).",
      "Use RESTful structure for APIs.",
    ],
  },
  {
    title: "Frontend Layout Complete",
    date: "2025-06-10",
    note: "Landing and dashboard pages implemented.",
    tips: [
      "Use a consistent design system.",
      "Ensure mobile responsiveness early.",
    ],
  },
];

export default function MilestoneList() {
  const [editModal, setEditModal] = useState(false);
  const [tipModal, setTipModal] = useState(false);
  const [visibleTipsIndex, setVisibleTipsIndex] = useState(null);

  return (
    <div className="space-y-4">
      {dummyMilestones.map((m, index) => (
        <div key={index} className="border p-4 rounded bg-white">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">{m.title}</h3>
              <p className="text-sm">{m.date}</p>
              {m.note && <p className="text-gray-700 mt-1">{m.note}</p>}
            </div>
            <div className="flex gap-4">
              <div className="space-x-2">
                <button
                  className=" text-white cursor-pointer py-1 px-2 rounded  bg-blue-500"
                  onClick={() => {
                    setEditModal(true);
                  }}
                >
                  Edit
                </button>
              </div>
              <div className="space-x-2">
                <button className="text-white cursor-pointer py-1 px-2 rounded  bg-red-400">
                  Delete
                </button>
              </div>
            </div>
          </div>
          {visibleTipsIndex === index && (
            <div>
              <h2 className="text-blue-500">Tips :</h2>
              {m.tips.map((ele, index) => {
                return <p key={index}>{`${index + 1}: ${ele}`}</p>;
              })}
            </div>
          )}

          <div className="flex gap-4 pt-2">
            <div className="space-x-2">
              <button
                className=" text-white cursor-pointer py-1 px-2 rounded  bg-blue-500"
                onClick={() => {
                  setVisibleTipsIndex(
                    visibleTipsIndex === index ? null : index
                  );
                }}
              >
                {visibleTipsIndex === index ? "Hide Tips" : "View Tips"}
              </button>
            </div>
            <div className="space-x-2">
              <button
                className="text-white cursor-pointer py-1 px-2 rounded bg-blue-500"
                onClick={() => {
                  setTipModal(true);
                }}
              >
                Add Tip
              </button>
            </div>
          </div>
        </div>
      ))}
      {editModal && (
        <Modal onClose={() => setEditModal(false)}>
          <MilestoneForm name={"Save Changes"} />
        </Modal>
      )}
      {tipModal && (
        <Modal onClose={() => setTipModal(false)}>
          <TipForm name={"Save Tip"} />
        </Modal>
      )}
    </div>
  );
}
