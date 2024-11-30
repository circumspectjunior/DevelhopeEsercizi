"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const morgan_1 = __importDefault(require("morgan"));
const port = 3000;
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
let planets = [
    { id: 1, name: "Earth", },
    { id: 2, name: "Mars" }
];
app.use(function logresponse(req, res, next) {
    console.log(req);
    next();
});
app.get("/", (req, res) => {
    res.status(200).json(planets);
});
app.listen(port, () => {
    console.log("server listening on http://localhost:3000");
});
//# sourceMappingURL=server.js.map