"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.signup = exports.login = void 0;
const dotenv = __importStar(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
dotenv.config();
const createUserDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.db.none(`
        DROP TABLE IF EXISTS users;

        CREATE TABLE users (
            id SERIAL NOT NULL PRIMARY KEY,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            token TEXT
        );
    `);
    yield db_1.db.none(`
        INSERT INTO users (username, password) VALUES ('Sam', 'Sam123');
    `);
    const usersS = yield db_1.db.many(`
        SELECT * FROM users;
        `);
    console.log("users", usersS);
});
createUserDB();
const login = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("body", request);
        const { username, password } = request.body;
        const user = yield db_1.db.oneOrNone(`SELECT * FROM users WHERE username=$1`, username);
        if (user && user.password === password) {
            const payload = {
                id: user.id,
                username: user.username
            };
            const token = jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY);
            console.log("Token", token);
            yield db_1.db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token]);
            response.status(200).json({
                id: user.id,
                token,
            });
        }
        else {
            response.status(400).send("User not found");
        }
    }
    catch (error) {
        console.error(error);
        response.status(500).send("Internal server error");
    }
});
exports.login = login;
const signup = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = request.body;
        const checkUser = yield db_1.db.oneOrNone(`SELECT * FROM users WHERE username=$1`, username);
        if (checkUser) {
            response.status(400).send("User already exist,  login");
        }
        else {
            const newUser = yield db_1.db.one(`INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`, [username, password]);
            response.status(201).json({ id: newUser.id, message: "user created" });
        }
    }
    catch (error) {
        console.error(error);
        response.status(500).send("Internal server error");
    }
});
exports.signup = signup;
//# sourceMappingURL=users.js.map