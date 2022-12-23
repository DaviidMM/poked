export default function CardCharacteristic({ label, value }) {
  return (
    <div>
      <h2 className="text-lg font-semibold">{label}</h2>
      <p className="text-sm">{value}</p>
    </div>
  );
}
