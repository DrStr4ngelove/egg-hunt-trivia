export const codeQuestions = [
    {
        question: 'In Ruby, what does this return and why? 249431 / (24 * 60 * 60)',
        answer: "2 because Ruby rounds down when dividing integers."
    }, 
    {
        question: "Which numeric types are valid MongoDB BSON types?",
        answer: "32-bit integer, 64-bit Integer, Decimal128, Double"
    },
    {
        question: "The name is a.log, the owner of the file is applicationA, the size of the file is 1KB, and the file was deleted. What command will properly add this document to the files collection using mongosh?",
        answer: `db.files.insertOne({ file: "a.log", owner: "applicationA", size: 1024, deleted: true })`
    },
    {
        question: "What method should be used to get all documents from a cursor using mongosh?",
        answer: `db.<collection>.find().toArray();`
    },
    {
        question: "What role do GraphQL subscriptions, WebSocket connections, and Apollo Link play in enabling reactive data updates in web applications with Apollo Client?",
        answer: `GraphQL subscriptions enable real-time data updates, WebSocket connections provide persistent communication channels, and Apollo Link customizes the network stack to integrate WebSocket support seamlessly, facilitating reactive data flows.`
    },
    {
        question: " How do GraphQL schema stitching and Apollo Federation enable modular and scalable GraphQL architectures, and what are their benefits?",
        answer: `GraphQL schema stitching combines multiple schemas into a unified interface, promoting code reuse and modular development. Apollo Federation extends this concept by providing a standardized approach to composing distributed GraphQL services, facilitating the creation of microservices-based architectures with integrated GraphQL APIs.`
    },
  ]
  