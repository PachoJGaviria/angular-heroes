# Concepts
- **Component**
  - Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.
- **Directive**
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
- **Input property**: (@Input() decorator)

  property binding: `<app-component [property]="value"></app-component>`
  
  `@Input() property: string;`
- **selector**
- **one way data binding**
- **Services**: 
  - Services are a great way to share information among classes that don't know each other.
  - change your mind about the implementation anytime, without touching any components
- **dependency injection**
- **dependency injection system**
- **root injector**: When you provide the service at the root level, Angular creates a single, shared instance of SERVICE and injects into any class that asks for it. 
- **Constructor**: Reserve the constructor for simple initialization such as wiring constructor parameters to properties.
- **Observable** is one of the key classes in the RxJS library.
- **service-in-service**
- A property must be **public** because you're about to bind to it in the **template**. Angular only binds to public component properties.
- **AppRoutingModule**: In Angular, the best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule.
```ng generate module app-routing --flat --module=app```
Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.
A typical Angular Route has two properties:
  - path: a string that matches the URL in the browser address bar.
  - component: the component that the router should create when navigating to this route.
  - RouterModule.forRoot: you configure the router at the application's root level.
- **RouterOutlet**:tells the router where to display routed views. It is one of the router directives that became available to the AppComponent because AppModule imports AppRoutingModule which exported RouterModule.
- **RouterLink directive**
- **navigation link (routerLink)**
- **placeholder**
- **Angular interpolation binding**



