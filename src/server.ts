import express, { response } from 'express';

const app =express();

app.get("/", (request, response) => {
    return response.json({message: "Olá"})
})

app.listen(3333);