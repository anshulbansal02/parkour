import { type ZodSchema, z, ZodError } from "zod";
import { Request, Response } from "express";

interface ValidationSchema extends ZodSchema {}

export function bodyValidator(schema: ValidationSchema) {
  return async (req: Request, res: Response, next: any) => {
    const payload = req.body;

    try {
      const refinedPayload = await schema.parseAsync(payload);

      req.body = refinedPayload;

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.dispatch.BadRequest({ errors: error.issues });
      }
      res.dispatch.UnprocessableEntity();
    }
  };
}
