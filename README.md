# Express-TS Template

![GitHub License](https://img.shields.io/github/license/caganseyrek/express-ts-template)
![GitHub repo size](https://img.shields.io/github/repo-size/caganseyrek/express-ts-template)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/caganseyrek/express-ts-template)

## Overview

This is a boilerplate template for building backend applications with Express and TypeScript, integrated with various utilities and a clean, modular architecture. It includes essential tools and best practices to help streamline development and maintainability.

## Features

- Express & TypeScript: Integrates Express with TypeScript for type safety.
- Mongoose: Provides a schema-based solution to model data in MongoDB.
- Nodemon: Automatically restarts the server on file changes during development.
- Zod: Utilized for request validation and environment variable parsing.
- Helmet: Secures HTTP headers to enhance security.
- Winston: Logging middleware for structured logs to both console and log files.
- Layered Architecture: Implements a clean architecture with separation of concerns.

## File and Folder Structure

Main folder structure of the project looks like this:

```
express-ts-template/
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

### Core Components (`app`)

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
│   │   ├── errorHandler.ts
│   │   └── errors.ts
│   ├── extensions/
│   │   └── swagger.ts
│   ├── appBuilder.ts
│   └── config.ts
...
```

- **Config**: Contains all the environment variables, which are parsed and validated with Zod to ensure proper configuration.
- **AppBuilder**: Applies all the core components to the express application instance, connects to the database, then starts the http server.
- **Core**
  - **Handlers**: Applies internal error handler and 404 error handler to the express application instance.
  - **HttpServer**: Handles starting the HTTP server and gracefully shutting it down when stopping the Express application.
  - **Middlewares**: Applies all the external middlewares (such as `express-rate-limit`, `helmet` etc.) to the express application instance.
  - **Routes**: Applies all resources' routers to the express application instance.
- **Errors**
  - **Errors**: Contains a custom `AppError`, and other custom error classes (such as `UnauthorizedError`) that extends AppError.
  - **ErrorHandler**: Applies the logic for handling custom errors or unknown errors to the express application instance.
- **Extensions**
  - **Swagger**: Applies the config for setting up and serving the Swagger API documentation.
- **Constants**
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
│   └── auth.ts
...
```

- **Auth**: Provides a middleware for applying custom authentication validation logic.

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
│   ├── sanitizer.ts
│   └── validator.ts
...
```

- **Converter**: Contains a utility method for converting string into a mongoose ObjectId.
- **Logger**: Contains a winston instance for logging into console and saving logs into a log file.
- **Sanitizer**: Contains a custom sanitizer that sanitizes queries and objects/values before.
- **Validator**: Contains a method for validating payloads from request body with the schemas in the `schemas/` folder.

### Main

```
src/
├── globals.d.ts
└── main.ts
...
```

- **globals.d.ts**: Contains global type definitions that is shared across the application.
- **main.ts**: The entry point for the application where express app is initialized and passed into the `appBuilder`.

## Setup

### Prerequisites

To setup the project locally, ensure following are present on your system:

- Node.js (v20 or higher)
- MongoDB Database
- Bash Shell for running provided scripts (This project is developed in a GNU/Linux environment using WSL2 with Ubuntu. However, you can set up and run it on other operating systems by installing the required tools.)

### Installation

1. Clone the repository

```bash
git clone https://github.com/caganseyrek/express-ts-template.git
cd path/to/express-ts-template
```

2. Install the dependencies

```bash
pnpm install
```

3. Setup the environment variables. Remove the `.sample` suffix from the `.env.sample` file and put the required variables into the file.
4. Run the application

```bash
pnpm dev
```

## Contributing

Feel free to fork this project and create pull requests for improvements. Any issues or feature requests are also welcome!

## License

This project is open-source and licensed under [MIT License](https://github.com/caganseyrek/express-ts-template/blob/main/LICENSE).
