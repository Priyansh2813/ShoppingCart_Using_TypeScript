import { Route,Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"



export default function App(){
    return (<>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Home/>}/>
        <Route path="/store"  element={<Store/>}/>
        <Route path="/about" element={<About/>}/>
   
      </Routes>
    </>
    )
}