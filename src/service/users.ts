import { profile } from "console";
import users from "../model/users";
import { User } from "../types/RootTypes";

const userService = {
  getAll: async (): Promise<User[]> => {
    return users.find();
  },
  create: async (user: User): Promise<User> => {
    let new_username = users.findOne({ username: user.username });

    if (new_username !== null) {
      return null;
    }
    let new_user = new users(user);
    return new_user.save();
  },
  findById: async (profile_id: string): Promise<User> => {
    return users.findOne({ profile_id: profile_id });
  },
  update: async (profile_id: string, user: User): Promise<User> => {
    return users.findOneAndUpdate({ profile_id: profile_id }, user);
  },
  delete: async (profile_id: string): Promise<User> => {
    return users.findOneAndDelete({
      profile_id: profile_id,
    });
  },
};
export default userService;
