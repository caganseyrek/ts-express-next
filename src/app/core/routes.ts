import express from "express";

import SampleRouter from "@/resources/sample/sample.router";

/**
 * Class for defining and applying API routes to the Express application.
 * This class configures the route paths for different sections of the application.
 */
class Routes {
  private base: string = "api";
  private version: string = "v2";
  private apiPrefix: string = `/${this.base}/${this.version}`;

  private sampleRouter: SampleRouter;

  constructor() {
    this.sampleRouter = new SampleRouter();
  }

  /**
   * Applies the API routes to the Express application.
   *
   * @param {express.Application} app - The Express application instance.
   * @returns {express.Application} The modified Express application with the applied API routes.
   */
  public apply(app: express.Application): express.Application {
    app.use(`${this.apiPrefix}/sample`, this.sampleRouter.getRouter());

    return app;
  }
}

export default Routes;
