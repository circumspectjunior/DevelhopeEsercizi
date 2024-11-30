import express from "express";
import "express-async-errors";
import Joi from "joi";
import morgan from "morgan";


const app = express();
const port = 4000;
app.use(express.json());
app.use(morgan("dev"));

type Planet = {
    id: number,
    name: string
}

type Planets = Planet[];

let planets: Planets = [
    {id: 1, name: "Earth"},
    {id: 2, name: "Mars"}

]

const planetCheck = Joi.object(
    {
        id: Joi.number().min(1).max(99).required(),
        name: Joi.string().min(3).max(25).required()
    }
)


  

app.get("/api/planets", (req, res) => {
    if(planets){
        res.status(200).json(planets)

    }else{
      res.status(404).json("no planets available")  
    } 
})

app.get("/api/planets/:planetId", (req, res) => {
   const {params} = req;
   if(Joi.number().required().min(1).max(99).validate(params.planetId).error){
    res.status(400).json("Invalid id format")
   }else{
    const found: {id: number, name: string} | undefined = planets.find((e) => e.id === Number(params.planetId))
    if (found){
        res.status(200).json(found)
    }else{
        res.status(404).json("planet with such id does not exist in DB")
    }
   }
})

app.post("/api/planets", (req,res) => {
  const {body} = req;

  if(planetCheck.validate(body).error){
    res.status(400).send("Invalid Format")
  }else{
   planets =  [...planets, body]
   res.status(201).json({key: "planets added"})
  }

})

app.put("/api/planets/:planetsId", (req, res) => {
   const {body, params} = req;
   if(planetCheck.validate(body).error){
    res.status(400).send("Invalid format")
   }else{
    const newplanets = planets.map((planet: Planet) => {
        if(planet.id === Number(params.planetsId)){
            return {...planet, ...body}
        } else{
        return planet;
    }
    })
    planets = [...newplanets]   
    res.status(200).json({msg: "successful", result: newplanets})
   }
})

app.delete("/api/planets/:planetsId", (req, res) => {
   const {body, params} =  req;
   if(planetCheck.validate(body).error){
    res.status(400).send("Invalid Format!")
   }else{
    
     const newPlanets = planets.filter((planet) => planet.id !== Number(params.planetsId))
         if(newPlanets){
        res.status(200).json({key: "Successful", result: newPlanets})

        planets = [...newPlanets];

    }else{
        res.status(404).send("Id does not exist")
    }   
   }
})

app.listen(port, () => {
    console.log("server currently listening on http://localhost:4000")
})
