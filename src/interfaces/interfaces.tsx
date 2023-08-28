import { ReactNode } from "react";

export interface LiProps {
  Ref?: string;
  text?: string;
  children?: ReactNode;
  selected?: string;
  onClick?: () => void;
}

export interface CardsProps {
  cloud: string;
  image: string;
  title: string;
  description: string;
  Bgcolor: string;
  color: string;
}

export interface ICardsPlans {
  image: string;
  title: string;
  description: string;
  Bgcolor: string;
  color: string;
}

export interface ICardPlans {
  imagePlans: string;
  colorImage: string;
  image: string;
  titleImage: string;
  title: string;
  children: ReactNode;
}
