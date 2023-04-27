export type ObjectInformation = {
  id: number | string;
  isHighlight: boolean;
  primaryImage: string;
  primaryImageSmall: string;
  department: string;
  objectName: string;
  base_experience: number;
  forms: string[];
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    "special-attack": number;
    "special-defense": number;
    speed: number;
  };
};
