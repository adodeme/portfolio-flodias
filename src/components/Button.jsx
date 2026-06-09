export default function Button({
  children
}) {
  return (
    <button
      className="
      px-6 py-3
      rounded-xl
      bg-gradient-to-r
      from-cyan-500
      to-violet-600
      font-semibold
      hover:scale-105
      transition
      shadow-lg
      shadow-cyan-500/20
      "
    >
      {children}
    </button>
  );
}