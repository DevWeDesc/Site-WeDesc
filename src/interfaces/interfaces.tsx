import { ReactNode } from "react";

export interface LiProps {
  text?: string;
  children?: ReactNode;
  selected?: string;
  onClick?: () => void;
}
