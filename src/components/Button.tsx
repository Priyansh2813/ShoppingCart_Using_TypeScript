
export function Button(){ 

  return (
    <div className="flex items-center place-content-evenly border-2 w-[80px] px-[5px] rounded-2xl border-sky-300">

      <span className="ml-[2px] px-[4px] text-lg font-bold hover:text-blue-300 hover:text-xl hover:cursor-pointer">-</span>
       <span className="px-[4px] text-xl font-mono">1</span>
        <span className="px-[4px] mr-[2px] text-lg font-bold hover:text-blue-300 hover:text-xl hover:cursor-pointer">+</span>

    </div>
  )
}