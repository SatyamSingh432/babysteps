import React, { useState } from "react";
import MilestoneForm from "./MilstoneForm";
import Modal from "./Modal";
import TipForm from "./TipForm";
import { useEffect } from "react";
import { deleteMilestone, getMilestones, getTips } from "../utils/apis";

export default function MilestoneList({ form }) {
  const [editModal, setEditModal] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [tipModal, setTipModal] = useState(false);
  const [visibleTipsIndex, setVisibleTipsIndex] = useState(null);
  const [milestones, setMilestones] = useState([]);
  const [milestoneId, setMilestoneId] = useState("");
  const [tips, setTips] = useState([]);
  const [tip, setTip] = useState("");
  const [editFormData, setEditFormData] = useState({});
  useEffect(() => {
    const res = async () => {
      const data = await getMilestones();
      setMilestones(data);
      // console.log(data);
    };
    res();
  }, [form, updateData]);

  const handleTips = async (milestoneId, index) => {
    if (visibleTipsIndex === index) {
      setVisibleTipsIndex(null);
      setTips([]);
    } else {
      const tipData = await getTips(milestoneId);
      setTips(tipData || []);
      setVisibleTipsIndex(index);
    }
  };

  const deleteMilestoneHandler = async (id) => {
    await deleteMilestone(id);
    const updated = await getMilestones();
    setMilestones(updated);
  };

  return (
    <div className="space-y-4 ">
      {milestones?.map((m, index) => (
        <div key={index} className="border p-4 rounded bg-white">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">{m.title}</h3>
              <p className="text-sm">{m.date.split("T")[0]}</p>
              {m.note && <p className="text-gray-700 mt-1">{m.note}</p>}
            </div>
            <div className="flex gap-4">
              <div className="space-x-2">
                <button
                  className=" text-white cursor-pointer py-1 px-2 rounded  bg-blue-500"
                  onClick={() => {
                    setEditFormData(m);
                    setEditModal(true);
                  }}
                >
                  Edit
                </button>
              </div>
              <div className="space-x-2">
                <button
                  className="text-white cursor-pointer py-1 px-2 rounded  bg-red-400"
                  onClick={() => deleteMilestoneHandler(m._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          {visibleTipsIndex === index && (
            <div className="pt-2">
              <h2 className="text-blue-500 font-semibold">Tips:</h2>
              {tips.length > 0 ? (
                tips.map((ele, idx) => (
                  <p key={idx}>{`${idx + 1}: ${ele.content}`}</p>
                ))
              ) : (
                <p className="text-gray-600">No tips yet for this milestone.</p>
              )}
            </div>
          )}

          <div className="flex gap-4 pt-2">
            <div className="space-x-2">
              <button
                className=" text-white cursor-pointer py-1 px-2 rounded  bg-blue-500"
                onClick={() => handleTips(m._id, index)}
              >
                {visibleTipsIndex === index ? "Hide Tips" : "View Tips"}
              </button>
            </div>
            <div className="space-x-2">
              <button
                className="text-white cursor-pointer py-1 px-2 rounded bg-blue-500"
                onClick={() => {
                  setMilestoneId(m._id);
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
          <MilestoneForm
            name={"Save Changes"}
            setEditFormData={setEditFormData}
            editFormData={editFormData}
            setIsModal1={setEditModal}
            setUpdateData={setUpdateData}
          />
        </Modal>
      )}
      {tipModal && (
        <Modal onClose={() => setTipModal(false)}>
          <TipForm
            name={"Save Tip"}
            tip={tip}
            setTip={setTip}
            milestoneId={milestoneId}
            setVisibleTipsIndex={setVisibleTipsIndex}
          />
        </Modal>
      )}
    </div>
  );
}
