import { Field, ID, ObjectType } from "type-graphql";
import { UserModel } from "./user.model";
import { IdeaModel } from "./idea.model";

@ObjectType()
export class Vote {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  userId!: string;

  @Field(() => String)
  ideaId!: string;

  @Field(() => UserModel)
  user!: UserModel;

  @Field(() => IdeaModel)
  idea!: IdeaModel;
}