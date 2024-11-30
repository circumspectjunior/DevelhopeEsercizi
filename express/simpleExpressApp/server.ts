import express from "express";
import 'express-async-errors';
import morgan from "morgan";

const port = 3000;


const app = express();
app.use(morgan('dev'));
app.use(express.json());

type Planet = {
    id: number,
    name: string

}

type Planets = Planet[];

let planets: Planets = [
    { id: 1, name: "Earth",},
    {id: 2, name: "Mars"}
]


app.use(function logresponse(req, res, next){
    console.log(req)

    next();
})

app.get("/", (req, res) => {
 
 res.status(200).json(planets)
})

app.listen(port, () => {
    console.log("server listening on http://localhost:3000" )
})
