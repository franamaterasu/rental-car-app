import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaTree, FaUserFriends, FaDoorOpen } from "react-icons/fa";
import "./car.css";

export const Car = (): JSX.Element => {
  const [carInfo, setCarInfo] = useState({
    banner: "",
    title: "",
    description: "",
    hybrid: false,
    seats: 0,
    doors: 0,
    gallery: [],
  });
  const { carId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/cars/${carId}`)
      .then((res) => res.json())
      .then((res) => setCarInfo(res));
  }, []);

  return (
    <>
      <section className="car">
        <section className="car__banner">
          <img className="car__banner" src={carInfo.banner}></img>
          <h1 className="car__title">{carInfo.title}</h1>
        </section>
        <section className="car__info">
          <section className="car__features">
            {carInfo.hybrid && (
              <article className="car__feature">
                <FaTree className="car__feature-icon" />
                <p className="car__feature-text">Hibrido</p>
              </article>
            )}
            <article className="car__feature">
              <FaUserFriends className="car__feature-icon" />
              <p className="car__feature-text">{carInfo.seats} asientos</p>
            </article>
            <article className="car__feature">
              <FaDoorOpen className="car__feature-icon" />
              <p className="car__feature-text">{carInfo.doors} puertas</p>
            </article>
          </section>
          <p className="car__description">{carInfo.description}</p>
          <section className="car__gallery">
            {carInfo.gallery?.map((image) => (
              <article className="car__gallery-item" key={image}>
                <img className="car__gallery-image" src={image} />
              </article>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};
