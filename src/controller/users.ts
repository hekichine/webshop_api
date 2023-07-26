import userService from "../service/users";
import { User } from "../types/RootTypes";
import { Request, Response } from "express";

const userController = {
  getAll: async (req: Request, res: Response) => {
    try {
      let list_user = await userService.getAll();
      if (list_user && (await list_user).length > 0) {
        return res.status(200).json({
          message: "List user",
          users: list_user,
        });
      }
      return res.status(404).json({
        message: "Empty",
        err: 1,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      let image_url = `${req.protocol}://${req.get("host")}/uploads/${
        req.file?.filename
      }`;

      let user: User = {
        ...req.body,
        image: image_url,
      };

      let new_user = await userService.create(user);
      if (new_user !== null) {
        return res.status(200).json({
          message: "Create user success",
          users: new_user,
        });
      }
      return res.status(404).json({
        message: "User exist",
        err: 1,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
  findByProfile: async (req: Request, res: Response) => {
    try {
      let profile_id = req.params.profile_id;

      let list_user = await userService.findById(profile_id);
      if (list_user) {
        return res.status(200).json({
          message: "Find by profile_id",
          users: list_user,
        });
      }
      return res.status(404).json({
        message: "Not found",
        err: 1,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      let image_url = `${req.protocol}://${req.get("host")}/uploads/${
        req.file?.filename
      }`;
      let user: User = { ...req.body, image: image_url };
      let profile_id = req.params.profile_id;

      let update_user = await userService.update(profile_id, user);
      if (update_user) {
        return res.status(200).json({
          message: "Update user",
        });
      }
      return res.status(404).json({
        message: "Not found",
        err: 1,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      let profile_id = req.params.profile_id;

      let delete_user = await userService.delete(profile_id);
      if (delete_user) {
        return res.status(200).json({
          message: "Delete user",
        });
      }
      return res.status(404).json({
        message: "Not found",
        err: 1,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
};

export default userController;
