import { NextFunction, Request, Response } from "express";

import SampleService from "./sample.service";

class SampleController {
  private sampleService: SampleService;

  constructor() {
    this.sampleService = new SampleService();
  }

  public async getSamples(req: Request, res: Response, next: NextFunction) {}
  public async createSample(req: Request, res: Response, next: NextFunction) {}
  public async updateSample(req: Request, res: Response, next: NextFunction) {}
  public async deleteSample(req: Request, res: Response, next: NextFunction) {}
}

export default SampleController;
