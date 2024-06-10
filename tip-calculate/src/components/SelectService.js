export default function SelectService({
  selected,
  setSelected,
  options,
  children,
}) {
  return (
    <div>
      <label>{children}</label>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {options.map((o) => (
          <option value={o.id} key={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}
