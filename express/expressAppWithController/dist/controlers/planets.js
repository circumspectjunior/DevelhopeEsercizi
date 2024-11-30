"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlanets = exports.getPlanets = exports.getPlanetOfParamId = exports.deletePlanets = exports.addPlanets = void 0;
const joi_1 = __importDefault(require("joi"));
let planets = [
    { id: 1, name: "Earth" },
    { id: 2, name: "Mars" }
];
const planetCheck = joi_1.default.object({
    id: joi_1.default.number().min(1).max(999).required(),
    name: joi_1.default.string().min(3).max(25).required()
});
//get all the items inside planets array and show them
const getPlanets = (req, res) => {
    if (planets) {
        res.status(200).json(planets);
    }
    else {
        res.status(404).json("no planets available");
    }
};
exports.getPlanets = getPlanets;
//get the item where item id is = params.id
const getPlanetOfParamId = (req, res) => {
    const { params } = req;
    if (joi_1.default.number().required().min(1).max(99).validate(params.planetId).error) {
        res.status(400).json("Invalid id format");
    }
    else {
        const found = planets.find((e) => e.id === Number(params.planetId));
        if (found) {
            res.status(200).json(found);
        }
        else {
            res.status(404).json("planet with such id does not exist in DB");
        }
    }
};
exports.getPlanetOfParamId = getPlanetOfParamId;
//add planets
const addPlanets = (req, res) => {
    const { body, params } = req;
    if (planetCheck.validate(body).error) {
        res.status(400).send("Invalid format");
    }
    else {
        planets = [...planets, body];
        res.status(200).json({ msg: "successful", result: planets });
    }
};
exports.addPlanets = addPlanets;
//Update planets
const updatePlanets = (req, res) => {
    const { body, params } = req;
    if (planetCheck.validate(body).error) {
        res.status(400).send("Invalid format");
    }
    else {
        const newplanets = planets.map((planet) => {
            if (planet.id === Number(params.planetsId)) {
                return Object.assign(Object.assign({}, planet), body);
            }
            else {
                return planet;
            }
        });
        planets = [...newplanets];
        res.status(200).json({ msg: "successful", result: newplanets });
    }
};
exports.updatePlanets = updatePlanets;
//delete items in planets
const deletePlanets = (req, res) => {
    const { body, params } = req;
    if (planetCheck.validate(body).error) {
        res.status(400).send("Invalid Format!");
    }
    else {
        const newPlanets = planets.filter((planet) => planet.id !== Number(params.planetsId));
        if (newPlanets) {
            res.status(200).json({ key: "Successful", result: newPlanets });
            planets = [...newPlanets];
        }
        else {
            res.status(404).send("Id does not exist");
        }
    }
};
exports.deletePlanets = deletePlanets;
//# sourceMappingURL=planets.js.map