export interface CarsType {
  cars: CarType[];
}

export interface CarType {
  id: number;
  image: string;
  banner: string;
  title: string;
  price: string;
  description: string;
  hybrid?: boolean;
  seats: number;
  doors: number;
  gallery: string[];
}
