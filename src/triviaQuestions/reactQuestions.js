export const reactQuestions = [
    {
      question: "What are the key differences between class components and functional components in React?",
      answer: "Class components are ES6 classes that extend from React.Component and have lifecycle methods, while functional components are simpler, stateless components that rely on props and React hooks for state management and side effects."
    },
    {
      question: "How does React Router handle dynamic routing and nested routes?",
      answer: "React Router allows for dynamic routing by using route parameters or URL parameters, which can be accessed within components using props. Nested routes are achieved by nesting <Route> components within each other, allowing for hierarchical routing structures."
    },
    {
      question: "What are React hooks and how do they differ from class-based lifecycle methods?",
      answer: "React hooks are functions that allow functional components to use state and other React features without writing a class. They provide a more concise and readable way to manage state and side effects, compared to class-based lifecycle methods, which can lead to cleaner and more modular code."
    },
    {
      question: "What is the virtual DOM in React and how does it contribute to performance optimization?",
      answer: "The virtual DOM is a lightweight representation of the actual DOM, maintained by React, that allows for efficient reconciliation of changes and updates. Instead of directly manipulating the DOM, React compares the virtual DOM with the previous version and only applies the necessary changes to the actual DOM, resulting in faster rendering and improved performance."
    },
    {
      question: "What are the differences between React.memo() and PureComponent in terms of performance optimization?",
      answer: "React.memo() is a higher-order component that memoizes a functional component to prevent unnecessary re-renders when its props remain the same. PureComponent, on the other hand, is a base class for class components that performs a shallow comparison of props and state to determine whether a component should re-render. While React.memo() is used with functional components, PureComponent is used with class components."
    },
    {
      question: "What is the role of useEffect() hook in managing side effects in functional components, and how it differs from componentDidMount() and componentDidUpdate() lifecycle methods?",
      answer: "data fetching, DOM manipulation, and subscriptions. It replaces componentDidMount(), componentDidUpdate(), and componentWillUnmount() lifecycle methods in class components by allowing components to manage side effects and cleanup logic in a more declarative and predictable way."
    },
    {
      question: "When rendering a list in React using the JavaScript .map() method, what is required for each element rendered?",
      answer: "A unique key prop is required for each element rendered. The key prop helps React identify which items have changed, are added, or are removed, and improves performance by reducing unnecessary re-renders."
    },
    {
      question: "What is the default local host port that a React development server uses?",
      answer: "3000"
    }
  ]
  