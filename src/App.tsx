import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Car } from "./pages/car";
import { Cart } from "./pages/cart";
import "./styles/variables.css";

export const App = (): JSX.Element => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((res) => setCars(res));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home cars={cars} />} />
        <Route path="/car/:carId" element={<Car />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
