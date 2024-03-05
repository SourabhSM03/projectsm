import Login from "./Components/Login";
import Home from "./Components/Home";

import Products from "./Components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Sales from "./Components/Sales";
import LandingPage from "./Components/LandingPage";
import SalesTable from "./Components/SalesTable";

function App() {
  return (
    <>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}>
              <Route path="/home/landingpage" element={<LandingPage />}></Route>
              <Route path="/home/products" element={<Products />}></Route>
              <Route path="/home/sales" element={<Sales />}></Route>
              <Route path="/home/salestable" element={<SalesTable/>}></Route>
              
            </Route>
            {/* <Route path="/navsbar" element={<Navsbar/>}></Route> */}
          </Routes>
        </BrowserRouter>
      }
      {/* <Login/>
      <Home/>
      <Navsbar/> */}
    </>
  );
}

export default App;
