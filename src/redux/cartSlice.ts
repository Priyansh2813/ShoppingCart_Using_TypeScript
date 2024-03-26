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
        "quantity":100
      },
      {
        "id": "2",
        "name": "Black Jeans",
        "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc-VVoGI1y4KdEyEZrS51fsvoBmU0FgiB5g&usqp=CAU",
        "price": 29.99,
        "quantity":2
      },
      {
        "id": "3",
        "name": "Running Shoes",
        "imgURL": "https://contents.mediadecathlon.com/p2393859/29b8b8eee38946900910e3616879676b/p2393859.jpg?format=auto&quality=70&f=650x0",
        "price": 59.99,
        "quantity":2
      },
      {
        "id": "4",
        "name": "Wireless Headphones",
        "imgURL": "https://m.media-amazon.com/images/I/41tp0JPPlmL._AC_UF1000,1000_QL80_.jpg",
        "price": 99.99,
        "quantity":2
      }
    
  ],
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
      }
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

 export const { openCart,closeCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart

export default cartSlice.reducer