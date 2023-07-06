import { useSelector } from "react-redux";
import { CarType } from "../../interfaces/cars.interface";
import "./cart.css";
import { CartItem } from "../../components/cartItem";
import { EmptyState } from "../../components/emptyState";

export const Cart = () => {
  const { cart } = useSelector((state) => state.cars);

  return (
    <>
      {cart.length !== 0 ? (
        <section className="cart">
          {cart.map((car: CarType) => {
            return (
              <article className="cart__card">
                <CartItem car={car} />
              </article>
            );
          })}
        </section>
      ) : (
        <EmptyState title="No tienes reservas pendientes" theme="dark" />
      )}
    </>
  );
};
