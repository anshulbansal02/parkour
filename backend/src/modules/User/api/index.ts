import { Router } from "express";
import userService from "../service";
import { bodyValidator } from "@lib/middlewares";
import { CreateUserDTO } from "../dto";

const router = Router();

router.post("/", bodyValidator(CreateUserDTO), async (req, res) => {
  const user = await userService.createUser(req.body);

  res.dispatch.OK(user);
});

router.get("/:id", async (req, res) => {
  const user = await userService.getUserById(+req.params.id);

  res.dispatch.OK(user);
});

export default router;
