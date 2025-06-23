import React from "react";

const dummyMilestones = [
  {
    title: "Project Kickoff",
    date: "2025-06-01",
    note: "Initial team meeting and scope discussion.",
  },
  {
    title: "Design Finalized",
    date: "2025-06-05",
    note: "All UI screens approved by the client.",
  },
  {
    title: "Backend Setup",
    date: "2025-06-07",
    note: "MongoDB and Express configured.",
  },
  {
    title: "Frontend Layout Complete",
    date: "2025-06-10",
    note: "Landing and dashboard pages implemented.",
  },
  {
    title: "API Integration",
    date: "2025-06-13",
    note: "Data flowing between frontend and backend.",
  },
  {
    title: "Testing Phase Start",
    date: "2025-06-15",
    note: "Unit tests and basic manual tests begin.",
  },
  {
    title: "Bug Fixing Round 1",
    date: "2025-06-17",
    note: "Addressed major reported issues.",
  },
  {
    title: "User Feedback Review",
    date: "2025-06-19",
    note: "Internal demo and feedback collection.",
  },
  {
    title: "Final Deployment Prep",
    date: "2025-06-21",
    note: "Production build and hosting setup.",
  },
  {
    title: "Project Launch",
    date: "2025-06-23",
    note: "🎉 App officially goes live!",
  },
];

export default function MilestoneList() {
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
            <div className="space-x-2">
              <button className="text-red-500 cursor-pointer">Delete</button>
            </div>
          </div>
          <p>tips</p>
        </div>
      ))}
    </div>
  );
}
