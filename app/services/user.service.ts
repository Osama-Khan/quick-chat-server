import userModel, { UserType } from "../Models/user.model";
import CrudService from "./crud.service";

type ModifyUserType = Omit<UserType, "_id">;

/** Provides methods for User CRUD operations */
class UserService extends CrudService<
  UserType,
  ModifyUserType,
  ModifyUserType
> {
  constructor() {
    super(userModel);
  }
}

export default new UserService();
