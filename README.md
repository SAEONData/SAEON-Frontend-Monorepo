# SAEON-Frontend-Monorepo

This repository will evolve to become SAEON's frontend react component library.
Here we'll develop shared components and applications for FRAME 1, 2 and 3.

## Architecture: 
A monorepo with Lerna, Yarn workspaces, create-react-app (with hot-module-replacement) and Storybook

#### A nice guide on how to setup a monorepo (for background): https://f1lt3r.io/guide-multi-react-app-monorepo-with/

## Structure of this monorepo:
- **root**
  - **apps** _(react applications go in here)_
    - **demo-app**  _(an example react app created with CRA)_
  - **components**  _(isolated shared componets go in here)_
    - **2d-maps**  _(preconfigures category for components)_
      - **MapServiceWrapper**  _(example component)_
    - **3d-maps**  _(preconfigures category for components)_
    - **charts**  _(preconfigures category for components)_
      - **recharts-line-example**  _(example component)_
    - **graph-renderers**  _(preconfigures category for components)_
    - **media-viewers**  _(preconfigures category for components)_
    - **object-renderers**  _(preconfigures category for components)_
    - **search-interfaces**  _(preconfigures category for components)_
  
In a nutshell, for new projects, create a folder for your project under ./apps/ and create/add your project into your new folder.
For components, create a folder for your component under ./components/ and create/add your component into your new folder.

#### NOTE: For installing npm pacakges please use Yarn. This monorepo depends on yarn, and although the two (yarn & npm) can be mixed, I wouldn't recommend it. 
For more info:
- https://yarnpkg.com/en/
- https://yarnpkg.com/lang/en/docs/workspaces/

## For projects created with CRA:
This 'demo-app' project contains a 'hack' (read work-around) to auto transpile imported shared components. In the demo-app example project you'll find a 'config-override.js' file, which contains the code for this work-around. For each shared component that you import you need to add a 'fs.realpathSync(...)' entry. This tells webpack/babel to include those folders when transpiling. This means you don't have to manually transpile your shared components and allows HMR (Hot Module Replacement) to work on your components.

## For custom projects:
To enable auto-transpiling of your shared components, make sure to include the relevant paths in your webpack config.

## Storybook:
This monorepo also comes preloaded with React Storybook, which allows you to visualize your componets for demo and as you dev for test rendering. It comes with built-in transpiling and support HMR.

To add your component to Storybook, add a 'index.stories.js' file to your component folder. Check either of the existing two demo components for examples.

To run the Storybook, navigate to the root folder and run 'yarn start-storybook'

For more info: https://storybook.js.org/

## Lerna:
Lerna allows us to run scripts accross the entire monorepo, as long as they conform to certain naming conventions.

For more info: https://lernajs.io/

## CRA (Create-React-App):
And lastly, CRA is a very convenient tool for creating new React applications. It's not required, but does offer a ton of nice to have things out of the box, that just work...

Read here for more info: https://facebook.github.io/create-react-app/
