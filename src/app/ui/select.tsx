type SelectProps = {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: Array<{ label: string; value: string }>;
};

export default function Select({
  name,
  label,
  value,
  onChange,
  items,
}: SelectProps) {
  return (
    <div className="w-1/3 text-sm">
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-1.5 w-full rounded-lg border border-gray-300 text-gray-700 px-3 py-2 cursor-pointer">
        <select
          value={value}
          name={name}
          onChange={(e) => onChange(e.target.value)}
          className="w-full font-mono text-sm"
        >
          <option value="">Todas sequências</option>
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
