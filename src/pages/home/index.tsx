import { List } from "../../components/list";
import { Slider } from "../../components/slider";
import { CarType } from "../../interfaces/cars.interface";

interface Props {
  cars: CarType[];
}

export const Home = ({ cars }: Props): JSX.Element => {
  return (
    <>
      <Slider slides={cars} />
      <List cars={cars} />
    </>
  );
};
