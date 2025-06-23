import React, { useState } from "react";

export default function MilestoneForm({ name }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, date, note);
    setTitle("");
    setDate("");
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2 pt-4">
      <input
        className="w-full p-2 border rounded"
        placeholder="Milestone title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Optional note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        type="submit"
      >
        {name}
      </button>
    </form>
  );
}
