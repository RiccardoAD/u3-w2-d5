
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Details from "./components/Details";
import Myfooter from "./components/Myfooter";



function App() {
  return (
    
       <BrowserRouter> 
       
        <header>
        <MyNav />
        </header>
        <main>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/weatherDetails/:city" element={<Details />}></Route>
        </Routes>
         </main>
         <Myfooter /> 

     </BrowserRouter> 
  
  );
}

export default App;
