import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";

export type PostWhereInput = {
  author?: AuthorWhereUniqueInput;
  tags?: TagListRelationFilter;
  views?: BigIntNullableFilter;
};
