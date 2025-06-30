import { addMilestone, updateMilestone } from "../utils/apis";

export default function MilestoneForm({
  name,
  form,
  setForm,
  setIsModal,
  setIsModal1,
  setEditFormData,
  setUpdateData,
  editFormData = {},
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (setForm) {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setEditFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (setForm) {
      const { title, date, note } = form;
      await addMilestone(title, date, note);
      setIsModal(false);
      setForm({ title: "", date: "", note: "" });
    } else {
      const res = await updateMilestone(editFormData._id, editFormData);
      const data = await res;
      setUpdateData(data);
      setIsModal1(false);
      // console.log(data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2 pt-4">
      <input
        className="w-full p-2 border rounded"
        name="title"
        placeholder="Milestone title"
        value={editFormData?.title || form?.title}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        className="w-full p-2 border rounded"
        name="date"
        value={editFormData?.date || form?.date}
        onChange={handleChange}
        required
      />
      <textarea
        className="w-full p-2 border rounded"
        name="note"
        placeholder="Optional note"
        value={editFormData?.note || form?.note}
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
