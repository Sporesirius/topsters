export default function Grid({}) {
  const Grid = [
    { id: 1, value: "1" },
    { id: 2, value: "2" },
    { id: 3, value: "3" },
    { id: 4, value: "4" },
    { id: 5, value: "5" },
    { id: 6, value: "6" },
    { id: 7, value: "7" },
    { id: 8, value: "8" },
    { id: 9, value: "9" },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {Grid.map((item) => (
          <div key={item.id} className="bg-blue-600 py-6 rounded-lg shadow-lg">
            <div className="font-extrabold">{item.value}</div>
          </div>
        ))}
      </div>
    </>
  );
}
