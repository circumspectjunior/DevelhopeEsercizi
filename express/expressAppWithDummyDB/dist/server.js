"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const joi_1 = __importDefault(require("joi"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
let planets = [
    { id: 1, name: "Earth" },
    { id: 2, name: "Mars" }
];
const planetCheck = joi_1.default.object({
    id: joi_1.default.number().min(1).max(99).required(),
    name: joi_1.default.string().min(3).max(25).required()
});
app.get("/api/planets", (req, res) => {
    if (planets) {
        res.status(200).json(planets);
    }
    else {
        res.status(404).json("no planets available");
    }
});
app.get("/api/planets/:planetId", (req, res) => {
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
});
app.post("/api/planets", (req, res) => {
    const { body } = req;
    if (planetCheck.validate(body).error) {
        res.status(400).send("Invalid Format");
    }
    else {
        planets = [...planets, body];
        res.status(201).json({ key: "planets added" });
    }
});
app.put("/api/planets/:planetsId", (req, res) => {
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
});
app.delete("/api/planets/:planetsId", (req, res) => {
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
});
app.listen(port, () => {
    console.log("server currently listening on http://localhost:4000");
});
//# sourceMappingURL=server.js.map