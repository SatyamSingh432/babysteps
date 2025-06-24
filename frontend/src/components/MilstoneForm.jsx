import { addMilestone } from "../utils/apis";

export default function MilestoneForm({
  name,
  form,
  setForm,
  setEditFormData = () => {},
  editFormData = {},
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, date, note } = form;
    await addMilestone(title, date, note);
    setForm({ title: "", date: "", note: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2 pt-4">
      <input
        className="w-full p-2 border rounded"
        name="title"
        placeholder="Milestone title"
        value={editFormData?.title || form.title}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        className="w-full p-2 border rounded"
        name="date"
        value={form?.date || ""}
        onChange={handleChange}
        required
      />
      <textarea
        className="w-full p-2 border rounded"
        name="note"
        placeholder="Optional note"
        value={editFormData?.note || form.note}
        onChange={handleChange}
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
