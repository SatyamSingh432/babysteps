export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50bg-transparent backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl cursor-pointer"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
