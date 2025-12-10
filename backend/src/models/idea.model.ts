import { ObjectType, Field, ID, GraphQLISODateTime } from "type-graphql";
import { UserModel } from "./user.model";
import { CommentModel } from "./comment.model";
import { VoteModel } from "./vote.model";

@ObjectType()
export class IdeaModel {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String)
  authorId!: string;

  @Field(() => UserModel, { nullable: true })
  author?: UserModel;

  @Field(() => Number, { nullable: true })
  countVotes?: number;

  @Field(() => [CommentModel], { nullable: true })
  comments?: CommentModel[];

  @Field(() => [VoteModel], { nullable: true })
  votes?: VoteModel[];

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}