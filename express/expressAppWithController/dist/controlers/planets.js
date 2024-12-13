"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = exports.updatePlanets = exports.getPlanets = exports.getPlanetOfParamId = exports.deletePlanets = exports.addPlanets = void 0;
const joi_1 = __importDefault(require("joi"));
const db_1 = require("./db");
console.log(db_1.db);
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
const planetCheck = joi_1.default.object({
    id: joi_1.default.number().min(1).max(999).required(),
    name: joi_1.default.string().min(3).max(25).required()
});
//get all the items inside planets array and show them
const getPlanets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const planet = yield db_1.db.many(`
        SELECT * FROM planets;
        `);
    if (planet) {
        res.status(200).json(planet);
        console.log(planet);
    }
    else {
        res.status(404).json("no planets available");
    }
});
exports.getPlanets = getPlanets;
//get the item where item id is = params.id
const getPlanetOfParamId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params } = req;
    if (joi_1.default.number().required().min(1).max(99).validate(params.planetsId).error) {
        res.status(400).json("Invalid id format");
    }
    else {
        const found = yield db_1.db.oneOrNone(`
        SELECT * FROM planets WHERE id=$1`, Number(params.planetsId));
        if (found) {
            console.log(found.name);
            res.status(200).json(found);
        }
        else {
            res.status(404).json("planet with such id does not exist in DB");
        }
    }
});
exports.getPlanetOfParamId = getPlanetOfParamId;
//add planets
const addPlanets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params } = req;
    if (planetCheck.validate(body).error) {
        res.status(400).send("Invalid format");
    }
    else {
        yield db_1.db.none(`
            INSERT INTO planets (name) VALUES ($1);
            `, [body.name]);
        res.status(200).json({ msg: "successful" });
    }
});
exports.addPlanets = addPlanets;
//Update planets
const updatePlanets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params } = req;
    if (planetCheck.validate(body).error) {
        res.status(400).send("Invalid format");
    }
    else {
        yield db_1.db.none(`
            UPDATE planets SET name=$2 WHERE id=$1
            `, [params.planetsId, body.name]);
        res.status(200).json({ msg: "Updated successfully" });
    }
});
exports.updatePlanets = updatePlanets;
//delete items in planets
const deletePlanets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params } = req;
    if (planetCheck.validate(body).error) {
        res.status(400).send("Invalid Format!");
    }
    else {
        yield db_1.db.none(`
        DELETE FROM planets WHERE id=$1
        `, [params.planetsId]);
        res.status(200).json({ msg: "Deleted successfully" });
    }
});
exports.deletePlanets = deletePlanets;
//addImage
const uploadImage = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { params } = request;
        const filename = (_a = request.file) === null || _a === void 0 ? void 0 : _a.path;
        if (joi_1.default.number()
            .required()
            .min(1)
            .max(99999)
            .validate(params.planetsId).error || !filename) {
            response.status(400).send("La richiesta è in un formato non corretto");
        }
        else {
            yield db_1.db.none(`UPDATE planets SET image=$2 WHERE id=$1`, [params.planetsId, filename]);
            response.send("Immagine caricata con successo");
        }
    }
    catch (error) {
        console.error(error);
        response.status(500).send("Internal server error");
    }
});
exports.uploadImage = uploadImage;
//# sourceMappingURL=planets.js.map