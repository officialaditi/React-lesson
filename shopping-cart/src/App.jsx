import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="mt-[72px]  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
