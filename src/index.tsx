import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Calculation from "./pages/Calculation/Calculation";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Pokemons from "./pages/Pokemons/Pokemons";
import PokemonsToolbar from "./pages/PokemonsToolbar/PokemonsToolbar";
import UserForm from "./pages/UserForm/UserForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/userform" element={<UserForm />}></Route>
        <Route path="/calculation" element={<Calculation />}></Route>
        <Route path="pokemons" element={<Pokemons />}>
          <Route path=":name" element={<PokemonsToolbar />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
