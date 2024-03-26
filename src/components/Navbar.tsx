import Cart from './Cart';
import { FaCartShopping } from 'react-icons/fa6';
import { useCartDispatch } from '../redux/cartHooks';
import { openCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
export function Navbar() {
  const dispatch = useCartDispatch();
  return (
    <div className="flex items-center bg-white border-b-2 h-20 py-2 px-20 ">
      <span className="mx-2 text-2xl hover:text-3xl">
        <Link to="/">Home</Link>{' '}
      </span>
      <span className="mx-2 text-2xl hover:text-3xl">
        <Link to="/store">Store</Link>
      </span>
      <span className="mx-2 text-2xl hover:text-3xl">
        <Link to="/about">About</Link>
      </span>
      
      <div className='relative ml-auto '>
      <div className="bg-red-500 w-[30px] h-[30px] rounded-full flex justify-center items-center absolute mt-[32px] ml-[35px] text-white font-bold">2</div>
        <FaCartShopping
        className=" w-[50px] h-[50px] hover:w-[60px] h[60px] cursor-pointer"
        onClick={() => dispatch(openCart())}
      />
      </div>

      <div>
        <Cart />
      </div>
    </div>
  );
}
