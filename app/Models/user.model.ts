import { model, Schema } from "mongoose";

/** Type for the User object */
export type UserType = {
  /** MongoDB ID of the User*/
  _id: string;

  /** Name of the user */
  name: string;

  /** Password of the user */
  password: string;

  /** Profile image of the user */
  profile?: string;
};

type UserSchemaType = Pick<UserType, "name" | "password" | "profile">;

/** Mongoose Schema for User */
const userSchema = new Schema<UserSchemaType>({
  name: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profile: { type: String, default: `https://i.pravatar.cc/256` },
});

/** Model representing a User object */
const userModel = model<UserSchemaType>("User", userSchema);
export default userModel;
