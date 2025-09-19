export default function Button({
  as: Tag = "button",
  variant = "gold", // gold | rose | ghost | outline
  diamond = true,
  className = "",
  children,
  ...props
}) {
  const base = "btn";
  const variants = {
    gold: "btn-gold",
    rose: "btn-rose",
    ghost: "btn-ghost",
    outline: "btn-ghost btn-outline-gradient",
  };
  const diamondCls = diamond ? "btn-diamond" : "";
  const cls = [base, variants[variant] || "", diamondCls, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={cls} {...props}>
      <span className="relative z-10">{children}</span>
      {diamond && <span className="trail" />}
    </Tag>
  );
}
