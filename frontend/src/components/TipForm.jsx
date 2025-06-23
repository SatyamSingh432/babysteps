import React, { useState } from "react";

export default function TipForm({ name }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2 pt-4">
      <input
        className="w-full p-2 border rounded"
        placeholder="type your tip"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
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
