import express from "express";
import bodyParser from "body-parser";
import {createArticle, readArticle, readUser,createUser,updateUser,deleteUser,updateArticle} from "../controllers/articles.js"

import {myName,deleteName,putName} from "../controllers/names.js"

const router =express.Router();
router.use(bodyParser.json());


router.post("/save",createArticle);
router.get("/seen/:reqId",readArticle);
router.get("/user",readUser);
router.post("/cuser",createUser);
router.put("/uuser",updateUser);
router.delete("/:duser",deleteUser);

router.patch("/:articleId",updateArticle);

// router.delete("/delete/:articleId",deleteArticle);


router.post("/:myName",myName);
router.delete("/one",deleteName);
router.put("/:id",putName);

export default router

