# Express-TS Server

> This documentation is also available [here](https://caganseyrek.com/projects/ts-express-next)

This is a boilerplate template for building backend applications with Express and TypeScript, featuring various utilities and a clean, modular architecture. It includes essential tools and best practices to streamline development and improve maintainability.

## Features

- **Express & TypeScript**: Integrates Express with TypeScript for type safety.
- **Mongoose**: Provides a schema-based solution to model data in MongoDB.
- **Nodemon**: Automatically restarts the server on file changes during development.
- **Zod**: Utilized for request validation and environment variable parsing.
- **Helmet**: Secures HTTP headers to enhance security.
- **Winston**: Logging middleware for structured logs to both console and log files.
- **Layered Architecture**: Implements a clean architecture with separation of concerns.

## Files and Folder Structure

Main folder structure of the project looks like this:

```
express-ts-server/
├── src/
│   ├── app/
│   ├── constants/
│   ├── helpers/
│   ├── middlewares/
│   ├── resources/
│   ├── schemas/
│   ├── utils/
│   ├── globals.d.ts
│   └── main.ts
├── .env.sample
├── eslint.config.mjs
├── package.json
└── tsconfig.json
```

### Core Components

```
src/
├── app/
│   ├── constants/
│   │   └── helmetOptions.ts
│   ├── core/
│   │   ├── handlers.ts
│   │   ├── httpServer.ts
│   │   ├── middlewares.ts
│   │   └── routes.ts
│   ├── errors/
│   │   └── errors.ts
│   ├── middleware/
│   │   ├── errorHandler.ts
│   │   └── requestSanitizer.ts
│   ├── extensions/
│   │   └── swagger.ts
│   ├── appBuilder.ts
│   └── config.ts
...
```

1. **Config**: Contains all the environment variables, which are parsed and validated with Zod to ensure proper configuration.
2. **AppBuilder**: Applies all the core components to the express application instance, connects to the database, then starts the http server.
3. **Core**
   - **Handlers**: Applies internal error handler and 404 error handler to the express application instance.
   - **HttpServer**: Handles starting the HTTP server and gracefully shutting it down when stopping the Express application.
   - **Middlewares**: Applies all the external middlewares (such as `express-rate-limit`, `helmet` etc.) to the express application instance.
   - **Routes**: Applies all resources' routers to the express application instance.
4. **Errors**
   - **Errors**: Contains a custom `AppError`, and other custom error classes (such as `UnauthorizedError`) that extends AppError.
5. **Middleware**:
   - **ErrorHandler**: Applies the logic for handling custom errors or unknown errors to the express application instance.
   - **RequestSanitizer**: Contains a custom sanitizer that sanitizes queries and objects/values from the request as a middleware (uses the sanitizer from the utils folder).
6. **Extensions**
   - **Swagger**: Applies the config for setting up and serving the Swagger API documentation.
7. **Constants**
   - **HelmetOptions**: Contains all the configurations for `helmet` middleware.

### Constants

```
src/
├── constants/
│   └── statusCodes.ts
...
```

- **StatusCodes**: Contains widely used http response codes and messages as object.

### Helpers

```
src/
├── helpers/
│   ├── passwordHelper.ts
│   ├── responseHelper.ts
│   └── tokenHelper.ts
...
```

- **PasswordHelper**: Contains helper methods for hashing passwords and comparing hashed with entered passwords.
- **ResponseHelper**: Contains a helper method for standardizing the responses returned from the application.
- **TokenHelper**: Includes helper methods for generating access and refresh tokens, extracting payloads from JWTs, and verifying received JWTs.

### Middlewares

```
src/
├── middlewares/
│   ├── auth.ts
│   └── validator.ts
...
```

- **Auth**: Provides a middleware for applying custom authentication validation logic.
- **Validator**: Contains a method for validating payloads from request body with the schemas in the `schemas/` folder.

### Resources

This folder contains the details of the each resource in the application. All resources are grouped in their respective folder. The application uses a layered approach for resources for separation of concerns, and follows the OOP principles.

```
src/
├── resources/
│   └── sample/
│       ├── sample.controller.ts
│       ├── sample.model.ts
│       ├── sample.repository.ts
│       ├── sample.router.ts
│       ├── sample.service.ts
│       └── sample.types.d.ts
...
```

- **router.ts**: Defines the specific API routes for the resource.
- **controller.ts**: Maps requests to the appropriate service methods.
- **service.ts**: Contains business logic for the resource.
- **repository.ts**: Handles the database interactions.
- **model.ts**: Contains the mongoose schema model.
- **types.d.ts**: Contains the type definitions for the resource.

### Schemas

```
src/
├── schemas/
│   └── sample.schema.ts
...
```

- **sample.schema.ts**: Contains the zod objects for validating request payload from the request body for the specific resource.

### Utilities

```
src/
├── utils/
│   ├── converter.ts
│   ├── logger.ts
│   └── sanitizer.ts
...
```

- **Converter**: Contains a utility method for converting string into a mongoose ObjectId.
- **Logger**: Contains a winston instance for logging into console and saving logs into a log file.
- **Sanitizer**: Contains a custom sanitizer that sanitizes queries and objects/values.

### Main

```
src/
├── globals.d.ts
└── main.ts
...
```

- **globals.d.ts**: Contains global type definitions that is shared across the application.
- **main.ts**: The entry point for the application where express app is initialized and passed into the `appBuilder`.

## License

This project is open-source and licensed under [MIT License](https://github.com/caganseyrek/ts-express-next/blob/main/LICENSE).
