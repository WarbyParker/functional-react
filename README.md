Functional React
================

![screenshot](https://cloud.githubusercontent.com/assets/794809/14591866/67e20cea-04e6-11e6-9497-36ebef9b4fbc.png)

Exploring various approaches to building frontend with React and other modern frontend tools.

- [x] ES2015 / Babel transpilation
- [x] Webpack v2
- [x] React 15 (RC2)
- [x] Explore CSS approaches (PostCSS, CSS Modules, Sass)
- [x] CSS Linting
- [x] Unit Testing
- [ ] Functional End-to-end testing
- [x] JS Linting
- [ ] High-level approach (FP, HoCs, Eliminate React Mixins)
- [ ] Page-specific webpack bundling (require.ensure)
- [ ] Animations

## Get started

* `git clone git@github.com:WarbyParker/functional-react.git && npm i && npm start`

## Run tests

* `npm test`

## React Composition

Since React 0.14+ no longer supports mixins, establishing a suitable compositional approach is an important discussion for overall maintainability of React applications. In attempts to reduce its API footprint, React supports the use of ES2015 class syntax as an alternative to using React's `createClass()` builder function. As a result, the use of *Higher Order Components (HoCs)* as a solution to composition has emerged. **HoCs are functions that accept a base component and return a new component with additional functionality**. This approach helps overcome the limitations of traditional hierarchical inheritance.

Let's define a few React-specific terms. When building React UI, you are using either one of two types of components: **Presentational components** (sometimes referred to as *UI Components* or *Dumb Components*) or **Containers**

- **UI Components**: UI components make up the vast majority of your React application. They simply render UI and are ideally stateless.
  - i.e. `f(props) -> UI`

- **Containers**: Containers are more complex in that they are responsible for things like *fetching data*, *state management*, *error handling*, *mounting/unmounting* of components, etc.

It's important to properly compose these two types of components in order to create a maintainable React codebase.

We can see an example of this within `src/components/Composition`. There are also libraries dedicated specifically to this sort of React compositional approach.

- [recompose](https://github.com/acdlite/recompose)
- [react-komposer](https://github.com/kadirahq/react-komposer)
