import { analyzeResume,generateCoverLetter } from "../utils/gemin.js";

const getResumeScore = async (req, res) => {
    const { resumeText, jobDescription } = req.body;
    console.log(req.body)
    const score = await analyzeResume(resumeText, jobDescription);
    console.log(score)
    res.json({ score });
}

const getCoverLetter = async (req, res) => {
    try {
        const { resumeText, jobDescription, companyName, recipientName } = req.body;
        console.log(req.body);

        // Generate the cover letter using AI
        const coverLetter = await generateCoverLetter(resumeText, jobDescription, companyName, recipientName);
        console.log(coverLetter);

        res.json({ coverLetter });
    } catch (error) {
        console.error("❌ Error generating cover letter:", error.message);
        res.status(500).json({ error: "Failed to generate cover letter. Please try again." });
    }
};


const mani = async (req, res)=>{
    res.send("mani")
}


export { getResumeScore,mani,getCoverLetter };