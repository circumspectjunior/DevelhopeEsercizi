import { Request, Response } from "express";

import Joi from "joi";
import { db } from "./db";




console.log(db)
/*
//set up db
const createDB = async () => {
    //Create a table called planets
    await db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE planets(
         id SERIAL NOT NULL PRIMARY KEY,
         name TEXT NOT NULL,
         image TEXT
    );

    INSERT INTO planets (name) VALUES ('Earth'), ('Mars');
`);


const dbPlanets = await db.many(`
    SELECT * FROM planets;
    
    `);

//console .log(dbPlanets)

    
}
createDB(); */




/*
//temporary db before using dataBase.
type Planet = {
    id: number,
    name: string
}

type Planets = Planet[];

let planets: Planets = [
    {id: 1, name: "Earth"},
    {id: 2, name: "Mars"}

] */





const planetCheck = Joi.object(
    {
    id: Joi.number().min(1).max(999).required(),
    name: Joi.string().min(3).max(25).required()
})



//get all the items inside planets array and show them
const getPlanets = async  (req: Request, res: Response) => {

    const planet = await  db.many(`
        SELECT * FROM planets;
        `);
    if(planet){

        res.status(200).json(planet)
        console.log(planet)
    }else{
      res.status(404).json("no planets available")  
    } 
}


//get the item where item id is = params.id
const getPlanetOfParamId = async (req:Request, res:Response) => {
    const {params} = req;
    if(Joi.number().required().min(1).max(99).validate(params.planetsId).error){
     res.status(400).json("Invalid id format")
    }else{
     const found: {id: number, name: string} | null = await db.oneOrNone(`
        SELECT * FROM planets WHERE id=$1`,
        Number(params.planetsId)
    );
     if (found){
        console.log(found.name)
         res.status(200).json(found)
     }else{
         res.status(404).json("planet with such id does not exist in DB")
     }
    }
 }

//add planets
const addPlanets = async (req: Request, res:Response) => {
        const {body, params} = req;
        if(planetCheck.validate(body).error){
         res.status(400).send("Invalid format")
        }else{
           
           await db.none(`
            INSERT INTO planets (name) VALUES ($1);
            `, [body.name]);

         
         res.status(200).json({msg: "successful"})
        }    
}




//Update planets
const updatePlanets = async (req:Request, res:Response) => {
    const {body, params} = req;
    if(planetCheck.validate(body).error){
     res.status(400).send("Invalid format")
    }else{

        await db.none(`
            UPDATE planets SET name=$2 WHERE id=$1
            `, [params.planetsId, body.name]);
            res.status(200).json({msg: "Updated successfully"})

     
     }
     }
       
    
 


 //delete items in planets
 const deletePlanets = async (req:Request, res:Response) => {
    const {body, params} =  req;
    if(planetCheck.validate(body).error){
     res.status(400).send("Invalid Format!")
    }else{ 
       await db.none(`
        DELETE FROM planets WHERE id=$1
        `,[params.planetsId]);
        res.status(200).json({msg: "Deleted successfully"})

      
    }
 }

 //addImage
 const uploadImage = async (request: Request, response: Response) => {
    try {

        const { params } = request;
      
      const filename = request.file?.path;
  
      if (
        Joi.number()
          .required()
          .min(1)
          .max(99999)
          .validate(params.planetsId).error || !filename
      ) {
        response.status(400).send("La richiesta è in un formato non corretto");
      } else {
        await db.none(`UPDATE planets SET image=$2 WHERE id=$1`, [params.planetsId, filename])
        response.send("Immagine caricata con successo");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Internal server error");
    }
  };

 export {
    addPlanets, deletePlanets, getPlanetOfParamId, getPlanets, updatePlanets, uploadImage
};



