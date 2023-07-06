import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCarFromCart } from "../../store/reducers/carsSlice";
import { CarType } from "../../interfaces/cars.interface";
import "./cartItem.css";

interface Props {
  car: CarType;
}

export const CartItem = ({ car }: Props): JSX.Element => {
  const [totalDays, setTotalDays] = useState(1);

  const dispatch = useDispatch();

  const handleRemoveClick = (car: CarType): void => {
    dispatch(removeCarFromCart(car));
    setTotalDays(1);
  };

  return (
    <article className="cart__item">
      <img className="cart__image" src={car.banner} />
      <div className="cart__info">
        <h3 className="cart__title">
          {car.title} - {car.price * totalDays}€ / {totalDays}d
        </h3>
        <p className="cart__description">{car.description}</p>
        <div className="cart__days">
          <span className="cart__days-text">
            Selecciona el n° total de dias:
          </span>
          <input
            className="cart__days-input"
            onChange={(e) => setTotalDays(e.target.value)}
            min={1}
            value={totalDays}
            type="number"
          />
          <button
            className="cart__button"
            onClick={() => {
              handleRemoveClick(car);
            }}>
            Reservar
          </button>
        </div>
      </div>
    </article>
  );
};
