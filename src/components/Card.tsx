import { formatCurrency } from "../utils/currencyFormat"
import { useCartDispatch } from "../redux/cartHooks";

import { useCartSelector } from "../redux/cartHooks";
import { increaseCart, openCart } from "../redux/cartSlice";


type CardProps = {
  
  
  
  id:string,
  name:string,
  imgURL:string,
  price:number,
 

}
export function Card({id,name,imgURL,price}:CardProps){
  
  
  const currState = useCartSelector((state)=>state.cart.data);
  
  const itemInCart  = currState.find((item)=>item.id===id);

  const dispatch = useCartDispatch();
 
 
  return (
    <div className="w-72 h-96 my-[15px] mx-[15px] rounded-2xl bg-[#FFF7FC] shadow-xl flex-row">
      <img src={imgURL} className="rounded-t-2xl shadow-md w-72 h-48 "></img>
      <div className="flex flex-col mx-[10px] mt-[20px]">
       <span className="text-xl font-sans font-semibold flex justify-center"> {name} </span>
       <span className=" flex font-semibold justify-center text-xl mt-[20px]"> {formatCurrency(price)} </span>
       
    <div className="flex justify-center items-center w-full mt-10px">
       {itemInCart ? (<button className="mt-[30px] text-lg border-2 rounded-2xl border-sky-400 border-solid hover:bg-sky-300" onClick={()=>dispatch(openCart())}>Go To Cart</button>) : (<button className="mt-[30px] text-lg border-2 rounded-2xl border-sky-400 border-solid hover:bg-sky-300" onClick={()=>dispatch(increaseCart({id,name,imgURL,price}))}>Add to Cart</button>)}
       </div>
       

       
      </div>

    </div>
  )

}