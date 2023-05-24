import express from "express"
import bodyParser from "body-parser"
import createUser from "../controllers/user.js"
import loginUser from "../controllers/login.js";

const router=express.Router();
router.use(bodyParser.json());
router.post("/user",createUser);
router.post("/luser",loginUser)


export default router;
