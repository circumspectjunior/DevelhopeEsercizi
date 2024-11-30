import express from "express";
import morgan from "morgan";
import {
    addPlanets, deletePlanets, getPlanetOfParamId, getPlanets, updatePlanets
} from "./controlers/planets";


const app = express();
const port:number = 3000;


app.use(express.json());
app.use(morgan("dev"));

app.get("/api/planets", getPlanets)
app.get("/api/planets/:planetsId", getPlanetOfParamId)
app.post("/api/planets", addPlanets)
app.put("/api/planets/:planetsId", updatePlanets)
app.delete("/api/planets/:planetsId", deletePlanets)

app.listen(port, () =>{
    console.log("server currently listening on http://localhost:3000")
})


