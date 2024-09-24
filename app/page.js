export default function Home() {
  const className = "error"
  return (
    <div>
      <h1 className="text-2xl">Infinite scroll bar</h1>
     <div className={className+"_scrollText w-full flex flex-row overflow-auto p-6"} >  
      <h1 className=" text-red-800 text-9xl font-mono ">  ERROR404  </h1>
      <h1 className=" text-red-800 text-9xl font-mono ">  ERROR404  </h1>
      <h1 className=" text-red-800 text-9xl font-mono ">  ERROR404  </h1>
     </div>
    </div>
  );
}
 