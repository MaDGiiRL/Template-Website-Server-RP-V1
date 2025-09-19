export default function Label({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm text-white/80 flex items-center gap-2"
    >
      {children}
    </label>
  );
}
