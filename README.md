# Overview

Pegasus is a tool for developers, which helps them visualise various aspects of the WhereIsMyTransport platform, from here on referred to as *"the **API**"*.

### The project techstack

|The thing|... and what it is for|
|:--------|:-----------|
|[Node (v6)](https://nodejs.org)|a javascript runtime that uses an event-driven, non-blocking I/O model - (**npm** is the package manager for node)|
|[React](https://facebook.github.io/react/)|a view layer for dynamic web apps|
|[Webpack](https://webpack.github.io)|a module bundler for javascript projects|
|[Leaflet](http://leafletjs.com/)|open-source JavaScript library for mobile-friendly interactive maps|
|[Karma](http://karma-runner.github.io/1.0/config/configuration-file.html)|a unit testing framework|

The rest of this document breaks down the project in terms of:

- **Features**: what the application contains
- **Usage**: how to install and run the app
- **Architecture**: how the application is structured
- **Extending Hydra**: how to add more concepts to the webapp

By the end of the document, you should be able to begin your Pegasus dev journey.

# 1. Features

With Pegasus you can basically explore each endpoint, specifically which parameters are available for it, and what output it produces, based on the value of the specified parameters. Below you will find two screenshots, where the left-hand side of the UI is the input section and on the right-hand side you see the output in JSON format. Notice that if there is `geometry` in the response, this will be presented on the map.

### Json Input/Output

![](/docs/ss-json.png)

### Map Input/Output
![](/docs/ss-map.png)

# 2. Usage

## Install & Run

### Continuous Development

- `git clone https://whereismytransport.visualstudio.com/Product/_git/PegasusUI`
- `npm run setup`

OR

- `npm install`
- `npm start`

Locally, the webapp is served on [http://localhost:7080](http://localhost:7080)

### Production Package

To run the production release build and generate the `dist` folder, use the following commands:

|Environment| Console Command|
|:-----|:-----|
|**Node**| `npm run build` (works on any platform/OS, where **Node** works)|
| **Linux**| `bash ./scripts/bash/build.sh`|
| **Windows**| `./scripts/powershell/build.ps1`|

### NPM scripts:

The project uses webpack as the module bundler `npm` scripts to run tasks. With these two combined you can build, run, package etc. your application. Several `npm` scripts have been created for basic common tasks, found in `package.json`. 

Run these scripts with the command `npm run {{script-name}}`:

| script        | action        |
| :------------- |:-------------|
|`"start"`|runs the dev server locally on the specified port|
| `"setup"`| installs all dependencies and runs the dev server|
|`"prod"`| runs the node application using `server.js`|
|`"test"`|runs unit tests using karma|
|`"build"`| creates a production build of the app in `./dist`|
|`"clean"`| deletes the `./dist` folder|

# 3. Application Architecture

This section details the application architecture, which includes things such as the 
- **folder structure**, to help you navigate within the project
- **architecture**, to highlight any patterns and the flow of information
- **application logic**, explaining the main use-case of the app, from booting up accomplishing a major use-case.
- **extending the app**, allowing other users to create entirely new aspects of the application (e.g. page-level components, sub-components, etc.)

## Folder Structure
```
PegasusUI
│   .babelrc                // Config file for transpiling ES6 & React to older browsers (es5)
│   package.json            // Node Package/Project dependencies
│   server.js               // serves the application (from 'dist' folder) in a production environment
│   webpack.config.js           
│   
├───dist                    // generated folder containing production package
├───docs                    // used for README.md related files (e.g. images)
├───node_modules            // generated folder for node modules/dependencies
├───scripts                 // scripts that perform certain, repetitive tasks
│   ├───bash                // -> supports bash scripts (.sh)
│   └───powershell          // -> supports powershell scripts (.sh)
│           
└───src
    │   favicon.ico
    │   index.html
    │   index.js
    │   
    ├───app                 // app logic
    │   │   App.js          // antry-point/master-level component
    │   │   app.scss        // application style file (imported by App.js)
    │   │   
    │   ├───components      // shared, reusable (dumb) components
    │   └───pages           // big, page-level (smart) components
    │               
    ├───img                 // images for the app (result in ./dist/assets/ in prod build)
    └───sass                // general .sass files for the application
            
```

## Architecture

### Overview

This app uses pure React built-in storage options (i.e. `this.state && this.setState({...})`), but will likely move over to a more concrete pattern for information flow, such as **Flux** or **Redux**. Furthermore, wherever possible, the application uses a `.json` style file to generate UI content. This moves the focus from the application logic, to the content the application delivers. Such an approach makes the application more scalable, and allows users with minimal knowledge about front-end development to make changes to our production apps.

## Application Logic

There is basically 1 page-level component, called `RestUI`, which can be found in `app/pages/rest-ui/`. This component is responsible for the entire **input** and **output** of the application.
The **input** is effectively all the parameters and fields you can edit for each of the **API** endpoints. `RestUI` loads an `endpoint.js` file (in the same folder), which contains all the meta data constructing the UI's content (i.e. populating the UI with the list of endpoints and their relevant controls, documentation, 
etc.). Furthermore, the `RestUI` component also contains the all the **output**, which displays the data obtained from the **API** based on the **input** specified by the user.

### **Input** (left panel)
Each of these endpoints is rendered to an `Accordion.js` component, located under `app/components/accordion`. The `Accordion` consists of collapsible `Section` components, defined in the same file. Each `Section` represents one endpoint, e.g. there is a **POST Journeys** `Section`, as well as a **GET Journeys** `Section`. Pressing the **Fetch Request** function fires an API request with the respective parameters, for the relevant endpoint.

### **Output** (right panel)
Once a response is returned from the API, it gets presented in the output panel, in **JSON** format. One thing to note is that the response body may contain fields/nodes in the `.json` response, that are called `geometry`. The application recursively looks for these and adds them to the map. Furthermore, in this case you can toggle between **Map** and **JSON** output, using a UI control on the top right.