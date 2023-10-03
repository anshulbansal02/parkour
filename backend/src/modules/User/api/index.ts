import { Router } from "express";
import userService from "../service";
import { bodyValidator } from "@lib/middlewares";
import { CreateUserDTO } from "../dto";
import { UserServiceError } from "../shared/errors";

const router = Router();

router.post("/", bodyValidator(CreateUserDTO), async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.dispatch.OK(user);
  } catch (err) {
    if (err instanceof UserServiceError) {
      if (err.type === "EMAIL_ALREADY_EXISTS")
        res.dispatch.BadRequest(
          `User with email '${req.body.email}' already exists.`
        );
    }
  }
});

router.get("/:id", async (req, res) => {
  const user = await userService.getUserById(+req.params.id);

  if (user) res.dispatch.OK(user);
  else res.dispatch.NotFound("User does not exists.");
});

export default router;
