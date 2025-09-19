export default function SectionTitle({ children, badge }) {
  return (
    <h2 className="h-section">
      <span className="gradient-text">{children}</span>
      {badge && (
        <span className="align-middle inline-block text-xs md:text-sm px-2 py-1 rounded-md border border-white/10 ml-2 btn-outline-gradient">
          {badge}
        </span>
      )}
    </h2>
  );
}
