import express, { Router } from "express";

import Auth from "@/middlewares/auth";

import SampleController from "@/resources/sample/sample.controller";

import Validator from "@/utils/validator";

import {
  createSchema,
  CreateSchemaParams,
  deleteSchema,
  DeleteSchemaParams,
  updateSchema,
  UpdateSchemaParams,
} from "@/schemas/sample.schema";

import { Globals } from "@/globals";

class SampleRouter {
  private router: Router;
  private sampleController: SampleController;

  private middlewares: Globals.MiddlewareArray = {
    get: [Auth.check],
    create: [Auth.check, Validator.validateRequestBody<CreateSchemaParams>(createSchema)],
    update: [Auth.check, Validator.validateRequestBody<UpdateSchemaParams>(updateSchema)],
    delete: [Auth.check, Validator.validateRequestBody<DeleteSchemaParams>(deleteSchema)],
  };

  constructor() {
    this.router = express.Router();
    this.sampleController = new SampleController();
  }

  public getRouter(): Router {
    this.router.get("/getSamples", ...this.middlewares.get, (req, res, next) => {
      return this.sampleController.getSamples(req, res, next);
    });
    this.router.post("/createSample", ...this.middlewares.create, (req, res, next) => {
      return this.sampleController.createSample(req, res, next);
    });
    this.router.patch("/updateSample", ...this.middlewares.update, (req, res, next) => {
      return this.sampleController.updateSample(req, res, next);
    });
    this.router.delete("/deleteSample", ...this.middlewares.delete, (req, res, next) => {
      return this.sampleController.deleteSample(req, res, next);
    });
    return this.router;
  }
}

export default SampleRouter;
