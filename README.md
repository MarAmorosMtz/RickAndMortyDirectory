# RickAndMortyDirectory

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Project Structure

The project follows the standard Angular structure, organized for scalability and maintainability.
Key Points:

All application logic resides in src/app/ for easy navigation and modularity.

app.ts contains the main application component with Angular signals, resources, and logic for character filtering and pagination.

app.html and app.css define the main structure and styling of the UI.

Configuration files like angular.json and tsconfig.json are used by Angular CLI and TypeScript for building and running the project.

node_modules/ contains all third-party dependencies installed via npm.

This structure allows for clear separation of concerns, making the project maintainable and easy to extend with new features.
