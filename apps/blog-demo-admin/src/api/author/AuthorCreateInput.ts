import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";
import { Decimal } from "decimal.js";

export type AuthorCreateInput = {
  firstName: string;
  lastName?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
  price?: Decimal | null;
  profileImage?: string | null;
  slug?: string | null;
  twitter?: string | null;
};
