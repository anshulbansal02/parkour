import { z } from "zod";
import { UserKind } from "../model/User";

const CreateUserDTO = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  kind: z.enum(UserKind),
});

export { CreateUserDTO };
