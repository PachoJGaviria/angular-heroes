**Architecture**

![Alt text](./angular-overview.png?raw=true "Angular Overview")
  - Together, a component and template define an Angular view. 
  - A decorator on a component class adds the metadata, including a pointer to the associated template. 
  - Directives and binding markup in a component's template modify views based on program data and logic. 
  - The dependency injector provides services to a component, such as the router service that lets you define navigation among views.
  - https://angular.io/guide/architecture

Angular is a platform and framework for building client applications in HTML and TypeScript.
Angular implements core and optional functionality as a set of TypeScript libraries.
The basic building blocks of an Angular application are *NgModules*
An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
  - *Components* define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data.
  - Components use *services*, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.
  - Add *decorator* to any class mark their type and provide metadata that tells Angular how to use them.
    - The most important metadata for a component is a the *template* (defines a view: HTML, *directives*, *binding markup*) 
    - A metadata for a service offers the information Angular needs to make it available to components through dependency injection (DI)
Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.

**Modules**

Angular NgModules differ from and complement JavaScript (ES2015) modules. An NgModule declares a compilation context for a set of components that is dedicated to an application domain, a workflow, or a closely related set of capabilities.
Like JavaScript modules, NgModules can import functionality from other NgModules, and allow their own functionality to be exported and used by other NgModules. 
Organizing your code into distinct functional modules helps in managing development of complex applications, and in designing for reusability.
  - *lazy-loading* that is, loading modules on demand, to minimize the amount of code that needs to be loaded at startup

**Components**

Every Angular application has at least one component, the *root component* that connects a component hierarchy with the page document object model (DOM). Each component defines a class that contains application data and logic, and is associated with an HTML *template* that defines a view to be displayed in a target environment.
The decorator for a component is `@Component()` 

**Templates, directives, and data binding**

A template combines HTML with Angular markup that can modify HTML elements before they are displayed. Template directives provide program logic, and binding markup connects your application data and the DOM. There are two types of data binding:

  - Event binding lets your app respond to user input in the target environment by updating your application data.
  - Property binding lets you interpolate values that are computed from your application data into the HTML.
  
Before a view is displayed, Angular evaluates the directives and resolves the binding syntax in the template to modify the HTML elements and the DOM, according to your program data and logic. Angular supports two-way data binding, meaning that changes in the DOM, such as user choices, are also reflected in your program data.
Your templates can use pipes to improve the user experience by transforming values for display.

**Services and dependency injection**

For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. A service class definition is immediately preceded by the @Injectable() decorator. The decorator provides the metadata that allows other providers to be injected as dependencies into your class.
Dependency injection (DI) lets you keep your component classes lean and efficient. the components delegate such tasks to services.

**Routing**

The Angular Router NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your app. It is modeled on the familiar browser navigation conventions.
The router maps URL-like paths to views instead of pages.
If the router determines that the current application state requires particular functionality, and the module that defines it hasn't been loaded, the router can lazy-load the module on demand.
To define navigation rules, you associate navigation paths with your components. 



