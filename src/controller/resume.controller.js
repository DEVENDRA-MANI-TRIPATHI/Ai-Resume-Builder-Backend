import { analyzeResume, generateCoverLetter } from "../utils/gemin.js";

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

// import fs from "fs";
// import path from "path";
// import pdfParse from "pdf-parse"; // ✅ Safe to import

// const getResumeFromUser = async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ error: "No file uploaded." });
//         }

//         const filePath = path.join(process.cwd(), "public", "temp", req.file.filename);

//         // ✅ Check if the file exists
//         if (!fs.existsSync(filePath)) {
//             return res.status(404).json({ error: "File not found on server." });
//         }

//         // ✅ Read the file only when needed
//         const fileBuffer = fs.readFileSync(filePath);
//         const pdfData = await pdfParse(fileBuffer);

//         // ✅ Clean up: Delete the file after processing
//         fs.unlinkSync(filePath);

//         res.json({ resumeText: pdfData.text.trim() });
//     } catch (error) {
//         console.error("❌ Error processing resume:", error);
//         res.status(500).json({ error: "Failed to process the resume." });
//     }
// };



const mani = async (req, res)=>{
    res.send("mani")
}


export { getResumeScore,mani,getCoverLetter, };