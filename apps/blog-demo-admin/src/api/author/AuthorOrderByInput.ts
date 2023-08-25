import { SortOrder } from "../../util/SortOrder";

export type AuthorOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  price?: SortOrder;
  profileImage?: SortOrder;
  slug?: SortOrder;
  twitter?: SortOrder;
  updatedAt?: SortOrder;
};
