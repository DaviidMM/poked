export default function TradeCard({ giving, reciving }) {
  return (
    <div className="flex flex-col gap-1 p-2 rounded-xl border-2 border-red-900 h-48">
      <h2 className="text-lg text-center font-semibold">{giving.name}</h2>
      <div className="flex flex-row gap-2 h-full">
        <div className="bg-blue-200 sprite w-5/12"></div>
        <div className="bg-green-200 w-full"></div>
      </div>
    </div>
  );
}
