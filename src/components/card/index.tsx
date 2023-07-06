import { useDispatch } from "react-redux";
import { addCarToCart } from "../../store/reducers/carsSlice";
import { Link } from "react-router-dom";
import { CarType } from "../../interfaces/cars.interface";
import "./card.css";

interface Props {
  car: CarType;
}

export const Card = ({ car }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handleAddClick = (car: CarType): void => {
    dispatch(addCarToCart(car));
  };

  return (
    <article className="card">
      <header className="card__header">
        <Link to={`/car/${car.id}`}>
          <img className="card__image" src={car.image} alt={car.title} />
        </Link>
        <button onClick={() => handleAddClick(car)} className="card__button">
          Reservar
        </button>
      </header>
      <section className="card__content">
        <header className="card__info">
          <div className="card__title">{car.title}</div>
          <div className="card__price">
            <span>{car.price}€</span> por dia
          </div>
        </header>
      </section>
    </article>
  );
};
