# List of Components in this project: 

| Component                        | Explanation                                                                                                                                                                                                                                                                              |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| WithCounter                      | Higher Order Component (HOC) is a pattern where a function takes a component as an argument and returns a new component. Allows you to share common functionality between components without having to repeat the code.                                                                  |
| ClickCounter                     | The component that passed into the HOC (withCounter) that allows it to be wrapped with additonal features and functions.                                                                                                                                                                 |
| UserGreetingConditionalRendering | Use a variable inside render but outside the JSX for conditional rendering.                                                                                                                                                                                                              |
| GreetES6                         | ES6 lambda functional component.                                                                                                                                                                                                                                                         |
| GreetWithChild                   | Using props.children to render children inside a component.                                                                                                                                                                                                                              |
| GreetWithDestructor              | Divide props into named variables with destructor syntax.                                                                                                                                                                                                                                |
| FormComponent                    | Forms to submit various input values.                                                                                                                                                                                                                                                    |
| FocusInputParentComponent        | Forwards Refs.                                                                                                                                                                                                                                                                           |
| ErrorBoundary                    | Error boundaries are components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI. A class component becomes an Error Boundary by defining either or both of the getDerivedStateFromError and componentDidCatch lifecycle methods. |
| ParentComponent                  | Define the method to pass to the child in the parent and pass it to the props parameter of the child component.                                                                                                                                                                          |
| PureComp                         | Pure components are not re-rendered if there is no change in state.                                                                                                                                                                                                                      |
| StyleSheet                       | Integration with style sheets.                                                                                                                                                                                                                                                           |
| PostList                         | Calls a Axios REST get method, and displays the result in a list using a map rendering.                                                                                                                                                                                                  |
| HookMouseWithUseEffect           | UseEffect hook method with event listener addition and removal.                                                                                                                                                                                                                          |
| Components A, B, C               | The family of components that need to share the same context value. A is parent of B, and B is the parent of C, and A has the context to pass down.                                                                                                                                      |
| UserContext                      | Creates a context component that can be shared by a family of components. To facilitate context sharing it creates and exports the provider and consumer from the context component.                                                                                                     |
| ChildComponent                   | Child component passes a parameter to parent method that is passed into the child component as a props.                                                                                                                                                                                  |
| ParentComponent                  | Hosts the parent method that is passed with props to the child component and that is called from within the child component with a child component argument.                                                                                                                             |
| Column                           | Creates a fragment which let you group multiple child components without adding the extra DIV tag to the DOM. Useful when creating tables.                                                                                                                                               |
| Table                            | Parent component that uses the fragment.                                                                                                                                                                                                                                                 |
|                      |                                                                                                                                                                                                                                                                                          |
|                       |                                                                                                                                                                                                                                                                                          |

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
