import { Timestamp } from "firebase/firestore";

export interface Experience {
  name: string;
  description: { [id: string]: string };
  tags: string[];
  startDate: Timestamp;
  isHighlighted: boolean;
  links: { [id: string]: string };
  imageUrl: string;
  bgColor: string;
  isVisible: boolean;
}
