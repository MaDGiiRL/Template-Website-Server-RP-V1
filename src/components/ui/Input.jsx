import Label from "./Label";
export default function Input({ label, type = "text", id, icon: Icon }) {
  const _id = id || label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={_id}>{label}</Label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent2" />
        )}
        <input
          id={_id}
          type={type}
          className="w-full rounded-xl bg-primary/30 border border-white/10 px-4 py-3 pl-10 outline-none focus:border-accent2/60 focus:shadow-glow-gold transition"
          placeholder=""
        />
      </div>
    </div>
  );
}
