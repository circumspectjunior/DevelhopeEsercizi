import express from "express";
import morgan from "morgan";
import multer from "multer";


import {
    addPlanets,
    deletePlanets,
    getPlanetOfParamId,
    getPlanets,
    updatePlanets,
    uploadImage
} from "./controlers/planets";

import { login, signup } from "./controlers/users";



const app = express();
const port:number = 3000;






const storage = multer.diskStorage({ destination: (req, file, cb) => {
     cb(null, "./uploads"); 
    }, 
filename: (req, file, cb) => { 
    cb(null, file.originalname); 
} 
}); 
const upload = multer ({ storage });


app.use(express.json());
app.use(morgan("dev"));


app.use('/uploads', express.static( 'uploads'));

app.get("/api/planets", getPlanets)
app.get("/api/planets/:planetsId", getPlanetOfParamId)
app.post("/api/planets", addPlanets)
app.put("/api/planets/:planetsId", updatePlanets)
app.post("/api/planets/:planetsId/image", upload.single('image'), uploadImage)
app.delete("/api/planets/:planetsId", deletePlanets)

app.post("/auth/login", login);
app.post("/auth/signup", signup);

app.listen(port, () =>{
    console.log("server currently listening on http://localhost:3000")
})


