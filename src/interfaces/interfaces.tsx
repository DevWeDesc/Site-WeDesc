import { ReactNode } from "react";

export interface LiProps {
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
