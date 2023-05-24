import express from "express"
import bodyParser from "body-parser";
import createComment from "../controllers/comment.js";

const router =express.Router();
router.use(bodyParser.json());
router.post("/comment/:id",createComment);



export default router;