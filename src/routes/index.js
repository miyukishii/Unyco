import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppProvider from "../context/AppProvider";

import Home from "../pages/Home";
import Login from "../pages/Login";

function Rotas() {
   return(
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} exact />
          </Routes>
        </AppProvider>
    </BrowserRouter>
   )
}

export default Rotas;