/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthorWhereUniqueInput } from "../../author/base/AuthorWhereUniqueInput";
import {
  ValidateNested,
  IsString,
  IsBoolean,
  IsOptional,
  IsDate,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { TagCreateNestedManyWithoutPostsInput } from "./TagCreateNestedManyWithoutPostsInput";
import { GraphQLBigInt } from "../../util/GraphQLBigInt";

@InputType()
class PostCreateInput {
  @ApiProperty({
    required: true,
    type: () => AuthorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AuthorWhereUniqueInput)
  @Field(() => AuthorWhereUniqueInput)
  author!: AuthorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  content!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  draft?: boolean | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  featuredImage!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  metaDescription?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  metaTitle?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  publishedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  slug?: string | null;

  @ApiProperty({
    required: true,
    type: () => TagCreateNestedManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => TagCreateNestedManyWithoutPostsInput)
  @IsOptional()
  @Field(() => TagCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  tags?: TagCreateNestedManyWithoutPostsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => GraphQLBigInt, {
    nullable: true,
  })
  views?: bigint | null;
}

export { PostCreateInput as PostCreateInput };
