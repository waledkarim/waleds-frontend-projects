export default function Button({ enabled }) {
  return (
    <button
      disabled={!enabled}
      className="feature-btn rounded-md bg-black text-white px-3 py-2 font-medium disabled:bg-black/50 disabled:cursor-not-allowed "
    >
      View Details
    </button>
  );
}
