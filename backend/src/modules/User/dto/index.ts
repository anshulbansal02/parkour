import { z } from "zod";
import { UserKinds } from "../model/User";

const CreateUserDTO = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  kind: z.enum(UserKinds),
});

export { CreateUserDTO };
