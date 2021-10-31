import Layout from '@components/Layouts/Layout';
import Image from 'next/image'

export default function Grid({}) {

  const top40 = [
    {
      id: "1",
      gridCols: "grid-cols-t5",
      gridCount: 10,
      height: "h-p200",
    },
    {
      id: "2",
      gridCols: "grid-cols-t7",
      gridCount: 14,
      height: "h-p141_7",
    },
    {
      id: "3",
      gridCols: "grid-cols-t8",
      gridCount: 16,
      height: "h-p120",
    },
  ];

  return (
    <>
      <div>
        {top40.map((item) => (
            <>
            <div className={`mt-1 grid gap-1 ${item.gridCols}`}>
              {[...Array(item.gridCount)].map(() => ( 
                <div key={item.id} className={`bg-blue-600 ${item.height}`}>1</div>
              ))}
            </div>
            </>
        ))}
      </div>

    </>
  );
}
