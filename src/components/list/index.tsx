import { useState, useEffect } from "react";
import { Card } from "../card";
import { CarType } from "../../interfaces/cars.interface";
import "./list.css";
import { EmptyState } from "../emptyState";

interface Props {
  cars: CarType[];
}

export const List = ({ cars }: Props): JSX.Element => {
  const [filteredCars, setFilteredCars] = useState<CarType[]>([]);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  const handleChange = (e) => {
    const filterCars = cars.filter((car) => {
      if (car.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return car;
      }
    });

    if (filteredCars.length !== 0 || e.target.value.length !== 0) {
      setFilteredCars(filterCars);
    } else {
      setFilteredCars(cars);
    }
  };

  return (
    <>
      <div className="list__search">
        <input
          className="list__input"
          type="text"
          placeholder="Search car..."
          onChange={(e) => handleChange(e)}
        />
      </div>
      {filteredCars.length !== 0 ? (
        <section className="list">
          <section className="list__content">
            {filteredCars.map((car) => {
              return (
                <article className="list__item" key={car.id}>
                  <Card car={car} />
                </article>
              );
            })}
          </section>
        </section>
      ) : (
        <div className="list__empty-state">
          <EmptyState
            title="No hemos encontrado el coche que buscas"
            theme="light"
          />
        </div>
      )}
    </>
  );
};
