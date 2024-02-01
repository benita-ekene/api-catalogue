import express from "express";
const port = 4000

const app = express()

//The listen method in Node.js does not return a promise, so you cannot use .then() directly on it.
app.listen(port, () => {console.log("Server running on port 4000")})
