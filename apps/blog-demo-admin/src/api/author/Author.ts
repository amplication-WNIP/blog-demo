import { Post } from "../post/Post";
import { Decimal } from "decimal.js";

export type Author = {
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  price: Decimal | null;
  profileImage: string | null;
  slug: string | null;
  twitter: string | null;
  updatedAt: Date;
};
