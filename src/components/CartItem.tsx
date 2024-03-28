import { formatCurrency } from "../utils/currencyFormat"
import { Button } from "./Button"
import { useCartDispatch } from "../redux/cartHooks";
import { decreaseCart, increaseCart, removeFromCart } from "../redux/cartSlice";

type CartItemProps = {
  id:string,
  name:string,
  imgURL:string,
  price:number,
  quantity:number

}

function CartItem(data:CartItemProps) {
  
  const dispatch = useCartDispatch();
  function increaseFunction(){
    dispatch(increaseCart(data));
  }
  function decreaseFunction(){
    dispatch(decreaseCart(data));
  }

 
  return (
    <div className="flex bg-slate-50  items-center h-[100px] px-[5px]  rounded-xl">
      <img src={data.imgURL} className="h-[80px] w-[90px] rounded-xl mx-[4px]"  />

      <div className="w-full px-[8px] flex-row items-center"> 
        <div className="flex justify-between font-medium ">
      <span className="text-lg ">{data.name}</span>
      <span className="mr-[20px] text-lg">{formatCurrency(Math.round(data.price * data.quantity*100)/100)}</span>
          </div>

      <div className="text-sm font-thin ml-[5px]">x{data.quantity}</div>
      <div className="flex justify-between mt-[8px]">

      <div className="hover:text-red-400 hover:underline hover:cursor-pointer" onClick={()=>dispatch(removeFromCart(data.id))}>Remove</div> 
      <Button quantity={data.quantity} increaseFunction={increaseFunction} decreaseFunction={decreaseFunction}/>
      </div>
      </div>

    </div>
  )
}

export default CartItem
