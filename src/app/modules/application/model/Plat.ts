export type Plat = {
  _id: string;
  nom: string;
  type: string;
  quantite: string;
  aliments: [{ id: string; quantite: string }];
  prix: Number;
  description: string;
  image: string;
  isAvailable: boolean;
};
