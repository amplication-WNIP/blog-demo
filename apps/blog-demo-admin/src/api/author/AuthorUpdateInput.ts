import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";
import { Decimal } from "decimal.js";

export type AuthorUpdateInput = {
  firstName?: string;
  lastName?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
  price?: Decimal | null;
  profileImage?: string | null;
  slug?: string | null;
  twitter?: string | null;
};
