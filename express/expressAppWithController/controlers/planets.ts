import { Request, Response } from "express";
import Joi from "joi";




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
    id: Joi.number().min(1).max(999).required(),
    name: Joi.string().min(3).max(25).required()
})

//get all the items inside planets array and show them
const getPlanets =  (req: Request, res: Response) => {
    if(planets){
        res.status(200).json(planets)
    }else{
      res.status(404).json("no planets available")  
    } 
}

//get the item where item id is = params.id
const getPlanetOfParamId = (req:Request, res:Response) => {
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
 }

//add planets
const addPlanets = (req: Request, res:Response) => {
        const {body, params} = req;
        if(planetCheck.validate(body).error){
         res.status(400).send("Invalid format")
        }else{
            planets = [...planets, body]
         
         
         res.status(200).json({msg: "successful", result: planets})
        }    
}

//Update planets
const updatePlanets = (req:Request, res:Response) => {
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
 }


 //delete items in planets
 const deletePlanets = (req:Request, res:Response) => {
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
 }

 export {
    addPlanets, deletePlanets, getPlanetOfParamId, getPlanets, updatePlanets
};
