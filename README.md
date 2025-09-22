# RickAndMortyDirectory

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

## Project

I've choosed Directorio Rick & Morty as my project due to personal interes on Tv Serie and accesibility of its own API.

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

This will compile the project and store the build artifacts in the `dist/` directory.

## Data Modeling

The project count with just 2 interfaces: Character and Episode:
```
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  episode: string[];
  image: string;
}
```
```
interface Episode {
  id: number;
  name: string;
  episode: string;
}
```
It is important due prevents uncongruency on data types and makes easier to work with data arrays.

## Technical Decisions

- Show characters resume on cards: I've worked on similar aplications before and i think is a very cool way to display information. Image must be the bigest element in cards and must feel stetical confortable to land cursor above them.
- Place pagination on top region: It is way much accesible to place pagination controls on top; otherwise if you want to go to page 42 you have to scroll to the very bottom on every single page to go next one.
- Use localStorage: It was due to simplicity, the application has nothing to save but the filter state so is and overkill to use a remote storage.

## Project Structure

The project follows the standard Angular structure, organized for scalability and maintainability.
Key Points:

All application logic resides in src/app/ for easy navigation and modularity.

app.ts contains the main application component with Angular signals, resources, and logic for character filtering and pagination.

app.html and app.css define the main structure and styling of the UI.

Configuration files like angular.json and tsconfig.json are used by Angular CLI and TypeScript for building and running the project.

node_modules/ contains all third-party dependencies installed via npm.

This structure allows for clear separation of concerns, making the project maintainable and easy to extend with new features.

## IA Usage

Due i'm completly new using Angular and most of resources are outdated i've used IA on followings:
  - Requesting the reazon of some specific problems and ways to solve it
  - Asking for recomendations of a profesional and modern style sheet
  - The way to implement some methods such as conditionals and loops in html.

Some promt examples:
```
Como uso httpModule en la version 20 de Angular para consumir una API?

<main .... > Dame un ejemplo de estilo que se vea profesional para esta parte. Manten un esquema de colores oscuros y reactivos al hover

Que tipo de arreglo le tengo que pasar a la funcion call back de nxPagination para que funcione correctamente?
```

## Reflexion about IA usage
I've used deep seek and chat gpt for consulting information and recomendations about project structure and some problem solving. Most of times it was neccesary to request both justification and alternatives because many things where uncompatible; it also was neccesary to reforce learning by searching on internet forums, documentation and youtube videos.

## What's Next?

Next addition should be to make to more pages: Locations and Episodes, and link each character card to go to it's respective episode by clicking on it.
This aplication has an easy structure that allows to scale and manitance.
