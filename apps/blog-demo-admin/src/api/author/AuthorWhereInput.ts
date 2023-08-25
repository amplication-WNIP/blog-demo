import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type AuthorWhereInput = {
  posts?: PostListRelationFilter;
  price?: DecimalNullableFilter;
};
