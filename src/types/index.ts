export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CartItem = Guitar & {
  quantity: number;
};

export interface CartItem2 extends Guitar {
  quantity: number;
}

//Utility types
export type CartItem3 = Pick<Guitar, "id" | "name" | "price"> & {
  quantity: number;
};

export type CartItem4 = Omit<Guitar, "id" | "name" | "price"> & {
  quantity: number;
};
