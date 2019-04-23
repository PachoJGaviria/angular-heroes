# Concepts
- **interpolation binding syntax**: `<h1>{{title}}</h1>`
- **Component basic structure**
  - selector — the component's CSS element selector
  - templateUrl — the location of the component's template file.
  - styleUrls — the location of the component's private CSS styles.
- **lifecycle hooks**
  Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.
  Angular offers lifecycle hooks that provide visibility into these key life moments and the ability to act when they occur.
- **Pipe**: the pipe operator ( | ). Pipes are a good way to format strings, currency amounts, dates and other display data. 
- **Two-way binding**: That means data flow from the component class out to the screen and from the screen back to the class.
- **ngModel directive**
- **metadata**:Angular needs to know how the pieces of your application fit together and what other files and libraries the app requires.
- **@NgModule.imports** metadata's imports array -> contains a list of external modules that the app needs.
Every component must be declared in exactly one NgModule
- **@NgModule.declarations**
- ***ngFor**
- **event binding**
- ***ngIf**
- **class binding**: makes it easy to add and remove a CSS class conditionally.

