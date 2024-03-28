import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
 interface Item {
  id: string;
  imgURL: string;
  quantity:number;
  name:string;
  price:number;
} 

interface CartState {
  isCartOpen:boolean;
  data:Item[];
  
  
}




// Define the initial state using that type
const initialState: CartState = {
  isCartOpen:false,
  data:[
    
      {
        "id": "1",
        "name": "Blue T-shirt",
        "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbzeJuI93dUu9yVbmi7ZXRFsUs6aHwQgY-A&usqp=CAU",
        "price": 19.99,
        "quantity":2
      },
    
  ]

  }
 


export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
      openCart:(state:CartState)=>{
        state.isCartOpen=true;
      },
      closeCart:(state:CartState)=>{
        state.isCartOpen=false;
      },
      increaseCart:(state:CartState,action)=>{
        if(state.data.find((item)=> item.id===action.payload.id )==null){
          state.data.push({...action.payload,quantity:1});
        }
        else{
             state.data = state.data.map((item)=> {
              if(action.payload.id===item.id){
                  item.quantity++;
                  return item;
              }
              else{
                 return item;
              }
              
            });
        }
      },
      decreaseCart:(state:CartState,action)=>{
        if(state.data.find((item)=> item.id===action.payload.id )?.quantity===1){
          const newItems = state.data.filter((item)=> {return item.id!==action.payload.id});
          console.log(newItems);
          state.data = newItems;
        }
        else{
            state.data = state.data.map((item)=>{
              if(item.id===action.payload.id){
                item.quantity--;
                return item;
              }
              else{
                return item;
              }
            })
        }
      },
      removeFromCart:(state:CartState,action)=>{
        state.data =  state.data.filter((item)=>item.id!==action.payload)
      },
      
    

    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

 export const { openCart,closeCart,increaseCart,decreaseCart,removeFromCart} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart

export default cartSlice.reducer