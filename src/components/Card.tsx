import { formatCurrency } from "../utils/currencyFormat"


type CardProps = {
  
  
  
  id:string,
  name:string,
  imgURL:string,
  price:number,
 

}
export function Card({name,imgURL,price}:CardProps){

  return (
    <div className="w-72 h-96 my-[15px] mx-[15px] rounded-2xl bg-[#FFF7FC] shadow-xl flex-row">
      <img src={imgURL} className="rounded-t-2xl shadow-md w-72 h-48 "></img>
      <div className="flex flex-col mx-[10px] mt-[20px]">
       <span className="text-xl font-sans font-semibold flex justify-center"> {name} </span>
       <span className=" flex font-semibold justify-center text-xl mt-[20px]"> {formatCurrency(price)} </span>
       
       <button className="mt-[30px] text-lg border-2 rounded-2xl border-sky-400 border-solid hover:bg-sky-300" >Add to Cart</button>
      </div>

    </div>
  )

}