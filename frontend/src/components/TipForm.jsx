import { addTip } from "../utils/apis";

export default function TipForm({
  name,
  tip,
  setTip,
  milestoneId,
  setVisibleTipsIndex,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tip.trim()) return;
    await addTip(milestoneId, tip);
    setTip("");
    setVisibleTipsIndex(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2 pt-4">
      <input
        className="w-full p-2 border rounded"
        placeholder="type your tip"
        value={tip}
        onChange={(e) => setTip(e.target.value)}
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
