export default function Card({ className = "", children, ...props }) {
  return (
    <div
      className={["card gradient-border-pro gradient-surface", className].join(
        " "
      )}
      {...props}
    >
      {children}
    </div>
  );
}
