import { Router } from "express";
import { getResumeScore,mani } from "../controller/resume.controller.js";

const router = Router();

router.route("/analyze").post(getResumeScore)
router.route("/").post(mani)

export default router;