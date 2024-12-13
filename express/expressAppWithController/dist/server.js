"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const multer_1 = __importDefault(require("multer"));
const planets_1 = require("./controlers/planets");
const app = (0, express_1.default)();
const port = 3000;
const storage = multer_1.default.diskStorage({ destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage });
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use('/uploads', express_1.default.static('uploads'));
app.get("/api/planets", planets_1.getPlanets);
app.get("/api/planets/:planetsId", planets_1.getPlanetOfParamId);
app.post("/api/planets", planets_1.addPlanets);
app.put("/api/planets/:planetsId", planets_1.updatePlanets);
app.post("/api/planets/:planetsId/image", upload.single('image'), planets_1.uploadImage);
app.delete("/api/planets/:planetsId", planets_1.deletePlanets);
app.listen(port, () => {
    console.log("server currently listening on http://localhost:3000");
});
//# sourceMappingURL=server.js.map