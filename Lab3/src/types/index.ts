export interface ICard {
  id: string;
  countryId: string;
  title: string;
  price: number;
  image: string;
  description: string;
  duration: number;
}

export interface ICountry {
  id: string;
  title: string;
}

export interface ICardWithCountry extends ICard {
  country: string;
}

export interface ItemInCart {
  item: ICardWithCountry;
  count: number;
}
