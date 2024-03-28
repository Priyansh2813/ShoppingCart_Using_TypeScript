
type ButtonProps = {
  decreaseFunction():void;
  increaseFunction():void;
  quantity:number;
}


export function Button({decreaseFunction,increaseFunction,quantity}:ButtonProps){ 
 
  return (
    <div className="flex items-center place-content-evenly border-2 w-[80px] px-[5px] rounded-2xl border-sky-300">

      <span className="ml-[2px] px-[4px] text-lg font-bold hover:text-blue-300 hover:text-xl hover:cursor-pointer" onClick={decreaseFunction}>-</span>
       <span className="px-[4px] text-xl font-mono">{quantity}</span>
        <span className="px-[4px] mr-[2px] text-lg font-bold hover:text-blue-300 hover:text-xl hover:cursor-pointer" onClick={increaseFunction}>+</span>

    </div>
  )
}