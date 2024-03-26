import { Card } from "../components/Card";

import storeItems from "../assets/data.json";


export function Store(){
  return (
    <>
    <h1 className="text-3xl mx-[50px] my-[30px]">Offers for Today!</h1>
    <div className="flex flex-wrap justify-evenly">
      {storeItems.map((item)=>{
        return (<Card {...item}/>)
      })}
   
   
    
    </div>
    </>
  )
}