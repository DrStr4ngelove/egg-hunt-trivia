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
  ]
  