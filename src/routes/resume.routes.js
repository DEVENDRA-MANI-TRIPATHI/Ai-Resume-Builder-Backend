import { Router } from "express";
import { getCoverLetter, getResumeScore,mani } from "../controller/resume.controller.js";
import multer from "multer";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

//multer configuration for handling file in memory storage


router.route("/analyze").post(getResumeScore)
router.route("/cover-later").post(getCoverLetter)
router.route("/upload-resume",)
// router.route("/").post(mani)
// upload.single("resume", getResumeFromUser);
export default router;