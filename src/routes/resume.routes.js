import { Router } from "express";
import { getCoverLetter, getResumeScore,mani } from "../controller/resume.controller.js";

const router = Router();

router.route("/analyze").post(getResumeScore)
router.route("/cover-later").post(getCoverLetter)
router.route("/").post(mani)

export default router;