export const nestjsQuestions = [
    {
      question: 'What is dependency injection in Nest.js.',
      answer: 'Dependency injection in Nest.js is a design pattern used to create loosely coupled components. It allows you to inject dependencies into classes or components rather than creating them directly within the class.'
    },
    {
      question: 'What are providers in Nest.js and how are they used?',
      answer: 'Providers in Nest.js are a fundamental concept used to define classes or functions that can be injected as dependencies. They are typically used to encapsulate business logic, data access, or external services.'
    },
    {
      question: 'What are modules in Nest.js and how do they work?',
      answer: 'Modules in Nest.js are used to organize the application into logical units. Each module can encapsulate controllers, providers, and other related components. Modules can import and export functionality to other modules.'
    },
    {
      question: 'What is the role of middleware in Nest.js applications.',
      answer: 'Middleware in Nest.js is a function that runs before or after the processing of a request. It can modify the request or response objects, execute additional logic, or terminate the request early.'
    },
    {
      question: 'What are guards in Nest.js and how are they used?',
      answer: 'Guards in Nest.js are used to control access to routes or resources based on certain conditions. They can be used to enforce authentication, authorization, or other security policies.'
    },
    {
      question: 'What is the role of interceptors in Nest.js applications?',
      answer: 'Interceptors in Nest.js are used to intercept incoming requests and outgoing responses. They can be used to modify or log requests, perform validation, or add additional functionality.'
    },
    {
      question: 'What are pipes in Nest.js and how they are used?',
      answer: 'Used to transform or validate input data before it is processed by a route handler. They can be synchronous or asynchronous and can modify the request payload.'
    },
    {
      question: 'What is middleware context in Nest.js?',
      answer: 'Middleware context in Nest.js is an object that provides information about the incoming request and response. It includes properties such as the request method, URL, headers, and body.'
    },
    {
        question: 'What are the 3 injection scopes in Nest.js?',
        answer: 'Singleton, Transient, and Request. Singleton dependencies are created once and shared across the application, Transient dependencies are created each time they are requested, and Request dependencies are created for each incoming request.'
    }
  ];
  