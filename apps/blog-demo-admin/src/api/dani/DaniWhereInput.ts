import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DaniWhereInput = {
  id?: StringFilter;
  oneMore?: StringNullableFilter;
  userId?: StringNullableFilter;
};
