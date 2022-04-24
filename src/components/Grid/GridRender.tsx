export default function Grid({selectedEntry}:any) {  
  return (
    <div className="container mx-auto">
      <div className={`justify-center mt-1 grid gap-1 grid-cols-t5`}>
        {[...Array(selectedEntry.gridCount)].map(() => ( 
          <div key={selectedEntry.id++} className={`bg-blue-600 h-[200px]`} />
        ))}
      </div>
    </div>
  );
}
