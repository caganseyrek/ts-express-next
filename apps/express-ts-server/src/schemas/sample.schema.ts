import { z } from "zod";

export const createSchema = z.object({});
export const updateSchema = z.object({});
export const deleteSchema = z.object({});

export type CreateSchemaParams = z.infer<typeof createSchema>;
export type UpdateSchemaParams = z.infer<typeof updateSchema>;
export type DeleteSchemaParams = z.infer<typeof deleteSchema>;
