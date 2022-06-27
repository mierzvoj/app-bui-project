import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./pages/Common/Layout/Header";
import Login from "./pages/Common/Login/Login";
import NotFound from "./pages/Common/NotFound/NotFound";
import LocationsForm from "./pages/Locations/LocationsForm/LocationsForm";
import TransitForm from "./pages/TransitForm/TransitForm";
import UserForm from "./pages/Users/UserForm/UserForm";
import Users from "./pages/Users/Users";
import UsersList from "./pages/Users/UsersList/UsersList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/transitform" element={<TransitForm />}></Route>
        <Route path="/transits" element={<TransitForm />}></Route>

        <Route path="/users" element={<Users />}>
          <Route path="/users/list" element={<UsersList />}></Route>

          <Route path="/users/user/:index" element={<UserForm />}></Route>
        </Route>
        <Route path="/locations" element={<LocationsForm />}>
          <Route path="/locations/list" element={<LocationsForm />}></Route>

          <Route
            path="/locations/location/:index"
            element={<LocationsForm />}
          ></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
