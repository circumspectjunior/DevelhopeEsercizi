"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const planets_1 = require("./controlers/planets");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.get("/api/planets", planets_1.getPlanets);
app.get("/api/planets/:planetsId", planets_1.getPlanetOfParamId);
app.post("/api/planets", planets_1.addPlanets);
app.put("/api/planets/:planetsId", planets_1.updatePlanets);
app.delete("/api/planets/:planetsId", planets_1.deletePlanets);
app.listen(port, () => {
    console.log("server currently listening on http://localhost:3000");
});
//# sourceMappingURL=server.js.map