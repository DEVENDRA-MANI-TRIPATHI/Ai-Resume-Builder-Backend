import { analyzeResume } from "../utils/gemin.js";

const getResumeScore = async (req, res) => {
    const { resumeText, jobDescription } = req.body;
    console.log(req.body)
    const score = await analyzeResume(resumeText, jobDescription);
    console.log(score)
    res.json({ score });
}

const mani = async (req, res)=>{
    res.send("mani")
}


export { getResumeScore,mani };