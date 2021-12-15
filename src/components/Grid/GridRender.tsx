export default function Grid({selected}:any) {  
  return (
    <div className="container mx-auto">
      <div className={`justify-center mt-1 grid gap-1 grid-cols-t5`}>
        {[...Array(selected.gridCount)].map(() => ( 
          <div key={selected.id++} className={`bg-blue-600 h-[200px]`} />
        ))}
      </div>
    </div>
  );
}
